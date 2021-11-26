/* eslint-disable import/no-anonymous-default-export */

const INIT_STATE = {
  todos: [],
  category: [],
  users: [],
  error: "",
  notificationMsg: "",
  details: {},
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...state,
        error: undefined,
      };

    case "GET_PRODUCT_SUCCESS":
      return {
        ...state,
        error: undefined,
        todos: action.payload,
      };

    case "GET_PRODUCT_ERROR":
      return {
        ...state,
        error: action.payload.message,
      };

    case "ADD_TODO":
      return {
        ...state,
        error: undefined,
      };

    case "ADD_TODO_SUCCESS":
      return {
        ...state,
        error: undefined,
      };

    case "ADD_TODO_ERROR":
      return {
        ...state,
        error: action.payload.message,
      };

    case "DELETE_TODO":
      return {
        ...state,
        error: undefined,
      };

    case "DELETE_TODO_SUCCESS":
      return {
        ...state,
        error: undefined,
      };

    case "DELETE_TODO_ERROR":
      return {
        ...state,
        error: action.payload.message,
      };

    case "EDIT_TODO":
      return {
        ...state,
        error: undefined,
      };

    case "EDIT_TODO_SUCCESS":
      return {
        ...state,
        error: undefined,
      };

    case "EDIT_TODO_ERROR":
      return {
        ...state,
        error: action.payload.message,
      };
    case "GET_CATEGORY":
      return {
        ...state,
        error: undefined,
      };

    case "GET_CATEGORY_SUCCESS":
      return {
        ...state,
        error: undefined,
        category: action.payload,
      };

    case "GET_CATEGORY_ERROR":
      return {
        ...state,
        error: action.payload.message,
      };

    case "LOGIN":
      return {
        ...state,
        error: undefined,
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        error: undefined,
        notificationMsg: action.payload,
      };

    case "LOGIN_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    case "LIST_USERS":
      return {
        ...state,
        error: undefined,
      };

    case "LIST_USERS_SUCCESS":
      return {
        ...state,
        error: undefined,
        users: action.payload,
      };

    case "LIST_USERS_ERROR":
      return {
        ...state,
        error: action.payload.message,
      };

    case "FILTER_PRODUCTS":
      return {
        ...state,
        error: undefined,
      };

    case "FILTER_PRODUCTS_SUCCESS":
      return {
        ...state,
        error: undefined,
        todos: action.payload,
      };

    case "FILTER_PRODUCTS_ERROR":
      return {
        ...state,
        error: action.payload.message,
      };

    case "PRODUCTS_DETAILS":
      return {
        ...state,
        error: undefined,
      };

    case "PRODUCTS_DETAILS_SUCCESS":
      return {
        ...state,
        error: undefined,
        details: action.payload,
      };

    case "PRODUCTS_DETAILS_ERROR":
      return {
        ...state,
        error: action.payload.message,
      };

    case "ADD_PRODUCTS":
      return {
        ...state,
        error: undefined,
      };

    case "ADD_PRODUCTS_SUCCESS":
      return {
        ...state,
        error: undefined,
      };

    case "ADD_PRODUCTS_ERROR":
      return {
        ...state,
        error: action.payload.message,
      };

    default:
      return { ...state };
  }
};
