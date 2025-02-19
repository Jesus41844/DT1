// Importaciones necesarias para el componente
import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import * as Square from '@square/web-sdk';

// Decorador @Component que define el componente PaymentComponent
@Component({
  selector: 'PaymentComponent', //Selector del componente
  templateUrl: './payment-form.component.html', //Ruta al HTML del componente
  styleUrl: './payment-form.component.css', //Ruta a los estilos del componente
})

export class PaymentComponent implements OnInit{
  constructor(private paymentService: PaymentService) {}
  async ngOnInit() {
    try {
      const square = await Square.load();
      console.log('Square SDK cargado:', square);
      
      // Configura el formulario de pago
      const paymentForm = square.paymentForm({
      applicationId: 'sandbox-sq0idb-dYndKND591Z6jhejKXTqwQ',
      locationId: 'L1QS66BTSVSA9',
      inputClass: 'sq-input',
      callbacks: {
        cardNonceResponseReceived: (errors, nonce) => {
          if (errors) {
            console.error('Error al generar el nonce:', errors);
            return;
          }

          // Envía el nonce al backend para procesar el pago
          this.paymentService.processPayment(nonce, 1000) // $10.00 = 1000 centavos
            .subscribe(
              (response) => console.log('Pago exitoso:', response),
              (error) => console.error('Error al procesar el pago:', error)
            );
        }
      }
    });

    paymentForm.build();
  } catch (error) {
    console.error('Error al cargar el SDK de Square:', error);
  }
}
}