/**
 * Created by ling on 2015/4/23.
 */

window.onload = function(){
    var rightDot = document.getElementById('right'),
        leftDot = document.getElementById('left'),
        topDot = document.getElementById('up'),
        bottomDot = document.getElementById('down');
        mainDiv = document.getElementById('main'),
        boxDiv = document.getElementById('box'),
        keydown = false,
        clickedDot = '',
        dots = document.getElementsByClassName('minDiv');

    for(var i = 0; i < dots.length; i++){
        dots[i].onmousedown = function(){
            keydown = true;
            clickedDot = this.id;
        }
    }
    //topDot.onmousedown = function(){
    //    keydown = true;
    //    clickDot = 'top';
    //};
    //
    //rightDot.onmousedown = function(){
    //    keydown = true;
    //    clickDot = 'right';
    //};
    //
    //bottomDot.onmousedown = function(){
    //    keydown = true;
    //    clickDot = 'bottom';
    //};
    //
    //leftDot.onmousedown = function(){
    //    keydown = true;
    //    clickDot = 'left';
    //};

    window.onmousemove = function(e){
        if(true === keydown) {
            switch(clickedDot){
                case 'top':
                    clickTop(e, mainDiv);
                    break;
                case 'right':
                    clickRight(e, mainDiv);
                    break;
                case 'bottom':
                    clickBottom(e, mainDiv);
                    break;
                case 'left':
                    clickLeft(e, mainDiv);
                    break;
                case 'leftUp':
                    clickLeft(e, mainDiv);
                    clickTop(e, mainDiv);
                    break;
                case 'rightUp':
                    clickRight(e, mainDiv);
                    clickTop(e, mainDiv);
                    break;
                case 'rightDown':
                    clickRight(e, mainDiv);
                    clickBottom(e, mainDiv);
                    break;
                case 'leftDown':
                    clickLeft(e, mainDiv);
                    clickBottom(e, mainDiv);
                    break;
            }
        }
    };

    window.onmouseup = function(){
        keydown = false;
    };
};

function clickTop(e, element){
    var y = e.clientY,
        addHeight = y - getPosition(element).top,
        heightBefore = element.offsetHeight - 2;
    element.style.height = heightBefore - addHeight + 'px';
    element.style.top = element.offsetTop + addHeight + 'px';
}

function clickLeft(e, element){
    var x = e.clientX,
        addWidth = x - getPosition(element).left,
        widthBefore = element.offsetWidth - 2;
    element.style.width = widthBefore - addWidth + 'px';
    element.style.left = element.offsetLeft + addWidth + 'px';
}

function clickRight(e, element){
    var x = e.clientX;
    element.style.width = x - getPosition(element).left + 'px';
}

function clickBottom(e, element){
    var y = e.clientY;
    element.style.height = y - getPosition(element).top + 'px';
}
