import type { Meta, StoryObj } from "@storybook/react-vite";
import { WaveLoader } from "./WaveLoader";

// Анимированный индикатор загрузки с эффектом волны для более мягких UX-переходов.
const meta = {
  title: "UI/Feedback/WaveLoader",
  component: WaveLoader,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof WaveLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

// Стандартный вариант с четырьмя полосами, идущими в ритме.
export const Default: Story = {};
