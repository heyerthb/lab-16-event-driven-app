'use stict';

const logger = require('../modules/file-events');

describe('testing logger', () => {
  it('should log properly', () => {
    const spy = jest.spyOn(console, 'log');
    logger.handleRead();
    expect(spy).toHaveBeenCalledWith('file-read');
  });


  it('can read an error', () => {
    const spy = jest.spyOn(console, 'log');
    logger.handleReadError();
    expect(spy).toHaveBeenCalledWith('read-error');
  });


});