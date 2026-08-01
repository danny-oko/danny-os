"use client";

import { Button } from "@/components/ui/button";
import { Window } from "@/components/window";
import { Download, ExternalLink, FileText } from "lucide-react";

const RESUME_PDF_PATH = "/Danny_Otgontsetseg_CV.pdf";

export default function ResumePage() {
  return (
    <Window title="Documents">
      <div className="space-y-6 h-full flex flex-col">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5 text-[var(--accent)]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[var(--fg0)]">Resume</h2>
              <p className="text-sm text-[var(--fg1)]">
                Danny Otgontsetseg — Full-Stack Developer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" asChild>
              <a href={RESUME_PDF_PATH} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Open in New Tab
              </a>
            </Button>
            <Button className="btn-accent" asChild>
              <a href={RESUME_PDF_PATH} download="Danny_Otgontsetseg_CV.pdf">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </a>
            </Button>
          </div>
        </div>

        <div className="flex-1 min-h-[560px] rounded-2xl border border-[var(--line)] bg-[var(--bg-1)] overflow-hidden shadow-sm">
          <object
            data={`${RESUME_PDF_PATH}#view=FitH`}
            type="application/pdf"
            className="w-full h-full min-h-[560px]"
            aria-label="Danny Otgontsetseg resume PDF"
          >
            <div className="flex flex-col items-center justify-center gap-3 h-full min-h-[560px] p-8 text-center">
              <FileText className="w-10 h-10 text-[var(--fg1)]" />
              <p className="text-sm text-[var(--fg1)]">
                Your browser can&apos;t preview PDFs inline.
              </p>
              <Button className="btn-accent" asChild>
                <a href={RESUME_PDF_PATH} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open Resume
                </a>
              </Button>
            </div>
          </object>
        </div>
      </div>
    </Window>
  );
}
