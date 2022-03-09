const { createLogger, transports, format } = require('winston');
require('dotenv').config();

const customFormat = format.combine(
    format.timestamp(),
    format.printf((info) => {
        return `${info.timestamp} [${info.level.toUpperCase().padEnd(7)}]: ${info.message}`;
    }));

const customTransports = [
    new transports.File({ filename: 'app.log', level: 'info' })
];

if (process.env.NODE_ENV === 'development') {
    customTransports.push(new transports.Console({ level: 'debug' }));
}

const logger = createLogger({
    format: customFormat,
    transports: customTransports
});

module.exports = logger;
