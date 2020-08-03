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
    let mdpLength = mdp.length;
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
var radioSexeinputId = document.querySelectorAll('.selection_sexe');
var nameInputId = document.getElementById('nom');
var firstNameInputId = document.getElementById('prenom');
var ageInputId = document.getElementById('age');
var pseudoInputId = document.getElementById('pseudo');
var mdpInputId = document.getElementById('mdp');
var mdpConfirmationInputId = document.getElementById('mdp_confirmation');

var toto = document.querySelector('.TextErrorInputSyntax');
var textErrorForNameStyle = document.querySelector('.TextErrorInputSyntax').style;


formId.addEventListener('submit',function(e){


    e.preventDefault();

    if(radioSexeinputId[0].checked == false && radioSexeinputId[1].checked == false){
        alert("erreur, veuillez selection une civilité");
    }

    let nameInputValue = nameInputId.value;
    if (verifyNameInput(nameInputValue) == false){
        toto.classList.add("TextErrorInputSyntaxVisible");
        textErrorForNameStyle.display = "inline-block"
        alert("erreur dans le champs nom");
    }

    let fisrtNameInputValue = firstNameInputId.value;
    if (verifyNameInput(fisrtNameInputValue) == false){
       alert("erreur dans le champs prenom");
    }

    let ageInputValue = ageInputId.value;
    if(verifyAgeInput(ageInputValue) == false){
       alert("Erreur age nom compris entre 5 et 140");
    }

    let pseudoInputValue = pseudoInputId.value;
    if(verifyPseudoInput(pseudoInputValue) == false){
       alert("Erreur dans le champs pseudo");
    }

    let mdpInputValue = mdpInputId.value;
    if(verifyMdpInput(mdpInputValue) == false){
       alert("Erreur dans le champs mot de passe");
    }

    let mdpConfirmationInputValue = mdpConfirmationInputId.value;
    if(verifyIfSameString(mdpConfirmationInputValue,mdpInputValue) == false){
       alert("Mdp non confirmé");
    }

})


