import { describe, expect } from "@jest/globals";
import {
  backgroundImages,
  bookendCollection,
  wawelCastleCollection,
} from "./index";

declare function test(name: string, callback: () => void): void;

describe("backgroundImages", () => {
  test("should be an array", () => {
    expect(Array.isArray(backgroundImages)).toBe(true);
  });

  test("should contain only strings", () => {
    backgroundImages.forEach((image) => {
      expect(typeof image).toBe("string");
    });
  });

  test("should contain valid image paths", () => {
    backgroundImages.forEach((image) => {
      expect(image).toMatch(/^\/graces\/\d+\.png$/);
    });
  });

  test("this is a list of links to images", () => {
    expect(
      backgroundImages.some((link: string) => {
        return /\.png$/i.test(link);
      }),
    ).toBe(true);
  });
});

describe("bookendCollection", () => {
  test("should be an array", () => {
    expect(Array.isArray(bookendCollection)).toBe(true);
  });

  test("should contain objects with required properties", () => {
    bookendCollection.forEach((item) => {
      expect(item).toHaveProperty("src");
      expect(item).toHaveProperty("title");
      expect(item).toHaveProperty("description");
      expect(item).toHaveProperty("price");
    });
  });
});

describe("wawelCastleCollection", () => {
  test("should be an array", () => {
    expect(Array.isArray(wawelCastleCollection)).toBe(true);
  });

  test("should contain objects with required properties", () => {
    wawelCastleCollection.forEach((item) => {
      expect(item).toHaveProperty("src");
      expect(item).toHaveProperty("title");
      expect(item).toHaveProperty("description");
      expect(item).toHaveProperty("price");
    });
  });

  test("should contain valid image paths", () => {
    wawelCastleCollection.forEach((item) => {
      expect(item.src).toMatch(/^\/wawelCastleHead\/photo_.+\.jpg$/);
    });
  });
});
