var recipes = { flour: 'white', sugar: 'brown', cream: 'buttercream'}

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object,key, value) {
  var ar = Object.assign(recipes)
  
  return ar
  
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, key, recipes)
  
  delete newObj[key]
  
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return object
}

