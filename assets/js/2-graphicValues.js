export default function graphicValues(canvasBarChart) {
    fetch('./assets/js/data.json')
    .then(response => response.json())
    .then(data => {
        const days = data.map(item => item.day);
        const amounts = data.map(item => item.amount);

        canvasBarChart.data.labels = days;
        canvasBarChart.data.datasets[0].data = amounts;

        canvasBarChart.update();
    })
    .catch(error => console.error(error));
}