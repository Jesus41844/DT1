// Importaciones necesarias para el componente principal
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { OctoprintCComponent } from './octoprint-c/octoprint-c.component';
import { PaymentComponent } from './payment-form/payment-form.component';

// Decorador @Component que define el componente principal
@Component({
  selector: 'app-root', //Ruta del selector
  imports: [RouterOutlet, //Importa RouterOutlet para la navegación
    MatToolbarModule, //Importa el módulo de barra de herramientas de Angular Material
    MatButtonModule, //Importa el módulo de botones de Angular Material
    OctoprintCComponent, //Importa el componente de octoprint
    PaymentComponent, //Importa el componente de pago
  ],
  templateUrl: './app.component.html', //Ruta al archivo HTML
  styleUrl: './app.component.css' //Ruta a los estilos CSS
})

export class AppComponent {
  title = 'Payment-System-FabLab'; //Titulo del componente
  //Objeto de los productos con nombre y precio
  product = { name: 'Total a pagar', price: 0}
  // Variable para controlar la visibilidad del popup
  showPopup = false;

  // Método para alternar la visibilidad del popup
  togglePopup() {
    this.showPopup = !this.showPopup;
  }
}