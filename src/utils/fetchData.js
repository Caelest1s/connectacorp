// Função para enviar os dados do usuário via POST
async function enviarDadosUsuario(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const dataNascimento = document.getElementById('dataNascimento').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const pais = document.getElementById('pais').value;
  const estado = document.getElementById('estado').value;
  const cidade = document.getElementById('cidade').value;
  const rua = document.getElementById('rua').value;
  const cep = document.getElementById('cep').value;
  const cobrancaPais = document.getElementById('cobrancaPais').value;
  const cobrancaEstado = document.getElementById('cobrancaEstado').value;
  const cobrancaCidade = document.getElementById('cobrancaCidade').value;
  const cobrancaRua = document.getElementById('cobrancaRua').value;
  const cobrancaCep = document.getElementById('cobrancaCep').value;
  const cargo = document.getElementById('cargo').value;
  const enterprise = document.getElementById('enterprise').value;
  const ramo = document.getElementById('ramo').value;
  const salario = document.getElementById('salario').value;

  const userData = {
    nome,
    dataNascimento,
    email,
    telefone,
    pais,
    estado,
    cidade,
    rua,
    cep,
    cobrancaCep,
    cobrancaEstado,
    cobrancaCidade,
    cobrancaRua,
    cobrancaCep,
    cargo,
    enterprise,
    ramo,
    salario
  };


  try {
    const response = await fetch('https://api.exemplo.com/usuarios', {
      method: 'POST',  // Método da requisição: POST
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    // Verificando se a resposta foi bem-sucedida
    if (response.ok) {
      const result = await response.json();  // Pegando a resposta em formato JSON
      console.log('Usuário cadastrado com sucesso:', result);
      alert('Cadastro realizado com sucesso!');
    } else {
      console.error('Erro ao cadastrar usuário:', response.status, response.statusText);
      alert('Erro ao cadastrar o usuário');
    }
  } catch (error) {
    console.error('Erro na requisição:', error);
    alert('Erro na comunicação com o servidor');
  }
}