const axios = require('axios');

axios.defaults.baseURL = "http://localhost:8080";

let a = 0;
setInterval(async () => {
    let data = await axios.post('/api', { token: a++ })
}, 3000)