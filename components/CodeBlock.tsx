"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export function CodeBlock({
  code,
  language = "javascript",
  title,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative" data-oid="03q_2u4">
      {title && (
        <div
          className="flex items-center justify-between px-4 py-2 bg-muted border border-b-0 rounded-t-lg"
          data-oid="4jzv58."
        >
          <span className="text-sm font-medium" data-oid="h3lgd_j">
            {title}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className="h-8 w-8 p-0"
            data-oid="71uechz"
          >
            {copied ? (
              <Check className="h-4 w-4" data-oid="8i_sas5" />
            ) : (
              <Copy className="h-4 w-4" data-oid="gawxnr-" />
            )}
          </Button>
        </div>
      )}
      <div
        className={`relative bg-slate-900 dark:bg-slate-950 ${title ? "rounded-b-lg" : "rounded-lg"} overflow-hidden`}
        data-oid="slh_c5_"
      >
        {!title && (
          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className="absolute top-2 right-2 h-8 w-8 p-0 text-slate-400 hover:text-slate-200"
            data-oid="o1_o862"
          >
            {copied ? (
              <Check className="h-4 w-4" data-oid="3_v18ns" />
            ) : (
              <Copy className="h-4 w-4" data-oid="9chzi85" />
            )}
          </Button>
        )}
        <pre className="p-4 overflow-x-auto text-sm" data-oid="8kj4rru">
          <code className="text-slate-200" data-oid="9nip-kd">
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
}
