const d3 = require('d3');

const width = 800;
const height = 500;
const margins = { top: 10, right: 20, bottom: 20, left: 40 };
const effectiveWidth = width - margins.left - margins.right;
const effectiveHeight = height - margins.top - margins.bottom;

export const scatterPlot = (htmlElemId, data) => {
    const svg = d3.select(htmlElemId)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(' + margins.left + ',' + margins.top + ')');
  
    /* Axes */
    const xScale = d3.scaleLinear()
      .domain(d3.extent(data, ({ x }) => x))
      .range([0, effectiveWidth]);
  
    svg.append('g')
      .attr('transform', 'translate(' + 0 + ',' + effectiveHeight + ')')
      .call(d3.axisBottom(xScale));
  
    const yScale = d3.scaleLinear()
      .domain(d3.extent(data, ({ y }) => y))
      .range([effectiveHeight, 0]);  // inverse as y axis goes downward
  
    svg.append('g')
      .call(d3.axisLeft(yScale));
  
    /* Data */
    svg.selectAll('.dot')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', ({ x }) => xScale(x))
      .attr('cy', ({ y }) => yScale(y))
      .attr('r', 5)
      .style('fill', 'steelblue');
  };