import { DoctorContext } from './context';
import { useContext, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';

const Doctors = () => {
    const { doctors } = useContext(DoctorContext);
    useEffect(() => {
        if (doctors) {
            console.log(doctors);
        }
    }, [doctors])

    return (
        <div>
            <h1 >Doctors</h1>
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
                                    window.location = `mailto:${doctor.email}`
                                }}>Book</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}
export default Doctors;