const { Router } = require('express');
const usersRouter = require('./users.routes');
const notesRouter = require('./notes.routes');
const tagsRouter = require('./tags.routes');
const sessionRoutes = require('./sessions.routes');

const router = Router();

router.use('/users/', usersRouter);
router.use('/notes/', notesRouter);
router.use('/tags/', tagsRouter);
router.use('/sessions/', sessionRoutes);

module.exports = router;
