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
  var newArr = [name, ...kitten];
  return newArr;
}

function removeLastKitten(){
  var lastKitten = kittens.slice(-1);
  return kittens;
}

function removeFirstKitten(){
  return kittens.slice(1);
}