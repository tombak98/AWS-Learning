const AWS = require('aws-sdk')
// AWS.config.update( {
//     region: 'us-east-1'
// })
const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = 'SimpleList'
const listPath = '/list'

exports.handler = async function(event) {
    let response
    console.log('this is the event', event)
    switch(true) {
        case event.httpMethod === 'GET' && event.path === listPath:
            response = getAllItems()
            break;
    }
    return response
}

function buildResponse(statusCode, body) {
    return {
        statusCode: statusCode,
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body: JSON.stringify(body)
    }
}

async function getAllItems() {
    const params = {
        TableName: tableName
        
    }
    const allItems = await dynamodb.scan(params).promise()
    const body = {
        items: allItems
    }
    return buildResponse(200, body)
}