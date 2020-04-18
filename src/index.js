const { fetchData } = require('./fetch-data')
const { plotData } = require('./plot');

const plotElemId = '#plot_area';

const data = fetchData();
plotData(data, plotElemId, 500, 500);