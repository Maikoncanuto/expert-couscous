const morgan = require('morgan');

const useLog = (app) => {
    app.use(morgan('combined'));
};

exports.useLog = useLog;