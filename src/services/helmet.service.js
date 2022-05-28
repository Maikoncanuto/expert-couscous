const helmet = require('helmet');

const useHelmet = (app, routes) => {
    routes.forEach(route => {
        app.use(route.url, helmet());
    });
};

exports.useHelmet = useHelmet;