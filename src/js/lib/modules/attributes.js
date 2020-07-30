import $ from '../core';

$.prototype.setAttr = function(name, value) {
    for (let i = 0; i < this.length; i++) {
        if(!this[i].setAttribute) {
            continue;
        }
        this[i].setAttribute(name, value);
    }
}

$.prototype.getAttr = function(name) {
    for (let i = 0; i < this.length; i++) {
        if(!this[i].setAttribute) {
            continue;
        }
        return this[i].getAttribute(name);
    }
}

$.prototype.toggleAttr = function(name, value) {
    for (let i = 0; i < this.length; i++) {
        if(!this[i].setAttribute) {
            continue;
        }
        if(!value && this[i].hasAttribute(name)) {
            this[i].removeAttribute(name);
        } else {
            this[i].setAttribute(name, value);
        }
    }
}



