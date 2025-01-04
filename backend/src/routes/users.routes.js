const { Router } = require('express');
const UsersController = require('../controller/Users.Controller');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const multer = require('multer');
const uploadConfig = require('../configs/upload');
const UserAvatarController = require('../controller/UserAvatar.Controller');

const usersRouter = Router();
const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

usersRouter.post('/', usersController.create);
usersRouter.put('/', ensureAuthenticated, usersController.update);
usersRouter.get('/', ensureAuthenticated, usersController.show);
usersRouter.get('/index/', ensureAuthenticated, usersController.index);
usersRouter.delete('/:id', ensureAuthenticated, usersController.delete);
usersRouter.patch(
    '/avatar',
    ensureAuthenticated,
    multer(uploadConfig.MULTER).single('avatar'),
    userAvatarController.store
);

module.exports = usersRouter;
