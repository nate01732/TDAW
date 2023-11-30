class Movimientos {
    constructor() {
        this.movimientos = 0;
        this.elementoMovimientos = document.createElement('p');
        this.actualizarTexto();
    }

    incrementarMovimiento() {
        this.movimientos++;
        this.actualizarTexto();
    }

    obtenerMovimientos() {
        return this.movimientos;
    }

    actualizarTexto() {
        const seccionMovimientos = document.getElementById('movimientos'); // Obtener la sección "marcador"
        this.elementoMovimientos.textContent = `Movimientos: ${this.movimientos}`;
        
        if (seccionMovimientos) {
            // Agregar el contador de movimientos como un elemento secundario de la sección "marcador"
            seccionMovimientos.innerHTML = ''; // Limpiar el contenido existente de la sección
            seccionMovimientos.appendChild(this.elementoMovimientos);
        }
    }
}


