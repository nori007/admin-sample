import axios from "axios";

// https://axios-http.com/docs/config_defaults
function axiosConfig () {
    axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
}

export default  axiosConfig;