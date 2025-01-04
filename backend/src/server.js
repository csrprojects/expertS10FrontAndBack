require('express-async-errors');
require('dotenv/config');
const AppError = require('./utils/AppError');
const express = require('express');
const routes = require('./routes');
const uploadConfig = require('./configs/upload');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(cors());
app.use('/files', express.static(uploadConfig.UPLOAD_FOLDER));
app.use(routes);

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
    if (error instanceof AppError) {
        console.error(error);
        return res
            .status(error.statusCode)
            .json({ status: error.statusCode, error: error.message });
    }
    console.error(error);

    return res
        .status(500)
        .json({ status: '500', error: 'Internal server error' });
});

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
});
