export function percentegeFormatter(percentege: number) {
  if (percentege % 2 === 0) {
    return percentege;
  }

  return percentege.toFixed(2);
}
