// Created at Mon May 08 2017 21:40:32 GMT+0800 (China Standard Time)

module.exports.up = function(context, callback) {
	console.log("haha"+context);
	callback();
};

module.exports.down = function(context, callback) {
	callback();
};

// module.exports.check = function(context, callback) { ... };