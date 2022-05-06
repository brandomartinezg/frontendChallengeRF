import axios from "axios";
import { Agent } from 'https';

const loginApi = axios.create({
    baseURL:'https://pruebas-muy-candidatos.s3.us-east-2.amazonaws.com',
    httpsAgent: new Agent({
        rejectUnauthorized: false
    })
});

export default loginApi;