import hljs from "highlight.js";
import CopyButton from "./CopyButton";

type CodeBlockProps = {
  children: React.ReactNode;
  language?: string;
  filename?: string;
};

export default function CodeBlock({
  children,
  language,
  filename,
}: CodeBlockProps) {
  const { code, detectedLanguage } = extractCode(children, language);

  const highlightedCode =
    detectedLanguage && hljs.getLanguage(detectedLanguage)
      ? hljs.highlight(code, {
          language: detectedLanguage,
        }).value
      : escapeHtml(code);

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-[#3d3028] bg-[#211b17]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#3d3028] bg-[#2a241f] px-4 py-2.5">
        <div className="flex min-w-0 items-center gap-3">
          {/* Terminal dots */}
          <div className="flex shrink-0 items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#8f7f72]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#8f7f72]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#8f7f72]" />
          </div>

          {filename ? (
            <span className="truncate font-mono text-xs text-[#d8c7ba]">
              {filename}
            </span>
          ) : detectedLanguage ? (
            <span className="font-mono text-xs uppercase tracking-wide text-[#a99689]">
              {detectedLanguage}
            </span>
          ) : (
            <span className="font-mono text-xs text-[#a99689]">
              code
            </span>
          )}
        </div>

        <CopyButton code={code} />
      </div>

      {/* Code */}
      <pre className="m-0 overflow-x-auto p-5">
        <code
          className={`hljs block whitespace-pre font-mono text-[0.875rem] leading-7 ${
            detectedLanguage ? `language-${detectedLanguage}` : ""
          }`}
          dangerouslySetInnerHTML={{
            __html: highlightedCode,
          }}
        />
      </pre>
    </div>
  );
}

function extractCode(
  node: React.ReactNode,
  explicitLanguage?: string
): {
  code: string;
  detectedLanguage?: string;
} {
  if (typeof node === "string") {
    return {
      code: node,
      detectedLanguage: explicitLanguage,
    };
  }

  if (typeof node === "number") {
    return {
      code: String(node),
      detectedLanguage: explicitLanguage,
    };
  }

  if (Array.isArray(node)) {
    return {
      code: node.map((item) => extractCode(item, explicitLanguage).code).join(""),
      detectedLanguage: explicitLanguage,
    };
  }

  if (node && typeof node === "object" && "props" in node) {
    const element = node as {
      props?: {
        children?: React.ReactNode;
        className?: string;
      };
    };

    const className = element.props?.className ?? "";

    const languageFromClass = className.match(
      /language-([a-zA-Z0-9_-]+)/
    )?.[1];

    return extractCode(
      element.props?.children,
      explicitLanguage ?? languageFromClass
    );
  }

  return {
    code: "",
    detectedLanguage: explicitLanguage,
  };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}