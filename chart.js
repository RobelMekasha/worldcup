Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Column chart with negative values'
    },
    xAxis: {
        categories: ['Ethiopia', 'Portugal', 'South Korea', 'England', 'Italy']
    },
    credits: {
        enabled: false
    },
    series: [{
        name: '',
        data: [5, 3, 4, 7, 2]
    }, {
        name: '',
        data: [2, -2, -3, 2, 1]
    }, {
        name: '',
        data: [3, 4, 4, -2, 5]
    }]
});