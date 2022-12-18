const now = new Date();
const hourNow = now.getHours();
let greeting = '';

if (hourNow >= 18) {
  greeting = 'Good evening!';
} else if (hourNow >= 12) {
  greeting = 'Good afternoon!';
} else if (hourNow > 0) {
  greeting = 'Good morning!';
} else {
  greeting = 'Hello!';
}

document.write('<a class="javascript-greeting" >' + greeting + '</a>');