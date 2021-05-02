exports.handler = function (event, context, callback) {
    const movieName = event.queryStringParameters.movieName || 'Illusion'
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({ selectedMovie: `My current favorite video is ${movieName}` })
    })
}