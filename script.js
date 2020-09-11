//First Step//
var lattePrice = 2.00;
var espressoPrice = 1.50;
var mochaPrice = 3.00;
var cappuccinoPrice = 2.50;
var latteTag = document.getElementById('latte');
var espressoTag = document.getElementById('espresso');
var mochaTag = document.getElementById('mochaccino');
var cappuccinoTag = document.getElementById('cappuccino');

latteTag.innerHTML = lattePrice.toFixed(2);
espressoTag.innerHTML = espressoPrice.toFixed(2);
mochaTag.innerHTML = mochaPrice.toFixed(2);
cappuccinoTag.innerHTML = cappuccinoPrice.toFixed(2);

//Second Step//
var smallCupPrice = 0.00;
var mediumCupPrice = 1.25;
var largeCupPrice = 2.00;

var smallcupTag = document.getElementById('smallcup');
var mediumcupTag = document.getElementById('mediano');
var largecupTag = document.getElementById('grande');

smallcupTag.innerHTML = smallCupPrice.toFixed(2);
mediumcupTag.innerHTML = mediumCupPrice.toFixed(2);
largecupTag.innerHTML = largeCupPrice.toFixed(2);

//Third Step//
var wholemilkPrice = 0.00;
var lactosefreePrice = 0.50;
var almondmilkPrice = 1.25;
var oatmilkPrice = 2.00;

var wholemilkTag = document.getElementById('wholemilk');
var lactosefreeTag = document.getElementById('lactosefree');
var almondmilkTag = document.getElementById('almondmilk');
var oatmilkTag = document.getElementById('oatmilk');

wholemilkTag.innerHTML = wholemilkPrice.toFixed(2);
lactosefreeTag.innerHTML = lactosefreePrice.toFixed(2);
almondmilkTag.innerHTML = almondmilkPrice.toFixed(2);
oatmilkTag.innerHTML = oatmilkPrice.toFixed(2);

//Fourth Step//
var nowhipcreamPrice = 0.00;
var whipcreamPrice = 0.25;
var chocowhipcreamPrice = 0.50;

var nowhipcreamTag = document.getElementById('none');
var whipcreamTag = document.getElementById('whipcream');
var chocowhipcreamTag = document.getElementById('chocowhipcream');

nowhipcreamTag.innerHTML = nowhipcreamPrice.toFixed(2);
whipcreamTag.innerHTML = whipcreamPrice.toFixed(2);
chocowhipcreamTag.innerHTML = chocowhipcreamPrice.toFixed(2);

//Fifth Step//
var subtotalPrice = 0.00;
var onlinefeePrice = 0.25;
var taxPrice = 0.12;
var totalPrice = 0.00;

var subtotalTag = document.getElementById('subtotal');
var onlinefeeTag = document.getElementById('online-fee');
var taxTag = document.getElementById('tax');
var totalTag = document.getElementById('total');

subtotalTag.innerHTML = subtotalPrice.toFixed(2);
onlinefeeTag.innerHTML = onlinefeePrice.toFixed(2);
taxTag.innerHTML = taxPrice.toFixed(2);
totalTag.innerHTML = totalPrice.toFixed(2);

//Item/Objects

function Item(name, price){
  this.name = name;
  this.price = price;
}

function getName(){
  this.name;
}
function getPrice(){
  this.price;
}

//Select Function
function select(name, price){
  var newItem = new Item(name, price);
  var nameTag = newItem.name.toLowerCase() + "Tag";
  var priceTag = newItem.price;
  console.log(name);
  console.log(price);
  var summaryList = document.getElementById('summary-list');
  var li = document.createElement("li");
  var message = document.createTextNode(newItem.name +" $" +newItem.price);
  li.appendChild(message);
  alert("You added a" + newItem.name + " $" + newItem.price);
  subtotalPrice += newItem.price;
  taxPrice += (0.12 + newItem.price);
  totalPrice = subtotalPrice + onlinefeePrice + taxPrice;

  subtotalTag.innerHTML = subtotalPrice.toFixed(2);
  onlinefeeTag.innerHTML = onlinefeePrice.toFixed(2);
  taxTag.innerHTML = taxPrice.toFixed(2);
  totalTag.innerHTML = totalPrice.toFixed(2);
}

var payBtn = document.getElementById('payBtn');
payBtn.addEventListener('click', function(){
  alert("Gracias por comprar en la Cueva de Tarzan" + "Total: " + totalPrice);
})
