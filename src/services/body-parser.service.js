const bodyParser = require('body-parser');

const useBodyParser = (app, routes) => {
    routes.forEach(route => {
        app.use(route.url, bodyParser.json());
    });
};

exports.useBodyParser = useBodyParser;