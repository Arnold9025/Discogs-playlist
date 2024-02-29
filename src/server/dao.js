const { Client } = require('pg')

let client = {}

function connect () {
    client = new Client({
        host: 'localhost',
        port: 3310,
        database: 'easy_bookings',
        user: 'root',
        password: 'abc123...'
    })

    client.connect((error) => {
        if (error) {
            throw error
        }
    })
}

function query (query, values, resultCallback) {
    client.query(query, values, (error, result) => {
        if (error) {
            throw error
        }
        resultCallback(result)
    })
}

function disconnect () {
    client.end()
}

module.exports = {
    connect,
    disconnect,
    query
}
