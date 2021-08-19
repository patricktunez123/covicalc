import axios from "axios";

const request = axios.create({
  baseURL: "https://corona.lmao.ninja/v2",
});

export default request;
