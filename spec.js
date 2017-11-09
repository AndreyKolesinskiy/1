
describe('Entering name', function() {
  it('Entering Andrew', function() {
    browser.get('https://angularjs.org/');
    element(by.model('yourName')).sendKeys('Andrew');
   

    
    var sayHello = element(by.binding('yourName'));
    expect(sayHello.getText()).toEqual('Hello Andrew!'); 
  });
});