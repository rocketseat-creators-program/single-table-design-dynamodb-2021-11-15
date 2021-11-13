const AWSXRay = require('aws-xray-sdk-core')
const AWS = AWSXRay.captureAWS(require('aws-sdk'))

AWS.config.loadFromPath('./config.json')

const documentClient = new AWS.DynamoDB.DocumentClient()

const createUser = () => {
}

const createTicket = () => {
}

const getUser = () => {
}

const getUserWithTickets = () => {
}

const getTickets = () => {
}

module.exports = {
  createUser,
  createTicket,
  getUser,
  getUserWithTickets,
  getTickets,
}
