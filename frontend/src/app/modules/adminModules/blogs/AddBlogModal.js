import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState } from "react";
import { BlogContext } from "core/contexts/BlogContext";

// import FileBase64 from "react-file-base64";
import SelectedImage from "../components/SelectedImage";
import "./styles/styles.scss";

import QuillEditor from "../components/editor/QuillEditor";
const AddBlogModal = () => {
  // Contexts
  const {
    showAddBlogModal,
    setShowAddBlogModal,
    selectedImage,
    onImageUpload,
    addBlog,
    setShowToast,
  } = useContext(BlogContext);

  //   State
  const [newBlog, setNewBlog] = useState({
    title: "",
    description: "",
    img: "",
    type: "normal",
  });
  const [files, setFiles] = useState([]);
  const { title } = newBlog;
  const onEditorChange = (value) => {
    setNewBlog({ ...newBlog, description: value });
  };
  const onFilesChange = (files) => {
    setFiles(files);
  };

  const onChangeNewBlogForm = (event) => {
    setNewBlog({ ...newBlog, [event.target.name]: event.target.value });
    // console.log({ ...newBlog, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    let { successImage, messageImage } = await onImageUpload(selectedImage);

    if (successImage !== null) {
      setNewBlog({ ...newBlog, img: messageImage });
    } else {
    }
    const { success, message } = await addBlog({
      ...newBlog,
      img: messageImage,
    });

    closeDialog();
    setShowToast({ show: true, message, type: success ? "success" : "danger" });
  };

  const closeDialog = () => {
    //   reset Add Blog Data
    setNewBlog({ title: "", description: "", img: "" });
    setShowAddBlogModal(false);
  };
  return (
    <Modal
      show={showAddBlogModal}
      animation={false}
      onHide={closeDialog}
      className="mymodal"
    >
      <Modal.Header closeButton>
        <Modal.Title>Add New Blog</Modal.Title>
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
              onChange={onChangeNewBlogForm}
            />
          </Form.Group>
          <div className="row">
            <div className="select">
              <select onChange={onChangeNewBlogForm} name="type">
                <option value="" selected disabled hidden>
                  Type Post
                </option>
                <option value="normal">normal</option>
                <option value="header">header</option>
                <option value="popular">pupular</option>
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
            />
          </Form.Group>
          <SelectedImage />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDialog}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddBlogModal;
