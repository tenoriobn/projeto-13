import graphicValues from "./2-graphicValues.js";

const graphicBar = document.getElementById('graphic__bar');

const canvasBarChart = new Chart(graphicBar, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            data: [],
            borderRadius: 5,
            borderSkipped: false,
            backgroundColor: [],
            hoverBackgroundColor: [],
        }]
    },

    options: {
        plugins: {
            
            legend: {
                display: false,
            },
            tooltip: {
                backgroundColor: '#382413',
                xAlign:'center',
                yAlign:'bottom',
                displayColors: false,
                padding: 10,
                caretSize: 0,
                caretPadding: 10,
                intersect: false,

                bodyFont: {
                    align: 'center',
                    family: "'DM Sans', sans-serif",
                    size: 16,
                    weight: 'bold',
                },

                callbacks: {
                    title: function() {
                        return '';
                    },
                    label: function(context) {
                        let label = context.dataset.label || '';

                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                        }
                        return label;
                    }
                }
            }
        },
        legend: {
            display: false
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                border: {
                    display: false,
                },
            },
            y: {
                display: false,
                max: 70,
            },
        },
        
    }
}); 

graphicValues(canvasBarChart);

window.addEventListener('resize', () => {
    graphicValues(canvasBarChart);
});

/*
    Implementações:
        - Veja o layout ideal para o conteúdo, dependendo do tamanho da tela do dispositivo**
        - Visualize o gráfico de barras e passe o mouse sobre as barras individuais para ver os valores corretos para cada dia**
        - Use o arquivo de dados JSON fornecido para dimensionar dinamicamente as barras no gráfico**
        - Veja os estados de foco para todos os elementos interativos na página**
        - Veja a barra do dia atual destacada em uma cor diferente das outras barras**
        
        - Arrumar tamanho da barra de gráfico em relação a caixa de dicas*
*/
