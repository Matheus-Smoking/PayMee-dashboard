export function formatDate(date: Date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear() % 100;

  return `${day < 10 ? '0' + day : day}/${
    month < 10 ? '0' + month : month
  }/${year}`;
}

export function getDate() {
  const today = new Date();
  const yestarday = new Date(today);
  yestarday.setDate(today.getDate() - 1);
  const sevenDays = new Date(today);
  sevenDays.setDate(today.getDate() - 7);
  const thirtyDays = new Date(today);
  thirtyDays.setMonth(today.getMonth() - 1);

  return { today, yestarday, sevenDays, thirtyDays };
}
