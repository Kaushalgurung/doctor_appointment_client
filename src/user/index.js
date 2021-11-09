import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Previous Password</Form.Label>
          <Form.Control
            value={oldPassword}
            onChange={(e) => {
              setOldPassword(e.target.value);
            }}
            type="password"
            placeholder="Previous password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
            type="password"
            placeholder="New password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
export default ChangePassword;
