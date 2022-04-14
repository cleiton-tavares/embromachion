const uuid = require('uuid');

module.exports = () => {

  class Logger {
    /**
     * constructor()
     * @param terminal
     */
    constructor(terminal) {
      this.instance = terminal;
    }
    /**
     * date
     * @returns {string} Date
     */
    get date() {
      return new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    }
    /**
     * consoleAndSaveLog()
     * @param {String} type
     * @param {UUID} trace
     * @param {String} message
     * @param {String} traceOutput
     * @param {Boolean} err
     * @returns {*}
     */
    consoleAndSaveLog({ type, trace, message, traceOutput, err}){
      try {
        let log = {
          type: type,
          traceID: trace || uuid.v4(),
          date: this.date,
          message: err ? message : JSON.stringify(message),
          trace: traceOutput
        };
        return this.instance.log(log);
      } catch (e) {
        this.instance.error(e);
      }
    }
    /**
     * traceOutput()
     * @param {Error} trace
     * @returns {string}
     */
    traceOutput(trace) {
      return trace.stack // Grabs the stack trace
        .split('\n')[2] // Grabs third line
        .trim() // Removes spaces
        .substring(3) // Removes three first characters ("at ")
        .replace(__DIRNAME__, '') // Removes script folder path
        .replace(/\s\(./, ' at ') // Removes first parentheses and replaces it with " at "
        .replace(/\)/, '');
    }
    /**
     * log()
     * @param {String} message
     * @param {UUID} trace
     * @returns {*}
     */
    log(message, trace) {
      if (!uuid.validate(trace)) trace = uuid.v4()
      let traceOutput = this.traceOutput(new Error());
      return this.consoleAndSaveLog({
        type: 'LOG',
        trace: trace || uuid.v4(),
        message,
        traceOutput
      });
    }
    /**
     * info()
     * @param {String} message
     * @param {UUID} trace
     * @returns {*}
     */
    info(message, trace) {
      if (!uuid.validate(trace)) trace = uuid.v4()
      let traceOutput = this.traceOutput(new Error());
      return this.consoleAndSaveLog({
        type: 'INFO',
        trace: trace || uuid.v4(),
        message,
        traceOutput
      });
    }
    /**
     * warn()
     * @param {String} message
     * @param {UUID} trace
     * @returns {*}
     */
    warn(message, trace) {
      if (!uuid.validate(trace)) trace = uuid.v4()
      let traceOutput = this.traceOutput(new Error());
      // return this.consoleAndSaveLog({
      //   type: 'WARN',
      //   trace: trace || uuid.v4(),
      //   message,
      //   traceOutput
      // });
    }
    /**
     * error()
     * @param {String} message
     * @param {UUID} trace
     * @returns {*}
     */
    error(message, trace) {
      if (!uuid.validate(trace)) trace = uuid.v4();
      let traceOutput = this.traceOutput(new Error());
      return this.consoleAndSaveLog({
        type: 'ERROR',
        trace: trace || uuid.v4(),
        message: JSON.stringify(message, Object.getOwnPropertyNames(message)),
        traceOutput,
        err: true
      });
    }
  }

  return { Logger };

};