//Importes necesarios para el componente
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from "../payment-form/payment-form.component";

//Decorador @Component que define el componente ProductComponent
@Component({
  selector: 'AppProduct', //Selector del componente
  imports:
    [PaymentComponent, //Importa el componente del formulario de pago
    CommonModule, //Importa CommonModule para funcionalidades comunes de Angular
  ],
  templateUrl: './product.component.html', //Ruta al HTML del componente
  styleUrl: './product.component.css' //Ruta a los estilos CSS del componente
})

export class ProductComponent {
  // Propiedades de entrada para el nombre y precio del producto
  @Input() name: string = ''; // Nombre del producto, se puede cambiar desde app.component.ts
  @Input() price: number = 0; // Precio del producto, se puede cambiar desde app.component.ts
  //Variable para la visibilidad del popup
  showPopup = false;
  //Metodo para alternar la visibilidad del popup
  togglePopup() {
    if (this.showPopup != true) {
      this.showPopup = true;
    } else {
      this.showPopup = false;
    }
  }

  // Variable para controlar la visibilidad del formulario de pago
  showPaymentForm = false;

  // Método para alternar la visibilidad del formulario de pago
  togglePaymentForm() {
    this.showPaymentForm = !this.showPaymentForm;
  }
}