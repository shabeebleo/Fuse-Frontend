import axios from "axios";
const baseURL = "https://server.footlover.online/";
// const baseURL = "http://localhost:5000";
const instance = axios.create({ baseURL: baseURL });
export default instance;
