const { fetchData } = require('./fetch-data');
const { scatterPlot, lineChart, heatMap } = require('./plot');

heatMap('#heat_map', require('../data/gene_expression.json'));

lineChart('#line_chart', require('../data/net_income_euro_single_without_children_100%_of_AW.json'));

scatterPlot('#scatter_plot', fetchData());