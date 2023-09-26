const ctx = document.getElementById('chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Sample Data',
            data: [12, 19, 3, 5, 2],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
        label: 'Line Chart Data',
        data: [12, 19, 3, 5, 2],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: false
    }]
};

const pieChartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [{
        data: [12, 19, 3, 5, 2],
        backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple'],
    }]
};

// Load the Google Charts library
google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback function to execute when the library is loaded
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
    // Sample data for charts
    const barChartData = google.visualization.arrayToDataTable([
        ['Category', 'Value'],
        ['Category 1', 10],
        ['Category 2', 20],
        ['Category 3', 30],
    ]);

    const lineChartData = google.visualization.arrayToDataTable([
        ['Month', 'Value'],
        ['Jan', 10],
        ['Feb', 20],
        ['Mar', 30],
    ]);

    const pieChartData = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Task 1', 5],
        ['Task 2', 10],
        ['Task 3', 15],
    ]);

    // Create and draw the charts
    const barChart = new google.visualization.BarChart(document.getElementById('bar-chart'));
    barChart.draw(barChartData, options);

    const lineChart = new google.visualization.LineChart(document.getElementById('line-chart'));
    lineChart.draw(lineChartData, options);

    const pieChart = new google.visualization.PieChart(document.getElementById('pie-chart'));
    pieChart.draw(pieChartData, options);
}

// Optional chart configuration options
const options = {
    title: 'Chart Title',
    // Add more options as needed
};

const barChartCtx = document.getElementById('bar-chart').getContext('2d');
const lineChartCtx = document.getElementById('line-chart').getContext('2d');
const pieChartCtx = document.getElementById('pie-chart').getContext('2d');

const barChart = new Chart(barChartCtx, {
    type: 'bar',
    data: barChartData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const lineChart = new Chart(lineChartCtx, {
    type: 'line',
    data: lineChartData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const pieChart = new Chart(pieChartCtx, {
    type: 'pie',
    data: pieChartData,
});

document.addEventListener('DOMContentLoaded', function () {
    const chatMessages = document.getElementById('chat-messages');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', function () {
        const message = messageInput.value.trim();
        if (message !== '') {
            appendMessage('You', message);
            messageInput.value = '';
        }
    });

    function appendMessage(sender, text) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const stockForm = document.getElementById('stock-form');
    const stockSymbolInput = document.getElementById('stock-symbol');
    const predictionResult = document.getElementById('prediction-result');

    stockForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const stockSymbol = stockSymbolInput.value.trim();

        if (stockSymbol !== '') {
            // Simulate a stock prediction (replace with your prediction logic)
            const predictedPrice = simulateStockPrediction();
            predictionResult.textContent = `Predicted price for ${stockSymbol}: $${predictedPrice.toFixed(2)}`;
        }
    });

    // Simulate a stock price prediction (replace with actual prediction logic)
    function simulateStockPrediction() {
        // Generate a random predicted price between 50 and 200
        return Math.random() * (200 - 50) + 50;
    }
});
