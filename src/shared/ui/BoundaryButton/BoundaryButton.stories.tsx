import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { BoundaryButton } from "./BoundaryButton";

// Базовая история для CTA-кнопки в стиле границы.
const meta = {
  title: "UI/Buttons/BoundaryButton",
  component: BoundaryButton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    // Можно быстро проверить текст и событие клика в панели controls.
    children: "Посмотреть галерею",
    onClick: fn(),
  },
  argTypes: {
    onClick: { action: "clicked" },
    cls: { control: "text" },
  },
} satisfies Meta<typeof BoundaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Основной вариант кнопки, который используется в основном потоке.
export const Default: Story = {};

// Вариант с закруглёнными углами для акцентных CTA и карточек.
export const Rounded: Story = {
  args: { cls: "rounded-full" },
};
