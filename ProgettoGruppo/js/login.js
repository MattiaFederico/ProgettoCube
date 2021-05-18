function login(){
  let user = {
    username: "gruppocube",
    password: "groupCUBEE!3"
  };

  let username = $("#username").val();
  let password = $("#password").val();

  username = checkUsername( username );
  password = checkPassword( password );

  if( username === user.username && password === user.password ) {
    return true;
  } else {
    return false;
  }
    
}

function checkUsername( username ){
  let usernameSel = $("#username");
  let numCheck = /[0-9]/g;
  let specialChars = /\W|_/g;
  // Array di numeri trovati
  let stringNoNum = username.replace( numCheck, '' );
  let stringNoSpace = stringNoNum.replace( / /g, '' );
  let stringNoSpecial = stringNoSpace.replace( specialChars, '' );
  let tolowerString = stringNoSpecial.toLowerCase();
  usernameSel.val(tolowerString);
  return tolowerString;
}

function checkPassword( password ){
  if( password.length === 12 ){
    let specialChars = ["!","“","£","$","%","&","/","(",")","=","?","^"];
    let numbers = [0,1,2,3,4,5,6,7,8,9];
    let char10 = password.charAt(10);
    let char11 = password.charAt(11);

    specialChars.forEach( val => {
      if( char10 === val ){
        return char10;
      }
    });

    numbers.forEach( val => {
      if( char11 === val ){
        return char11;
      }
    })

    let lowerPassword = password.slice(0, 5).toLowerCase();
    let upperPassword = password.slice(5, 10).toUpperCase();
    let validPassword = lowerPassword + upperPassword + char10 + char11;
    let passwordSel = $("#password");
    passwordSel.val(validPassword);
    return validPassword;
    // MANCA AND NUM   
  }
}

$("#loginBtn").click( () => {
  if( !login() ){
    $(".msg").html("Credenziali errate!");
  } else {
    window.location.href = "index.html";
  }
});