
const NUMEROSECRETO = Math.floor(Math.random() * 100) + 1
let intentos = 0
let adivinado = false

alert("¡Bienvenido al juego de adivinanzas! Adivina el número secreto entre 1 y 100.")

while (!adivinado) {
    
    let intento = parseInt(prompt("Ingresa tu intento:"))
    intentos++

    if (intento === NUMEROSECRETO) {

        alert("¡Felicidades! ¡Adivinaste el número secreto en " + intentos + " intentos!")
        adivinado = true

    } else if (intento < NUMEROSECRETO) {
        alert("El número secreto es mayor. Intenta de nuevo.")
    } else {
        alert("El número secreto es menor. Intenta de nuevo.")
    }
}