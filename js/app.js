// capter le click sur l'écran
$(document).click(function(e){

    // récupérer l'abscisse et l'ordonnée du click
    let width = Math.floor(Math.random() * 100) + 50;

    let x = e.pageX - (width/2);
    let y = e.pageY - (width/2);

    let red = Math.floor(Math.random() * 256) + 1;
    let green = Math.floor(Math.random() * 256) + 1;
    let blue = Math.floor(Math.random() * 256) + 1;

    let background = "rgb(" + red + "," + green + "," + blue + ")";

    // générer un rond avec une width et une height aléatoire avec une couleur aléatoire
    let circle = "<div style='background:"+ background +";width:" + width + "px;height:" + width + "px;position:absolute;top:" + y + "px;left:" + x + "px;border-radius:50%'> </div>";

    $("body").append(circle);

    $("div").last().animate({
        top : $(window).height() - width
    }, 2000, function() {
        $(this).fadeOut(1000);
    });

});
            // positionner ce rond au centre du click
                // faudra récupérer le rond générer, faire une animation qui l'envoit vers le bas
                    // faudra récupérer la taille de l'écran - la hauteur ou se trouve le rond
                        // et faire l'animation vers le bas avec une taille en px
                            // une fois l'animation terminée faudra le faire disparaitre avec un fadeout