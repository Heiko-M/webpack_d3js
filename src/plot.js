const d3 = require('d3');

const plotCircle = (svg, x, y, radius = 8, color = 'cyan') => {
  svg.append('circle')
    .attr('cx', x)
    .attr('cy', y)
    .attr('r', radius)
    .style('fill', color);
}

export const plotData = (data, htmlElemId, htmlElemWidth, htmlElemHeight) => {
  var svg = d3.select(htmlElemId);

  var xScale = d3.scaleLinear()
    .domain([0, 30])
    .range([0, htmlElemWidth]);

  var yScale = d3.scaleLinear()
    .domain([1000, 0])  // inverse as y axis goes downward
    .range([0, htmlElemHeight]);

  for (let i = 0; i < data.x.length; i++) {
    plotCircle(svg, xScale(data.x[i]), yScale(data.y[i]));
  }
}