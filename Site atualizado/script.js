
document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Link clicado: ' + this.textContent);
    });
}); // caixa de dialogo com o texto do link clicado na parte de cima do site


document.querySelectorAll('#featured-news table tr').forEach(row => {
    row.addEventListener('mouseover', () => {
        row.style.backgroundColor = '#ccc';
    });
    row.addEventListener('mouseout', () => {
        row.style.backgroundColor = ' #fff';
    });
}); // efeitos hover quando passamos o mouse por cima da tabela 


document.querySelectorAll('#featured-news table a').forEach(link => {
    link.setAttribute('target', '_blank');
}); // nova aba quando clica no link 


document.addEventListener("DOMContentLoaded", () => { // função para carregar a pagina
    
    document.body.classList.add("fade-in"); // animação de entrada
  
    
    document.querySelectorAll("a").forEach(link => { // intercepta todos os cliques
      link.addEventListener("click", e => {
        e.preventDefault(); 
        const href = link.getAttribute("href");
  
        
        document.body.classList.add("fade-out"); // animação de saída
  
        
        setTimeout(() => { // espera a animação de saída terminar
          window.location.href = href; 
        }, 500); // tempo
      });
    });
  });

  document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault(); // nao deixa recarregar a pagina
    const searchTerm = document.getElementById('searchBox').value.toLowerCase();

    
    document.querySelectorAll('#featured-news table tr td:first-child, .news-content h3').forEach(title => {
        const titleText = title.textContent.toLowerCase();
        const newsItemRow = title.closest('tr'); // pega a linha toda da noticia

        if (titleText.includes(searchTerm)) {
            newsItemRow.style.display = ''; // mostra a linha
        } else {
            newsItemRow.style.display = 'none'; // esconde
        }
    });
});



document.getElementById('loginButton').addEventListener('click', function() {
    window.location.href = 'login.html'; // Redireciona para a página de login
});



document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o recarregamento da página

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Credenciais pré-definidas
    var correctUsername = 'admin'; // Substitua por seu usuário
    var correctPassword = 'admin'; // Substitua por sua senha

    if (username === correctUsername && password === correctPassword) {
        alert('Login realizado com sucesso!');
        // Redirecione para a página desejada após o login
        window.location.href = 'index.html';
    } else {
        alert('Nome de usuário ou senha incorretos.');
    }
});

