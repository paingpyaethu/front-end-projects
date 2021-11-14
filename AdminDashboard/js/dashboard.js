$('.counter-up').counterUp({
    delay: 10,
    time: 1000
});

let dateArr = ['july 21', 'july 20', 'july 19', 'july 18', 'july 17', 'july 16', 'july 15', 'july 14', 'july 13', 'july 12', 'july 11',];
let orderCounter = [7, 5, 6, 4, 6, 4, 8, 6, 8, 9, 6];
let viewerCounter = [13, 12, 15, 10, 12, 18, 33, 26, 21, 30, 15];

var ctx = document.getElementById('order-viewer').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dateArr,
        datasets: [{
            label: 'Order',
            data: orderCounter,
            backgroundColor: [
                '#007bff30',
            ],
            borderColor: [
                '#007bff',
            ],
            borderWidth: 1,
            tension: 0
        },
            {
                label: 'Viewer',
                data: viewerCounter,
                backgroundColor: [
                    '#28a74530',
                ],
                borderColor: [
                    '#28a745',
                ],
                borderWidth: 1,
                tension: 0
            }]

    },
    options: {
        scales: {
            yAxes: [{
                display: false,
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [
                {
                    display: false
                }
            ]
        },
        legend: {
            display: true,
            position: 'top',
            labels: {
                fontColor: '#333',
                usePointStyle:true
            }
        }
    }

});

let orderFromPlace = [5, 15, 4, 9, 7];
let places = ['YGN', 'MDY', 'NPY', 'SHAN', 'MGW'];

var orderPlace = document.getElementById('orderChart').getContext('2d');
var orderChart = new Chart(orderPlace, {
    type: 'doughnut',
    data: {
        labels: places,
        datasets: [{
            label: '# of Votes',
            data: orderFromPlace,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                display: false,
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [
                {
                    display: false
                }
            ]
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                fontColor: '#333',
                usePointStyle:true
            }
        }
    }

});