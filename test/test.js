describe('test', function() {
  it('should be a function', function() {
    expect(lol).to.be.a('function');
  });

  it('should work as expected', function() {
    expect(lol()).to.equal('lol');
    expect(lol('hello ')).to.equal('hello lol');
  });
});