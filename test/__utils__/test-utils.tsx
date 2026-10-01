import { render, RenderOptions } from "@testing-library/react";
import { ReactElement, ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "../../src/shared/context/ThemeProvider";
import i18n from "../__settings__/i18nForTests";

// все провайдеры приложения
// eslint-disable-next-line react-refresh/only-export-components
const AllProviders = ({ children }: { children: ReactNode }) => (
  <I18nextProvider i18n={i18n}>
    <HelmetProvider>
      <ThemeProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </ThemeProvider>
    </HelmetProvider>
  </I18nextProvider>
);

// кастомный рендер
const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, {
    // обертка для компонента
    wrapper: AllProviders,
    ...options,
  });

// повторно экспортируем `Testing Library`
// eslint-disable-next-line react-refresh/only-export-components
export * from "@testing-library/react";
// перезаписываем метод `render`
export { customRender as render };
