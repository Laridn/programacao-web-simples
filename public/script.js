function mudarTexto() {
  document.getElementById('mensagem').innerHTML =
    'Olá pessoal!<br>Viram que legal?<br>O texto mudou';
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formContato');

  form.addEventListener('submit', async event => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagemInput').value;

    try {
      const response = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, mensagem }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || 'Erro ao enviar.');
        return;
      }

      alert(data.message);
      form.reset();
    } catch (err) {
      alert('Falha de conexão com o servidor.');
      console.error(err);
    }
  });
});
