let continuar = true

while(continuar == true){
    let numeroUno = parseFloat(prompt("Ingrese un valor")) 
    let numeroDos = parseFloat(prompt("Ingrese Otro valor")) 
    let operacion = prompt("ingrese operacion matematica (sum,res,mul,div)").toLowerCase()
    let resultado = 0

    if(operacion == "sum"){

        resultado = numeroUno + numeroDos

    } else if(operacion == "res"){

        resultado = numeroUno - numeroDos

    } else if(operacion == "mul"){

        resultado = numeroUno * numeroDos

    } else if(operacion == "div"){

        resultado = numeroUno + numeroDos
    }
    else{
        resultado = "Operacion no valida"
    }

    alert("resultado: " + resultado)
    continuar = confirm("quiere realizar otra operacion?")
}