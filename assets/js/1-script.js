/*
    Implementações:
        - Veja o layout ideal para o conteúdo, dependendo do tamanho da tela do dispositivo
        - Veja os estados de foco para todos os elementos interativos na página
        - Veja a barra do dia atual destacada em uma cor diferente das outras barras
        - Visualize o gráfico de barras e passe o mouse sobre as barras individuais para ver os valores corretos para cada dia
        - **Bônus**: Use o arquivo de dados JSON fornecido para dimensionar dinamicamente as barras no gráfico
*/

const graphicBar = document.getElementById('graphic__bar');

const canvasBarChart = new Chart(graphicBar, {
    type: 'bar',
    data: {
        labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
        datasets: [{
            data: [12, 19, 3, 5, 2, 3, 3],
            borderRadius: 3,
            backgroundColor: 'hsl(10, 79%, 65%)',
            hoverBackgroundColor: 'hsl(186, 34%, 60%)',
        }]
    },

    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                }
            },
            y: {
                display: false
            }
        },
    },
});