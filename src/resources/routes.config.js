const ROUTES = [
    {
        url: '/shipping',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 10 * 60 * 1000,
            max: 100,
            message: 'Muitas contas criadas a partir deste IP, tente novamente após uma hora',
            standardHeaders: true,
            legacyHeaders: false
        },
        proxy: {
            target: 'http://localhost:3002/shipping',
            changeOrigin: true,
            pathRewrite: {
                [`^/shipping`]: ''
            }
        }
    }
];

exports.ROUTES = ROUTES;