const receivesAFunction = function(callback) {
  return callback()
}

const returnsANamedFunction = function() {
  const namedFunction = (a,b) => a + b
  return namedFunction
}

const returnsAnAnonymousFunction = function() {
  return function() {
    console.log("hey!")
  }
}
