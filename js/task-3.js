function getElementWidth(content, padding, border) {
    content = Number.parseInt(content);
    padding = Number.parseInt(padding);
    border = Number.parseInt(border);
    return getElementWidth =  content + (padding * 2) + (border * 2);
   
};

getElementWidth("50px", "8px", "4px");
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");
