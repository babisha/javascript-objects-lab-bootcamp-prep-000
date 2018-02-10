var recipes = { flour: 'white', sugar: 'brown', cream: 'buttercream'}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign ({}, recipes)
    
    return newObj
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

function destructivelyDeleteFromObjectByKey(object, key) {}

