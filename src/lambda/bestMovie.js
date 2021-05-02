exports.handler = function (event, context, callback) {
    return {
        statusCode: 200,
        body: JSON.stringify({ movieName: 'Notre vie est un film' })
    }
}