const expect = chai.expect;

describe('closures', function() {
  

  describe('createDriver', function(){
    const Driver = createDriver()

    it('returns a class that allows us to create a driver with a name attribute', function(){
      expect(new Driver('Sam').name).to.equal('Sam')
    })

    it('increments the driverId each time a driver is created', function(){
      expect(new Driver('Sam').id).to.not.equal(new Driver('Bob').id)
    })
  })
})
