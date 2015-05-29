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
}

var dialog = document.getElementById('dialog'),
    mask = document.getElementById('mask');

var mouseOffsetX = 0;
var mouseOffsetY = 0;
var isDraging = false;

document.getElementById('login').addEventListener('click', function(){
    dialog.style.display = 'block';
    mask.style.display = 'block';
    autoCenter(dialog);
    fillToBody(mask);
});

window.onresize = function(){
    autoCenter(dialog);
    fillToBody(mask);
};

document.getElementById('closebutton').addEventListener('click', function(){
    dialog.style.display = 'none';
    mask.style.display = 'none';
});
document.getElementById('dialogTitle').addEventListener('mousedown', function(e){
    var event = e || window.event;
    mouseOffsetX = event.clientX - document.getElementById('dialog').offsetLeft;
    mouseOffsetY = event.clientY - document.getElementById('dialog').offsetTop;
    isDraging = true;
});

document.onmousemove = function(e){
    var event = e||window.event,
        moveX = 0,
        moveY = 0,
        maxX = document.documentElement.clientWidth - dialog.offsetWidth,
        maxY = document.documentElement.clientHeight - dialog.offsetHeight;
    if(isDraging === true){
        moveX = event.clientX - mouseOffsetX;
        moveY = event.clientY - mouseOffsetY;

        if(moveX < 0){
            moveX = 0;
        }else if(moveX > maxX){
            moveX = maxX;
        }

        if(moveY < 0){
            moveY = 0;
        }else if(moveY > maxY){
            moveY = maxY;
        }

        dialog.style.left = moveX + 'px';
        dialog.style.top = moveY + 'px';
    }
};

document.onmouseup = function(){
    isDraging = false;
};