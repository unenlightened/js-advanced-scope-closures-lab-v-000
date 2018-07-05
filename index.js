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