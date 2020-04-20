const { fetchData } = require('./fetch-data');
const { scatterPlot, lineChart } = require('./plot');

lineChart('#line_chart', require('../data/net_income_euro_single_without_children_100%_of_AW.json'));

scatterPlot('#scatter_plot', fetchData());