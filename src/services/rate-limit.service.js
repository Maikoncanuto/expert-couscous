const rateLimit = require('express-rate-limit');

const useRateLimit = (app, routes) => {
    routes.forEach(route => {
        if(route.rateLimit) {
            app.use(route.url, rateLimit(route.rateLimit));
        }
    });
};

exports.useRateLimit = useRateLimit;