const AWS = require('aws-sdk')

AWS.config.loadFromPath('./config.json')

const documentClient = new AWS.DynamoDB.DocumentClient()

const createUser = () => {
}

const createTicket = () => {
}

const getUser = () => {
}

const getUseTickets = () => {
}

const getTicket = () => {
}

module.exports = {
  createUser,
  createTicket,
  getUser,
  getUserTickets,
  getTicket,
}
