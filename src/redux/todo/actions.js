export const getProduct = (todo) => ({
  type: "GET_PRODUCT",
  payload: { todo },
});

export const getProductSuccess = (todo) => ({
  type: "GET_PRODUCT_SUCCESS",
  payload: todo,
});

export const getProductError = (message) => ({
  type: "GET_PRODUCT_ERROR",
  payload: { message },
});

export const addTodo = (data) => ({
  type: "ADD_TODO",
  payload: data,
});

export const addTodoSuccess = (todo) => ({
  type: "ADD_TODO_SUCCESS",
  payload: todo,
});

export const addTodoError = (message) => ({
  type: "ADD_TODO_ERROR",
  payload: { message },
});

export const deleteTodo = (data) => ({
  type: "DELETE_TODO",
  payload: data,
});

export const deleteTodoSuccess = (todo) => ({
  type: "DELETE_TODO_SUCCESS",
  payload: todo,
});

export const deleteTodoError = (message) => ({
  type: "DELETE_TODO_ERROR",
  payload: { message },
});

export const editTodo = (data) => ({
  type: "EDIT_TODO",
  payload: data,
});

export const editTodoSuccess = (todo) => ({
  type: "EDIT_TODO_SUCCESS",
  payload: todo,
});

export const editTodoError = (message) => ({
  type: "EDIT_TODO_ERROR",
  payload: { message },
});

export const getCategory = (data) => ({
  type: "GET_CATEGORY",
  payload: data,
});

export const getCategorySuccess = (category) => ({
  type: "GET_CATEGORY_SUCCESS",
  payload: category,
});

export const getCategoryError = (message) => ({
  type: "GET_CATEGORY_ERROR",
  payload: { message },
});

export const login = (data) => ({
  type: "LOGIN",
  payload: data,
});

export const loginSuccess = (category) => ({
  type: "LOGIN_SUCCESS",
  payload: category,
});

export const loginError = (message) => ({
  type: "LOGIN_ERROR",
  payload: { message },
});

export const listUsers = (data) => ({
  type: "LIST_USERS",
  payload: data,
});

export const listUsersSuccess = (category) => ({
  type: "LIST_USERS_SUCCESS",
  payload: category,
});

export const listUsersError = (message) => ({
  type: "LIST_USERS_ERROR",
  payload: { message },
});

export const filterProducts = (data) => ({
  type: "FILTER_PRODUCTS",
  payload: data,
});

export const filterProductsSuccess = (category) => ({
  type: "FILTER_PRODUCTS_SUCCESS",
  payload: category,
});

export const filterProductsError = (message) => ({
  type: "FILTER_PRODUCTS_ERROR",
  payload: { message },
});

export const productsDetails = (data) => ({
  type: "PRODUCTS_DETAILS",
  payload: data,
});

export const productsDetailsSuccess = (category) => ({
  type: "PRODUCTS_DETAILS_SUCCESS",
  payload: category,
});

export const productsDetailsError = (message) => ({
  type: "PRODUCTS_DETAILS_ERROR",
  payload: { message },
});

export const addProduct = (data) => ({
  type: "ADD_PRODUCTS",
  payload: data,
});

export const addProductSuccess = (category) => ({
  type: "ADD_PRODUCTS_SUCCESS",
  payload: category,
});

export const addProductError = (message) => ({
  type: "ADD_PRODUCTS_ERROR",
  payload: { message },
});
