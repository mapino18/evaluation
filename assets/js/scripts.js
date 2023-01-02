// GENERATION DE MOT DE PASSE EN JAVASCRIPT
const generateMDP = () =>{
    // Chaine de caractère pour le MDP
    let caractere = 'azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN123456789!ù$&é"(-è_çà)='

    let long = Math.floor(Math.random()*8)
    long = 8 + long

    let motdepasse = ''
    for(let i=0; i<=long;i++){
        motdepasse+= caractere.charAt(Math.floor(Math.random()*caractere.length))        
    }
    document.getElementById('password').value = motdepasse
    document.getElementById('confirmpassword').value = motdepasse
}
// VERIFICATION SI LES 2 MOTS DE PASSESS CORRESPONDES
const verifPassword = () =>{
    let password = document.getElementById('password')
    let confirmpassword = document.getElementById('confirmpassword')
    let message = document.getElementById('message')

    if( password == confirmpassword){
        if(password.value.lenght >= 8){
            
            message.innerHTML = '';
            message.style.background = 'white'
            return true
        }else{
            message.innerHTML = 'Longueur du mot de passe incorrect';
            message.style.background = 'red'
            return false
        }
    }else{
        message.innerHTML = 'Les 2 mots de passes ne corresponde pas';
        message.style.background = 'red'

        return false
    }
}

//REGEX SUR LE CONTROL DE L'EMAIL
const verifEmail = (element) => {
    let regex = /^[a-z0-9.-_]{4,}@+[a-z0-9.-_]{4,}.+[a-z]{2,}$/i

    if(regex.test(element.value)){
        element.style.background = 'green'
        return true
    }else{
        element.style.background = 'red'
        return false
    }
}

//REGEX SUR LE CONTROL DU TELEPHONE
const verifTel = (element) => {
    let regex = /^[0-9]{10}$/i
    if(regex.test(element.value)){
        element.style.background = 'green'
        return true
    }else{
        element.style.background = 'red'
        return false
    }
}

// Vider le formulaire et afficher un message dans une div
function viderFormulaire(){
    document.getElementById('formulaire_ajax').reset()
    document.getElementById('validation').innerText = " Le formulaire a bien été envoyé"
    
}

// Appel d'AJAX
(function(){
    let AjaxRequest;
    document.getElementById('ajax_js').addEventListener('click', chargerAjax);
    document.getElementById('submit').addEventListener('click', viderFormulaire)
    function chargerAjax(){    
        AjaxRequest = new XMLHttpRequest();
        if(!AjaxRequest){
            console.log("impossible de créer une instance");
            return false;
        }
        AjaxRequest.onreadystatechange = chargeContenu;
        AjaxRequest.open('GET', 'assets/ajax/formulairejs.php');
        AjaxRequest.send();
    }
    
    function chargeContenu(){
        if(AjaxRequest.readyState === XMLHttpRequest.DONE){
            if(AjaxRequest.status === 200){
                document.getElementById('charge').innerHTML = AjaxRequest.responseText;                
            }
            else{
                alert('Une erreur est survenue. Apprenez à bien coder');
            }
        }
    }

})();
