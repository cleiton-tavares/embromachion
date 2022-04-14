const express = require('express');
const consign = require('consign-ignore');

require('dotenv').config();

const app = { express : express() };

global['__DIRNAME__'] = __dirname;

consign({ verbose: true, cwd: 'src', ignore: [/test.js$/, /apitest.js$/] })
  .exclude('data')
  .include('global.js')
  .include('configs')
  .then('models')
  .then('services')
  .then('controllers')
  .then('http.js')
  .then('routes')
  .into(app)

module.exports = app;