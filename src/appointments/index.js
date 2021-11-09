import { useContext } from "react";
import { AppointmentContext } from "./context";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
const Appointments = () => {
  const { appointments } = useContext(AppointmentContext);

  if (appointments.length > 0) {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Patient's name</th>
              <th>Phone </th>
              <th>Email</th>
              <th>Booked Doctor</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appnt, i) => {
              if (!appnt.is_archived) {
                return (
                  <tr key={i}>
                    <td>1</td>
                    <td>{appnt.name}</td>
                    <td>{appnt.phone}</td>
                    <td>{appnt.email}</td>
                    <td><Link to= {`/doctors/${appnt.doctor_id}`} >Doctor</Link></td>
                  </tr>
                );
              }
            })}
          </tbody>
        </Table>
      </div>
    );
  } else {
    return <div></div>;
  }
};
export default Appointments;
