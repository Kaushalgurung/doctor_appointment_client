import { useState, useContext } from "react";

import {
  Form,
  FloatingLabel,
  FormGroup,
  Col,
  Row,
  Modal,
  Button,
  ToastContainer,
  Toast
} from "react-bootstrap";
import { AppointmentContext } from "../appointments/context";
function BookDoctor({ id, show, handleClose, handleShow }) {
  const { addAppointment } = useContext(AppointmentContext);
  const [showToast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastHeader, setToastHeader] = useState("");
  const [toastBg, setToastBg] = useState("danger");
  const [values, setValues] = useState({
    name: "",
    gender: "Male",
    email: "",
    phone: "",
    medical_problem: "",
    doctor_id: id,
    problem_doc: undefined 
  });
  const clearValues = () => {
    setValues({
      name: "",
      gender: "Male",
      email: "",
      phone: "",
      medical_problem: "",
      doctor_id: "",
      problem_doc: undefined
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(id){
      setValues ({ ...values, doctor_id: id });
    }
    const res = await addAppointment(values);
    if(!res.error){
      setToastHeader("Success");
      setToastMessage(res.message);
      setToastBg("success");
      setToast(true);
      clearValues();
      handleClose();
    }
    else{
      setToastHeader("Failed!");
      setToastMessage(res.message);
      setToastBg("danger");
    }
    setToast(true);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fill the form below to confirm booking:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormGroup className="mb-3" controlId="formBasic FullName">
              <Form.Label>Full-Name:</Form.Label>
              <Form.Control
                type="text"
                value={values.name}
                onChange={(e) => {
                  setValues({ ...values, name: e.target.value });
                }}
                placeholder="Enter full-name"
                style={{ width: "400px" }}
              />
            </FormGroup>
            <fieldset>
              <Form.Group as={Row} className="mb-3">
                <Form.Label as="legend" column sm={2}>
                  Select gender:
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    onClick={(e) => {
                      setValues({ ...values, gender: "Male" });
                    }}
                    label="Male"
                    name="genderRadio"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    type="radio"
                    onClick={(e) => {
                      setValues({ ...values, gender: "Female" });
                    }}
                    label="Female"
                    name="genderRadio"
                    id="formHorizontalRadios2"
                  />
                </Col>
              </Form.Group>
            </fieldset>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={values.email}
                onChange={(e) => {
                  setValues({ ...values, email: e.target.value });
                }}
                style={{ width: "400px" }}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <FormGroup
              className="mb-3"
              controlId="formBasic Phone"
              style={{ width: "400px" }}
            >
              <Form.Label>Phone no:</Form.Label>
              <Form.Control
                value={values.phone}
                onChange={(e) => {
                  setValues({ ...values, phone: e.target.value });
                }}
                type="phone number"
                placeholder="Enter Phone-no:"
              />
            </FormGroup>
            <Form.Group
              controlId="formFileSm"
              className="mb-3"
              style={{ width: "400px" }}
            >
              <Form.Label>Small file input example</Form.Label>
              <Form.Control
                type="file"
                size="sm"
                onChange={async (e) =>
                  setValues({
                    ...values,
                    problem_doc: 
                      e.target.files[0]
                  })
                }
              />
            </Form.Group>

            {/*<Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Label>Upload medical report</Form.Label>
              <Form.Control type="file" multiple style={{ width: "400px" }} />
              <Form.Text className="text-muted">
                Medical report will be kept confidential.
              </Form.Text>
  </Form.Group>*/}
            <FloatingLabel
              controlId="floatingTextarea"
              label="Describe your medical problem."
            >
              <Form.Control
                value={values.medical_problem}
                onChange={(e) => {
                  setValues({ ...values, medical_problem: e.target.value });
                }}
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px", width: "400px" }}
              />
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Book doctor
          </Button>
        </Modal.Footer>
        <ToastContainer className="p-3" position="top-end">
          <Toast show={showToast} onClose={() => setToast(false)} bg={toastBg}>
            <Toast.Header>
              <strong className="me-auto">{toastHeader}</strong>
            </Toast.Header>
            <Toast.Body>{toastMessage}</Toast.Body>
          </Toast>
        </ToastContainer>
      </Modal>
    </>
  );
}
export default BookDoctor;
