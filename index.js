//console.log('APICalc!');
import express from 'express';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello, World!');
});


// 1 efetue a soma de dois números
app.get('/somar', (req, res) => {
  const num1 = Number(req.query.num1);
  const num2 = Number(req.query.num2);
  const soma = num1 + num2;
  res.send(`A soma de ${num1} e ${num2} é ${soma}`);
});


// 2 subtraia dois números
app.post('/subtrair', (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  const subtracao = num1 - num2;
  res.send(`A subtração de ${num1} e ${num2} é ${subtracao}`);
});



// 3 multiplique dois números
app.post('/multiplicar', (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  const multiplicacao = num1 * num2;
  res.send(`A multiplicação de ${num1} e ${num2} é ${multiplicacao}`);
});

//4 divida dois números
app.post('/divisao', (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  const divisao = num1 / num2;
  res.send(`A divisão de ${num1} e ${num2} é ${divisao}`);
});

//realize uma potenciação de dois números
app.post('/potencia', (req, res) => {
  const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const potencia = num1 ** num2;
    res.send(`A potenciação de ${num1} elevado a ${num2} é ${potencia}`);
  });

  //raiz quadrada de 144
  app.post('/raiz', (req, res) => {
    const num = Number(req.body.num);
    const raiz = num ** 0.5;
    res.send(`A raiz quadrada de ${num} é ${raiz}`);
  };