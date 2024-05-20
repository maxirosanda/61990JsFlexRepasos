const productos = [
    {
        id: 1,
        nombre: "Laptop Dell Inspiron",
        descripcion: "Laptop Dell Inspiron con procesador Intel i5, 8GB RAM, 256GB SSD",
        precio: 750.00,
        stock: 10
    },
    {
        id: 2,
        nombre: "Teclado Mecánico Corsair K95",
        descripcion: "Teclado mecánico RGB con interruptores Cherry MX",
        precio: 199.99,
        stock: 25
    },
    {
        id: 3,
        nombre: "Mouse Logitech MX Master 3",
        descripcion: "Mouse inalámbrico con precisión láser y batería recargable",
        precio: 99.99,
        stock: 40
    },
    {
        id: 4,
        nombre: "Monitor Samsung Curvo 27''",
        descripcion: "Monitor curvo de 27 pulgadas con resolución 4K UHD",
        precio: 349.99,
        stock: 15
    },
    {
        id: 5,
        nombre: "Disco Duro Externo Seagate 2TB",
        descripcion: "Disco duro externo portátil de 2TB con conexión USB 3.0",
        precio: 89.99,
        stock: 30
    },
    {
        id: 6,
        nombre: "Memoria RAM Kingston 16GB",
        descripcion: "Módulo de memoria RAM DDR4 de 16GB",
        precio: 79.99,
        stock: 50
    },
    {
        id: 7,
        nombre: "Tarjeta Gráfica NVIDIA RTX 3080",
        descripcion: "Tarjeta gráfica NVIDIA GeForce RTX 3080 con 10GB GDDR6X",
        precio: 699.99,
        stock: 8
    },
    {
        id: 8,
        nombre: "Placa Base ASUS ROG Strix B550-F",
        descripcion: "Placa base ASUS para procesadores AMD Ryzen, con soporte para PCIe 4.0",
        precio: 189.99,
        stock: 20
    },
    {
        id: 9,
        nombre: "Fuente de Alimentación Corsair RM850x",
        descripcion: "Fuente de alimentación modular de 850W con certificación 80 PLUS Gold",
        precio: 129.99,
        stock: 12
    },
    {
        id: 10,
        nombre: "Caja de PC NZXT H510",
        descripcion: "Caja de PC ATX con panel lateral de vidrio templado y gestión de cables",
        precio: 99.99,
        stock: 22
    }
]
let carrito = JSON.parse( localStorage.getItem("carrito")) || []

const agregarProductosCarrito = ({id,nombre,precio,descripcion,cantidad}) => {
    const productoCarrito = {
        id ,
        fecha: new Date(),
        nombre,
        descripcion,
        precio,
        cantidad

    }
    carrito.push(productoCarrito)
    localStorage.setItem("carrito",JSON.stringify(carrito))
    return productoCarrito
}


 const borrarProductoCarrito = (id) => {

    carrito = carrito.filter(producto => producto.id != id)
    localStorage.setItem("carrito",JSON.stringify(carrito))
    return true

}

const actualizarProductoCarrito = (id,cantidad) => {

    carrito = carrito.map((producto)=>{
        if(producto.id == id){
            return {
                id:id,
                fecha: new Date(),
                nombre:producto.nombre,
                precio:producto.precio,
                descripcion:producto.descripcion,
                cantidad:cantidad
            }
        }
        return producto
    })
    localStorage.setItem("carrito",JSON.stringify(carrito))
    return true
}

const crearTarjetaproducto = ({id,nombre,descripcion,precio}) => {
    const app = document.getElementById("app")
    const element = document.createElement("div")
    element.className = "tarjeta-producto"
    element.id = id
    element.innerHTML = `
        <h3>${nombre}</h3>
        <p>${descripcion}</p>
        <span>${precio}</span>
        <input type="number" class="input" name="" value="1">
        <button class="boton btn-agregar-carrito">Agregar al carrito</button>
    `
    app.append(element)
}

const crearTarjetaproductoCarrito = ({id,nombre,descripcion,precio,cantidad}) => {
    const app = document.getElementById("app")
    const element = document.createElement("div")
    element.className = "tarjeta-producto"
    element.id = id
    element.innerHTML = `
        <h3>${nombre}</h3>
        <p>${descripcion}</p>
        <span>${precio}</span>
        <input type="number" class="input" name="" value="${cantidad}">
        <button class="boton btn-actualizar-carrito">actualizar del carrito</button>
        <button class="boton btn-eliminar-carrito">Eliminar del carrito</button>
    `
    app.append(element)
}

const borrarTarjetaProductoCarrito = (id) => {

    const element = document.getElementById(id)
    element.remove()
}
const confirmacion = (accion) => {
    const app = document.getElementById("app")
    const element = document.createElement("div")
    element.className = "tarjeta-confirmacion"
    element.innerHTML = `
        <p class="tarjeta-confirmacion-texto">se a ${accion} correctamente al carrito</p>
    `
    app.append(element)
    setTimeout(()=>{
        element.remove()
    },1000)
}

const viewComercio = () => {

    
    productos.forEach(producto => crearTarjetaproducto(producto))
    
    const app = document.getElementById("app")

    app.addEventListener("click", (event) => {

        if(event.target && event.target.classList.contains('btn-agregar-carrito')){
            const parentElement = event.target.parentElement
            const id = parentElement.id
            const inputs =  parentElement.getElementsByClassName('input')
            const cantidad = inputs[0].value
            const agregado = agregarProductosCarrito({...productos[id],cantidad})
            if(agregado) confirmacion("agregada")
        }

    })

}

const viewCarrito = () => {
   carrito.forEach(producto => crearTarjetaproductoCarrito(producto))

   const app = document.getElementById("app")

   app.addEventListener("click", (event) => {


       if (event.target && event.target.classList.contains('btn-eliminar-carrito')) {
           const id = event.target.parentElement.id
           const borrada = borrarProductoCarrito(id)
           if(borrada) confirmacion("borrada")
            borrarTarjetaProductoCarrito(id)
       }
       if (event.target && event.target.classList.contains('btn-actualizar-carrito')) {
           const parentElement = event.target.parentElement
           const id = parentElement.id
           const inputs =  parentElement.getElementsByClassName('input')
           const cantidad = inputs[0].value
           const actualizada = actualizarProductoCarrito(id,cantidad)
           if(actualizada) confirmacion("actualizada")
       }
   })

}





