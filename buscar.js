function busquedaBinaria(vector, elemento) {
  let min = 0;
  let max = vector.lenght - 1;
  let test;

  while (min <= max) {
    const mitad = Math.floor((min + max) / 2);
    test = vector[mitad];

    if (test < elemento) {
      min = mitad + 1;
    } else if (test > elemento) {
      max = mitad - 1;
    } else {
      return mitad;
    }
  }
}
