const { fetchData } = require('./fetch-data')
const { plotData } = require('./plot');

const plotElemId = '#plotting_area';
const plotElemWidth = 500;
const plotElemHeight = 500;

const data = fetchData();
plotData(data, plotElemId, plotElemWidth, plotElemHeight);