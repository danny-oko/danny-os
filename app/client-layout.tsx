"use client";

import { Dock } from "@/components/dock";
import { ThemeProvider } from "@/components/theme-provider";
import { useUI } from "@/lib/store";
import { Analytics } from "@vercel/analytics/next";
import type React from "react";
import { Suspense, useEffect } from "react";

// Added theme management at root level
function ThemeManager({ children }: { children: React.ReactNode }) {
  const { effectiveTheme, computeEffectiveTheme, theme } = useUI();

  useEffect(() => {
    // Compute effective theme on mount
    computeEffectiveTheme();
  }, [computeEffectiveTheme]);

  useEffect(() => {
    // Force apply theme immediately and ensure it sticks
    const applyTheme = () => {
      const shouldBeDark = effectiveTheme === "dark";
      if (shouldBeDark) {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
      }
    };

    applyTheme();

    // Apply on multiple frames to ensure it sticks (override any other theme managers)
    requestAnimationFrame(() => {
      applyTheme();
      requestAnimationFrame(() => {
        applyTheme();
      });
    });

    // Set up an observer to watch for class changes and re-apply if needed
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          const hasDark = document.documentElement.classList.contains("dark");
          const shouldBeDark = effectiveTheme === "dark";
          if (hasDark !== shouldBeDark) {
            applyTheme();
          }
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Listen for system theme changes (system theme now always defaults to dark)
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      computeEffectiveTheme();
      // Re-apply after computing
      setTimeout(applyTheme, 0);
    };
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [effectiveTheme, computeEffectiveTheme]);

  // Watch for theme changes in store and re-compute
  useEffect(() => {
    computeEffectiveTheme();
  }, [theme, computeEffectiveTheme]);

  return <>{children}</>;
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={null}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        disableTransitionOnChange
      >
        <ThemeManager>{children}</ThemeManager>
      </ThemeProvider>
      <Dock />
      <Analytics />
    </Suspense>
  );
}
