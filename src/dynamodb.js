const AWS = require('aws-sdk')

AWS.config.loadFromPath('./config.json')

const documentClient = new AWS.DynamoDB.DocumentClient()

const tableName = 'support-application-table'

const createUser = (username, name, email, address) => {
  const params = {
    TableName: tableName,
    Item: {
      pk: `USER#${username}`,
      sk: `PROFILE#${username}`,
      name,
      email,
      address,
    },
  }
  return documentClient.put(params).promise().then(console.log)
}

const createTicket = (username, title, body) => {
  const params = {
    TableName: tableName,
    Item: {
      pk: `USER#${username}`,
      sk: `TICKET#${Math.floor(new Date().getTime() / 1000)}`,
      title,
      body,
      status: 1,
    },
  }
  return documentClient.put(params).promise().then(console.log)
}

const getUser = username => {
  const params = {
    TableName: tableName,
    Key: {
      pk: `USER#${username}`,
      sk: `PROFILE#${username}`,
    },
  }
  return documentClient.get(params).promise().then(console.log)
}

const getUserTickets = username => {
  const params = {
    TableName: tableName,
    KeyConditionExpression: 'pk = :pk and begins_with(sk, :sk)',
    ExpressionAttributeValues: {
      ':pk': `USER#${username}`,
      ':sk': 'TICKET#',
    },
  }
  return documentClient.query(params).promise().then(console.log)
}

const getUserAndTickets = username => {
  const params = {
    TableName: tableName,
    KeyConditionExpression: 'pk = :pk',
    ScanIndexForward: true,
    ExpressionAttributeValues: {
      ':pk': `USER#${username}`,
    },
  }
  return documentClient.query(params).promise().then(console.log)
}

module.exports = {
  createUser,
  createTicket,
  getUser,
  getUserTickets,
  getUserAndTickets,
}
