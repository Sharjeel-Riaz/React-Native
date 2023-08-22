import axios from "axios";

const BASE_URL = "http://192.168.100.69:3000/api/bardapi";

const getBardApi = (userMessage) =>
  axios.get(BASE_URL + "?ques=" + userMessage);

export default {
  getBardApi,
};
