// Al click sull'icona dell'hamburger menu, deve essere visualizzato il menu
// mobile e al click sull'icona "X" il menu mobile deve scomparire.

/*======== Metodo jQuery senza classi e funzioni hide e show =======*/
// aggiungere una funzione che faccia comparire l'hamburger menu al click dell'cona
// $('.header-right > a').click(
//     function() {
//         $('.hamburger-menu').show('fast');
// });
//
// // aggiungere funzione che chiuda l'hamburger menu al click dell'apposita icona
// $('.hamburger-menu > a').click(
//     function() {
//         $('.hamburger-menu').hide('fast');
// });

/*======== Metodo jQuery senza classi e funzioni fadein e fadeout =======*/
// aggiungere una funzione che faccia comparire l'hamburger menu al click dell'cona
// $('.header-right > a').click(
//     function() {
//         $('.hamburger-menu').fadeIn('fast');
// });
//
// // aggiungere funzione che chiuda l'hamburger menu al click dell'apposita icona
// $('.hamburger-menu > a').click(
//     function() {
//         $('.hamburger-menu').fadeOut('fast');
// });

/*========= Metodo jQuery aggiungendo classi =========*/
$('.hamburger-menu').addClass('not-visible');

//aggiungere una funzione che faccia comparire l'hamburger menu al click dell'cona
$('.header-right > a').click(
    function() {
        $('.hamburger-menu').addClass('visible');

});

// aggiungere funzione che chiuda l'hamburger menu al click dell'apposita icona
$('.hamburger-menu > a').click(
    function() {
        $('.hamburger-menu').removeClass('visible');
});
