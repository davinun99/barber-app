export const getDateFromStr = (str: string) => {
  const [year, month, day] = str.split("-");
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
};
