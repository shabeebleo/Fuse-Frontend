import axios from "axios";
const baseURL = "https://server.footlover.online/";
const instance = axios.create({ baseURL: baseURL });
export default instance;
