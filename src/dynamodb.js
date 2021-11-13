const AWS = require('aws-sdk')

AWS.config.loadFromPath('./config.json')

const documentClient = new AWS.DynamoDB.DocumentClient()

const createUser = () => {
}

const createTicket = () => {
}

const getUser = () => {
}

const getUserTickets = () => {
}

const getUserAndTickets = () => {
}

module.exports = {
  createUser,
  createTicket,
  getUser,
  getUserTickets,
  getUserAndTickets,
}
