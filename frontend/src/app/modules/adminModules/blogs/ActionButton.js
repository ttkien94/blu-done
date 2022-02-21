import React, { useContext } from "react";
import Button from "react-bootstrap/button";
import editIcon from "assets/img/admin/pencil.svg";
import deleteIcon from "assets/img/admin/trash.svg";
import { BlogContext } from "core/contexts/BlogContext";
function ActionButton({ _id }) {
  const { deleteBlog, findBlog, setShowUpdateBlogModal } =
    useContext(BlogContext);
  const chooseBlog = (blogId) => {
    findBlog(blogId);
    setShowUpdateBlogModal(true);
  };
  return (
    <>
      <Button className="blog-button">
        <img
          src={editIcon}
          alt="edit"
          width="24"
          height="24"
          onClick={chooseBlog.bind(this, _id)}
        />
      </Button>
      <Button className="blog-button">
        <img
          src={deleteIcon}
          alt="delete"
          width="24"
          height="24"
          onClick={deleteBlog.bind(this, _id)}
        />
      </Button>
    </>
  );
}

export default ActionButton;
