// eslint-disable-next-line import/no-anonymous-default-export
export default (number) => {
  const numberNewFormat = new Intl.NumberFormat("id-ID");
  return numberNewFormat.format(number);
};
