const entradaTarea = document.getElementById("tarea");
const botonTarea = document.getElementById("agregarTarea");
const listaTareas = document.getElementById("listaTareas");


/* Esta funcion toma el texto del campo de entrada, crea un nuevo elemento
 de lista li y lo agrega a la lista de tareas */

function agregarElemento() {
    const textoTarea = entradaTarea.value;
    

    if (textoTarea.trim() !== "") {
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = textoTarea;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar"

        // Se crea una funcion para marcar un elemento como completado
        function marcarElemento() {
            // asignamos una clase para cambiar el estilo de lo elementos <li>
            // classList asigna una clase al elemento <li>
            // toggle para asignar el atributo, es decir, el nombre de la clase
            nuevaTarea.classList.toggle("completado");
        }
        // agregamos el listener para realizar la accion una vez presionado el elemento
        nuevaTarea.addEventListener("click", marcarElemento);

        // otra funcion para agregar un boton para eliminar los elementos
        function quitarElemento() {
            // usamos el metodo remove, para quitar el elemento
            nuevaTarea.remove();
        }
        botonEliminar.addEventListener("click", quitarElemento);

        nuevaTarea.appendChild(botonEliminar);

        listaTareas.appendChild(nuevaTarea);

        // 
        entradaTarea.value = "";
    }
}

/* Se agrega un listener para el boton */
botonTarea.addEventListener("click", agregarElemento);
