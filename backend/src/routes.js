const express = require('express');

const route = express.Router();

route.get('/', (req, res) => {
  res.json({ api: 'true' });
});

route.get('/list', (req, res) => {
  res.json({ users: [] });
});

module.exports = route;
