import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:57317/api',
});

instance.defaults.headers.common.Accept = "application/json";
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers.put["Content-Type"] = "application/json";

export default instance;