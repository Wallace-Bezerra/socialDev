export const dateFormatter = (date) => {
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "full",
  }).format(date);
};
