import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private backendUrl = 'http://localhost:3000/process-payment'; // URL del backend

  constructor(private http: HttpClient) { }

  processPayment(nonce: string, amount: number) {
    return this.http.post(this.backendUrl, { nonce, amount });
  }
}