const devData = require('../data/development-data');

const testData = require('../data/test-data');

const seed = require('./seed');

const db = require('../connection');

const runSeed = ()=>{
    return seed(testData)
    .then(()=> db.end());
};

runSeed();