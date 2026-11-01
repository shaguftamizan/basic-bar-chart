# Student Distribution by Country
 
A responsive horizontal bar chart showing the number of students from each of the top 20 countries, ordered from most to fewest.

## Tech stack
 
- [React](https://react.dev/)
- [D3](https://d3js.org/)
- [Vite](https://vite.dev/)
- CSS, with fonts from Google Fonts (Bitter for headings, Raleway for everything else)

## How the chart works
 
1. `BarChart.jsx` builds a D3 `scaleLinear` that maps `0` to the largest student count (rounded up with `.nice()`) onto `0%` to `100%`.
2. Each bar's width is that percentage, set as an inline style.
3. The same scale produces the axis ticks, positioned as percentages.
4. The tooltip position is stored in React state and updated on mouse move and on focus.
Because the widths are percentages, the chart resizes with its container and needs no JavaScript resize handling.
