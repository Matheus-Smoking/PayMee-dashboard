import axios from "axios";
import { formatDate, getDate } from "src/app/utils/formate-date";

export const operationProvider = (date: string, sort?: string) => {
    const dateLte = formatDate(getDate().today)
    return axios.get(`http://localhost:3000/operations?date_gte=${date}&date_lte=${dateLte}${sort &&`&_sort=${sort}`}`)
};
