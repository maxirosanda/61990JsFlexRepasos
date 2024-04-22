let totalVentas = 0
let seguirRegistrando = true
let productos = []

while (seguirRegistrando) {
    
    let producto = prompt("Ingrese el nombre del producto vendido:")
    let precio = parseFloat(prompt("Ingrese el precio del producto vendido:"));

    if (isNaN(precio) || precio <= 0) {
        alert("Precio inválido. Por favor, ingrese un precio válido mayor que cero.")
        continue
    }
    productos.push(producto)
    totalVentas += precio;

    seguirRegistrando = confirm("desea seguir resgistrando productos?")

}
if(productos.length != 0){
    for(let i = 0; i< productos.length;i++){
        alert(productos[i])
    }
    alert("El total de ventas es: $" + totalVentas.toFixed(2));
}else{
    alert("Gracias por visitarnos")
}
