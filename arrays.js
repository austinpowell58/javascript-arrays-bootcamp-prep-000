var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]
function addElementToBeginningOfArray(x , y) {
  [y, ...x]
  return x
}
function destructivelyAddElementToBeginningOfArray (x, y) {
  x.unshift(y)
  return x
  
}
function addElementToEndOfArray (x , y) {
  [...x, y]
  return x
}
function destructivelyAddElementToEndOfArray(x, y) {
  x.push(y)
  return x
}