function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    blocks = Math.abs(startBlock.slice(0, -2) - endBlock.slice(0, -2))
    return blocks <= blockRange ? `within range by ${blocks}` : `${blocks - blockRange} blocks out of range`
  }
}

function produceTipCalculator(percentage) {
  return function(fare) {
    return fare * percentage
  }
}

function createDriver(name) {
  let DriverId = 0

  return class {
    constructor(name) {
      this.id = DriverId++
      this.name = name
    }
  }
}

describe('createDriver', function(){
  const Driver = createDriver()

  it('returns a class that allows us to create a driver with a name attribute', function(){
    expect(new Driver('Sam').name).to.equal('Sam')
  })

  it('increments the driverId each time a driver is created', function(){
    expect(new Driver('Sam').id).to.not.equal(new Driver('Bob').id)
  })
})
