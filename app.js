'use strict';

const fs = require('fs');


const events = require('./modules/events');

require('./modules/logger');
require('./__mocks__/fs.js');



events.emit('read', {something fs});
events.emit('write', {something fs};



// const alterFile = (file) => {
//   fs.readFile( file, (err, data) => {
//     if(err) { throw err; }
//     let text = data.toString().toUpperCase();
//     fs.writeFile( file, Buffer.from(text), (err, data) => {
//       if(err) { throw err; }
//       console.log(`${file} saved`);
//     });
//   });
// };

// alterFile(file);