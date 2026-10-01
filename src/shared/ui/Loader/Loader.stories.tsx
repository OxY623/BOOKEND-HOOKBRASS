import type { Meta, StoryObj } from "@storybook/react-vite";
import Loader from "./Loader";

// Индикатор загрузки для экранов ожидания и асинхронных состояний.
const meta = {
  title: "UI/Feedback/Loader",
  component: Loader,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

// Базовый spinner, используемый при загрузке данных или переходов.
export const Default: Story = {};
