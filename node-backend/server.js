//Importa dependencias necesarias
const { Client, Environment } = require('square');
const express = require('express');
const cors = require('cors');
const app = express();
const crypto = require('crypto');
app.use(express.json()); // Middleware para parsear el cuerpo de las solicitudes JSON

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-methods', 'GET, PUT, POST, DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-type');
  next()
})

// Configura el cliente de Square con el token de acceso y el entorno de sandbox
const client = new Client({
  accessToken: 'EAAAl8tker929BBMW6o-ispHbvPFh0BE21La25hhXXMwPIOIvBDPGqC18ALhFnU1',
  environment: Environment.Sandbox,
});

// Obtiene la API de pagos del cliente de Square
const paymentsApi = client.paymentsApi;

//Ruta para procesar pagos
app.post('/process-payment', async (req, res) => {
  const { nonce, amount } = req.body; // Extrae el nonce y el monto del cuerpo de la solicitud

  try { //Crea un pago utilizando la API de Square
    const response = await client.paymentsApi.createPayment({
      sourceId: nonce, //ID de la fuente de pago (nonce)
      amountMoney: {
        amount: amount, //Monto del pago en centavos
        currency: 'USD', //Moneda usada
      },
      idempotencyKey: new Date().getTime().toString(), // Clave de idempotencia para evitar pagos duplicados
    });

    res.json({ success: true, payment: response.result.payment });
  } catch (error) {
    console.error('Error al procesar el pago:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

//Inicia el servidor el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});