'use strict';

jest.mock('fs');

const file = require('../app');

describe ('tests our alter file library', () => {
  it('can read a file', ()=> {
    return file.readFile('test.txt')
      .then(contents => {
        expect(Buffer.isBuffer(contents)).toBeTruthy;
      });
  });

  it('can write to a file', () => {
    console.log(file);
    return file.saveFile('test.txt', Buffer.from('test'))
      .then(results => {
        expect(results).toBeUndefined();
      });
  });

  it('can uppercase a file', ()=> {
    const testString = 'test';
    expect(file.upperCase(Buffer.from(testString))).toBe(testString.toUpperCase());   
  });
});


