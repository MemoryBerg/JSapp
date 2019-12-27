const defaultObj = {
    tagName: "div",
    text: ""
};


function render(args, parent) {
    let { tagName, children, text, html, attrs } = {
        ...defaultObj,
        ...args
    };

    let newElement = document.createElement(tagName);

    if (Array.isArray(children)) {
        children.forEach(item => {
            render(item, newElement);
        });
    }
    {
        html !== undefined
            ? (newElement.innerHTML = html)
            : (newElement.innerText = text);

        for (let key in attrs) {
            if (attrs.hasOwnProperty(key)) {
                alert(key + ":" + attrs[key]);
                newElement.setAttribute(key, attrs[key]);
            }
        }
    }
    parent.appendChild(newElement);
    return newElement;
}
