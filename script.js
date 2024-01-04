// // Dados para o gráfico de barras
// const dadosBarra = {
//     labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
//     datasets: [{
//         label: 'Número de Visitantes',
//         backgroundColor: 'rgb(255, 99, 132)',
//         borderColor: 'rgb(255, 99, 132)',
//         data: [50, 60, 70, 180, 190, 200],
//     }]
// };

// // Configuração e criação do gráfico de barras
// const graficoBarra = new Chart(
//     document.getElementById('meuGraficoBarra'),
//     {
//         type: 'bar',
//         data: dadosBarra
//     }
// );

// // Dados para o gráfico de linha
// const dadosLinha = {
//     labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
//     datasets: [{
//         label: 'Vendas',
//         backgroundColor: 'rgb(54, 162, 235)',
//         borderColor: 'rgb(54, 162, 235)',
//         data: [80, 90, 100, 200, 210, 220],
//         fill: false,
//     }]
// };

// // Configuração e criação do gráfico de linha
// const graficoLinha = new Chart(
//     document.getElementById('meuGraficoLinha'),
//     {
//         type: 'line',
//         data: dadosLinha
//     }
// );

// // Dados para o gráfico de pizza
// const dadosPizza = {
//     labels: ["Produto A", "Produto B", "Produto C"],
//     datasets: [{
//         label: 'Distribuição de Vendas',
//         backgroundColor: ['rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(255, 99, 132)'],
//         data: [300, 50, 100],
//     }]
// };

// // Configuração e criação do gráfico de pizza
// const graficoPizza = new Chart(
//     document.getElementById('meuGraficoPizza'),
//     {
//         type: 'pie',
//         data: dadosPizza
//     }
// );

// // Dados para o gráfico de radar
// const dadosRadar = {
//     labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
//     datasets: [{
//         label: 'My First Dataset',
//         backgroundColor: 'rgba(255, 99, 132, 0.2)',
//         borderColor: 'rgba(255, 99, 132, 1)',
//         data: [65, 59, 90, 81, 56, 55, 40],
//     }]
// };

// // Configuração e criação do gráfico de radar
// const graficoRadar = new Chart(
//     document.getElementById('meuGraficoRadar'),
//     {
//         type: 'radar',
//         data: dadosRadar
//     }
// );

// const dadosBarra2 = {
//     labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
//     datasets: [{
//         label: 'Número de Visitantes',
//         backgroundColor: 'rgb(255, 99, 132)',
//         borderColor: 'rgb(255, 99, 132)',
//         data: [30, 20, 80, 150, 120, 100],
//     }]
// };

// const graficoBarra2 = new Chart(
//     document.getElementById('meuGraficoBarra2'),
//     {
//         type: 'bar',
//         data: dadosBarra2
//     }
// );


document.getElementById('fileInput').addEventListener('change', function(event) {
    let file = event.target.files[0];
    let reader = new FileReader();

    reader.onload = function(e) {
        let dados = JSON.parse(e.target.result);
        let anos = dados.map(item => item.Anos);
        let valores = dados.map(item => parseFloat(item.valor.replace(',', '.')));

        const data = {
            labels: anos,
            datasets: [{
                label: 'Taxa de Natalidade',
                data: valores,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        };

        // Cria o gráfico aqui, dentro do onload
        const graficoLinha = new Chart(
            document.getElementById('meuGraficoLinha'),
            {
                type: 'line',
                data: data, // Use 'dados' que é a variável que contém os dados JSON
                options: {
                    // Adicione as opções do gráfico aqui, se necessário
                }
            }
        );
    };

    reader.onerror = function(error) {
        console.error('Erro ao ler o arquivo:', error);
    };

    reader.readAsText(file);
});