const routes  = require('express').Router();
const path = require('path');

routes.get('/', (req,res) => {
  res.status(200)
    .sendFile(path.join(__dirname, '../../dist/', 'index.html'));
});

module.exports = routes;
