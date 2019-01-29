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
  
 var recipes = Object.assign({}, object);
 console.log(recipes)
 
  delete (recipes.breakfast);
  return object
}