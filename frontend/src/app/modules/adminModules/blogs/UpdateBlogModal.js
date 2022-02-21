import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useEffect, useState } from "react";
import { BlogContext } from "core/contexts/BlogContext";
import QuillEditor from "../components/editor/QuillEditor";
import SelectedImage from "../components/SelectedImage";
import { imgUrl } from "core/contexts/constants";

import "./styles/styles.scss";

const UpdateBlogModal = (props) => {
  // Contexts
  const {
    blogState: { blog },
    showUpdateBlogModal,
    setShowUpdateBlogModal,
    updateBlog,
    setShowToast,
    onImageUpload,
    DeleteImage,
    setSelectedImage,
    selectedImage,
  } = useContext(BlogContext);

  const [updatedBlog, setUpdatedBlog] = useState(blog);
  const [files, setFiles] = useState([]);

  //   State
  const onEditorChange = (value) => {
    setUpdatedBlog({ ...updatedBlog, description: value });
  };
  const onFilesChange = (files) => {
    setFiles(files);
  };

  // get Blog
  useEffect(() => {
    setUpdatedBlog(blog);
    // console.log("descritption_update: ", blog.description);
  }, [blog]);

  const { title, type } = updatedBlog;
  const onChangeUpdatedBlogForm = (event) => {
    setUpdatedBlog({ ...updatedBlog, [event.target.name]: event.target.value });
    console.log({ ...updatedBlog, [event.target.name]: event.target.value });
  };
  const closeDialog = () => {
    //   reset Add Blog Data
    setUpdatedBlog(blog);
    setShowUpdateBlogModal(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    // console.log(updatedBlog);
    let pathImg = updatedBlog.img;
    if (selectedImage !== null) {
      console.log("props :", props.img);
      await DeleteImage(props.img);
      let { successImage, messageImage } = await onImageUpload(selectedImage);
      pathImg = messageImage;
    }
    console.log("path:", pathImg);

    const { success, message } = await updateBlog({
      ...updatedBlog,
      img: pathImg,
      createAt: Date.now(),
    });

    setShowToast({
      show: true,
      message,
      type: success ? "success" : "danger",
    });
    closeDialog();
  };
  return (
    <Modal
      show={showUpdateBlogModal}
      animation={false}
      onHide={closeDialog}
      className="mymodal"
    >
      <Modal.Header closeButton>
        <Modal.Title>Update New Blog</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Title"
              name="title"
              required
              aria-describedby="title-help"
              value={title}
              onChange={onChangeUpdatedBlogForm}
            />
          </Form.Group>
          <div className="row">
            <div className="select">
              <select
                onChange={onChangeUpdatedBlogForm}
                value={type}
                name="type"
              >
                <option value="normal">normal</option>
                <option value="header">header</option>
                <option value="popular">popular</option>
              </select>
            </div>

            {/* <div className="select">
              <select>
                <option value="" selected disabled hidden>
                  Topic
                </option>
                <option value="1">normal</option>
                <option value="2">header</option>
                <option value="3">pupular</option>
              </select>
            </div> */}
          </div>
          <Form.Group>
            <QuillEditor
              placeholder={"Start Posting Something"}
              onEditorChange={onEditorChange}
              onFilesChange={onFilesChange}
              description={props.description}
            />
          </Form.Group>
          <SelectedImage />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDialog}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default UpdateBlogModal;
