const d3 = require('d3');

const plotMargin = 25;

const plotCircle = (svg, x, y, radius = 8, color = 'steelblue') => {
  svg.append('circle')
    .attr('cx', x)
    .attr('cy', y)
    .attr('r', radius)
    .style('fill', color);
}

export const plotData = (data, htmlElemId, width, height) => {
  var svg = d3.select(htmlElemId)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + plotMargin + ',' + plotMargin + ')');

  const effectiveWidth = width - 2 * plotMargin;
  const effectiveHeight = height - 2 * plotMargin;

  /* Data */
  var xScale = d3.scaleLinear()
    .domain([0, 30])
    .range([0, effectiveWidth]);

  var yScale = d3.scaleLinear()
    .domain([1000, 0])  // inverse as y axis goes downward
    .range([0, effectiveHeight]);

  for (let i = 0; i < data.x.length; i++) {
    plotCircle(svg, xScale(data.x[i]), yScale(data.y[i]));
  }

  /* Axes */
  svg
    .append('g')
    .attr('transform', 'translate(' + 0 + ',' + effectiveHeight + ')')
    .call(d3.axisBottom(xScale));

  svg
    .append('g')
    .call(d3.axisLeft(yScale));
}