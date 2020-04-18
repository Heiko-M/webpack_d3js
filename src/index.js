const { fetchData } = require('./fetch-data')
const { scatterPlot } = require('./plot');

const plotElemId = '#plot_area';

const data = fetchData();
scatterPlot(data, plotElemId);