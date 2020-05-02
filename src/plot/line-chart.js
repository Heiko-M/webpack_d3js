const d3 = require('d3');

const width = 800;
const height = 500;
const margins = { top: 10, right: 140, bottom: 20, left: 40 };
const effectiveWidth = width - margins.left - margins.right;
const effectiveHeight = height - margins.top - margins.bottom;

const generateColorArray = (n) => {
  const hexChars = '0123456789abcdef';
  const colors = [];

  for (let i = 0; i < n; i++) {
    colors[i] = '#';
    for (let j = 0; j < 6; j++) {
      colors[i] += hexChars[Math.floor(Math.random() * hexChars.length)];
    }
  }

  return colors;
};

export const lineChart = (htmlElemId, data) => {
  const svg = d3.select(htmlElemId)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + margins.left + ',' + margins.top + ')');

  /* Axes */
  const xScale = d3.scaleTime()
    .domain(d3.extent(data, ({ year }) => d3.timeParse('%Y')(year)))
    .range([0, effectiveWidth]);

  svg.append('g')
    .attr('transform', 'translate(' + 0 + ',' + effectiveHeight + ')')
    .call(d3.axisBottom(xScale));

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, ({ value }) => value)])
    .range([effectiveHeight, 0]);  // inverse as y axis goes downward

  svg.append('g')
    .call(d3.axisLeft(yScale));

  /* Data */
  const dataGroupedByCountry = d3.nest()
    .key(({ country }) => country)
    .entries(data);

  const countries = dataGroupedByCountry.map(({ key }) => key);
  const colorScale = d3.scaleOrdinal()
    .domain(countries)
    .range(generateColorArray(countries.length));

  svg.selectAll('.line')
    .data(dataGroupedByCountry)
    .enter()
    .append('path')
    .attr('fill', 'none')
    .attr('stroke', ({ key }) => colorScale(key))
    .attr('stroke-width', 1.5)
    .attr('d', ({ values }) => (d3.line()
      .x(({ year }) => xScale(d3.timeParse('%Y')(year)))
      .y(({ value }) => yScale(value))
    )(values));

  svg.selectAll()
    .data(dataGroupedByCountry)
    .enter()
    .append('text')
    .attr('transform', ({values}) => `translate(${effectiveWidth},${yScale(values[values.length - 1].value)})`)
    .attr('dy', '.35em')
    .attr('text-anchor', 'start')
    .style('fill', ({key}) => colorScale(key))
    .text(({key}) => key);
};
