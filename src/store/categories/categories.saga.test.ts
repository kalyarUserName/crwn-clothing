import { takeLatest, call, put } from "typed-redux-saga/macro";

import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import { onFetchCategories, fetchCategoriesAsync } from "./categories.saga";

import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from "./categories.action";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

describe("on fetch categories saga", function () {
  it("should trigger on FETCH_CATEGORIES_START", function () {
    const generator = onFetchCategories();

    expect(generator.next().value).toEqual(
      takeLatest(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
        fetchCategoriesAsync
      )
    );
  });
});

describe("fetch categories async saga", function () {
  const generator = fetchCategoriesAsync();

  it("should call getCategoriesAndDocuments", function () {
    expect(generator.next().value).toEqual(call(getCategoriesAndDocuments));
  });

  it("should put fetchCategoriesSuccess", function () {
    const mockCategories = [
      {
        title: "categories title",
        imageUrl: "image.jpg",
        items: [{ id: 1, imageUrl: "image1.jpg", name: "item 1", price: 777 }],
      },
    ];

    expect(generator.next(mockCategories).value).toEqual(
      put(fetchCategoriesSuccess(mockCategories))
    );
  });

  it("should put fetchCategoriesFailed on error", function () {
    const error = { name: "404", message: "error" } as Error;
    const newGenerator = fetchCategoriesAsync();

    newGenerator.next();

    expect(newGenerator.throw(error).value).toEqual(
      put(fetchCategoriesFailed(error))
    );
  });
});
