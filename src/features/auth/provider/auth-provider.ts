import axios from "axios";

export const authProvider = (email: string, password: string) => {
    return axios.post('http://localhost:3000/login', {email, password})
};
