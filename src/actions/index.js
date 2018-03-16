import * as axios from "axios";
const BASE_URL = `http://localhost:5000/`;
export const CREATE_RESERVATION = 1;
export const GET_RESERVATIONS = 2;
export const GET_RESERVATION_BY_ID = 3;

export function createReservation(data){
   const url = `${BASE_URL}reservation`;
    const request = axios.post(url,data,{"Access-Control-Allow-Origin": "*"});
    return{
        type:CREATE_RESERVATION,
        payload:request
    }
}

export function getReservations(){
    const url = `${BASE_URL}reservations`;
    const request = axios.get(url,{"Access-Control-Allow-Origin": "*"});
    return{
        type:GET_RESERVATIONS,
        payload:request
    }
}

export function getReservationById(id){
     const url = `${BASE_URL}reservation/`+id;
     const request = axios.get(url,{"Access-Control-Allow-Origin": "*"});
    return{
        type:GET_RESERVATION_BY_ID,
        payload:request
    }
}
