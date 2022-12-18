
const today = Date.now(); // Jan 1, 1970 00:00:00 UTC, leap seconds ignored.

const seconds = today - 1576800000; // 50 years of seconds taking us to Jan 1, 2020, close enough for this project.


document.write('<h3>' + seconds + '</h3>');

