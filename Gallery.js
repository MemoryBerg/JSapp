class Gallery {
    /**
     * @type {HTMLElement}
     */

    imgNode;

    constructor(imgNode) {
        this.imgNode = imgNode;
    }

    /**
     * @param {string} src
     */

    setImgSrc(src) {
        this.imgNode.setAttribute('src', src);
    }
}
