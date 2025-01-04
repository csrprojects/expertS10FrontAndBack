const knex = require('../database/knex');
const AppError = require('../utils/AppError');
const Diskstorage = require('../providers/Diskstorage');

class UserAvatarController {
    async store(req, res) {
        const user_id = req.user.id;
        const avatarFilename = req.file.filename;
        const diskstorage = new Diskstorage();

        const userAvatar = await knex('users').where('id', user_id).first();

        if (!userAvatar) {
            throw new AppError(
                'Only authenticated users can change the profile image',
                401
            );
        }

        if (userAvatar.avatar) {
            await diskstorage.deleteFile(userAvatar.avatar);
        }

        const filename = await diskstorage.saveFile(avatarFilename);

        userAvatar.avatar = filename;

        await knex('users').where('id', user_id).update({
            avatar: filename,
        });

        return res.json(userAvatar);
    }
}

module.exports = UserAvatarController;
