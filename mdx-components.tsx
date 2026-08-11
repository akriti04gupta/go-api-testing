import type { MDXComponents } from "mdx/types";

import ArchitectureDiagram from "./app/components/ArchitectureDiagram";
import Callout from "./app/components/Callout";
import CodeBlock from "./app/components/CodeBlock";
import ResultCard from "./app/components/ResultCard";
import StepCard from "./app/components/StepCard";

export function useMDXComponents(
  components: MDXComponents
): MDXComponents {
  return {
    ...components,

    ArchitectureDiagram,
    Callout,
    CodeBlock,
    ResultCard,
    StepCard,

    pre: ({ children }) => (
      <CodeBlock>{children}</CodeBlock>
    ),
  };
}