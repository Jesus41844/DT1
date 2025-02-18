// Importaciones necesarias para el componente
import { Component, OnInit } from '@angular/core';

declare global {
  interface Window {
    squareAPI: {
      loadSquare: () => Promise<any>;
    };
  }
}

// Decorador @Component que define el componente PaymentComponent
@Component({
  selector: 'PaymentComponent', //Selector del componente
  templateUrl: './payment-form.component.html', //Ruta al HTML del componente
  styleUrl: './payment-form.component.css', //Ruta a los estilos del componente
})

export class PaymentComponent implements OnInit{
  //Metodo que se ejecuta al inicializar el componente
  async ngOnInit() {// Inicializa la instancia de pagos con el ID del sandbox de Square
    try {
      const square = await window.squareAPI.loadSquare();
      // Ahora puedes usar el SDK de Square
      console.log('Square SDK cargado:', square);
    } catch (error) {
      console.error("Error: ", error);
  }
  }
}