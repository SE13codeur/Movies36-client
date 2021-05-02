const fetch = require('node-fetch')

const API_ENDPOINT = 'https://'

exports.handler = async (event, context) => {
    return fetch(API_ENDPOINT, { headers: { Accept: 'application/json' } })
        .then(response => response.json())
        .then(data => ({
            statusCode: 200,
            body: JSON.stringify({ message: `${data.movie.date.asc}` })
        }))
        .catch(error => ({
            statusCode: 422,
            body: JSON.stringify({ message: String(error) })
        }))
}
