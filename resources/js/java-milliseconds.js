
const today = Date.now(); // Jan 1, 1970 00:00:00 UTC, leap seconds ignored.

const milliseconds = (today - 1576800000000); // 50 years of milliseconds taking us to Jan 1, 2020, close enough for this project.


document.write('<a class="javascript-milliseconds" >' + milliseconds + '</a>');

