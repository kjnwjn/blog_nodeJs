const newRouter = require('./new');
const siteRouter = require('./site');
const blogRouter = require('./blog');
const meRouter = require('./me');


function route(app) {
    app.use('/new', newRouter);
    app.use('/blog', blogRouter);
    app.use('/me', meRouter);
    app.use('/', siteRouter);
}

module.exports = route;
