import { BlogContext } from "core/contexts/BlogContext";
import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";

function SelectedImage() {
  const { setSelectedImage } = useContext(BlogContext);
  const onImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
    console.log(event.target.files[0]);
  };
  return (
    <>
      <Form.Control
        type="file"
        onChange={onImageChange}
        id="formImage"
        name="formImage"
      ></Form.Control>
    </>
  );
}

export default SelectedImage;
