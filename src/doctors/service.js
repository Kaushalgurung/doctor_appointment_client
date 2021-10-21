import axios from 'axios'
import API from '../constants/api'

const DOCTORS = API.DOCTORS;

export const getDoctors = async(filter)=>{
    try{
        const res = await axios.get(DOCTORS);
        return res.data.data;
    }
    catch(err){
        console.log(err);
    }
}