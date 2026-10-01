import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { ThemeContext } from "../../context/ThemeContext";
import { ThemeToggle } from "./ThemeToggle";

// История переключателя темы для проверки светлого и тёмного состояний UI.
const meta = {
  title: "UI/Buttons/ThemeToggle",
  component: ThemeToggle,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

// Светлая тема — кнопка показывает состояние переключения в тёмный режим.
export const Default: Story = {
  render: () => (
    <ThemeContext.Provider value={{ theme: "light", toggleTheme: fn() }}>
      <div className="flex items-center justify-center relative h-fit w-fit  bg-[#f9f6f0] dark:bg-[#0a0a0a]">
        <ThemeToggle />
      </div>
    </ThemeContext.Provider>
  ),
};

// Тёмная тема — применяем альтернативную иконку и цветовую схему.
export const Dark: Story = {
  render: () => (
    <ThemeContext.Provider value={{ theme: "dark", toggleTheme: fn() }}>
      <div className="flex items-center justify-center relative  bg-[#f9f6f0] dark:bg-[#0a0a0a]">
        <ThemeToggle />
      </div>
    </ThemeContext.Provider>
  ),
};
