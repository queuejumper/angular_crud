var express = require('express'),
	app = express(),
	appRoutes = express.Router(),
	Article = require('../models/articleSchema');

appRoutes.route('/create').post(function(req,res){
	req.body.image.mv('public/img');
	var article = new Article({
		title: req.body.title,
		description: req.body.description
	});
	article.save()
	.then(article => {
		res.status(200).json({Message: 'New article added successfully!',article});
	}).catch(err => {
		res.status(400).send({Message: 'We could not create the new article! %s',err});
	});
});
appRoutes.route('/show').get(function(req,res){
	Article.find(function(err,articles){
		if(err)
			res.status(400).send({Message: 'We could not retrieve articles :( %s',err});
		else
			res.status(200).json(articles);
	})
});

appRoutes.route('/delete/:id').delete(function(req,res){
	Article.findByIdAndRemove({
		_id: req.params.id
	},function(err,article){
		if(err)
			res.status(400).json({Message: 'We could not delete this article :( %s',err});
		else
			res.status(200).json({Message: 'Article deleted successfully!'});
	});
});

appRoutes.route('/show/:id').get(function(req,res){
	Article.findById(req.params.id,function(err,article){
		if(err)
			res.status(400).json({Message: 'Something went wrong!'});
		else
			res.status(200).json(article);
	});
});

appRoutes.route('/update/:id').put(function(req,res){
	Article.findByIdAndUpdate(req.params.id,{
		title: req.body.title,
		description: req.body.description
	},{new: true},function(err,article){
		if(err)
			res.status(400).json({Message: 'We could not modify this article! %s',err});
		else
			res.status(200).json({Message: "Article updated successfully!",article});
	});
});
module.exports = appRoutes;