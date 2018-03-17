var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var Article = new Schema({
	title:{
		type: String,
		index: true
	},
	description:{
		type: String,
		index: true
	},
	// image:{
	// 	type: Schema.Types.Mixed
	// },
	// tags:{
	// 	type: String
	// },
	// author:{
	// 	type: String
	// }
});

module.exports = mongoose.model('articles',Article);