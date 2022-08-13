const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-maker')
var mongooseDelete = require('mongoose-delete');
const BlogPost = new Schema(
    {
        author: { type: String, default: 'user'},
        title: { type: String, required: true},
        body: { type: String, default: 'empty content' },
        description: { type: String,},
        image: { type: String, },
        videoId: { type: String, },
        slug: { type: String, slug: 'title' ,unique: true}
    },
    { timestamps: true },
);

// add plugin options
mongoose.plugin(slug);
BlogPost.plugin(mongooseDelete, { 
    deleteAt: true ,
    overrideMethods: 'all' 
});

module.exports = mongoose.model('blogposts', BlogPost);
