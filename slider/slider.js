$(document).ready(function() {

    nbImages = $('.slide').length;

    function reorder() {
        for (let k = 0; k < nbImages; k++) {
            $('.slide').eq(k).css('order', k);
        }
    }
    reorder();
    compteur = 0;

    function carousel() {

        $('.reglette').animate({ left: '-960px' }, 1000, function() {

            $('.reglette').css('left', 0);
            $('.slide').eq(compteur).css('order', Number($('.slide').eq(compteur).css('order')) + nbImages);
            compteur++;

        });

        if (compteur == nbImages) {
            compteur = 0;
            reorder();
        }

    }

    timer = setInterval(carousel, 4000);



}); // Fin du DR