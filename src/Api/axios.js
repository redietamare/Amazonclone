import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5000",
  // baseURL: "http://127.0.0.1:5001/clone-a8c42/us-central1/api",
  baseURL :"https://amazon-api-deploy-x8m9.onrender.com/"
});

export { axiosInstance };
