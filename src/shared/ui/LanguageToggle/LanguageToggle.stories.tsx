import type { Meta, StoryObj } from "@storybook/react-vite";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { LanguageToggle } from "./LanguageToggle";

// Настраиваем минимальный i18n-провайдер для проверки переключения языка в Storybook.
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    resources: {
      en: { translation: {} },
      es: { translation: {} },
    },
    interpolation: {
      escapeValue: false,
    },
  });
}

const meta = {
  title: "UI/Buttons/LanguageToggle",
  component: LanguageToggle,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof LanguageToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

// Английская локаль — кнопка показывает EN и переключает на испанский.
export const English: Story = {
  render: () => {
    i18n.changeLanguage("en");
    return <LanguageToggle />;
  },
};

// Испанская локаль — проверка обратного сценария.
export const Spanish: Story = {
  render: () => {
    i18n.changeLanguage("es");
    return <LanguageToggle />;
  },
};
