class Mediator {
    gallery;

    constructor(gal) {
        this.gal = gal;
    }

    setGallery(gallery) {
        this.gallery = gallery;
    }

    imgSrcSelected(src) {
        this.src = src;

        gallery.setImgSrc(src);
    }



}
