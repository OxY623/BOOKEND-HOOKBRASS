import type { Meta, StoryObj } from "@storybook/react-vite";
import { BackgroundImage } from "./BackgroundImage";

// История для фонового изображения — удобно проверять эффект появления и масштабирования.
const meta = {
  title: "UI/Decor/BackgroundImage",
  component: BackgroundImage,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  args: {
    src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80",
    isVisible: true,
  },
} satisfies Meta<typeof BackgroundImage>;

export default meta;
type Story = StoryObj<typeof meta>;

// Фоновое изображение видно и постепенно проявляется на экране.
export const Visible: Story = {};

// Скрытое состояние — проверка анимации исчезновения и отсутствия видимости.
export const Hidden: Story = {
  args: {
    isVisible: false,
  },
};
