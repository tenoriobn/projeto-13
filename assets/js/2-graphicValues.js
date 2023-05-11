export default function graphicValues(canvasBarChart) {
    fetch('./assets/js/data.json')
    .then(response => response.json())
    .then(data => {
        /*Mapenado dias e valores e implementando nas barras */
        const days = data.map(item => item.day);
        const amounts = data.map(item => item.amount);
        canvasBarChart.data.labels = days;
        canvasBarChart.data.datasets[0].data = amounts;
        
        /* Pegando dia da semana */
        const nameOfDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
        const date = new Date();
        const weekday = nameOfDays[date.getDay()];
        
        /*Aplicando cor diferente na barra do dia atual */
        const backgroundColors = days.map(day => day === weekday ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)');
        const hoverBackgroundColor = days.map(day => day === weekday ? 'hsl(187, 49%, 80%)' : 'hsl(10, 100%, 76%)');
        canvasBarChart.data.datasets[0].backgroundColor = backgroundColors;
        canvasBarChart.data.datasets[0].hoverBackgroundColor = hoverBackgroundColor;
        
        /* Modificando o tamanho da fonte da caixa de dica de acordo com tamanho da tela */
        const screenWidth = window.innerWidth;
        const currentSize = screenWidth < 375 ? 10 : (screenWidth < 425 ? 12 : screenWidth < 768 ? 14 : 16);
        canvasBarChart.options.plugins.tooltip.bodyFont.size = currentSize;

        /* Modificando a altura máxima do gráfico de acordo com o tamanho da tela */
        const axisMaximum = screenWidth < 375 ? 90 : (screenWidth < 425 ? 80 : screenWidth < 768 ? 75 : 70);
        canvasBarChart.options.scales.y.max = axisMaximum;

        canvasBarChart.update();
    })
    .catch(error => console.error(error));
}

