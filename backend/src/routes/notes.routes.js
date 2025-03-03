const { Router } = require('express');
const NotesController = require('../controller/Notes.Controller');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const notesRouter = Router();

const notesController = new NotesController();

notesRouter.use(ensureAuthenticated);

notesRouter.post('/', notesController.create);
notesRouter.get('/:id', notesController.show);
notesRouter.get('/', notesController.index);
notesRouter.delete('/:id', notesController.delete);
notesRouter.put('/:id', notesController.update);

module.exports = notesRouter;
