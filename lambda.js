const AWS = require('aws-sdk')
// AWS.config.update( {
//     region: 'us-east-1'
// })
const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = 'SimpleList'
const listPath = '/list'

exports.handler = async function(event) {
    let response
    switch(true) {
        case event.httpMethod === 'GET' && event.path === listPath:
            response = await getAllItems()
            break;
        case event.httpMethod === 'POST' && event.path === listPath:
            response = await addItem(JSON.parse(event.body))
            break;
        case event.httpMethod === 'DELETE' && event.path === listPath:
            response = await deleteItem(JSON.parse(event.body).ID)
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
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,DELETE"
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

async function addItem(requestBody) {
    const params = {
        TableName: tableName,
        Item: requestBody
    }
    try {
        await dynamodb.put(params).promise()
        const body = {
            Operation: 'SAVE',
            MESSAGE: 'SUCCESS',
            Item: requestBody
        }
        return buildResponse(200, body)
    } catch {
            const body = {
                Operation: 'SAVE',
                MESSAGE: 'FAILURE',
                Item: requestBody
            }
            return buildResponse(200, body)
    }
}

async function deleteItem(itemID) {
    const params = {
        TableName: tableName,
        Key: {
            'ID':itemID
        },
        ReturnValues: 'ALL_OLD'
    }
    try {
        await dynamodb.delete(params).promise()
        const body = {
            Operation: 'SAVE',
            MESSAGE: 'SUCCESS',
            Item: itemID
        }
        return buildResponse(200, body)
    } catch {
            const body = {
                Operation: 'SAVE',
                MESSAGE: 'FAILURE',
                Item: itemID
            }
            return buildResponse(200, body)
    }
}