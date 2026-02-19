const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/contato', (req, res) => {
  const { nome, email, mensagem } = req.body;

  if (!nome || !email || !mensagem) {
    return res
      .status(400)
      .json({ ok: false, message: 'Preencha todos os campos' });
  }

  console.log('Nome:', nome);
  console.log('Email:', email);
  console.log('Mensagem:', mensagem);

  return res.json({ ok: true, message: 'Mensagem enviada com sucesso!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
