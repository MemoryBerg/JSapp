let mainImage = document.getElementById('mainImage')
let gallery = new Gallery(mainImage);

let mainMediator = new Mediator(gallery);
mainMediator.setGallery(gallery);
console.log(mainMediator);

let horizontalMenu = new Menu(orientationNames.horizontal, menuNodes.horizontal);
let verticalMenu = new Menu(orientationNames.vertical, menuNodes.vertical);


horizontalMenu.addListenerToClick(horizontalMenu);
verticalMenu.addListenerToClick(verticalMenu);

horizontalMenu.setMediator(mainMediator);
verticalMenu.setMediator(mainMediator);



console.log(gallery);
console.log(horizontalMenu);
console.log(verticalMenu);
