const AppError = require('../utils/AppError');
const knex = require('../database/knex');
const { hash, compare } = require('bcryptjs');

class UsersController {
    async create(req, resp) {
        const { name, email, password } = req.body;

        const checkUser = await knex('users').where('email', email).first();

        if (checkUser) {
            throw new AppError('e-mail already exists', 400);
        }

        if (!name || !email || !password) {
            throw new AppError('Missing parameters', 400);
        }

        const passwordHash = await hash(password, 8);

        try {
            await knex('users').insert({
                name,
                email,
                password: passwordHash,
            });
        } catch (error) {
            throw new Error(error, 500);
        }

        return resp.status(201).json('User created');
    }

    async update(req, resp) {
        const { id } = req.user;
        const { name, email, password, old_password } = req.body;

        if (!id) {
            throw new AppError('Missing parameters', 400);
        }

        const checkUser = await knex('users').where('id', id).first();
        if (!checkUser) {
            throw new AppError('User not found', 404);
        }

        const checkEmail = await knex('users').where('email', email).first();
        if (checkEmail && checkEmail.id !== id) {
            throw new AppError('e-mail already exists', 400);
        }

        if (password && !old_password) {
            throw new AppError('Old password missing', 400);
        }

        if (password && old_password) {
            const checkPassword = await knex('users').where('id', id).first();

            const passwordMatch = await compare(
                old_password,
                checkPassword.password
            );

            if (!passwordMatch) {
                throw new AppError('Old password does not match', 400);
            }

            const passwordHash = await hash(password, 8);
            try {
                await knex('users').where('id', id).update({
                    name,
                    email,
                    password: passwordHash,
                });
            } catch (error) {
                throw new Error(error, 500);
            }
        } else {
            try {
                await knex('users').where('id', id).update({
                    name,
                    email,
                });
            } catch (error) {
                throw new Error(error, 500);
            }
        }

        return resp.status(200).json('User updated');
    }

    async show(req, resp) {
        const { id } = req.user;

        if (!id) {
            throw new AppError('Missing id user', 400);
        }

        const user = await knex('users')
            .where('id', id)
            .first()
            .select('id as userId', 'name', 'email', 'avatar');

        if (!user) {
            throw new AppError('User not found', 404);
        }

        const { userId, name, email, avatar } = user;

        return resp.status(200).json({
            userId,
            name,
            email,
            avatar,
        });
    }

    async index(req, resp) {
        const { name, email } = req.query;
        let users;
        try {
            users = await knex('users')
                .where('name', 'like', `%${name || ''}%`)
                .where('email', 'like', `%${email || ''}%`)
                .select(
                    'id',
                    'name',
                    'email',
                    'avatar',
                    'created_at',
                    'updated_at'
                );
        } catch (error) {
            throw new Error(error, 500);
        }
        return resp.status(200).json(users);
    }

    async delete(req, resp) {
        const { id } = req.params;

        if (!id) {
            throw new AppError('Missing id user', 400);
        }

        const checkUser = await knex('users').where('id', id).first();

        if (!checkUser) {
            throw new AppError('User not found', 404);
        }

        try {
            await knex('users').where('id', id).delete();
        } catch (error) {
            throw new Error(error, 500);
        }

        return resp.status(200).json('User deleted');
    }
}

module.exports = UsersController;
