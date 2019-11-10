const eventEmitter = require('./events');

/**
 * This function takes an event and returns a logging of that event
 * @param {String} - String is an event
 * @param {Function} - A callback function that logs the event
 * @returns {String} - An event log
 */


exports.handleRead = () => {
  console.log('file-read');
};

exports.handleUppercase = () => {
  console.log('file-uppercased');
};

exports.handleSave= () => {
  console.log('file-saved');
};
exports.handleReadError = () => {
  console.log('read-error');
};

exports.handleUppercaseError = () => {
  console.log('not-uppercased');
};

exports.handleWriteFailure = () => {
  console.log('write-failed');
};

eventEmitter.on('file-read', exports.handleRead);
eventEmitter.on('file-uppercased', exports.handleUppercase);
eventEmitter.on('read-error', exports.handleReadError);
eventEmitter.on('not-uppercased', exports.handleUppercaseError);
eventEmitter.on('file-saved', exports.handleSave);
eventEmitter.on('write-failed', exports.handleWriteFailure);

