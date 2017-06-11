(function(app) {

	app.DetailsComponent = ng.core.Component({
		templateUrl: '/app/dashboard/details/details.component.html'
	}).Class({
		constructor: function() {

		},
		ngOnInit: function() {
			var myChart = echarts.init(document.getElementById('main3'));
			option = {
				calculable: true,
				series: [{
					name: '访问来源',
					type: 'pie',
					radius: '55%',
					data: [{
							value: 24,
							name: '2011年'
						},
						{
							value: 24,
							name: '2012年'
						},
						{
							value: 22,
							name: '2013年'
						},
						{
							value: 22,
							name: '2014年'
						},
						{
							value: 25,
							name: '2015年'
						}
					]
				}]
			};
			myChart.setOption(option); // 使用刚指定的配置项和数据显示图表 。
		}
	});

})(window.app || (window.app = {}));