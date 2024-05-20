document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/usuarios')
      .then(response => response.json())
      .then(data => {
        const listaUsuarios = document.getElementById('usuarios');
        data.forEach(usuario => {
          const li = document.createElement('li');
          li.textContent = `ID: ${usuario.idPerson}, Usuario: ${usuario.username}, Tipo de Pago: ${usuario.pay_type}`;
          listaUsuarios.appendChild(li);
        });
      })
    .catch(error => console.error('Error:', error));
  });


  