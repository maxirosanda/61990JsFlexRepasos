
const url = "https://ecommerce-js-flex-default-rtdb.firebaseio.com/products"

const traerProductos = async () => {
    try {
        const response = await fetch(`${url}.json`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

const traerProducto = async (id) => {
    try {
        const response = await fetch(url + "/" + id)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

const crearProducto = async ({nombre,descripcion,precio,stock}) => {

    const producto = {
        nombre,
        descripcion,
        precio,
        stock
    }
    try {
        const response = await fetch(`${url}.json`,{
            method:"POST",
            body:JSON.stringify(producto),
        })
        const data = await response.json()
        console.log(data)

    } catch (error) {
        console.log(error)
    }
}

const actualizarProducto = async (id,datosActualizados) => {
    try {
        const response = await fetch(`${url}/${id}.json/`,{
            method:"PUT",
            body:JSON.stringify(datosActualizados),
        })
        const data = await response.json()
        console.log(data)

    } catch (error) {
        console.log(error)
    }
}

const borrarProducto = async (id) =>{
    try {
        await fetch(`${url}/${id}.json/`,{method:"DELETE",})

    } catch (error) {
        console.log(error)
    }
}

const mostrarProducto = ({id,nombre,descripcion,precio,stock}) => {

    const contenedorProductos = document.getElementById("contenedorProductos")
    const element = document.createElement("div")
    element.className = "tarjeta"
    element.id = id
    element.innerHTML = `
                            <p>${id}</p>
                            <input type="text" class="input" value="${nombre}">
                            <input type="text" class="input"  value="${descripcion}">
                            <input type="number" class="input"  value="${precio}">
                            <input type="number" class="input"  value="${stock}">
                            <button class="btnActualizarProducto">actualizar</button>
                            <button class="btnBorrarProducto">borrar</button>
    `
    contenedorProductos.append(element)
}

const mostrarProductos = async () => {
    const data = await traerProductos()
    const productos = Object.keys(data).map(key =>({id:key,...data[key]}))
    productos.forEach(producto => {
        mostrarProducto(producto)
    })
}

const borrarTarjetaProducto = (id) => {

    const element = document.getElementById(id)
    element.remove()
}


/* Logica General */ 

mostrarProductos()



const btnAgregarProducto = document.getElementById("btnAgregarProducto")

btnAgregarProducto.addEventListener("click",()=>{
    const nombreNuevoProducto = document.getElementById("nombreNuevoProducto").value
    const descripcionNuevoProducto =  document.getElementById("descripcionNuevoProducto").value
    const precioNuevoProducto = parseFloat(document.getElementById("precioNuevoProducto").value) 
    const stockNuevoProducto = parseInt( document.getElementById("stockNuevoProducto").value)

    const nuevoProducto = { nombre:nombreNuevoProducto,
        descripcion:descripcionNuevoProducto,
        precio:precioNuevoProducto,
        stock:stockNuevoProducto
    }
    crearProducto(nuevoProducto)
    mostrarProducto(nuevoProducto)
})


const contenedorProductos = document.getElementById("contenedorProductos")

contenedorProductos.addEventListener("click", (event) => {


    if (event.target && event.target.classList.contains('btnActualizarProducto')) {
        console.log("jghbuifds")
        const parentElement = event.target.parentElement
        const id = parentElement.id
        const inputs =  parentElement.getElementsByClassName('input')
        const nombre = inputs[0].value
        const descripcion = inputs[1].value
        const precio = inputs[2].value
        const stock = inputs[3].value

        actualizarProducto(id,{nombre,descripcion,precio,stock})
    }

    if (event.target && event.target.classList.contains('btnBorrarProducto')) {
        const id = event.target.parentElement.id
        borrarProducto(id)
        borrarTarjetaProducto(id)
    }


})

