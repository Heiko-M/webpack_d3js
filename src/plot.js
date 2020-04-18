const d3 = require('d3');

const width = 500;
const height = 500;
const margins = { top: 10, right: 20, bottom: 20, left: 25 };
const effectiveWidth = width - margins.left - margins.right;
const effectiveHeight = height - margins.top - margins.bottom;

export const scatterPlot = (data, htmlElemId) => {
  const svg = d3.select(htmlElemId)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + margins.left + ',' + margins.top + ')');

  /* Data */
  var xScale = d3.scaleLinear()
    .domain([0, 30])
    .range([0, effectiveWidth]);

  var yScale = d3.scaleLinear()
    .domain([0, 1000])
    .range([effectiveHeight, 0]);  // inverse as y axis goes downward

  svg.selectAll('dots')
    .data(data)
    .enter()
    .append('circle')
    .attr('cx', function ({ x }) { return xScale(x) })
    .attr('cy', function ({ y }) { return yScale(y) })
    .attr('r', 8)
    .style('fill', 'steelblue');

  /* Axes */
  svg
    .append('g')
    .attr('transform', 'translate(' + 0 + ',' + effectiveHeight + ')')
    .call(d3.axisBottom(xScale));

  svg
    .append('g')
    .call(d3.axisLeft(yScale));
}