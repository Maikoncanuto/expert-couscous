const cors = require('cors');

const useCors = (app, routes) => {
    routes.forEach(route => {
        app.use(route.url, cors());
    });
};

exports.useCors = useCors;