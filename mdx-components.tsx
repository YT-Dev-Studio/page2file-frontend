import type { MDXComponents } from "mdx/types";
import { ArticleFigure } from "@/features/content/article-figure";

export const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    ArticleFigure,
    ...components,
  };
};
