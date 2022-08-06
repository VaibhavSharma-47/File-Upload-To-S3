function buildResponse(statusCode) {
    return {
        statusCode: statusCode,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    }
}

module.exports.buildResponse = buildResponse;