const d3 = require('d3');

export function setupInitialPlotArea(
  htmlElemId,
  width,
  height,
  marginLeft,
  marginTop,
) {
  return d3
    .select(htmlElemId)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', `translate(${marginLeft},${marginTop})`);
}

export function generateColorArray(n) {
  const hexChars = '0123456789abcdef';
  const colors = [];

  for (let i = 0; i < n; i++) {
    colors[i] = '#';
    for (let j = 0; j < 6; j++) {
      colors[i] += hexChars[Math.floor(Math.random() * hexChars.length)];
    }
  }

  return colors;
}
