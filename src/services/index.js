import axios from "axios";
import api from "../constants/api";

const ADMIN = api.ADMIN;
export const login= async({email, password})=>{
    const form = new FormData();
    form.append("email", email);
    form.append("password", password);
    return axios.post(ADMIN + `/login`, form).then((res)=>{
        return {
            data: res,
            error: false
        }
    }).catch(err=>{
        return {
            message: err.response.data.message,
            error: true
        };
    });
}