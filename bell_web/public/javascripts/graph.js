$(document).ready(function(){
    var ctx = document.getElementById("2018_china_seoul_graph").getContext("2d");
    var chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9","10", "11", "12"],
            datasets: [
                {
                    label: "Korea",
                    borderColor: "rgb(255, 99, 132)",
                    data: [52.2258064516129, 55.3214285714286, 51.1666666666667, 52.6551724137931, 45.0322580645161, 40.5, 27.8387096774194, 24.4838709677419, 22.5333333333333, 31.5806451612903, 48.1538461538462, 44.4],
                    fill: false
                },
                {
                    label: "China",
                    borderColor: "rgb(255, 99, 100)",
                    data: [86.8440860215054, 87.2519841269841, 88.1277777777778, 91.7452107279694, 77.9802867383513, 67.2666666666667, 61.0089605734767, 58.7150537634409, 69.7166666666667, 85.0197132616487, 95.0064102564103, 97.4555555555555],
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
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9","10", "11", "12"],
            datasets: [
                {
                    label: "Korea",
                    borderColor: "rgb(255, 99, 132)",
                    data: [56.9285714285714, 57.8214285714286, 54.2857142857143, 43.7241379310345, 54.1290322580645, 30.1333333333333, 26.0967741935484, 24.1290322580645, 22.0666666666667, 32.9666666666667, 37.2666666666667, 43.9666666666667],
                    fill: false
                },
                {
                    label: "China",
                    borderColor: "rgb(255, 99, 100)",
                    data: [104.880952380952, 98.7400793650794, 82.9246031746032, 77.2854406130268, 76.8709677419355, 61.1574074074074, 55.5448028673835, 45.6111111111111, 62.9833333333333, 80.287037037037, 84.1833333333333, 87.462962962963],
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
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9","10", "11", "12"],
            datasets: [
                {
                    label: "Korea",
                    borderColor: "rgb(255, 99, 132)",
                    data: [44.4193548387097, 41.9655172413793, 47.5806451612903, 46.75, null, null, null, null, null, null, null, null],
                    fill: false
                },
                {
                    label: "China",
                    borderColor: "rgb(255, 99, 100)",
                    data: [95.084229390681, 56.9616858237548, 71.3978494623656, 72.3710317460317, null, null, null, null, null, null, null, null],
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

    // getStockData() {
    //     this.stocksService.getStockData()
    //       .subscribe(
    //         (list) => {
    //           for(var i = 0; i < list.length; i++) {
    //             this.stockOpen.push(list[i]['open']);
    //           }
    //           console.log('after loop: ', this.stockOpen);
    //         },
    //         (error) => console.error(error)
    //       );
    //       console.log('real: ', this.stockOpen);
    //       console.log('test: ', this.testData);
    //   }
    var ctx4 = document.getElementById("status_graph").getContext("2d");
    var chart4 = new Chart(ctx4, {
        type: "line",
        data: {
            labels: data,
            datasets: [
                {
                    label: "Aqi10",
                    borderColor: "rgb(255, 99, 132)",
                    data: pm10,
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