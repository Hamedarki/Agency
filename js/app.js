class ScrollToggle {
    constructor(element) {
        this.container = element;
        this.toggles = this.container.querySelectorAll('.scroll-toggle__button');
        this.list = this.container.querySelector('.scroll-toggle__list');
        this.listItems = this.list.querySelectorAll('.scroll-toggle__list-item')
        this.scrollValue = 0;
    }
    init() {
        this.toggles.forEach(toggle => {
            toggle.addEventListener('mousedown', (e) => {
                this.move(e.target);
            })
            toggle.addEventListener('mouseup', (e) => {
                this.stop();
            })
        })
    }
    move(target) {
        if (target.classList.contains('scroll-toggle__button--right')) {
            this.interval = setInterval(() => {
                this.list.scrollLeft += 1;
            }, 1);
        } else {
            this.interval = setInterval(() => {
                this.list.ScrollLeft = this.scrollValue;
                this.list.scrollLeft -= 1;
            }, 1);
        }
    }
    stop() {
        if (this.list.scrollLeft > 0) {
            this.scrollValue = this.list.scrollLeft;
        }
        clearInterval(this.interval);
    }
}

document.querySelectorAll('.scroll-toggle').forEach(el => {
    const scrollToggle = new ScrollToggle(el);
    scrollToggle.init();
})