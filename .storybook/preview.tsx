/// <reference types="vite/client" />
import type { Preview } from "@storybook/react-vite";
import "../src/index.css";
import { ThemeProvider } from '../src/shared/context/ThemeProvider';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    decorators: [ThemeProvider],

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
