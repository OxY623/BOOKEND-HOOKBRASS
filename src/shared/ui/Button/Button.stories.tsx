import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import Button from "./Button";

// Базовый набор вариаций для дизайнерских кнопок интерфейса.
const meta = {
  title: "UI/Buttons/Button",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "icon", "ghost"],
    },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
  },
  args: { children: "Открыть каталог", onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Основной CTA-стиль для ключевых действий на странице.
export const Primary: Story = {
  args: { variant: "primary" },
};

// Вторичный вариант для менее важного действия, но с тем же стилем интерфейса.
export const Secondary: Story = {
  args: { variant: "secondary" },
};

// Нейтральный вариант без заливки для вспомогательных действий.
export const Ghost: Story = {
  args: { variant: "ghost" },
};

// Состояние отключения — проверка доступности и визуальной поддержки UI.
export const Disabled: Story = {
  args: { disabled: true },
};
