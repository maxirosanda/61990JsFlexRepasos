
let biblioteca = [
    { titulo: "Cien años de soledad",
      autor: "Gabriel García Márquez",
      genero: "Realismo mágico",
      prestado: false 
    },
    { titulo: "1984",
      autor: "George Orwell",
      genero: "Ciencia ficción",
      prestado: true 
    },
    { titulo: "El principito",
      autor: "Antoine de Saint-Exupéry",
      genero: "Literatura infantil",
      prestado: false 
    },
    { titulo: "El código Da Vinci",
      autor: "Dan Brown",
      genero: "Misterio",
      prestado: true 
    }
  ]

  function encontrarLibroPorTitulo(titulo) {

    for(let i = 0; i < biblioteca.length; i++){

        if(biblioteca[i].titulo === titulo){

            return biblioteca[i]
        }

    }
  }

  function mostrarLibros(){
    for (let i = 0; i < biblioteca.length; i++) {
        
        alert("Título: " + biblioteca[i].titulo + "\nAutor: " +  biblioteca[i].autor + "\nGénero: " + biblioteca[i].genero + "\nPrestado: " + biblioteca[i].prestado)
    }
  }
  
  function prestarLibro(titulo) {

    let libro = encontrarLibroPorTitulo(titulo)

    if (libro) {
      if (libro.prestado) {
        alert("El libro " + titulo + " ya está prestado")
        
      } else {
        libro.prestado = true
        alert("El libro " + titulo + " ha sido prestado.")
      }
    } else {
      alert("El libro " + titulo +  " no se encuentra en la biblioteca")
    }
  }
  
  function devolverLibro(titulo) {

    const libro = encontrarLibroPorTitulo(titulo)

    if (libro) {
      if (libro.prestado) {

        libro.prestado = false
        alert("Gracias por devolver " + titulo)

      } else {
        alert(titulo + " no está prestado")
      }
    } else {
      alert("El libro " + titulo + " no se encuentra en la biblioteca")
    }
  }
  
  function comenzar(){
    alert("Libros en la biblioteca:")

    let continuar = true
  
    while(continuar){
  
      mostrarLibros()
  
      let prestar = confirm("desea prestar un libro ? ")
      if(prestar){
          prestarLibro(prompt("ingrese nombre del libro a prestar"))
      }
  
      let devolver = confirm("desea devolver un libro? ")
      if(devolver){
          devolverLibro(prompt("Ingrese nombre del libro a devolver"))
      }
      continuar = confirm("desea continuar en del sistema?")
    }
  } 

  comenzar()
  