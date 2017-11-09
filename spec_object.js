
describe('Entering name', function() {
    var home_page = require('./home_page.js');
  it('Entering name using page objects', function (){
  	home_page.enterYourName('Andrew');
  	var sayHello = home_page.getGreeting();
  	expect(sayHello).toEqual('Hello Andrew!');

  });



});