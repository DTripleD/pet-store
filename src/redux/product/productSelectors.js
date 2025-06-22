export const selectProduct = (state) => state.product.productInfo;

export const selectProductIsLoading = (state) => state.product.isLoading;

export const selectIsLoadMoreAble = (state) => state.product.next;
