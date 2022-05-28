const { createProxyMiddleware } = require('http-proxy-middleware');

const useProxy = (app, routes) => {
    routes.forEach(route => {
        app.use(route.url, createProxyMiddleware(route.proxy));
    });
};

exports.useProxy = useProxy;