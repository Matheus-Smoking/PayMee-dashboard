import { formatDate, getDate } from 'src/app/utils/formate-date';
const { yesterday: yestarday, sevenDays, thirtyDays } = getDate();

export const dateOptions = [
  { label: 'Dia anterior', value: formatDate(yestarday) },
  { label: '7 dias', value: formatDate(sevenDays) },
  { label: '30 Dias', value: formatDate(thirtyDays) },
];
