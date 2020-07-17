const Post=require("../models/post");
const { findById } = require("../models/post");

module.exports.home = function(req, res){
    // console.log(req.cookies);
    // res.cookie('user_id', 25);
    
    // by this method below only the user id will be shown withg the post 
    // Post.find({},function(err,posts){
    //     return res.render('home', {
    //         title: "Codiel Home",
    //         posts:posts
    //     });


    // });
// bpopulating the user of each post with the id and other info of the userid
    Post.find({}).populate("user").exec(function(err,posts){
        return res.render('home', {
            title: "Codiel Home",
            posts:posts
        });
    });

    
}

// module.exports.actionName = function(req, res){}