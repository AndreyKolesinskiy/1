
describe('Entering name', function() {
  it('Entering Andrew', function() {
    browser.get('https://angularjs.org/');
    element(by.model('yourName')).sendKeys('Andrew');
   

    

    expect(element(by.binding('yourName')).getText()).
        toEqual('Hello Andrew!'); 
  });
});