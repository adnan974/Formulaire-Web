function verifyNameInput(name){
    let nameLength = name.length;
    let result = false;
    if (nameLength > 2){
        result = true;
    }
    return result;
}

function verifyAgeInput(age){
    let result = false;
    if(age > 5 && age < 140){
        result = true;
    }
    return result;
}

function verifyPseudoInput(pseudo){
    let result = false;
    let pseudoLength = pseudo.length;
    if(pseudoLength > 4){
        result = true;
    }
    return result;
}

function verifyMdpInput(mdp){
    let result = false;
    let mdpLength = pseudo.length;
    if(mdpLength > 5){
        result = true;
    }
    return result;
}

function verifyIfSameString(string1,string2){
    let result = false;
    if(string1 === string2){
        result = true;
    }
    return result;
}



var formId = document.getElementById('my_form');
var radioSexeId = document.querySelectorAll('#sexe_masculin');
var nameId = document.getElementById('nom');
var textErrorForName = document.getElementById('ErrorInputSyntax');

formId.addEventListener('submit',function(e){
    /*alert(radioSexeId[1].checked);
    if (radioSexeId[0].checked == false && radioSexeId[1].checked == false){
        alert("veuillez selectionner un sexe");
    }*/

    let nameInputValue = nameId.value;
    if (verifyNameInput(nameInputValue) == false){
        alert("erreur dans le champs nom");
    }
  
})


