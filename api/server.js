const express = require('express')
const server = express();
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const actionsRouter = require('../routers/actionsRouter.js')
const projectsRouter = require('../routers/projectsRouter.js')

server.use(express.json())
server.use(helmet())
server.use(morgan('dev'))
server.use(cors())

server.use('/actions', actionsRouter);
server.use('/projects', projectsRouter);

module.exports = server

