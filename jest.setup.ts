import "@testing-library/jest-dom";

Object.defineProperty(globalThis, "import", {
  value: { meta: { env: { BASE_URL: "/" } } },
  writable: true,
});
