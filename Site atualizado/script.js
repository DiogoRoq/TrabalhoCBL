// Exemplo de função para manipular cliques no menu
document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Link clicado: ' + this.textContent);
    });
});

// Efeito de hover para linhas da tabela
document.querySelectorAll('#featured-news table tr').forEach(row => {
    row.addEventListener('mouseover', () => {
        row.style.backgroundColor = '#ccc';
    });
    row.addEventListener('mouseout', () => {
        row.style.backgroundColor = ' #fff';
    });
});

// Abrir links em nova aba
document.querySelectorAll('#featured-news table a').forEach(link => {
    link.setAttribute('target', '_blank');
});

