// Al click sull'icona dell'hamburger menu, deve essere visualizzato il menu
// mobile e al click sull'icona "X" il menu mobile deve scomparire.

// aggiungere una funzione che faccia comparire l'hamburger menu al click dell'cona
$('.header-right > a').click(
    function() {
        $('.hamburger-menu').show('fast');
});

// aggiungere funzione che chiuda l'hamburger menu al click dell'apposita icona
$('.hamburger-menu > a').click(
    function() {
        $('.hamburger-menu').hide('fast');
});
