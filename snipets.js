
var theTinyPublisher = function()
{
    var subscribers = [];
    var publicModule = {};
    publicModule.AddSubScriber = function(subCallback)
    {
        subscribers.push(subCallback);        
    }

    publicModule.PublishMessage = function(message)
    {
    	subscribers.forEach(function(subscriber) {
    		subscriber(message);
		});        	
    }
}


var aTruth = function (aPub) {
    var publicModule = {};
	publicMoudle.number = 0;
	publicModule.ChangeState = function(aNumber) {
		publicMoudle.number = aNumber;
		aPub.PublishMessage(5);
	};
	return publicModule;
};

var aSubscriber = function(aPub)
{
	aPub.AddSubScriber(function(message) { console.log(message); });
	return {};
}


var thePub = theTinyPublisher();
var theTruth = aTruth(thePub);
var theSubscriber = aSubscriber(thePub);