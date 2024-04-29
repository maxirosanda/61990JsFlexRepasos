let estudiantes = []

function agregarEstudiantes(){

    let continuar = confirm("Quiere ingresar un estudiante")
    while(continuar){
        const dniIngresado = prompt("Ingrese DNI del nuevo estudiante")
        const nombreIngresado = prompt("Ingrese nombre del nuevo estudiante")
        const apellidoIngresado = prompt("Ingrese apellido del nuevo estudiante")
        const estudiante = {
            dni: dniIngresado,
            nombre: nombreIngresado,
            apellido:apellidoIngresado,
            notas:[]
        }
        estudiantes.push(estudiante)
        continuar = confirm("quiere ingresar otro estudiante")
    }


}

function agregarNota(){
    let continuar = confirm("Quiere ingresar una nota")
    while(continuar){
        const dniIngresado = prompt("Ingrese dni")
        const cursoIngresado = prompt("Ingrese Curso")
        const notaIngresada = prompt("Ingrese nota")
        const notaCurso = {
            curso:cursoIngresado,
            nota:notaIngresada
        }
        for (let i = 0; i < estudiantes.length; i++) {
            if (estudiantes[i].dni == dniIngresado) {
                estudiantes[i].notas.push(notaCurso) 
            }
        }
        continuar = confirm("quiere ingresar otro nota")
    }

}

function verDatos(){
    
    for (const estudiante of estudiantes) {
        alert("DNI: " + estudiante.dni + " nombre: " + estudiante.nombre + " apellido: " + estudiante.apellido)
    for(const nota of estudiante.notas){
            alert("Curso: " + nota.curso + " nota: " + nota.nota)
        }
    }
}

agregarEstudiantes()
agregarNota()
verDatos()