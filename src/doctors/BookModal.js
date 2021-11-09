import { Form, FloatingLabel, FormGroup, Col, Row, Modal, Button } from 'react-bootstrap';
function BookDoctor({ show, handleClose, handleShow }) {
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Fill the form below to confirm booking:</Modal.Title>
                </Modal.Header>
                <Modal.Body>            <Form>
                    <FormGroup className="mb-3" controlId="formBasic FullName">
                        <Form.Label>Full-Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter full-name" style={{ width: '400px' }} />
                    </FormGroup>
                    <fieldset>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label as="legend" column sm={2}>
                                Select gender:
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    label="Male"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Female"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                />
                            </Col>
                        </Form.Group>
                    </fieldset>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" style={{ width: '400px' }} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <FormGroup className="mb-3" controlId="formBasic Phone" style={{ width: '400px' }}>
                        <Form.Label>Phone no:</Form.Label>
                        <Form.Control type="phone number" placeholder="Enter Phone-no:" />
                    </FormGroup>
                    <Form.Group controlId="formFileMultiple" className="mb-3">
                        <Form.Label>Upload medical report</Form.Label>
                        <Form.Control type="file" multiple style={{ width: '400px' }} />
                        <Form.Text className="text-muted">
                            Medical report will be kept confidential.
                        </Form.Text>
                    </Form.Group>
                    <FloatingLabel controlId="floatingTextarea" label="Describe your medical problem.">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px', width: '400px' }}
                        />
                    </FloatingLabel>
                </Form></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Book doctor
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default BookDoctor;