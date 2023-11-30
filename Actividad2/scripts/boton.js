class Boton {
  constructor(containerElement, value) {
      this.containerElement = containerElement;
      this.value = value;
      this.element = document.createElement('button');
      this.element.textContent = value + 1;
      this.element.addEventListener('click', () => this.onClick());
      this.containerElement.appendChild(this.element);
  }

  onClick() {
      // Manejar el clic en el botón
      const index = container.botonGrid.indexOf(this);
      container.moveButton(index);
      if (container.getButtonsWithValues().length === 0) {
          alert('¡Has resuelto el puzzle!');
      }
  }

  getValue() {
      return this.value;
  }

  setValue(newValue) {
      this.value = newValue;
      this.element.textContent = newValue + 1;
  }

  setEmpty() {
      this.value = null;
      this.element.textContent = '';
  }
}
  