import axios from "axios";

export const dashProvider = () => {
    return axios.get('http://localhost:3000/dashboard')
};
