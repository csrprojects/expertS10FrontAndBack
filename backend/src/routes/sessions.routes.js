const { Router } = require('express');

const SessionsController = require('../controller/Sessions.Controller');
const sessionsController = new SessionsController();

const sessionRoutes = Router();

sessionRoutes.post('/', sessionsController.create);

module.exports = sessionRoutes;
