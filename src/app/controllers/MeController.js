const BlogPost = require('../model/BlogPost');
const helpers = require('../../util/mongoose');

const { mongoosetoObject } = require('../../util/mongoose');

class MeController {
    
    // [GET] /me/stored/blog
    storedBlog(req, res, next) {
        Promise.all([BlogPost.countDocumentsDeleted(), BlogPost.find({})])
            .then(([deletedCount,blogs]) => res.render('me/stored-blog', {
                deletedCount  : deletedCount,
                blogs : helpers.mutilbleMongoosetoObject(blogs)
            }))
            .catch(next)
    }

    // [GET] /me/trash/blog
    trashBlog(req, res, next) {
        BlogPost.findDeleted({})
            .then(blogs => 
                res.render('me/trash-blog', {blogs : helpers.mutilbleMongoosetoObject(blogs)}))
            .catch(next)
        
    }

}
module.exports = new MeController();
