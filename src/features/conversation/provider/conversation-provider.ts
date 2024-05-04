import axios from "axios";
import { formatDate, getDate } from "src/app/utils/formate-date";

export const conversationProvider = (date: string, ) => {
    const dateLte = formatDate(getDate().today)
    return axios.get(`http://localhost:3000/conversation?date_gte=${date}&date_lt=${dateLte}`)
};
