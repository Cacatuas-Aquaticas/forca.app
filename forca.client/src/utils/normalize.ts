const normalize = (char: string) => {
  return char.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
}

export default normalize