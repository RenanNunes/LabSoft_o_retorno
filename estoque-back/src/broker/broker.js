const redis = require("redis");

const connectionParameters = {
	host: "redis.redis-renannunes",
	port: 6379,
	password: "okteto"
}

const sendTask = function(queue, task){
	const sender = redis.createClient(connectionParameters);
	sender.on("error", (err) => {
		console.log("Send error: ", err);
		sender.quit();
	});
	sender.on("ready", (err) => {
		console.log("Sending Task: " + task);
		sender.rpush(queue, JSON.stringify(task));
		sender.quit();
	});
}

//sendTask("order", {"message": "Hello world from Florida!"});

const receiveTask = function(queue, func, refreshTime = 15 * 60 * 1000) {
	const receiver = redis.createClient(connectionParameters);
	receiver.on("error", (err) => {
		console.log("Receive error: ", err);
		receiver.quit();
	});

	const runTask = function () {
		receiver.lpop(queue, function (err, reply) {
			if (reply != null) {
				func(reply);
				runTask();
			}
		});
	};

	receiver.on("ready", (err) => {
		setInterval(() => {
			receiver.llen(queue, function (err, queueLen) {
				console.log("Checking Tasks: " + queueLen);
				if (queueLen != 0){
					runTask()
				}
			});
		}, refreshTime);
	});
}

//receiveTask("order", (reply) => console.log("Processing order: ", reply), 1000);

const publish = function(channel, event){
	const publisher = redis.createClient(connectionParameters);
	publisher.on("error", (err) => {
		console.log("Publish error: ", err);
		publisher.quit();
	});
	publisher.on("ready", (err) => {
		console.log("Publishing: " + reply);
		publisher.publish(channel, JSON.stringify(event));
		publisher.quit();
	});
}

//publish("notification", {"message": "Hello world from Asgardian!"});

const subscribe = function (channel, func){
	var subscriber = redis.createClient(connectionParameters);
	subscriber.on("error", (err) => {
		console.log("Subscriber error: ", err);
		subscriber.quit();
	});	
	subscriber.on("message", function (channelR, message) {
		if (channel == channelR){
			console.log("Subscribed: " + reply);
			func(message);
		}
	});
	subscriber.on("ready", (err) => {
		subscriber.subscribe(channel);
	})
}

//subscribe("notification", (message) => console.log("Message: " + message));

module.exports = {
	sendTask,
	receiveTask,
	publish,
	subscribe
}