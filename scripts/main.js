const $navBtn = $('[data-hamburger-button]');
const $navBtnBars = $('[data-hamburger-bars]');
const $navMenu = $('[data-nav-menu]');
const $jumperTop = $('[data-jumper-top]');
const $jumperBottom = $('[data-jumper-bottom]');

// Google Maps callback
function initMap() {
    var zimchiro = {lat: 32.7567389, lng: -80.0436666};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: zimchiro
    });
    var marker = new google.maps.Marker({
      position: zimchiro,
      map: map
    });
}

let clickHandlers = () => {
    $navBtn.click(() => {
        $navBtnBars.toggleClass('rotated');
        $navMenu.toggleClass('translate-menu');
    });
}

let topJumperLoad = () => {
    setTimeout(() => {
        $jumperTop.removeClass('hidden');
        $jumperTop.addClass('jumper-text-top');
    }, 500)
}

let bottomJumperLoad = () => {
    setTimeout(() => {
        $jumperBottom.removeClass('hidden');
        $jumperBottom.addClass('jumper-text-bottom');
    }, 3000)
}

let mainPageLoadAnimations = () => {
    window.onload = () => {
        topJumperLoad();
        bottomJumperLoad();
    }
}

const main = () => {
    mainPageLoadAnimations();
    clickHandlers();
}

main();