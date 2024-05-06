class Notas {

    constructor(titulo, contenido){

        this.titulo = titulo.toLowerCase()
        this.contenido = contenido.toLowerCase()
    }


    // Método para obtener la longitud del contenido de la nota
    obtenerLongitudContenido() {
        return this.contenido.length
    }
    
    // Método para verificar si la nota contiene una palabra específica
    contienePalabra(palabra) {
        return this.contenido.includes(palabra.toLowerCase())
    }
    
    // Método para formatear la nota como texto para mostrar
    formatearNota() {
        return "Título: " + this.titulo + "\nContenido: " + this.contenido
    }
 

}

let notas = []

function crearNota(titulo,contenido){
    const nota = new Notas(titulo,contenido)
    notas.push(nota)
    localStorage.setItem("notas",JSON.stringify(notas))

}

function actualizarNota(titulo,propiedad,valorNuevo){
    const tituloLowerCase = titulo.toLowerCase()
    const propiedadLowerCase = propiedad.toLowerCase()
    const valorNuevoLowerCase = valorNuevo.toLowerCase()

    for (let i = 0;i<notas.length;i++) {
        if(notas[i].titulo == tituloLowerCase){
            notas[i][propiedadLowerCase] = valorNuevoLowerCase
            localStorage.setItem("notas",JSON.stringify(notas))
            break
        }
    }
}

function borrarNota(titulo){

    const tituloLowerCase = titulo.toLowerCase()

    for (let i = 0;i<notas.length;i++) {
        if(notas[i].titulo == tituloLowerCase){
            notas.splice(i,1)
            localStorage.setItem("notas",JSON.stringify(notas))
            break
        }
    }
}

function optenerNotas(){

    const notasRecuperadas = JSON.parse(localStorage.getItem("notas")) || []

    for (const nota of notasRecuperadas) {
        notas.push(new Notas(nota.titulo,nota.contenido))
    }
    
    localStorage.setItem("notas",JSON.stringify(notas))
   

}

function main(){
    let continuar = true
    optenerNotas()
    
    while(continuar){

        const accion = prompt("que accion quiere realizar? (C:crear , B: borrar , A: actualizar , V: ver notas").toLowerCase()
        
        switch(accion){
            case "c":
                const titulo = prompt("Ingrese titulo de la nota")
                const contenido = prompt("Ingrese continuar de la nota")
                crearNota(titulo,contenido)
                break
            case "v":
                console.log(notas)
                for(let i = 0; i<notas.length; i++){
                    alert(notas[i].formatearNota())
                }
                break

            case "b":
                const tituloBorrar = prompt("Ingrese titulo de la nota")
                borrarNota(tituloBorrar)
                break

            case "a":
                const tituloActual = prompt("Ingrese titulo actual de la nota")
                const propiedad = prompt("Ingrese el nombre la propiedad que quiere actualizar")
                const valorNuevo = prompt("Ingrese valor actualizado de la propiedad")
                actualizarNota(tituloActual,propiedad,valorNuevo)
                break

            default:
                break
        }
        continuar = confirm("quiere continuar?")
    }
}

main()