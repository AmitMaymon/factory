const axios = require('axios')

const getWsUsers = async ()=>await axios.get('https://jsonplaceholder.typicode.com/users')

module.exports = {getWsUsers}