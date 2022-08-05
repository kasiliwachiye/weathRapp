import axios from "axios";

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const APP_ID = "ce1dd709128390b8ac3e1a7de8c34810";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(async (config) => {
  config.params = { appid: APP_ID, units: "metric" };
  return config;
});

export default api;
