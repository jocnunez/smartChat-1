var HOURS = ['07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30'];
var COLORS = {
    red: 'rgb(255, 99, 132)',
    red_med: 'rgb(255, 99, 132, 0.2)',
    orange: 'rgb(255, 159, 64)',
    orange_med: 'rgb(255, 159, 64, 0.2)',
    yellow: 'rgb(255, 205, 86)',
    yellow_med: 'rgb(255, 205, 86, 0.2)',
    green: 'rgb(75, 192, 192)',
    green_med: 'rgb(75, 192, 192, 0.2)',
    blue: 'rgb(54, 162, 235)',
    blue_med: 'rgb(54, 162, 235, 0.2)',
    purple: 'rgb(153, 102, 255)',
    purple_med: 'rgb(153, 102, 255, 0.2)',
    grey: 'rgb(222, 222, 222)',
    grey_med: 'rgb(222, 222, 222, 0.8)',
    white: 'rgb(255, 255, 255, 0)'
};

var ZERO = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var dataRoll;
var initData;
var config = {
	type: 'line',
	data: {
		labels: HOURS,
		datasets: [{
			label: '',
			borderColor: COLORS.white,
			backgroundColor: COLORS.white,
			data: [].concat(ZERO)
		},
		{
			label: '',
			borderColor: COLORS.white,
			backgroundColor: COLORS.white,
			data: [].concat(ZERO)
		},
		{
			label: '',
			borderColor: COLORS.white,
			backgroundColor: COLORS.white,
			data: [].concat(ZERO)
		},
		{
			label: 'Actual',
			yAxisID: 'current',
			borderColor: COLORS.yellow,
			backgroundColor: COLORS.yellow,
			data: [].concat(ZERO)
		},
		{
			label: 'Agentes',
			yAxisID: 'current',
			steppedLine: 'middle',
			borderColor: COLORS.blue,
			backgroundColor: COLORS.white,
			data: [].concat(ZERO),
		}]
	},
	options: {
		responsive: true,
		title: {
			display: true,
			text: 'Standar Labor day'
		},
		tooltips: {
            enabled: false,
			mode: 'index',
			intersect: true
		},
		hover: {
			mode: 'index'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Hours'
				}
			}],
			yAxes: [{
				stacked: true,
				ticks: {
					suggestedMin: 550,
					suggestedMax: 550
				},
				scaleLabel: {
					display: true,
					labelString: 'Calls / Chats'
				}
			},
			{
				stacked: false,
				ticks: {
					suggestedMin: 550,
					suggestedMax: 550
				},
				id: 'current',
				display: false
			}]
		}
	}
};