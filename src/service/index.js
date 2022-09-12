import axios from "axios";

const api = axios.create({
  baseURL: "https://kenziesoccerapi.herokuapp.com"
});

export default api;
