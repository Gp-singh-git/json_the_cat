const request = require('request');

const fetchBreedDescription = function(myBreed, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${myBreed}`,(error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (body.length < 3) {
      callback(null,null);
      return;
    }

    const data = JSON.parse(body);
    callback(null, data);
  
  });
 
};

module.exports = { fetchBreedDescription };