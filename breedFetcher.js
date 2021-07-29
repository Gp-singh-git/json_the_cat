const request = require('request');
const arg = process.argv.splice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${arg}`,(error, response, body) => {
  if(error) {
    console.log("Problem with input")
    process.exit();
  }
  if(body.length < 3) {
    console.log("Wrong breed");
    process.exit();
  }

const data = JSON.parse(body);
console.log(data[0]);
});