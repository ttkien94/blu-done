import { Alert } from "react-bootstrap";

const index = ({ info }) => {
  return info === null ? null : (
    <Alert varient={info.type}>{info.message}</Alert>
  );
};
export default index;
