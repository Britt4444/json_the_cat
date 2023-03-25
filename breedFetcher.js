const request = require('request');

const breedRequest = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedRequest}`;

request(url, (error, response, body) => {
  if (error) {
    console.log('Error: ', error.message);
    process.exit();
  }
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log(`${breedRequest} not found!`);
  } else if (!error && response.statusCode === 200) {
    console.log(data[0].description);
  }
});