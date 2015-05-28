function autoCenter(element){
    var bodyWidth = document.documentElement.clientWidth,
        bodyHeight = document.documentElement.clientHeight,
        eleWidth = element.offsetWidth,
        eleHeight = element.offsetHeight;
    element.style.left = (bodyWidth - eleWidth) / 2 + 'px';
    element.style.top = (bodyHeight - eleHeight) / 2 + 'px';
}

function fillToBody(element){
    element.style.width = document.documentElement.clientWidth + 'px';
    element.style.height = document.documentElement.clientHeight + 'px';
    element.style.display = 'block';
}

var dialog = document.getElementById('dialog'),
    mask = document.getElementById('mask');
autoCenter(dialog);
fillToBody(mask);