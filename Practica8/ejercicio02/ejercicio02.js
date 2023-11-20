//Seleccionar los elementos con la clase imagen
const imagenes = document.querySelectorAll('img.imagen');

function mostrarImagenAmpliada(event) {
  // se crea un nuevo elemento
  const enlargedImage = document.createElement('div');
  
  enlargedImage.style.position = 'absolute';
  enlargedImage.style.top = `${event.clientY}px`;
  enlargedImage.style.left = `${event.clientX}px`;
  
  // crear una imagen dentro del div con la imagen más grande
  const enlargedImg = document.createElement('img');
  enlargedImg.src = event.target.src; 
  enlargedImg.style.width = '120px'; 
  enlargedImage.style.border = 'solid blue'
  enlargedImage.appendChild(enlargedImg);
  
  enlargedImage.classList.add('enlarged-image');
  
  // agregamos el div con la imagen mas grande
  document.body.appendChild(enlargedImage);
}

// funcion para ocutarla
function ocultarImagenAmpliada() {
  const enlargedImage = document.querySelector('div.enlarged-image');
  
  if (enlargedImage) {
    enlargedImage.remove();
  }
}

imagenes.forEach((imagen) => {
  imagen.addEventListener('mouseover', mostrarImagenAmpliada);

  imagen.addEventListener('mouseout', ocultarImagenAmpliada);
});

// para la ventana modal
const botonesEditar = document.querySelectorAll('button a');
const modal = document.getElementById('modal');

botonesEditar.forEach((boton) => {
  if (boton.textContent.trim() === 'Editar') {
    boton.addEventListener('click', (event) => {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace

      const fila = event.target.closest('tr');
      const imagenSrc = fila.querySelector('td:nth-child(2) img').src;
      const titulo = fila.querySelector('td:nth-child(3)').innerText;
      const artista = fila.querySelector('td:nth-child(4)').innerText;
      const anio = fila.querySelector('td:nth-child(5)').innerText;
      const genero = fila.querySelector('td:nth-child(6)').innerText;

      modal.style.display = 'block';
      document.getElementById('modal-image').src = imagenSrc;
      document.getElementById('modal-titulo').value = titulo;
      document.getElementById('modal-artista').value = artista;
      document.getElementById('modal-anio').value = anio;
      document.getElementById('modal-genero').value = genero;
    });
  }
});

const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});



