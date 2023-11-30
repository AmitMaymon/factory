const axios = require('axios')

const getWsUsers = async () => {
   const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    return data
}

module.exports = { getWsUsers }