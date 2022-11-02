/* 
* EL FAMOSO "FIZZ BUZZ"
 * Fecha publicación enunciado: 27/12/21
 * Fecha publicación resolución: 03/01/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Escribe un programa que muestre por consola (con un print) los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *  */

// Solución 
/* Función que devuelve el número o la palabra fizz, buzz o fizzbuzz.
    De tal manera que si el número es múltiplo de 3 devuelva fizz,
    si el numero es múltiplo de 5 devuelva buzz y si es múltiplo de 3 y 5 devuelva fizzbuzz
    Todo ello se lo añadimos a una lista que devolvemos al final de la función */
const fizzBuzz = (number) => {
  let lista_numeros = [];
  for (let index = 1; index < number + 1; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      lista_numeros.push("FizzBuzz");
    } else if (index % 3 === 0) {
      lista_numeros.push("Fizz");
    } else if (index % 5 === 0) {
      lista_numeros.push("Buzz");
    } else {
      lista_numeros.push(index);
    }
  }
  return lista_numeros;
};

// Realizamos un bucle for para recorrer la lista que nos devuelve la función fizzbuzz
for (const iterator of fizzBuzz(100)) {
  console.log(iterator);
}

