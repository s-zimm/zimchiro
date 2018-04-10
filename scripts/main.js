const $navBtn = $('[data-hamburger-button]');
const $navMenu = $('[data-nav-menu]');
const $jumperTop = $('[data-jumper-top]');
const $jumperBottom = $('[data-jumper-bottom]');
const $toTop = $('[data-to-top-button]');

let clickHandlers = () => {
    $navBtn.click(() => {
        $navBtn.toggleClass('rotated');
        $navMenu.toggleClass('translate-menu');
    });
    $toTop.click(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
}

let checkOffsetBottom = (topOrBottom, element) => {
    switch (topOrBottom) {
        case 'top':
            return element.offset().top;
        case 'bottom':
            return element.offset().bottom;
    }
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