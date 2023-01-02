$(document).ready(function(){
    // GESTIONNAIRE DE MOT DE PASSE
    $('#btn_generate_mdp').on('click', function(){
        // Chaine de caractère pour le MDP
        let caractere = 'azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN123456789!ù$&é"(-è_çà)=';
        let long = Math.floor(Math.random()*8);
        long = 8 + long;
        let motdepasse = '';
        for(let i=0; i<=long;i++){
            motdepasse+= caractere.charAt(Math.floor(Math.random()*caractere.length));
        }
        console.log(motdepasse);
        $('#password').val(motdepasse);
        $('#confirmpassword').val(motdepasse);
    })

    // VERIFICATION SI LES 2 MOTS DE PASSESS CORRESPONDES
    $('#confirmpassword').on('change', function(){
        let password = $('#password').val();
        let confirmPassword = $('#confirmpassword').val();
        if(password != confirmPassword){
            $('#message').html("Les mots de passe ne correspondent pas !!")
            $(this).css('background', 'red');
            return false
        }else{
            $('#password').css('background', 'green');
            $('#confirmpassword').css('background', 'green');
            return true
        }
    })

    // REGEX SUR L'EMAIL
    $('#email').on('change', function(){
        // Initialisation de la regex
        let regex = /^[a-z0-9.-_]{4,}@+[a-z0-9.-_]{4,}.+[a-z]{2,}$/i
        if(regex.test($(this).val())){
            $(this).css('background', 'green');
            return true
        }else{
            $(this).css('background', 'red');
            return false
        }
    })

    // REGEX SUR LE NUMERO DE TELEPHONE
    $('#tel').on('change', function(){
        // Initialisation de la regex
        let regex = /^[0-9]{10}$/i
        if(regex.test($(this).val())){
            $(this).css('background', 'green');
            return true
        }else{
            $(this).css('background', 'red');
            return false
        }
    })


    // VALIDATION DU FORMULAIRE
    $('#formulaire_ajax').on('submit', function(){
        let formulaire = $('#formulaire_ajax').serialize();
        $.ajax({
            url: 'assets/ajax/formulairejquery.php',
            method: 'GET',
            data: formulaire,
        })
        .done(function(response){
            $('#validation').html('Le formulaire a bien été envoyé');
            $('#tel').css('background', 'white');
            $('#email').css('background', 'white');
            $('#formulaire_ajax')[0].reset();

        })
        .fail(function(error){
            alert('Le formulaire ne peut être charger');

        })
        return false;
    })






    // AJAX AVEC JQUERY
    $('#ajax_js_jquery').on('click', function(){
        let formulaire = $('#formulaire_ajax').serialize();
        $.ajax({
            url: 'assets/ajax/formulairejquery.php',
            method: 'GET',
            data: formulaire,
        })
        .done(function(response){
            alert(response);
            $('#charge').html(response);
        })
        .fail(function(error){
            alert('Le formulaire ne peut être charger');
        })
        return false;
    })

})