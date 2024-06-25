const date = new Date('2022-01-10T12:00:00Z');
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(date.toLocaleString('en-US', { weekday: 'long' })); // "Monday"
console.log(date.toLocaleString('en-US', { weekday: 'short' })); // "Mon"
console.log(date.toLocaleString('en-US', { weekday: 'narrow' })); // "M"
console.log(date.toLocaleString('en-US', { weekday: 'numeric' })); // "1"
