import { render, screen, fireEvent, } from "../../../../test/__utils__/test-utils";
import { ThemeToggle } from "./ThemeToggle";

describe("ThemeToggle", () => {
  test("The theme toggle is displayed and has the correct test-id", () => {
    render(<ThemeToggle />);
    const themeToggle = screen.getByTestId("theme-toggle");
    expect(themeToggle).toBeInTheDocument();
    expect(themeToggle).toHaveClass("inline-flex items-center justify-center");
  });

  test("Clicking the theme toggle button changes the theme", () => {
    render(<ThemeToggle />);
    const themeToggle = screen.getByTestId("theme-toggle");

    // Проверяем начальное состояние темы (светлая тема)
    expect(document.documentElement.classList.contains("dark")).toBe(false);

    // Кликаем по кнопке для переключения темы
    fireEvent.click(themeToggle);

    // Проверяем, что тема изменилась на темную
    expect(document.documentElement.classList.contains("dark")).toBe(true);

    // Кликаем по кнопке снова для переключения обратно на светлую тему
    fireEvent.click(themeToggle);

    // Проверяем, что тема вернулась к светлой
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });


});
