const monthTranslations: Record<string, string> = {
  January: "Janeiro",
  February: "Fevereiro",
  March: "Março",
  April: "Abril",
  May: "Maio",
  June: "Junho",
  July: "Julho",
  August: "Agosto",
  September: "Setembro",
  October: "Outubro",
  November: "Novembro",
  December: "Dezembro",
};

const translateMonth = (str: string): string => {
  const regex = new RegExp(Object.keys(monthTranslations).join("|"), "gi");

  return str.replace(regex, (match) => {
    const month = match.charAt(0).toUpperCase() + match.slice(1).toLowerCase();
    return monthTranslations[month] || match;
  });
}

export default translateMonth