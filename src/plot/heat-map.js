const d3 = require('d3');

const { setupInitialPlotArea } = require('./utils');

const width = 800;
const height = 500;
const margins = { top: 10, right: 20, bottom: 20, left: 40 };
const effectiveWidth = width - margins.left - margins.right;
const effectiveHeight = height - margins.top - margins.bottom;

export function heatMap(htmlElemId, data) {
  const svg = setupInitialPlotArea(
    htmlElemId,
    width,
    height,
    margins.left,
    margins.top,
  );

  /* Axes */
  const genes = [...new Set(data.map(({ gene }) => gene))];

  const xScale = d3
    .scaleBand()
    .domain(genes)
    .range([0, effectiveWidth])
    .padding(0.01);

  svg
    .append('g')
    .attr('transform', `translate(0,${effectiveHeight})`)
    .call(d3.axisBottom(xScale));

  const treatments = [...new Set(data.map(({ treatment }) => treatment))];

  const yScale = d3
    .scaleBand()
    .domain(treatments)
    .range([effectiveHeight, 0])
    .padding(0.01);

  svg.append('g').call(d3.axisLeft(yScale));

  const colorScale = d3
    .scaleLinear()
    .domain(d3.extent(data, ({ value }) => value))
    .range(['white', '#69b3a2']);

  /* Data */
  svg
    .selectAll()
    .data(data, ({ gene, treatment }) => `${gene}:${treatment}`)
    .enter()
    .append('rect')
    .attr('x', ({ gene }) => xScale(gene))
    .attr('y', ({ treatment }) => yScale(treatment))
    .attr('width', xScale.bandwidth())
    .attr('height', yScale.bandwidth())
    .style('fill', ({ value }) => colorScale(value));
}
