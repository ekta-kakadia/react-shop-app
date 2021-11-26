/* eslint-disable no-unused-vars */
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  getProductSuccess,
  getProductError,
  addTodoSuccess,
  addTodoError,
  deleteTodoSuccess,
  deleteTodoError,
  editTodoSuccess,
  editTodoError,
  getCategoryError,
  getCategorySuccess,
  loginError,
  loginSuccess,
  listUsersSuccess,
  listUsersError,
  filterProductsSuccess,
  filterProductsError,
  productsDetailsSuccess,
  productsDetailsError,
  addProductError,
  addProductSuccess
} from "./actions";

import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.headers.common["Access-Control-Allow-Origin"] =
  "http://localhost:3000";
axios.defaults.headers.common["Access-Control-Allow-Credentials"] = true;

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => {
    return response && response.data;
  },
  (error) => {
    return error.response && error.response.data;
  }
);

export function* watchGetTodoList() {
  yield takeEvery("GET_PRODUCT", getTodoList);
}

const getTodoAsync = async (payload) => {
  if (payload?.todo?.filter) {
    return await api
      .get(`/products`)
      .then((user) => user)
      .catch((error) => error);
  } else {
    return await api
      .get(`/products`)
      .then((user) => user)
      .catch((error) => error);
  }
};

function* getTodoList({ payload }) {
  try {
    const todos = yield call(getTodoAsync, payload);
    if (todos) {
      yield put(getProductSuccess(todos));
    } else {
      yield put(getProductError(todos));
    }
  } catch (error) {
    yield put(getProductError(error));
    return error;
  }
}

export function* watchAddTodo() {
  yield takeEvery("ADD_TODO", addTodo);
}

const addTodoAsync = async (payload) => {
  return await api
    .post(`/todos`, payload)
    .then((user) => user)
    .catch((error) => error);
};

function* addTodo({ payload }) {
  try {
    const todos = yield call(addTodoAsync, payload);
    if (todos) {
      yield put(addTodoSuccess(todos));
    } else {
      yield put(addTodoError(todos));
    }
  } catch (error) {
    yield put(addTodoError(error));
    return error;
  }
}

export function* watchDeleteTodo() {
  yield takeEvery("DELETE_TODO", deleteTodo);
}

const deleteTodoAsync = async (payload) => {
  return await api
    .delete(`/todos/${payload.id}`)
    .then((user) => user)
    .catch((error) => error);
};

function* deleteTodo({ payload }) {
  try {
    const todos = yield call(deleteTodoAsync, payload);
    if (todos) {
      yield put(deleteTodoSuccess(todos));
    } else {
      yield put(deleteTodoError(todos));
    }
  } catch (error) {
    yield put(addTodoError(error));
    return error;
  }
}

export function* watchEditTodo() {
  yield takeEvery("EDIT_TODO", editTodo);
}

const editTodoAsync = async (payload) => {
  return await api
    .put(`/todos/${payload.id}`, payload)
    .then((user) => user)
    .catch((error) => error);
};

function* editTodo({ payload }) {
  try {
    const todos = yield call(editTodoAsync, payload);
    if (todos) {
      yield put(editTodoSuccess(todos));
    } else {
      yield put(editTodoError(todos));
    }
  } catch (error) {
    yield put(addTodoError(error));
    return error;
  }
}

export function* watchGetCategoryTodo() {
  yield takeEvery("GET_CATEGORY", getCategory);
}

const GetCategoryAsync = async () => {
  return await api
    .get(`/products/categories`)
    .then((user) => user)
    .catch((error) => error);
};

function* getCategory() {
  try {
    const todos = yield call(GetCategoryAsync);
    if (todos) {
      yield put(getCategorySuccess(todos));
    } else {
      yield put(getCategoryError(todos));
    }
  } catch (error) {
    yield put(getCategoryError(error));
    return error;
  }
}
export function* watchLogin() {
  yield takeEvery("LOGIN", login);
}

const LoginAsync = async (data) => {
  return await api
    .post(`/auth/login`, data)
    .then((user) => user)
    .catch((error) => error);
};

function* login({ payload }) {
  try {
    const todos = yield call(LoginAsync, payload);
    if (todos?.status !== "Error") {
      localStorage.setItem("token", todos.token);
      localStorage.setItem("authorized", true);
      yield put(loginSuccess(todos));
    } else {
      yield put(loginError(todos.msg));
    }
  } catch (error) {
    yield put(loginError(error));
    return error;
  }
}

export function* watchListUsers() {
  yield takeEvery("LIST_USERS", listUsers);
}

const ListUsersAsync = async () => {
  return await api
    .get(`/users`)
    .then((user) => user)
    .catch((error) => error);
};

function* listUsers() {
  try {
    const todos = yield call(ListUsersAsync);
    if (todos) {
      yield put(listUsersSuccess(todos));
    } else {
      yield put(listUsersError(todos));
    }
  } catch (error) {
    yield put(listUsersError(error));
    return error;
  }
}

export function* watchFilterProducts() {
  yield takeEvery("FILTER_PRODUCTS", filterProducts);
}

const FilterProductsAsync = async (payload) => {
  return await api
    .get(`/products${payload.filter}`)
    .then((user) => user)
    .catch((error) => error);
};

function* filterProducts({payload}) {
  try {
    const todos = yield call(FilterProductsAsync, payload);
    if (todos) {
      yield put(filterProductsSuccess(todos));
    } else {
      yield put(filterProductsError(todos));
    }
  } catch (error) {
    yield put(filterProductsError(error));
    return error;
  }
}

export function* watchProductsDetails() {
  yield takeEvery("PRODUCTS_DETAILS", productsDetails);
}

const productsDetailsAsync = async (payload) => {
  return await api
    .get(`/products/${payload.id}`)
    .then((user) => user)
    .catch((error) => error);
};

function* productsDetails({payload}) {
  try {
    const todos = yield call(productsDetailsAsync, payload);
    if (todos) {
      yield put(productsDetailsSuccess(todos));
    } else {
      yield put(productsDetailsError(todos));
    }
  } catch (error) {
    yield put(productsDetailsError(error));
    return error;
  }
}

export function* watchAddProduct() {
  yield takeEvery("ADD_PRODUCTS", addProduct);
}

const addProductsAsync = async (payload) => {
  return await api
    .post(`/products`)
    .then((user) => user)
    .catch((error) => error);
};

function* addProduct({payload}) {
  try {
    const todos = yield call(addProductsAsync, payload);
    if (todos) {
      yield put(addProductSuccess(todos));
    } else {
      yield put(addProductError(todos));
    }
  } catch (error) {
    yield put(addProductError(error));
    return error;
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchGetTodoList),
    fork(watchAddTodo),
    fork(watchDeleteTodo),
    fork(watchEditTodo),
    fork(watchGetCategoryTodo),
    fork(watchLogin),
    fork(watchListUsers),
    fork(watchFilterProducts),
    fork(watchProductsDetails),
    fork(watchAddProduct),
  ]);
}
