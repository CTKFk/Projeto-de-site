
document.addEventListener('DOMContentLoaded', function() {
    const hoverelement = document.querySelector('.hoverelement');
    const pedromusica = document.getElementById('pedromusica');

    hoverelement.addEventListener('mouseover', function() {
        pedromusica.play();
    });

    hoverelement.addEventListener('mouseout', function() {
        pedromusica.pause();
        pedromusica.currentTime = 0;
    });
});
