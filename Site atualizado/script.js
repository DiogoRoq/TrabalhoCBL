
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

// Espera por todo o conteúdo da página ser carregado
document.addEventListener("DOMContentLoaded", () => {
    // Aplica a animação de entrada
    document.body.classList.add("fade-in");
  
    // Intercepta todos os cliques em links
    document.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault(); // Previne o comportamento padrão do link
        const href = link.getAttribute("href");
  
        // Aplica a animação de saída
        document.body.classList.add("fade-out");
  
        // Aguarda o fim da animação
        setTimeout(() => {
          window.location.href = href; // Redireciona para o link clicado
        }, 500); // O tempo aqui deve corresponder à duração da animação fade-out
      });
    });
  });

  document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o recarregamento da página
    const searchTerm = document.getElementById('searchBox').value.toLowerCase();

    // Percorre todos os títulos
    document.querySelectorAll('#featured-news table tr td:first-child').forEach(title => {
        const titleText = title.textContent.toLowerCase();
        if (titleText.indexOf(searchTerm) > -1) {
            title.parentElement.style.display = 'table-row';
        } else {
            title.parentElement.style.display = 'none';
        }
    });
});
