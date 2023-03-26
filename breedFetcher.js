const request = require('request');

const url = `https://api.thecatapi.com/v1/breeds/search?q=`;

const fetchBreedDescription = (breedRequest, callback) => {
  request(`${url}${breedRequest}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      callback(error);
    } else if (data[0] === undefined) {
      callback(error, `${breedRequest} is not a valid breed!`);
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };