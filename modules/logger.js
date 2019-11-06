'use strict';

const events = require('./events')


events.on('read', data => log('Reading file', data));
events.on('write', data => log('Writing file', data ));
events.on('error', error => log('error boss', error));



function log(event, data){
  let time = new Date();
  console.log({event, time, data});
}