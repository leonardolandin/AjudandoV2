const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const router = express.Router();

app.use(express.static(path.join(__dirname,'app')));

app.use('/', router);

app.listen(port, function() {
    console.log('ta rodando')
})