var recipes= {
  breakfast: 'omlet'
 
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}
  
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  
  delete recipes.breakfast;
  return Object.assign({}, object)
}