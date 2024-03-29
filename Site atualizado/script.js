
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
AOS.init({
    duration: 3000, // duração da animação em milissegundos
    delay: 6000, // atraso da animação em milissegundos
    once: true, // animar apenas uma vez
  });
  document.querySelectorAll('.imagem-container .social-icons a').forEach(function(element) {
    element.addEventListener('click', function(e) {
        e.preventDefault();
        var socialNetwork = this.getAttribute('data-social');
        var url = window.location.href;
        var shareUrl;
        if (socialNetwork === 'facebook') {
            shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url);
        } else if (socialNetwork === 'twitter') {
            shareUrl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(url);
        } else if (socialNetwork === 'linkedin') {
            shareUrl = 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(url);
        }
         else if (socialNetwork === 'whatsapp') {
            shareUrl = 'https://api.whatsapp.com/send?text=' + encodeURIComponent(url);}
        // Abre o URL em uma nova janela
        window.open(shareUrl, '_blank').focus();
    });
});
// inicio do js para o carrossel
document.addEventListener('DOMContentLoaded', function() {
    const slide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    let counter = 0;
    const size = images[0].clientWidth;
    // Botões
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    nextBtn.addEventListener('click', () => {
      if (counter >= images.length - 3) return; // Ajuste o "3" para o número de imagens visíveis
      slide.style.transition = "transform 0.4s ease-in-out";
      counter++;
      slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });
    prevBtn.addEventListener('click', () => {
      if (counter <= 0) return;
      slide.style.transition = "transform 0.4s ease-in-out";
      counter--;
      slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });
  });
  // final do js carrossel
  //inicio da ordenaçao de tabela
  function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("ordenacao"); 
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("h3")[0]; // Ajuste o índice [0] se necessário
        y = rows[i + 1].getElementsByTagName("h3")[0]; // Ajuste o índice [0] se necessário
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
// final da ordenaçao de tabela  
  // script dos botões no about.html
function toggleText(memberName) {
    var textContainer = document.getElementById(memberName + "TextContainer");

    // Verifica se o texto está visível
    if (textContainer.style.display === "none") {
        // Se estiver oculto, exibe o texto
        textContainer.style.display = "block";
    } else {
        // Se estiver visível, oculta o texto
        textContainer.style.display = "none";
    }
}