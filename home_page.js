
var home_page = function () {
	this.enterYourName = function(name) {
		element(by.model('yourName')).sendKeys(name);
	};
	this.getGreeting = function () {
		return element(by.binding('yourName')).getText();

	};

};
module.exports = new home_page();