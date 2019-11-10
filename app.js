'use strict';

const fs = require('fs');
const eventEmitter = require('./modules/events');
const util = require('util');
require('./modules/file-events');
const fsRead = util.promisify(fs.readFile);
const fsWrite = util.promisify(fs.writeFile);


/**
 * This function will read a file
 * @param {Function} file - This funtion will take a file as a parameter
 * @returns {String} - This will return as a buffered string
 */

const readFile = async file => {
  try {
    console.log(file);
    const data = await fsRead(file);
    eventEmitter.emit('file-read');
    return data;
    // console.log(data);
  } catch (error){
    eventEmitter.emit('file-read-error', error);
  }
};

/**
 * This function will uppercase a read file
 * @param {Buffer} file - Take buffered data string
 * @returns {String} - Uppercased String
 */

const upperCase = data => {
  let text = data.toString().toUpperCase();
  try{
    eventEmitter.emit('file-uppercased', text);
    return text;
  }catch(error){
    eventEmitter.emit('not-uppercased', error);
  }
};

/**
 * This write to a file
 * @param {Path} file - Takes a Path to write to
 * @param {String} - Data to be written
 * @returns {String} - Returns written file data
 */

const saveFile = async (file, text) => {
  try{
    await fsWrite(file, Buffer.from(text));
    eventEmitter.emit('file-saved');
  }catch(error){
    eventEmitter.emit('write-failed', error);
  }
};

/**
 * This function reads a file, and alters it with uppercase letters
 * @param {Path} file - Takes a Path to write to
 * @param {String} - Data to be written
 * @returns {String} - Returns written file data
 */

const alterFile =  async (file) => {
  console.log(file);
  const data = await readFile(file);
  const text = upperCase(data);
  saveFile(file, text);

};

let file = process.argv[2];
alterFile(file);

module.exports = { alterFile, readFile, saveFile, upperCase };