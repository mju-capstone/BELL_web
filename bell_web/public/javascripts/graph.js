$(document).ready(function(){
    var ctx = document.getElementById("china_seoul_graph").getContext("2d");
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: "line",
        // The data for our dataset
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets: [
                {
                    label: "Korea",
                    borderColor: "rgb(255, 99, 132)",
                    data: [0, 10, 5, 2, 20, 30, 45, 0, 10, 5, 2, 20, 30],
                    fill: false
                },
                {
                    label: "China",
                    borderColor: "rgb(255, 99, 100)",
                    data: [10, 20, 15, 12, 50, 40, 35, 20, 15, 12, 50, 40, 35],
                    fill: false
                }
            ]
        },
        // Configuration options go here
        options: {
            responsive:false,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    stacked: true
                }]
            },
        }
    }); 
    
    var ctx2 = document.getElementById("status_graph").getContext("2d");
    var chart2 = new Chart(ctx2, {
        // The type of chart we want to create
        type: "line",
        // The data for our dataset
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets: [
                {
                    label: "Aqi10",
                    borderColor: "rgb(255, 99, 132)",
                    data: [0, 10, 5, 2, 20, 30, 45, 0, 10, 5, 2, 20, 30],
                    fill: false
                }
            ]
        },
        // Configuration options go here
        options: {
            responsive:false,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    stacked: true
                }]
            },
        }
    }); 
});