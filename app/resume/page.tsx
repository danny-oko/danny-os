"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Window } from "@/components/window";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Download } from "lucide-react";
import { useRef } from "react";

export default function ResumePage() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!resumeRef.current) return;

    try {
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("Danny-Developer-Resume.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
      // Fallback to text download
      const resumeContent = `
DANNY DEVELOPER
Founder, Project Manager & Developer
danny.otgontsetseg@gmail.com • Ulaanbaatar, Mongolia

═══════════════════════════════════════════════════════════════════════════════

EXPERIENCE

───────────────────────────────────────────────────────────────────────────────

Founder & Developer — XP Digital
July 2025 – Present
• Founded XP Digital, a freelance web development agency
• Served as Project Manager, Developer, and Client Lead
• Successfully delivered 5 projects in 4 months (educational platforms, travel platforms, and agency websites)

───────────────────────────────────────────────────────────────────────────────

Full-Stack Developer — Honest Media Consulting
2023 – 2024
• Developed and maintained company websites using React, Firebase, HTML, CSS, and JavaScript
• Created solutions that simplified sharing company work and improved online presence

───────────────────────────────────────────────────────────────────────────────

Technician, Sound Engineer & Drummer — First Church
2021 – Present
•Organizing Team Member, “Finger Print” teen church event (200–300 attendees): designed posters, social media content, name tags, and event materials across multiple events over 2 years.
• Part-time worker as technician, sound engineer, and drummer
• Managed stage audio, cable management, technical systems, and live mixing for various events 

═══════════════════════════════════════════════════════════════════════════════

EDUCATION

───────────────────────────────────────────────────────────────────────────────

Amjilt Cyber School — Graduated 2025
Pinecone Academy — Student (October 2025 – June 2026)
• Currently studying at Pinecone Academy

═══════════════════════════════════════════════════════════════════════════════

SKILLS

───────────────────────────────────────────────────────────────────────────────

Frontend: Next.js, React, TypeScript, Tailwind CSS
Backend: Node.js, Express, MongoDB 
Tools: Git, Vercel, Firebase, Bunny.net (TUS), Cloudinary, QPay API, BYL Payments
Project Management: Trello, Notion
Other: Communication, Teamwork, Problem-solving, Leadership
`;

      const blob = new Blob([resumeContent], { type: "text/plain" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Danny-Developer-Resume.txt";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    }
  };

  return (
    <Window title="Documents">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Resume</h2>
          </div>

          <Button className="flex items-center gap-2" onClick={handleDownload}>
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
        </div>

        <Card ref={resumeRef}>
          <CardContent className="p-8">
            <div className="space-y-8">
              <div className="text-center">
                <h1 className="text-3xl font-bold mb-2">Danny Developer</h1>
                <p className="text-lg text-gray-700 dark:text-muted-foreground mb-4">
                  Founder, Project Manager & Developer
                </p>
                <div className="flex justify-center gap-4 text-sm text-gray-700 dark:text-muted-foreground">
                  <span>danny.otgontsetseg@gmail.com</span>
                  <span>•</span>
                  <span>Ulaanbaatar, Mongolia</span>
                  {/* <span>•</span> */}
                  {/* <span>instagram.com/dnii_d</span> */}
                </div>
              </div>

              <div>
                <div className="border-t border-border mb-6"></div>
                <h3 className="text-xl font-semibold mb-3">Experience</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-medium">Founder & Developer</h4>
                        <span className="inline-block px-2.5 py-1 text-xs font-semibold bg-gray-100 dark:bg-primary/10 text-gray-800 dark:text-primary rounded-md border border-gray-300 dark:border-primary/20">
                          XP Digital
                        </span>
                      </div>
                      <span className="text-sm text-gray-700 dark:text-muted-foreground">
                        July 2025 – Present
                      </span>
                    </div>
                    <ul className="text-sm text-gray-700 dark:text-muted-foreground space-y-1 ml-4">
                      <li>
                        • Founded XP Digital, a freelance web development agency
                      </li>
                      <li>
                        • Served as Project Manager, Developer, and Client Lead
                      </li>
                      <li>
                        • Successfully delivered 5 projects in 4 months
                        (educational platforms, travel platforms, and agency
                        websites)
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-border/50 pt-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-medium">Full-Stack Developer</h4>
                        <span className="inline-block px-2.5 py-1 text-xs font-semibold bg-gray-100 dark:bg-primary/10 text-gray-800 dark:text-primary rounded-md border border-gray-300 dark:border-primary/20">
                          Honest Media Consulting
                        </span>
                      </div>
                      <span className="text-sm text-gray-700 dark:text-muted-foreground">
                        2023 – 2024
                      </span>
                    </div>
                    <ul className="text-sm text-gray-700 dark:text-muted-foreground space-y-1 ml-4">
                      <li>
                        • Developed and maintained company websites using React,
                        Firebase, HTML, CSS, and JavaScript
                      </li>
                      <li>
                        • Created solutions that simplified sharing company work
                        and improved online presence
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-border/50 pt-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-medium">
                          Technician, Sound Engineer & Drummer
                        </h4>
                        <span className="inline-block px-2.5 py-1 text-xs font-semibold bg-gray-100 dark:bg-primary/10 text-gray-800 dark:text-primary rounded-md border border-gray-300 dark:border-primary/20">
                          First Church
                        </span>
                      </div>
                      <span className="text-sm text-gray-700 dark:text-muted-foreground">
                        2021 – Present
                      </span>
                    </div>
                    <ul className="text-sm text-gray-700 dark:text-muted-foreground space-y-1 ml-4">
                      <li>
                        • Organizing Team Member, "Finger Print" teen church
                        event (200–300 attendees): designed posters, social
                        media content, name tags, and event materials across
                        multiple events over 2 years.
                      </li>
                      <li>
                        • Part-time worker as technician, sound engineer, and
                        drummer
                      </li>
                      <li>
                        • Managed stage audio, cable management, technical
                        systems, and live mixing for various events
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="border-t border-border mb-6"></div>
                <h3 className="text-xl font-semibold mb-3">Education</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-medium">Graduated 2025</h4>
                      <span className="inline-block px-2.5 py-1 text-xs font-semibold bg-gray-100 dark:bg-primary/10 text-gray-800 dark:text-primary rounded-md border border-gray-300 dark:border-primary/20">
                        Amjilt Cyber School
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-border/30 pt-4">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-medium">Student</h4>
                        <span className="inline-block px-2.5 py-1 text-xs font-semibold bg-gray-100 dark:bg-primary/10 text-gray-800 dark:text-primary rounded-md border border-gray-300 dark:border-primary/20">
                          Pinecone Academy
                        </span>
                      </div>
                      <span className="text-sm text-gray-700 dark:text-muted-foreground">
                        October 2025 – June 2026
                      </span>
                    </div>
                    <div className="text-sm text-gray-700 dark:text-muted-foreground space-y-2">
                      <p>• Currently studying at Pinecone Academy</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="border-t border-border mb-6"></div>
                <h3 className="text-xl font-semibold mb-3">Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
                  <div className="space-y-3">
                    <h4 className="font-medium mb-2">Frontend</h4>
                    <ul className="text-gray-700 dark:text-muted-foreground space-y-1">
                      <li>Next.js</li>
                      <li>React</li>
                      <li>TypeScript</li>
                      <li>Tailwind CSS</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium mb-2">Backend</h4>
                    <ul className="text-gray-700 dark:text-muted-foreground space-y-1">
                      <li>Node.js</li>
                      <li>Express</li>
                      <li>MongoDB</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium mb-2">Tools</h4>
                    <ul className="text-gray-700 dark:text-muted-foreground space-y-1">
                      <li>Git</li>
                      <li>Vercel</li>
                      <li>Firebase</li>
                      <li>Bunny.net (TUS)</li>
                      <li>Cloudinary</li>
                      <li>QPay API</li>
                      <li>BYL Payments</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium mb-2">Project Management</h4>
                    <ul className="text-gray-700 dark:text-muted-foreground space-y-1">
                      <li>Trello</li>
                      <li>Notion</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium mb-2">Other</h4>
                    <ul className="text-gray-700 dark:text-muted-foreground space-y-1">
                      <li>Communication</li>
                      <li>Teamwork</li>
                      <li>Problem-solving</li>
                      <li>Leadership</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="border-t border-border mb-6"></div>
                <h3 className="text-xl font-semibold mb-3">Core Values</h3>
                <div className="text-sm text-muted-foreground space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[var(--accent)] rounded-full"></div>
                    <p>Continuous learning</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[var(--accent)] rounded-full"></div>
                    <p>Collaborative spirit</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[var(--accent)] rounded-full"></div>
                    <p>Building with trust & love</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[var(--accent)] rounded-full"></div>
                    <p>Passionate & reliable</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Window>
  );
}
