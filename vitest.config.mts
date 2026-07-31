import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@/": `${fileURLToPath(new URL("./src/", import.meta.url))}/`,
      "next/font/google": fileURLToPath(
        new URL("./test/mocks/next-font-google.ts", import.meta.url),
      ),
    },
  },
  test: {
    environment: "jsdom",
    include: ["src/**/*.test.{ts,tsx}"],
    setupFiles: ["./test/setup.ts"],
  },
});
