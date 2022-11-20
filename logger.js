const logger = (req, res, next) => {
    const { method, url } = req;
    const year = new Date().getFullYear();
    console.log(method, url, year);
    next();
}

module.exports = logger;