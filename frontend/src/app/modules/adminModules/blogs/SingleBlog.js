import React from "react";
import Card from "react-bootstrap/card";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import Badge from "react-bootstrap/badge";
import ActionButton from "./ActionButton";
import "./styles/styles.scss";
import { imgUrl } from "core/contexts/constants";
function SingleBlog({ blog }) {
  return (
    <>
      <Card
        className="shadow"
        border={
          blog.type === "normal"
            ? "success"
            : blog.type === "header"
            ? "warning"
            : "danger"
        }
      >
        <Card.Img variant="top" src={`${imgUrl}${blog.img}`} alt={blog.img} />
        <Card.Body>
          <Card.Title>
            <Row>
              <Col lg="7" xs>
                <p className="blog-title">{blog.title}</p>
              </Col>
              <Col className="text-right " xs lg="5">
                <ActionButton _id={blog._id} />
              </Col>
            </Row>
          </Card.Title>
          <Badge
            pill
            variant={
              blog.type === "normal"
                ? "success"
                : blog.type === "header"
                ? "warning"
                : "danger"
            }
          >
            {blog.createAt} - {blog.type}
          </Badge>
          {/* <Card.Text
            dangerouslySetInnerHTML={{ __html: blog.description }}
          ></Card.Text> */}
        </Card.Body>
      </Card>
    </>
  );
}

export default SingleBlog;
