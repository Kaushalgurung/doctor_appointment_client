import { useContext, useState } from "react";
import { AppointmentContext } from "./context";
import { Link } from "react-router-dom";
import { Table, Button, Toast, ToastContainer } from "react-bootstrap";
const Appointments = () => {
  const {
    appointments,
    approveAppointment,
    deleteAppointment,
    completeAppointment,
    refreshData,
    downloadProblem
  } = useContext(AppointmentContext);

  const [showToast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

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
              <th>Document</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.forEach((appnt, i) => {
              if (!appnt.is_archived) {
                return (
                  <tr key={i}>
                    <td>1</td>
                    <td>{appnt.name}</td>
                    <td>{appnt.phone}</td>
                    <td>{appnt.email}</td>
                    <td>
                      <Link to={`/doctors/${appnt.doctor_id}`}>
                        go to doctor
                      </Link>
                    </td>
                    <td>
                      <Button onClick={(e)=>{
                        e.preventDefault();
                        downloadProblem(appnt._id);
                      }}>
                        Download problem document
                      </Button>
                    </td>
                    {appnt.approved ? (
                      appnt.completed ? (
                        <>
                          <td>Completed</td>
                          <td>
                            <Button
                              onClick={async () => {
                                await deleteAppointment(appnt._id);
                                setToastMessage("Appointment deleted");
                                setToast(true);
                                refreshData();
                              }}
                            >
                              Delete
                            </Button>{" "}
                          </td>
                        </>
                      ) : (
                        <>
                          <td>Approved</td>
                          <td>
                            <Button
                              onClick={async () => {
                                await completeAppointment(appnt._id);
                                setToastMessage("Appointment completed");
                                setToast(true);
                                refreshData();
                              }}
                            >
                              Complete
                            </Button>{" "}
                          </td>
                        </>
                      )
                    ) : (
                      <>
                        <td>Not Approved</td>
                        <td>
                          <Button
                            onClick={async () => {
                              await approveAppointment(appnt._id);
                              setToastMessage("Appointment Approved");
                              setToast(true);
                              refreshData();
                            }}
                          >
                            Approve
                          </Button>{" "}
                        </td>
                      </>
                    )}
                  </tr>
                );
              }
            })}
          </tbody>
        </Table>
        <ToastContainer  onClose={() => setToast(false)} className="p-3" position="buttom-end"delay={3000}>
          <Toast show={showToast} onClose={() => setToast(false)} bg={"success"}delay={3000} autohide>
            <Toast.Body>{toastMessage}</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    );
  } else {
    return <div></div>;
  }
};
export default Appointments;
