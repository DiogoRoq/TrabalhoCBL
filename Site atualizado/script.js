

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

// Check if dark mode is already enabled in local storage
if (localStorage.getItem('dark-mode') === 'enabled') {
    enableDarkMode();
}

// Toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    if (body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

// Enable dark mode
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    document.querySelectorAll('.darkable').forEach(element => {
        element.classList.add('dark-mode');
    });
    // Save dark mode preference to local storage
    localStorage.setItem('dark-mode', 'enabled');
}

// Disable dark mode
function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    document.querySelectorAll('.darkable').forEach(element => {
        element.classList.remove('dark-mode');
    });
    // Remove dark mode preference from local storage
    localStorage.setItem('dark-mode', 'disabled');
}
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






