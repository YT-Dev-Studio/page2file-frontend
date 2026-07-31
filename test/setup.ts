import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

const cleanupDocument = (): void => {
  cleanup();
};

afterEach(cleanupDocument);
