const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(routes)
app.use(express.static(path.join(__dirname, '../dist/')));

app.listen(8090, () => {
    console.log(`Server listening on port 8090.`);
});
