
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

function toggleText() {
    var textContainer = document.getElementById("textContainer");

    // Verifica se o texto está visível
    if (textContainer.style.display === "none") {
        // Se estiver oculto, exibe o texto
        textContainer.style.display = "block";
    } else {
        // Se estiver visível, oculta o texto
        textContainer.style.display = "none";
    }
}