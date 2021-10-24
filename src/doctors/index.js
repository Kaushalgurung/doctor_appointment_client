import { DoctorContext } from './context';
import { useContext, useEffect, useState } from 'react';
import { Form, FloatingLabel, FormGroup, Col, Row, Modal, Table, Button } from 'react-bootstrap';

function BookDoctor({ show, setShow }) {

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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


const Doctors = () => {
    const { doctors } = useContext(DoctorContext);
    useEffect(() => {
        if (doctors) {
            console.log(doctors);
        }
    }, [doctors])

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1 >Doctors</h1>
            {doctors && doctors.length ? (
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Phone Number</th>
                            <th>Book</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doctor, i) => {
                            return (
                                <tr key={i} >
                                    <td>1</td>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.designation}</td>
                                    <td>{doctor.phone}</td>
                                    <td><Button onClick={(e) => {
                                        setShow(true);
                                    }}>Book</Button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>

            ) : <h2>Loading data...</h2>}
            <BookDoctor show={show} setShow={setShow} />
        </div>
    )
}
export default Doctors;