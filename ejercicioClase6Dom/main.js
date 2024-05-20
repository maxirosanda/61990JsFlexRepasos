/*
tipos de datos -> string o number o boolean o array o object o convinaciones
variables -> let o const
ciclos -> for o while o do while o for of / tambien podes usar forEach
condicionales -> if o else if o switch / tambien podes usar metodos de busqueda y transformacion
funciones -> function o arrow function 

paradigma -> funcional(funciones y objetos literales) o orientado a objetos(clases y metodos)
metodos de arrays -> push,splice,etc
metodos de busqueda y transformacion -> find o/y filter o/y some o/y reduce o/y findIndex , etc
manipulacion del dom -> getElementById / innerText / createElement / append / remove / value 
eventos -> click o/y submit o/y change o/y blur

*/

let tareas = []

const agregarTareasAlmacenamiento = (nombre,contenido) => {
    const tarea = {
        id : crypto.randomUUID(),
        fecha: new Date(),
        nombre,
        contenido

    }
    tareas.push(tarea)
    localStorage.setItem("tareas",JSON.stringify(tareas))
    return tarea
}

const traerTareasAlmacenamiento = () => {
   return JSON.parse( localStorage.getItem("tareas")) || []

}

const borrarTareaAlmacenamiento = (id) => {

    tareas = tareas.filter(tarea => tarea.id != id)
    localStorage.setItem("tareas",JSON.stringify(tareas))
    return true

}

const actualizarTareaAlmacenamiento = (id,nombreNuevo,contenidoNuevo) => {

    tareas = tareas.map((tarea)=>{
        if(tarea.id === id){
            return {
                id:id,
                fecha: new Date(),
                nombre : nombreNuevo,
                contenido: contenidoNuevo
            }
        }
        return tarea
    })
    localStorage.setItem("tareas",JSON.stringify(tareas))
    return true
}

const crearTarjeta = (tarea) => {
    const app = document.getElementById("app")
    const element = document.createElement("div")
    element.className = "tarjeta"
    element.id = tarea.id
    element.innerHTML = `
        <input type="text"  class="input" value="${tarea.nombre}">
        <textarea type="text"  class="input">${tarea.contenido}</textarea>
        <button class="boton btn-actualizar">Actualizar</button>
        <button class="boton btn-borrar">Borrar</button>
    `
    app.append(element)
}

const crearTarjetaAgregar = () => {

    const app = document.getElementById("app")
    const element = document.createElement("div")
    element.className = "tarjeta"
    element.innerHTML = `
            <input type="text" id="nombreTarea" class="input" placeholder="Nombre de la tarea" required>
            <textarea type="text" id="contenidoTarea" class="input" placeholder="Agregar contenido de la tarea" required></textarea>
            <button  class="boton btn-agregar">Agregar tarea</button>
    `
    app.append(element)




}

const borrarTarjeta = (id) => {

    const element = document.getElementById(id)
    element.remove()
}

const confirmacion = (accion) => {
    const app = document.getElementById("app")
    const element = document.createElement("div")
    element.className = "tarjeta-confirmacion"
    element.innerHTML = `
        <p class="tarjeta-confirmacion-texto">se a ${accion} correctamente</p>
    `
    app.append(element)
    setTimeout(()=>{
        element.remove()
    },1000)
}

const principal = () => {

    crearTarjetaAgregar()
    tareas = traerTareasAlmacenamiento()
    tareas.forEach(tarea => {
        crearTarjeta(tarea)
    })
    
    const app = document.getElementById("app")

    app.addEventListener("click", (event) => {

        if(event.target && event.target.classList.contains('btn-agregar')){
            const parentElement = event.target.parentElement
            const inputs =  parentElement.getElementsByClassName('input')
            const nombreNuevo = inputs[0].value
            const contenidoNuevo = inputs[1].value
           
            const nuevaTarea = agregarTareasAlmacenamiento(nombreNuevo,contenidoNuevo)
            crearTarjeta(nuevaTarea)
            if(nuevaTarea) confirmacion("agregada")
            inputs[0].value = ""
            inputs[1].value =""
        }

        if (event.target && event.target.classList.contains('btn-borrar')) {
            const id = event.target.parentElement.id
            const borrada = borrarTareaAlmacenamiento(id)
            if(borrada) confirmacion("borrada")
            borrarTarjeta(id)
        }
        if (event.target && event.target.classList.contains('btn-actualizar')) {
            const parentElement = event.target.parentElement
            const id = parentElement.id
            const inputs =  parentElement.getElementsByClassName('input')
            const nombreNuevo = inputs[0].value
            const contenidoNuevo = inputs[1].value
            const actualizada = actualizarTareaAlmacenamiento(id,nombreNuevo,contenidoNuevo)
            if(actualizada) confirmacion("actualizada")
        }
    })



}

principal()


