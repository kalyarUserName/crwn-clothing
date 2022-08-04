import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./categories.action";

import {
  CATEGORIES_INITIAL_STATE,
  categoriesReducer,
} from "./categories.reducer";
import { AnyAction } from "redux";

describe("categoriesReducer", function () {
  it("should return initial state", function () {
    expect(categoriesReducer(undefined, {} as AnyAction)).toEqual(
      CATEGORIES_INITIAL_STATE
    );
  });

  it("should fetchCategoriesStart", function () {
    expect(
      categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategoriesStart())
        .isLoading
    ).toBe(true);
  });

  it("should fetchCategoriesSuccess", function () {
    const mockCategories = [
      {
        title: "categories title",
        imageUrl: "image.jpg",
        items: [{ id: 1, imageUrl: "image1.jpg", name: "item 1", price: 777 }],
      },
    ];
    const mockReducer = categoriesReducer(
      CATEGORIES_INITIAL_STATE,
      fetchCategoriesSuccess(mockCategories)
    );
    expect(mockReducer.categories).toEqual(mockCategories);
    expect(mockReducer.isLoading).toBe(false);
  });

  it("should fetchCategoriesFailed", function () {
    const mockError: Error = {
      message: "errored",
      name: "Error",
    };

    const reducer = categoriesReducer(
      CATEGORIES_INITIAL_STATE,
      fetchCategoriesFailed(mockError)
    );
    expect(reducer.error).toEqual(mockError);
    expect(reducer.isLoading).toBe(false);
  });
});
