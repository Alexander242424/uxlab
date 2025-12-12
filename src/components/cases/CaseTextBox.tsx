// src/components/cases/CaseTextBox.tsx
import React from "react";
import { cn } from "@/lib/utils";

type CaseTextBlock = {
    title?: string;
    body: string | string[];
};

interface CaseTextBoxProps {
    className?: string;
    blocks: CaseTextBlock[];
    colClass?: string;
}

export default function CaseTextBox({
    className,
    blocks,
    colClass = "col-lg-8 mx-auto",
}: CaseTextBoxProps) {
    if (!blocks || blocks.length === 0) return null;

    return (
        <section className={cn("case_text_box_section py-[160px]", className)}>
            <div className="container-fluid">
                <div className="row">
                    {blocks.map((block, idx) => (
                        <div
                            key={idx}
                            className={cn(colClass, idx > 0 && "mt-12")}
                        >
                            {block.title && <h2 className="t-h2 mb-4">{block.title}</h2>}

                            {Array.isArray(block.body) ? (
                                <div className="flex flex-col space-y-4">
                                    {block.body.map((p, i) => (
                                        <p key={i} className="t-p1">
                                            {p}
                                        </p>
                                    ))}
                                </div>
                            ) : (
                                <p className="t-p1">{block.body}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
