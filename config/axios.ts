import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${process.env.BACKEND_URL}/api`,
});

export default axiosClient;