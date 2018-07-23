// Add your functions and code here
kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  return kittens.push(name);
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift(1);
}

function appendKitten(name){
  return [...kittens, name];
}

function prependKitten(name){
  var newArr = [name, ...kittens];
  return newArr;
}

function removeLastKitten(){
   var newArr = kittens.slice(-1);
   return newArr;
}

function removeFirstKitten(){
  return kittens.slice(1);
}