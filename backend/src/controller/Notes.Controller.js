const AppError = require('../utils/AppError');
const knex = require('../database/knex');

class NotesController {
    async create(req, resp) {
        const { title, description, rating, tags } = req.body;
        const { id: userId } = req.user;

        if (!title || !description || !userId || !rating || !tags) {
            const missingParams = [];
            !title ? missingParams.push('title') : null;
            !description ? missingParams.push('description') : null;
            !userId ? missingParams.push('userId') : null;
            !rating ? missingParams.push('rating') : null;
            !tags ? missingParams.push('tags') : null;

            throw new AppError('Missing parameters: ' + missingParams, 400);
        }

        if (isNaN(rating)) {
            throw new AppError('Rating must be a number', 400);
        } else if (rating < 0 || rating > 5) {
            throw new AppError('Rating must be between 1 and 5', 400);
        }

        const verifyUser = await knex('users').where('id', userId).first();
        if (!verifyUser) {
            throw new AppError('User not found', 404);
        }

        try {
            const [note_id] = await knex('movie_notes').insert({
                user_id: userId,
                title,
                description,
                rating,
            });

            const tagsInsert = tags.map((tag) => ({
                note_id: note_id,
                user_id: userId,
                name: tag,
            }));

            await knex('movie_tags').insert(tagsInsert);
        } catch (error) {
            throw new Error(error, 500);
        }

        return resp.status(201).json('Note created');
    }

    async show(req, resp) {
        const { id } = req.params;

        if (!id) {
            throw new AppError('Missing id', 400);
        }

        const note = await knex('movie_notes').where('id', id).first();
        if (!note) {
            throw new AppError('Note not found', 404);
        }
        const tags = await knex('movie_tags')
            .where('note_id', id)
            .select('id', 'name');
        const noteWithTags = { ...note, tags };

        return resp.status(200).json(noteWithTags);
    }

    async index(req, resp) {
        const { title, description, rating } = req.query;
        const user_id = req.user.id;

        let notes;

        try {
            notes = await knex('movie_notes')
                .where('title', 'like', `%${title || ''}%`)
                .where('description', 'like', `%${description || ''}%`)
                .where('rating', 'like', `%${rating || ''}%`)
                .where('user_id', 'like', `%${user_id || ''}%`);

            const notesWithTags = await Promise.allSettled(
                notes.map(async (note) => {
                    const tags = await knex('movie_tags')
                        .where('note_id', note.id)
                        .select('id', 'name');
                    return { ...note, tags };
                })
            ).then((note) => note.map((registry) => registry.value));

            return resp.status(200).json(notesWithTags);
        } catch (error) {
            throw new Error(error, 500);
        }
    }

    async delete(req, resp) {
        const { id } = req.params;

        if (!id) {
            throw new AppError('Missing id user', 400);
        }

        const checkNote = await knex('movie_notes').where('id', id).first();
        if (!checkNote) {
            throw new AppError('Note not found', 404);
        }

        try {
            await knex('movie_notes').where('id', id).delete();
        } catch (error) {
            throw new Error(error, 500);
        }

        return resp.status(200).json('Note deleted');
    }

    async update(req, resp) {
        const { id } = req.params;
        const { title, description, rating, tags } = req.body;

        if (!id) {
            throw new AppError('Missing id', 400);
        }

        if (!title && !description && !rating && !tags) {
            throw new AppError('No data was updated', 400);
        }

        if (rating && (isNaN(rating) || rating < 0 || rating >= 5)) {
            throw new AppError('Rating must be a number between 1 and 5', 400);
        }

        const verifyNote = await knex('movie_notes').where('id', id).first();
        if (!verifyNote) {
            throw new AppError('Note not found', 404);
        }

        try {
            if (title || description || rating) {
                await knex('movie_notes').where('id', id).update({
                    title,
                    description,
                    rating,
                });
            }

            if (tags) {
                await knex('movie_tags').where('note_id', id).delete();
                const tagsInsert = tags.map((tag) => ({
                    note_id: id,
                    user_id: verifyNote.user_id,
                    name: tag,
                }));

                await knex('movie_tags').insert(tagsInsert);
            }

            return resp.status(200).json('Note updated');
        } catch (error) {
            throw new Error(error, 500);
        }
    }
}

module.exports = NotesController;
