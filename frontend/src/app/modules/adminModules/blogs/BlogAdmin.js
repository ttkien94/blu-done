import { useContext, useEffect, React, useState } from "react";
import { BlogContext } from "core/contexts/BlogContext";
import { AuthContext } from "core/contexts/AuthContext";
// import Spinner from "react-bootstrap/spinner";
import Button from "react-bootstrap/button";
import Card from "react-bootstrap/card";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import SingleBlog from "./SingleBlog";
import AddBlogModal from "./AddBlogModal";
import addIcon from "assets/img/admin/plus-circle-fill.svg";
import "./styles/styles.scss";
import { getQueryVariable } from "app/component/getQueryVariable";
import { OverlayTrigger, Toast } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";
import UpdateBlogModal from "./UpdateBlogModal";
function BlogAdmin() {
  // Context
  const {
    authState: {
      user: { username },
    },
  } = useContext(AuthContext);
  const {
    blogState: { blog, blogs, blogsLoading },
    getBlogs,
    setShowAddBlogModal,
    showToast: { show, message, type },
    setShowToast,
  } = useContext(BlogContext);

  // state

  // Start: Get All blogs
  useEffect(() => {
    getBlogs(1);
  }, []);

  let body = null;
  console.log(blogs);
  if (blogsLoading) {
    body = (
      <div className="spinner-container">
        {/* <Spinner animation="border" varient="info" /> */}
      </div>
    );
  } else if (blogs.lenght === 0) {
    body = <h1>Blog Rỗng</h1>;
  } else {
    body = (
      <>
        <Row className="row-cols-1 row-cols-md-4 g-4 mx-auto mt-3">
          {blogs.map((blog) => (
            <Col key={blog._id} className="my-2">
              <SingleBlog blog={blog} />
            </Col>
          ))}
        </Row>
        {/* Open Add Blog Modal */}
        <OverlayTrigger
          placement="left"
          overlay={<Tooltip> Add Blog </Tooltip>}
        >
          <Button
            className="btn-floating"
            onClick={setShowAddBlogModal.bind(this, true)}
          >
            <img src={addIcon} alt="add" width="60" height="60" />
          </Button>
        </OverlayTrigger>
      </>
    );
  }
  return (
    <div className="blogadmin">
      {body}

      <AddBlogModal description=" " />

      {blog !== null && (
        <UpdateBlogModal description={blog.description} img={blog.img} />
      )}

      {/* After Blog is added, show toast */}
      <Toast
        show={show}
        style={{ position: "fixed", top: "20%", right: "10px" }}
        className={`bg-${type} text-white`}
        onClose={setShowToast.bind(this, {
          show: false,
          message: "",
          type: null,
        })}
        delay={3000}
        autohide
        // animation={false}
      >
        <Toast.Body>
          <strong>{message}</strong>
        </Toast.Body>
      </Toast>
    </div>
  );
}

export default BlogAdmin;
