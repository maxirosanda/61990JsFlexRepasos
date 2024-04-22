let notas = []
let totalNotas = 0
let cantidadEstudiantes = parseInt(prompt("Ingrese la cantidad de estudiantes:"))

for (let i = 0; i < cantidadEstudiantes; i++) {
   
    let nota = parseFloat(prompt("Ingrese la nota del estudiante " + (i + 1) + ":"))

    if (isNaN(nota) || nota < 0 || nota > 10) {
        alert("Nota inválida. Por favor, ingrese una nota válida entre 0 y 10.")
        i--
        continue 
    }

    totalNotas += nota
}

const promedio = totalNotas / cantidadEstudiantes

alert("El promedio de notas de los " + cantidadEstudiantes + " estudiantes es: " + promedio.toFixed(2))