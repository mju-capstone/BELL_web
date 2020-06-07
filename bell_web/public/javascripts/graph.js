$(document).ready(function(){
    var ctx = document.getElementById("2018_china_seoul_graph").getContext("2d");
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

    var ctx2 = document.getElementById("2019_china_seoul_graph").getContext("2d");
    var chart2 = new Chart(ctx2, {
        type: "line",
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9","10"],
            datasets: [
                {
                    label: "Korea",
                    borderColor: "rgb(255, 99, 132)",
                    data: [4, 2, 26, 41, 12, 12, 7, 14, 75, 32],
                    fill: false
                },
                {
                    label: "China",
                    borderColor: "rgb(255, 99, 100)",
                    data: [10, 5, 30, 67, 13, 18, 12, 22, 100, 40],
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
    
    var ctx3 = document.getElementById("2020_china_seoul_graph").getContext("2d");
    var chart3 = new Chart(ctx3, {
        type: "line",
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9","10"],
            datasets: [
                {
                    label: "Korea",
                    borderColor: "rgb(255, 99, 132)",
                    data: [43, 12, 6, 16 ,72, 32, 14, 31, 9, 22],
                    fill: false
                },
                {
                    label: "China",
                    borderColor: "rgb(255, 99, 100)",
                    data: [50, 30, 10, 18, 75, 38, 30, 35, 13, 28],
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
    
    var ctx4 = document.getElementById("status_graph").getContext("2d");
    var chart4 = new Chart(ctx4, {
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