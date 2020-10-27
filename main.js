// Al click sull'icona dell'hamburger menu, deve essere visualizzato il menu
// mobile e al click sull'icona "X" il menu mobile deve scomparire.

/*======== Metodo jQuery senza classi e funzioni hide e show =======*/
// aggiungere una funzione che faccia comparire l'hamburger menu al click dell'cona
// $('.header-right > a').click(function() {
//         $('.hamburger-menu').show('fast');
// });
//
// // aggiungere funzione che chiuda l'hamburger menu al click dell'apposita icona
// $('.hamburger-menu > a').click(function() {
//         $('.hamburger-menu').hide('fast');
// });

/*======== Metodo jQuery senza classi e funzioni fadein e fadeout =======*/
// aggiungere una funzione che faccia comparire l'hamburger menu al click dell'cona
// $('.header-right > a').click(function() {
//         $('.hamburger-menu').fadeIn('fast');
// });
//
// // aggiungere funzione che chiuda l'hamburger menu al click dell'apposita icona
// $('.hamburger-menu > a').click(function() {
//         $('.hamburger-menu').fadeOut('fast');
// });

/*========= Metodo jQuery aggiungendo classi =========*/
//
// //aggiungere una funzione che faccia comparire l'hamburger menu al click dell'cona
// $('.header-right > a').click(function() {
//         $('.hamburger-menu').addClass('active');
//
// });
//
// // aggiungere funzione che chiuda l'hamburger menu al click dell'apposita icona
// $('.hamburger-menu > a').click(function() {
//         $('.hamburger-menu').removeClass('active');
// });

/*========= Metodo Plain JS aggiungendo classi e senza modificare l'HTML=========*/
// seleziona il box che se cliccato apre l'hamburger menu (ultimo elemento dell'header right)
var hamburgerMenuOpener = document.getElementsByClassName('header-right')[0].lastElementChild;

// seleziona il box che se cliccato chiude l'hamburger menu (unico elemento con classe close)
var hamburgerMenuCloser = document.getElementsByClassName('close')[0];

// seleziona l'hamnburger menu (unico elemento con classe hamburger-menu)
var hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0];

hamburgerMenuOpener.addEventListener('click', function() {
    hamburgerMenu.classList.add('active');
});

hamburgerMenuCloser.addEventListener('click', function() {
    hamburgerMenu.classList.remove('active');
});
