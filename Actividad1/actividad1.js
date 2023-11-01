// creamos el arreglo vacio
const estudiantes = [];

function agregarEstudiante() {
  const nuevoEstudiante = new Map(); // Crear un nuevo mapa para el estudiante
  
 // Solicitar al usuario que ingrese la información del estudiante
 const nombre = prompt("Ingrese el nombre del estudiante:");
 const edad = parseInt(prompt("Ingrese la edad del estudiante:"));
 const grado = prompt("Ingrese el grado del estudiante:");
  
 // Solicitar al usuario que ingrese las calificaciones como una lista separada por comas
 const calificacionesInput = prompt("Ingrese las calificaciones del estudiante (separadas por comas)");
 const calificaciones = calificacionesInput.split(',').map(Number);
  
 // Agregar la información del estudiante al mapa
 nuevoEstudiante.set('nombre', nombre);
 nuevoEstudiante.set('edad', edad);
 nuevoEstudiante.set('grado', grado);
 nuevoEstudiante.set('calificaciones', calificaciones);
  
 // Agregar el mapa del estudiante al arreglo estudiantes
 estudiantes.push(nuevoEstudiante);
 console.log('Estudiante agregado con éxito.');
}

function mostrarEstudiante() {
  estudiantes.forEach((estudiante, i) => {
    const nombre = estudiante.get('nombre');
    const edad = estudiante.get('edad');
    const grado = estudiante.get('grado');
    const calificaciones = estudiante.get('calificaciones');
    
    console.log( '[Estudiante no. ' + (i + 1) + ']' + '[Nombre: ' + nombre + ']' + '[Edad: ' + edad + ']' + '[Grado: ' + grado + ']' + '[Calificaciones: ' + calificaciones + ']');
});
  console.log('\n');
}

function calcularPromedio() {
  console.log("De que estudiante quieres calcular el promedio?");
  const numeroEstudiante = parseInt(prompt("Ingresa el numero de estudiante")) - 1;
  
  const calificaciones = estudiante.get('calificaciones');
  
  for (let i = 0; i < calificaciones.length; i++) {
        sumaCalificaciones += calificaciones[i];
      }
  
  const promedio = sumaCalificaciones / calificaciones.length;
  
  console.log('El promedio de este estudiante es:', promedio);
  
  
}

function menuPrincipal() {
  while(true){
    console.log("Que deseas realizar?");
    console.log(" 1. Agregar estudiante \n 2. Mostrar Estudiante \n 3. Calcular Promedio \n 4. Salir del programa");
    
    const opcion = parseInt(prompt("Ingresa el numero de la opcion: "));
    
    if(opcion === 1){
      agregarEstudiante();
    }   
    
    else if (opcion === 2){
      mostrarEstudiante();
    }
    
    else if (opcion === 3){
      calcularPromedio();
    }
    
    else if (opcion === 4){
      break;
    }
    
    else{
      console.log("Opcion incorrecta");
    }
  }
}

//Llamar a la funcion principal
menuPrincipal();
