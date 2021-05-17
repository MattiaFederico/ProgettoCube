const api = {
  url: "https://jsonplaceholder.typicode.com/users"
}

async function apiCall(){
  return await fetch( api.url )
  .then( response => response.json() )
  .then( data => data )
}

function createTable( container, data ){
  
  let inputNum = parseFloat($("#inputNum").val());
 
  if( inputNum < 101 && inputNum > 0 ){
    let table = $("<table id='contentTable'></table>");
    let tableHead = $("<thead></thead>");
    let tableBody = $("<tbody></tbody>");
    data.forEach( (obj, key) => {
      let trHead = $("<tr></tr>");
      let trBody = $("<tr></tr>");

      for( prop in obj ){
        if( prop === "name" || prop === "address" ){
          if( key == 0 ){
            if( prop == "address" ){
              let addressObj = obj.address;
              let city = Object.keys(addressObj)[2];
              let toUpper = city.charAt(0).toUpperCase() + city.slice(1);
              let tdHead = $(`<td>${toUpper}</td>`);
              let tipHead = $("<td>Tip</td>");
              trHead.append(tdHead);
              trHead.append(tipHead);
              tableHead.append(trHead);
            } else {
              let toUpper = prop.charAt(0).toUpperCase() + prop.slice(1);
              let tdHead = $(`<td>${toUpper}</td>`);
              trHead.append(tdHead);
              tableHead.append(trHead);
            }
          }
          
          if( prop === "address" ){
            let tdBody = $(`<td id='${prop}'>${obj[prop].city}</td>`);
            trBody.append(tdBody);
            tableBody.append(trBody);
          } else {
            let tdBody = $(`<td id='${prop}'>${obj[prop]}</td>`);
            trBody.append(tdBody);
            tableBody.append(trBody);
          }
        }   
      }

      let city = obj.address.city;

      if( city === "Gwenborough" ){
        let percentageTip = (inputNum * 15) / 100;
        let changedTip = inputNum + percentageTip;
        let tipTd = $(`<td>€${changedTip}</td>`);
        trBody.append(tipTd);
      } else if( city === "Wisokyburgh" ){
        let percentageTip = (inputNum * 20) / 100;
        let changedTip = inputNum + percentageTip;
        let tipTd = $(`<td>€${changedTip}</td>`);
        trBody.append(tipTd);
      } else if( city === "McKenziehaven" ){
        let percentageTip = (inputNum * 25) / 100;
        let changedTip = inputNum + percentageTip;
        let tipTd = $(`<td>€${changedTip}</td>`);
        trBody.append(tipTd);
      } else {
        let tipTd = $(`<td>€${inputNum}</td>`);
        trBody.append(tipTd);
      }
      
      table.append(tableHead);
      table.append(tableBody);
    });

    container.append(table);
    $("#btnCreate").attr("disabled", true);
    $("#btnDelete").attr("disabled", false);
  } else {
    alert('Numero fuori limite');
  }
}

$(document).ready( () => {
  $("#btnDelete").attr("disabled", true);
});

$("#btnCreate").click( async () => {
  let container = $("#contentFromApi");
  let data = await apiCall();
  createTable(container, data);
});

$("#btnDelete").click( () => {
  $("#contentTable").remove();
  $("#btnDelete").attr("disabled", true);
  $("#btnCreate").attr("disabled", false);
});