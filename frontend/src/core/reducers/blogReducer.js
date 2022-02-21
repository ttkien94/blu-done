import {
  BLOGS_LOADED_SUCCESS,
  BLOGS_LOADED_FAIL,
  ADD_BLOG,
  DELETE_BLOG,
  FIND_BLOG,
  UPDATE_BLOG,
} from "../contexts/constants";
export const blogReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case BLOGS_LOADED_SUCCESS:
      return {
        ...state,
        blogs: payload,
        blogsLoading: false,
      };
    case BLOGS_LOADED_FAIL:
      return {
        ...state,
        blogs: [],
        blogsLoading: false,
      };
    case ADD_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, payload],
      };
    case DELETE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog._id !== payload),
      };
    case FIND_BLOG:
      return {
        ...state,
        blog: payload,
      };
    case UPDATE_BLOG:
      const newBlogs = state.blogs.map((blog) =>
        blog._id === payload._id ? payload : blog
      );
      return {
        ...state,
        blogs: newBlogs,
      };
    default:
      return state;
  }
};
