const express = require('express');
const { ROUTES } = require('./resources/routes.config');
const { useProxy } = require('./services/proxy.service');
const { useLog } = require('./services/log.service');
const { useRateLimit } = require('./services/rate-limit.service');
const { useHelmet } = require('./services/helmet.service');
const { useBodyParser } = require('./services/body-parser.service');
const { useCors } = require('./services/cors.service');

const app = express();
const port = 3000;

useHelmet(app, ROUTES);
useBodyParser(app, ROUTES);
useCors(app, ROUTES);
useRateLimit(app, ROUTES);
useLog(app);
useProxy(app, ROUTES);


app.listen(port, () => {
    console.log(`Running gateway in http://localhost:${port}`);
});