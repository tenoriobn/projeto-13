export default function graphicValues(canvasBarChart) {
    fetch('./assets/js/data.json')
    .then(response => response.json())
    .then(data => {
        const days = data.map(item => item.day);
        const amounts = data.map(item => item.amount);

        /* Pegando dia da semana */
        const nameOfDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
        const date = new Date();
        const weekday = nameOfDays[date.getDay()];

        /*Aplicando cor diferente na barra do dia atual */
        const backgroundColors = days.map(day => day === weekday ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)');
        const hoverBackgroundColor = days.map(day => day === weekday ? 'hsl(187, 49%, 80%)' : 'hsl(10, 100%, 76%)');

        canvasBarChart.data.labels = days;
        canvasBarChart.data.datasets[0].data = amounts;
        canvasBarChart.data.datasets[0].backgroundColor = backgroundColors;
        canvasBarChart.data.datasets[0].hoverBackgroundColor = hoverBackgroundColor;

        canvasBarChart.update();
    })
    .catch(error => console.error(error));
}