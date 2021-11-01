import { useState } from "react";
import { Form,Button, Container, Row, Col } from "react-bootstrap";
const AddDoctor = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        addr: '',
        designation: '',
        desc: ''
    })
    const resetValues = () => {
        setValues({
            name: '',
            email: '',
            phone: '',
            addr: '',
            designation: '',
            desc: ''
        });
    }
    return (
        <div>
            <Container >
                <Form>
                    <Row className="justify-content-md-center">
                        <Col xs lg="6">
                            <Form.Group className="mb-3" >
                                <Form.Label>Doctor Name</Form.Label>
                                <Form.Control type="text"
                                    value={values.name}
                                    required
                                    onChange={(e) => {
                                        setValues({ ...values, name: e.target.value });
                                    }}
                                    placeholder="Doctor's name" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email"
                                    value={values.email}
                                    required
                                    onChange={(e) => {
                                        setValues({ ...values, email: e.target.value });
                                    }}
                                    placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Phone number</Form.Label>
                                <Form.Control
                                    value={values.phone}
                                    required
                                    onChange={(e) => {
                                        setValues({ ...values, phone: e.target.value });
                                    }}
                                    type="number" placeholder="phone number" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Physical address</Form.Label>
                                <Form.Control type="text"
                                    value={values.addr}
                                    required
                                    onChange={(e) => {
                                        setValues({ ...values, addr: e.target.value });
                                    }}
                                    placeholder="physical address" />
                            </Form.Group>

                            {//make it coose from options ?
                            }
                            <Form.Group className="mb-3" >
                                <Form.Label>Designation</Form.Label>
                                <Form.Control type="text"
                                    value={values.designation}
                                    required
                                    onChange={(e) => {
                                        setValues({ ...values, designation: e.target.value });
                                    }}
                                    placeholder="Doctor's designation" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Doctor's description</Form.Label>
                                <Form.Control
                                    value={values.desc}
                                    onChange={(e) => {
                                        setValues({ ...values, desc: e.target.value });
                                    }}
                                    as="textarea" rows={3} />
                            </Form.Group>
                        <Button type ="submit" variant="success">Submit</Button>{' '}
                        <Button variant="outline-dark" onClick={resetValues}>Reset</Button>
                        </Col>
                    </Row>

                </Form>

            </Container>
        </div>
    )
}
export default AddDoctor;