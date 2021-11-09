import axios from "axios";
import API from "../constants/api";
import { getToken } from "../services/db";

const APPOINTMENT = API.APPOINTMENT;

export const getAppointments = async (filter) => {
  const res = await getToken();
  try {
    const response = await axios.get(APPOINTMENT, {
      headers: { access_token: res.token },
    });
    return response.data.data;
  } catch (err) {
    throw err;
  }
};

export const addAppointment = async (data) => {
  console.log(data);
  const formData = new FormData();
  for (var key in data) {
    formData.append(key, data[key]);
  }

  try {
    const response = await axios.post(APPOINTMENT + "/register", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return { message: "appointment added", error: false };
  } catch (err) {
    return { message: err.response.data.message, error: true };
  }
};
