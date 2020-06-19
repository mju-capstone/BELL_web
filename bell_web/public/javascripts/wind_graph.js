$(document).ready(function(){
    var ctx = document.getElementById("2018_wind_graph").getContext("2d");
    var chart = new Chart(ctx, {
        type: "radar",
        data: {
            labels: ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S","SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"],
            datasets: [
                {
                    label: "PM10",
                    borderColor: "rgb(0, 102, 102)",
                    data: [33.68, 39.52, 33.99, 25.97, 23.47, 26.16, 26.55, 34.02, 45.39, 42.76, 43.99, 42.20, 39.80, 38.29, 37.89, 35.66],
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

    var ctx2 = document.getElementById("2019_wind_graph").getContext("2d");
    var chart2 = new Chart(ctx2, {
        type: "radar",
        data: {
            labels: ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S","SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"],
            datasets: [
                {
                    label: "PM10",
                    borderColor: "rgb(0, 102, 102)",
                    data: [36.01, 44.34, 39.71, 35.57, 33.38, 33.92, 39.56, 42.61, 40.75, 42.65, 42.74, 44.68, 46.77, 48.98, 41.52, 37.73],
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

    var ctx3 = document.getElementById("2020_wind_graph").getContext("2d");
    var chart3 = new Chart(ctx3, {
        type: "radar",
        data: {
            labels: ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S","SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"],
            datasets: [
                {
                    label: "PM10",
                    borderColor: "rgb(0, 102, 102)",
                    data: [50.75, 49.41, 45.71, 36.16, 42.20, 43.93, 43.44, 45.88, 54.46, 50.59, 48.81, 48.35, 54.94, 52.40, 49.18, 41.78],
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