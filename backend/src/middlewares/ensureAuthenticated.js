const { verify } = require('jsonwebtoken');
const AppError = require('../utils/AppError');
const authConfig = require('../configs/auth');

function ensureAuthenticated(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new AppError('JWT token não informado', 401);
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = verify(token, authConfig.jwt.secret);

        req.user = {
            id: Number(decoded.sub),
        };

        return next();
    } catch {
        throw new AppError('JWT token inválido', 401);
    }
}

module.exports = ensureAuthenticated;
