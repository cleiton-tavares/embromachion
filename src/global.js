module.exports = () => {

  function clone(value) {
    let objCopy = {}; // objCopy will store a copy of the mainObj
    let key;

    for (key in value) {
      objCopy[key] = value[key]; // copies each property to the objCopy object
    }
    return objCopy;
  }
  global['__clone'] = clone;
  global['__ENV__'] = clone(process.env);
  global['__CONSOLE__'] = clone(console);

  const { Logger } = require('./configs/logger')();

  console = new Logger(console);

  return { global };

};