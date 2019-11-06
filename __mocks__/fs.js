'use strict';

const {readFile, writeFile} = require('fs');
// const events = require('./modules/events');
// const util = require('util');
// const readPromise = util.promisify(fs.readFile);
// const writePromise = util.promisify(fs.writeFile);

let file = process.argv.slice(2).shift();

async function reader(text){
  await readFile(file, 'utf8', text, (error, data) => {
    if (error) {throw error;}
  });
}

async function writer(text){
  await writeFile(file, Buffer.from(text), (error, data) =>{
    if(error){throw error;}
  });
}

exports.lowerText = (text) => text.toString().toUpperCase();

module.exports = {reader, writer};

