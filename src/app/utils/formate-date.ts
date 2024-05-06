export function formatDate(date: Date, type = 'iso') {
  let day: string | number = date.getDate();
  let month: string | number = date.getMonth() + 1;
  const year = date.getFullYear();

  if (day < 10) {
    day = `0${day}`;
  }

  if (month < 10) {
    month = `0${month}`;
  }

  if (type === 'iso') {
    return `${year}-${month}-${day}`;
  }

  return `${day}/${month}/${year % 100}`;
}

export function formatDateShorty(date:string) {
  const separeDate = date.split('-')

  return `${separeDate[2]}/${separeDate[1]}/${separeDate[0] }`;
}

export function getDate() {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const sevenDays = new Date(today);
  sevenDays.setDate(today.getDate() - 7);
  const thirtyDays = new Date(today);
  thirtyDays.setMonth(today.getMonth() - 1);

  return { today, yesterday, sevenDays, thirtyDays };
}
