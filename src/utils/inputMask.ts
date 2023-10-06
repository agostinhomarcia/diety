function dateMask(date: string) {
  const value = date.replace(/\D/g, "");

  const dateRegex = /(0?[1-9]|[12][0-9]|3[01])(0?[1-9]|1[012])(\d{4}$)/;;

  const formattedDate = value.replace(dateRegex, "$1/$2/$3");
  return formattedDate;
}

function hourMask(hour: string) {
  const value = hour.replace(/\D/g, "");

  const hourRegex = /^([0-1]?[0-9]|2[0-3])([0-5][0-9]$)/;

  const formattedHour = value.replace(hourRegex, "$1:$2");
  return formattedHour;
}

export { dateMask, hourMask };
