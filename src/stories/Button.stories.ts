import type { StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Button } from './Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: 'color' },
      options: ["primary", "secondary", "icon", "ghost"],
  args: { onClick: fn() },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
  },
  args: { children: "Открыть каталог", onClick: fn() },
  args: {
    primary: true,
    label: 'Button',
  },

export default meta;
type Story = StoryObj<typeof meta>;
  args: {
    label: 'Button',
  },
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },

export const Secondary: Story = {
export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },

export const Ghost: Story = {
  args: { variant: "ghost" },
};

export const Disabled: Story = {
  args: { disabled: true },
};
