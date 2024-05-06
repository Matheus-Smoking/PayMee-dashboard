import axios from "axios";
import { formatDate, getDate } from "src/app/utils/formate-date";

export const pendenciesProvider = (date: string, ) => {
    const dateLte = formatDate(getDate().yesterday)
    return axios.get(`http://localhost:3000/pendencies?date_gte=${date}&date_lt=${dateLte}`)
};
