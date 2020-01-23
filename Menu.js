const orientationNames = {
    horizontal: 0,
    vertical: 1
}

let menuNodes = {
    vertical: document.getElementById('menu_vertical'),
    horizontal: document.getElementById('menu_gorizontal')
}

class Menu {

    /**
     * @param {orientationNames} orientation
     */
    mediator;

    constructor(orientation, menuNode) {
        this.orientation = orientation;
        this.menuNode = menuNode;
    }

    setMediator(mediator) {
        this.mediator = mediator;
    }

    addListenerToClick(obj) {
        let menu = document.getElementById(obj.menuNode.id);

        menu.onclick = (event) => {
            let target = event.target;

            if (target.tagName !== "LI") return;

            this.mediator.imgSrcSelected(target.dataset.link);

            let menuFix = document.querySelectorAll('.menu__list_li-style');

            if (menuFix.length >= 2) {
                for (let el of menuFix) {
                    el.classList.remove('fixed');
                }
            }
            menuFix.forEach(item => {
                if (item.id !== target.parentNode.id) return
                item.classList.add('fixed')

            });

            activate(target);
        }
    }
}

let similarEls = [];

function activate(el) {
    if (similarEls.length >= 2) {
        for (let el of similarEls) {
            el.classList.remove('active');
        }
    }
    similarEls = document.getElementsByClassName(el.getAttribute('class'));
    console.log(similarEls);
    for (let el of similarEls) {
        el.classList.add('active');
    }
}
