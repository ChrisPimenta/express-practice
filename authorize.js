const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user === 'john') {
        // This req.user variable then becomes available inside the next middleware call or app.
        req.user = { name: 'john', id: 3 };
        next();
    } else {
        // No need for next, because end immediately.
        res.status(401).send('Unauthorized');
    }
}

module.exports = authorize;