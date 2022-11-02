""" * Reto #0
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
 * """

def fizzbuzz(number):
    '''
    Función que devuelve el número o la palabra fizz, buzz o fizzbuzz.
    De tal manera que si el número es múltiplo de 3 devuelva fizz,
    si el numero es múltiplo de 5 devuelva buzz y si es múltiplo de 3 y 5 devuelva fizzbuzz
    Todo ello se lo añadimos a una lista que devolvemos al final de la función
    '''
    lista_numeros = []
    for item in range(1, number + 1):
        if item % 3 == 0 and item % 5 == 0:
            lista_numeros.append("fizzbuzz")
        elif item % 3 == 0:
            lista_numeros.append("fizz")
        elif item % 5 == 0:
            lista_numeros.append("buzz")
        else:
            lista_numeros.append(item)
    return lista_numeros

# Realizamos un bucle for para recorrer la lista que nos devuelve la función fizzbuzz
for item in fizzbuzz(100):
    print(item)
    
