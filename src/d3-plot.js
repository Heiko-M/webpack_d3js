const d3 = require('d3');

export const plotCircle = (x, y, radius, color) => {
  var svg = d3.select('#plotting_area');
  svg.append('circle').attr('cx', x).attr('cy', y).attr('r', radius).style('fill', color);
}
