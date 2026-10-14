import type { Config } from "jest";
import { ESM_TS_TRANSFORM_PATTERN, TS_EXT_TO_TREAT_AS_ESM } from "ts-jest";

export default {
  preset: "ts-jest",
  extensionsToTreatAsEsm: [...TS_EXT_TO_TREAT_AS_ESM],
  testEnvironment: "jest-environment-jsdom",
  roots: ["<rootDir>"],
  transform: {
    [ESM_TS_TRANSFORM_PATTERN]: [
      "ts-jest",
      {
        useESM: true,
        tsconfig: "tsconfig.test.json",
      },
    ],
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.ts",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^test-utils$": "<rootDir>/test/__utils__/test-utils.tsx",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  moduleDirectories: ["node_modules", "./src"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleFileExtensions: [
    "tsx",
    "ts",
    "jsx",
    "js",
    "mjs",
    "cjs",
    "json",
    "node",
  ],
  modulePaths: ["<rootDir>/src"],
  resolver: "<rootDir>/custom-resolver.ts",
} satisfies Config;
