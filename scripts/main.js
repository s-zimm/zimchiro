const $navBtn = $('[data-hamburger-button]');
const $navBtnBars = $('[data-hamburger-bars]');
const $navMenu = $('[data-nav-menu]');

let clickHandlers = () => {
    $navBtn.click(() => {
        $navBtnBars.toggleClass('rotated');
        $navMenu.toggleClass('translate-menu');
    });


}

const main = () => {
    clickHandlers();
}

main();