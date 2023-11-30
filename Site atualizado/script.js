
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

