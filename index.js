const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open')
};
function toggleActive(e) {
    if (e.propertyName.includes('flex')) { //En safari el evento es flex, en los demas es flex-grow. Con este incllude contemplamos ambas cosas y descartamos en evento size
        this.classList.toggle('open-active')
    }
};

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));