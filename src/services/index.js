import axios from "axios";
import api from "../constants/api";
const ADMIN = api.ADMIN;
export const login= async({email, password})=>{
    console.log(email);
    const form = new FormData();
    form.append("email", email);
    form.append("password", password);
    axios.post(ADMIN + `/login`, form).then((res)=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    });
}