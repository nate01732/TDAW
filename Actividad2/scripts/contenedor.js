class Contenedor {
    constructor(containerElement) {
        this.containerElement = containerElement;
        this.botonGrid = [];
        this.createPuzzle();
        this.shuffle();
        this.movimientos = new Movimientos();
    }
  
    createPuzzle() {
        // Crear el puzzle y los botones
        for (let i = 0; i < 16; i++) {
            const boton = new Boton(this.containerElement, i);
            this.botonGrid.push(boton);
        }
        // Configurar la posición inicial del botón vacío (por ejemplo, el último botón)
        this.emptyIndex = 15;
        this.botonGrid[this.emptyIndex].setEmpty();
    }

    shuffle() {
        // Colocar los numeros aleatoriamente
        const values = Array.from({ length: 16 }, (_, i) => i);
        let currentIndex = values.length;
    
        while (currentIndex !== 0) {
            const randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
    
            const temp = values[currentIndex];
            values[currentIndex] = values[randomIndex];
            values[randomIndex] = temp;
        }
    
        // Asignar los valores aleatorios a los botones del rompecabezas
        values.forEach((value, i) => {
            this.botonGrid[i].setValue(value);
    
            if (value === 15) { // si el boton tiene indice 15 es el boton vacio
                this.emptyIndex = i;
                this.botonGrid[i].setEmpty();
            }
        });
    }
  
    moveButton(index) {
        // cambiar los valores de los botones
        if (this.isValidMove(index)) {
            this.botonGrid[this.emptyIndex].setValue(this.botonGrid[index].getValue());
            this.botonGrid[index].setEmpty();
            this.emptyIndex = index;
            this.movimientos.incrementarMovimiento(); 
        }
    }
  
    isValidMove(index) {
        // Verificar si el movimiento es válido (si los botones están adyacentes)
        const emptyRow = Math.floor(this.emptyIndex / 4);
        const emptyCol = this.emptyIndex % 4;
        const row = Math.floor(index / 4);
        const col = index % 4;
  
        return (
            (Math.abs(emptyRow - row) === 1 && emptyCol === col) ||
            (Math.abs(emptyCol - col) === 1 && emptyRow === row)
        );
    }
  
    getButtonsWithValues() {
        // Obtener los valores de los botones
        return this.botonGrid.filter((boton) => boton.getValue() !== null);
    }
}

