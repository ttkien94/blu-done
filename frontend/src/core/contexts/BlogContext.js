import { createContext, useReducer, useState } from "react";
import { blogReducer } from "../reducers/blogReducer";
import {
  apiUrl,
  BLOGS_LOADED_SUCCESS,
  BLOGS_LOADED_FAIL,
  ADD_BLOG,
  DELETE_BLOG,
  FIND_BLOG,
  UPDATE_BLOG,
} from "./constants";
import axios from "axios";

export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
  // State
  const [blogState, dispatch] = useReducer(blogReducer, {
    blog: null,
    blogs: [],
    blogsLoading: true,
  });

  const [showAddBlogModal, setShowAddBlogModal] = useState(false);
  const [showUpdateBlogModal, setShowUpdateBlogModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: null,
  });
  //   Get all blogs admin
  const getBlogs = async (type) => {
    try {
      console.log(type);
      const response = await axios.get(`${apiUrl}/blog?type=${type}`);
      if (response.data.success) {
        dispatch({
          type: BLOGS_LOADED_SUCCESS,
          payload: response.data.blogs,
        });
      }
    } catch (error) {
      dispatch({
        type: BLOGS_LOADED_FAIL,
      });
    }
  };

  //get all blogs for client

  const getBlogsClient = async (type) => {
    try {
      const response = await axios.get(`${apiUrl}/blog/getall?type=${type}`);
      if (response.data.success) {
        dispatch({
          type: BLOGS_LOADED_SUCCESS,
          payload: response.data.blogs,
        });
      }
    } catch (error) {
      dispatch({
        type: BLOGS_LOADED_FAIL,
      });
    }
  };

  // upload Image before Add blog
  const onImageUpload = async (selectedImage) => {
    try {
      const formData = new FormData();
      formData.append("formImage", selectedImage);

      const response = await axios.post(`${apiUrl}/uploadimage`, formData);

      if (response.data.successImage) {
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { successImage: false, messageImage: "Server error" };
    }
  };
  // Delete image
  const DeleteImage = async (img) => {
    try {
      console.log("img:", img);
      const response = await axios.post(`${apiUrl}/deleteimage`, {
        data: img,
      });

      if (response.data.success) {
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };
  // Add blog
  const addBlog = async (newBlog) => {
    try {
      const response = await axios.post(`${apiUrl}/blog/add`, newBlog);
      if (response.data.success) {
        dispatch({ type: ADD_BLOG, payload: response.data.blog });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  //   Delete Blog
  const deleteBlog = async (blogId) => {
    try {
      const blog = blogState.blogs.find((blog) => blog._id === blogId);
      await DeleteImage(blog.img);
      const response = await axios.delete(`${apiUrl}/blog/${blogId}`);
      if (response.data.success) {
        dispatch({ type: DELETE_BLOG, payload: blogId });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  // Find Blog when user is update
  const findBlog = (blogId) => {
    const blog = blogState.blogs.find((blog) => blog._id === blogId);
    dispatch({ type: FIND_BLOG, payload: blog });
  };
  // Update BLog
  const updateBlog = async (updatedBlog) => {
    // tìm blog & so sánh image
    console.log(updatedBlog);
    try {
      const response = await axios.put(
        `${apiUrl}/blog/${updatedBlog._id}`,
        updatedBlog
      );
      if (response.data.success) {
        dispatch({ type: UPDATE_BLOG, payload: response.data.blog });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  //   Blogs context data
  const blogContentData = {
    blogState,
    getBlogs,
    showAddBlogModal,
    setShowAddBlogModal,
    showUpdateBlogModal,
    setShowUpdateBlogModal,
    addBlog,
    showToast,
    setShowToast,
    deleteBlog,
    findBlog,
    updateBlog,
    onImageUpload,
    DeleteImage,
    selectedImage,
    setSelectedImage,
    getBlogsClient,
  };

  return (
    <BlogContext.Provider value={blogContentData}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
