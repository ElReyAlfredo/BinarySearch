function busquedaBinaria(vector, elemento) {
  let inicio = 0;
  let final = vector.length - 1;

  while (inicio <= final) {
    let mitad = Math.floor((inicio + final) / 2);

    if (vector[mitad] < elemento) {
      inicio = mitad + 1;
    } else if (vector[mitad] > elemento) {
      final = mitad - 1;
    } else if (vector[mitad] === elemento) {
      return mitad;
    }
  }
}
console.log(busquedaBinaria([1, 2, 3, 4, 5, 6, 7, 8, 9], 8));
