var mongoose = require('mongoose');

var TopicSchema = new mongoose.Schema({
	topicName: String,
	topicDescription: String,
	topicCategory: String,
	user: Object,
	posts: [],
	createdAt: {type: String, default: Date()}
});

mongoose.model('Topic', TopicSchema);