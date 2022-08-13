const BlogPost = require('../model/BlogPost');
const helpers = require('../../util/mongoose');

const { mongoosetoObject } = require('../../util/mongoose');

class BlogController {
    index(req, res, next) {
        BlogPost.findOne({ slug: req.params.slug })
            .then((blog) => {
                res.render('blog/detail', { blog: mongoosetoObject(blog) });
            })
            .catch(next);
    }
    create(req, res, next) {
        res.render('blog/createBlog');
    }
    store(req, res, next) {
        // const formData = req.body
        const blog = new BlogPost(req.body)
        blog.save()
            .then(() => res.redirect('/'))
            .catch((err)  => {})
    }

    // [PUT] /blog/:id
    edit(req, res, next){
        BlogPost.findById(req.params.id)
            .then(blog => {
                res.render('blog/edit',{
                    blog : helpers.mongoosetoObject(blog)
                })
            })
            .catch(next)
        
    }
    // [PUT] /blog/:id
    update(req, res, next){
        BlogPost.updateOne({id : req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/blog'))
            .catch(next)
        
    }

    // [DELETE] /blog/:id
    deleteOne(req, res, next){
        BlogPost.deleteById(req.params.id)
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [DELETE] /blog/:id/destroy
    destroy(req, res, next){
       
        BlogPost.deleteOne({_id :req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [PATCH] /blog/:id/restore
    restore(req, res, next){
        BlogPost.restore({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next)
        
    }

    // [POST] /blog/handle-form-action
    handleFormAction(req, res, next){
        switch(req.body.action){
            case 'delete':
                BlogPost.delete({_id : {$in : req.body.blogIds}})
                .then(() => res.redirect('back'))
                .catch(next)
                break;
            default:
                res.json('action failed')
        }
        
    }

}
module.exports = new BlogController();
