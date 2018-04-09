const $navBtn = $('[data-hamburger-button]');
const $navBtnBars = $('[data-hamburger-bars]');
const $navMenu = $('[data-nav-menu]');
const $jumperTop = $('[data-jumper-top]');
const $jumperBottom = $('[data-jumper-bottom]');

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