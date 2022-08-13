const BlogPost = require('../model/BlogPost');
const helpers = require('../../util/mongoose');

class SiteController {
    async index(req, res, next) {
        BlogPost.find({})
            .then((blogs) => {
                res.render('home', {
                    blogs: helpers.mutilbleMongoosetoObject(blogs),
                });
            })
            .catch((err) => next(err));
    }
}
module.exports = new SiteController();
