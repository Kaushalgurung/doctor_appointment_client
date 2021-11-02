import axios from 'axios'
import API from '../constants/api'
import { getToken } from '../services/db';

const DOCTORS = API.DOCTORS;

export const getDoctors = async (filter) => {
    try {
        const res = await axios.get(DOCTORS);
        return res.data.data;
    }
    catch (err) {
        console.log(err);
    }
}

export const addDoctor = async (data) => {
    const res = await getToken();
    const formData = new FormData();
    for (var key in data) {
        formData.append(key, data[key]);
    }
    if (res.found) {
        try {
            const response = await axios.post(DOCTORS + `/register`,formData,
                { headers: { access_token: res.token } },
                );
            return {
                success: true,
                res: response
            }
        } catch (err) {
            return {
                success: false,
                message: err.response
            }
        }
    }
}