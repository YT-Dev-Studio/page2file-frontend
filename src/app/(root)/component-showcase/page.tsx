import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ComponentShowcase } from "./component-showcase";

const ComponentShowcasePage = (): ReactNode => {
  if (process.env.NODE_ENV !== "development") {
    notFound();
  }

  return <ComponentShowcase />;
};

export default ComponentShowcasePage;
