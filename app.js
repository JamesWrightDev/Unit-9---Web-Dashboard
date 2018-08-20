var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26","27-3","4-10","11-17",
        "18-24","25-31"],
        datasets: [{
            lineTension:0,
            label: 'Traffic',
            data: [750, 1250, 900, 1400, 1600, 1300, 1350, 800, 900, 1700, 1300, 1500 ],
            backgroundColor: [
                'rgb(77, 76, 114,0.5)',
        
            ],
            borderColor: [
                'rgb(77, 76, 114,1)',
            ],
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

