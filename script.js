zmiana = 0;

function changered(button){
   button.style.backgroundColor = "#f00";
   zmiana = 1;
}


function changeblue(button){
    button.style.backgroundColor = "#00f"
    zmiana = 2;
}

function changegreen(button){
    button.style.backgroundColor = "#0f0";
    zmiana = 3;
}

function allwhite(){
    if(zmiana == 1 || zmiana == 2){

    }
}


function validateForm(){
    var FirstName = document.forms["myForm"]['login'].value;
    var Email = document.forms["myForm"]["mail"].value;
    var Password = document.forms["myForm"]["password"].value;
    var ConfirmPassword = document.forms["myForm"]["password2"].value;

    if(FirstName == ""){
        alert("Porze podac imie.")
        return false;
    }
    if (length.FirstName < 3){
        alert("login zakrotki")
    }
    if(Email == ""){
        alert("Porze podac Email")
        return false;
    }
    if(Password == ""){
        alert("Prosze podac haslo.")
        return false;
    }
    if(ConfirmPassword == ""){
        alert("Porze podac haslo")
        return false;
    }
    if(Password !== ConfirmPassword){
        alert("Hasla sie nie zgadzają")
        return false;
    }
    alert("Formular zostal prawidlowo wypelniony.")
    return true;

}




    










