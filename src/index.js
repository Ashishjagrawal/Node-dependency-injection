'use strict'

const server = require('./server')
const axios = require('axios')

const port = 3000;

const app = server(axios);

app.listen(port, () => {
    console.log(`App is listening on PORT: ${port}`);
    
})

