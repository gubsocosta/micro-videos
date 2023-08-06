import { Category } from "./category";

describe("Category", () => {
  test("should create a category", () => {
    const category = new Category("movie");
    expect(category.name).toBe("movie");
  });
});
