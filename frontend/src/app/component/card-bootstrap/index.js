import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { imgUrl } from "core/contexts/constants";
function CardBootStrap({ img, title, time, _id, key }) {
  return (
    <Card className="mt-3 ">
      <Link to={"/blog-detail?_id=" + _id} target="_blank">
        <Card.Img variant="top" src={`${imgUrl}${img}`} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>

          <Card.Text>{time}</Card.Text>

          <Button variant="primary">Xem Thêm</Button>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default CardBootStrap;
