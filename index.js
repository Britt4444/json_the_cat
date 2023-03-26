const breedRequest = process.argv[2];

const { fetchBreedDescription } = require('./breedFetcher.js');

fetchBreedDescription(breedRequest, (error, description) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(description);
  }
});