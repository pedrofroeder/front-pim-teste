document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtendo os valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const cargo = document.getElementById('cargo').value;
    const senha = document.getElementById('senha').value;

    // Criando um objeto para armazenar os dados
    const employeeData = {
        name: name,
        email: email,
        cpf: cpf,
        cargo: cargo,
        senha: senha
    };

    // Salvando os dados no Local Storage (apenas como exemplo)
    localStorage.setItem('employee', JSON.stringify(employeeData));

    // Exibindo mensagem de sucesso
    alert('Cadastro de funcionário finalizado com sucesso!');

    // Redirecionando para a tela principal do sistema
    window.location.href = 'fornecedores.html'; 
});
