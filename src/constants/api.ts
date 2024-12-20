export const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

export const END_POINT = {
  GET_SEARCH_HISTORY: '/member/search-history',
  GET_PRODUCTS_FILTERS: '/products/filters',
  GET_SEARCH_PRODUCT: (keyword: string, sort: string) => `/products?keyword=${keyword}&sort=${sort}`,
  GET_CART_COUNT: `/cart`,
  POST_CART_COUNT: (productId: number) => `/cart/${productId}`,
  DELETE_CART_COUNT: (productId: number) => `/cart/${productId}`,
} as const;
