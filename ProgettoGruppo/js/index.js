var bill = document.getElementById("bill");
var range = document.getElementById("customRange1");
var tip = document.getElementById("tip");
var totalBill = document.getElementById("totalBill");
var counter = document.getElementById("counter");

(function (){
  range.value = 0;
  counter.innerHTML = +range.value + "%";
})();

function updateTip(){
  counter.innerHTML = range.value + "%";
  console.log(range.value)
}

function results(){
  tip.value = (+range.value).toFixed(2);
  let billValue = (+range.value) + (+bill.value);
  totalBill.value =  billValue.toFixed(2);
}

// Aggiorna il valore della barra e mostra il risultato
range.oninput = () => {
  updateTip();
  if( bill.value != "" ){
    results();
  } 
}