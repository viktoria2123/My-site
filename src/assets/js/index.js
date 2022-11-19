console.log("test");
let h1 = document.querySelectorAll('.animation');
let active = 'animation__active';

let isInViewport = function (elem) {
    let bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
};

addEventListener('scroll', (event) => {
    for (let i = 0; i < h1.length; i++) {
        if (isInViewport(h1[i])) {
            h1[i].classList.add(active);
        }
    }
});