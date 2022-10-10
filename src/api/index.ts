import axios from "axios";

export const baseURL = process.env.REACT_APP_API_BASE_ADDRESS;
const instance = axios.create({ baseURL });

export const getAuthors = () => instance.get(`${baseURL}artists/static`);
