$(document).ready(function(){
    var ctx = document.getElementById("china_seoul_graph").getContext("2d");
    var chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9","10"],
            datasets: [
                {
                    label: "Korea",
                    borderColor: "rgb(255, 99, 132)",
                    data: [10, 5, 2, 20, 30, 45, 0, 10, 5, 2],
                    fill: false
                },
                {
                    label: "China",
                    borderColor: "rgb(255, 99, 100)",
                    data: [10, 20, 15, 12, 50, 40, 35, 20, 15, 12],
                    fill: false
                }
            ]
        },
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
        type: "line",
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9","10"],
            datasets: [
                {
                    label: "Aqi10",
                    borderColor: "rgb(255, 99, 132)",
                    data: [2, 20, 30, 45, 0, 10, 5, 2, 20, 30],
                    fill: false
                }
            ]
        },
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