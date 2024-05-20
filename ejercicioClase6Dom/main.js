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
eventos -> 

*/

let tareas = []

const agregarTareas = (nombre,contenido) => {
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

const traerTareas = () => {
    return JSON.parse( localStorage.getItem("tareas")) || []

}

const borrarTarea = (id) => {

    const tareasFiltradas = tareas.filter(tarea => tarea.id != id)
    localStorage.setItem("tareas",JSON.stringify(tareasFiltradas))
    return tareasFiltradas

}

const actualizarTarea = (nuevaTarea) => {

    const tareasActualizadas = tareas.map((tarea)=>{
        if(tarea.id === nuevaTarea.id){
            return {
                id:tarea.id,
                fecha: new Date(),
                nombre : nuevaTarea.nombre || tarea.nombre,
                contenido: nuevaTarea.contenido || tarea.contenido
            }
        }
    })
    localStorage.setItem("tareas",tareasActualizadas)
    return tareasActualizadas
}

const crearTarjeta = (tarea) => {
    const contenidoPrincipal = document.getElementById("contenidoPrincipal")
    const tarjeta = document.createElement("div")
    tarjeta.className = "tarjeta"
    tarjeta.id = tarea.id
    tarjeta.innerHTML = `
        <input type="text" id="nombreTarea" class="input" value="${tarea.nombre}">
        <textarea type="text" id="contenidoTarea" class="input">${tarea.contenido}</textarea>
        <button class="boton btn-actualizar" id="${tarea.id}">Actualizar</button>
        <button class="boton btn-borrar" id="${tarea.id}">Borrar</button>
    `
    contenidoPrincipal.append(tarjeta)
    return tarjeta
}

const borrarTarjeta = (id) => {

    const tarjeta = document.getElementById(id)
    tarjeta.remove()
}

const principal = () => {

    tareas = traerTareas()
    tareas.forEach(tarea => {
        crearTarjeta(tarea)
    })

    const buttonAgregarTarea = document.getElementById("buttonAgregarTarea")
    buttonAgregarTarea.addEventListener("click",()=>{
        const contenidoTarea = document.getElementById("contenidoTarea").value 
        const nombreTarea = document.getElementById("nombreTarea").value 
        const nuevaTarea = agregarTareas(nombreTarea,contenidoTarea)
        crearTarjeta(nuevaTarea)
    })

    const contenidoPrincipal = document.getElementById("contenidoPrincipal");

    contenidoPrincipal.addEventListener("click", (event) => {
        if (event.target && event.target.classList.contains('btn-borrar')) {
            const id = event.target.id
            tareas = borrarTarea(id)
            borrarTarjeta(id)
            console.log("ID del botón borrar:", id)
        }
        if (event.target && event.target.classList.contains('btn-actualizar')) {
            const id = event.target.id
            tareas = actualizarTarea(id)
            console.log("ID del botón Actualizar:", id)
        }
    })



}

principal()


