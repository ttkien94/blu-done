export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000/api"
    : "https://hidden-lowlands-85487.herokuapp.com/api";
export const imgUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000/"
    : "https://hidden-lowlands-85487.herokuapp.com/";
export const LOCAL_STORAGE_TOKEN_NAME = "learnit-mern";

export const BLOGS_LOADED_SUCCESS = "BLOGS_LOADED_SUCCESS";
export const BLOGS_LOADED_FAIL = "BLOGS_LOADED_FAIL";
export const ADD_BLOG = "ADD_BLOG";
export const DELETE_BLOG = "DELETE_BLOG";
export const FIND_BLOG = "FIND_BLOG";
export const UPDATE_BLOG = "UPDATE_BLOG";

export const FREEIMAGE_API_KEY = "6d207e02198a847aa98d0a2a901485a5";
export const FREEIMAGE_REQUEST_URL = "https://freeimage.host/api/1/upload";
