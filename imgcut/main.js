/**
 * Created by ling on 2015/4/23.
 */

window.onload = function(){
    document.onselectstart = function(e){
        e.returnValue = false;
    };
    var mainDiv = document.getElementById('main'),
        keydown = false,
        clickedDot = '',
        dots = document.getElementsByClassName('minDiv');

    for(var i = 0; i < dots.length; i++){
        dots[i].onmousedown = function(e){
            keydown = true;
            clickedDot = this.id;
            e.stopPropagation();
        }
    }

    mainDiv.onmousedown = function(e){
        var initX = this.offsetLeft - e.clientX,
            initY = this.offsetTop - e.clientY;
        this.onmousemove = function(e){
            var left = e.clientX + initX,
                top = e.clientY + initY,
                maxLeft = this.offsetParent.offsetWidth - this.offsetWidth,
                maxTop = this.offsetParent.offsetHeight - this.offsetHeight;
            if(left >=0 && left < maxLeft){
                this.style.left = left + 'px';
            }
            if(top >= 0 && top < maxTop){
                this.style.top = top + 'px';
            }
        }
    };

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
        setChoice(mainDiv);
        setPreview(mainDiv);
    };

    window.onmouseup = function(){
        keydown = false;
        mainDiv.onmousemove = null;
    };
};

function clickTop(e, element){
    var y = e.clientY,
        addHeight = y - getPosition(element).top,
        heightBefore = element.offsetHeight - 2;
    if(y >= getPosition(element.offsetParent).top && (heightBefore - addHeight) > 0){
        element.style.height = heightBefore - addHeight + 'px';
        element.style.top = element.offsetTop + addHeight + 'px';
    }
}

function clickLeft(e, element){
    var x = e.clientX,
        addWidth = x - getPosition(element).left,
        widthBefore = element.offsetWidth - 2;
    if(x >= getPosition(element.offsetParent).left && (widthBefore - addWidth) > 0){
        element.style.width = widthBefore - addWidth + 'px';
        element.style.left = element.offsetLeft + addWidth + 'px';
    }
}

function clickRight(e, element){
    var width = e.clientX - getPosition(element).left,
        parentWidth = element.offsetParent.offsetWidth,
        left = element.offsetLeft;
    if(width > 0 && (left + width) <= parentWidth){
        element.style.width = width + 'px';
    }
}

function clickBottom(e, element){
    var height = e.clientY - getPosition(element).top,
        parentHeight = element.offsetParent.offsetHeight,
        top = element.offsetTop;
    if(height > 0 && (top + height) <= parentHeight){
        element.style.height = height + 'px';
    }
}

function setVisible(element, img){
    var top = element.offsetTop,
        right = element.offsetLeft + element.offsetWidth,
        bottom = element.offsetTop + element.offsetHeight,
        left = element.offsetLeft;
    img.style.clip = 'rect(' + top + 'px, ' + right + 'px, ' + bottom + 'px, ' + left + 'px)';
}

function setChoice(element){
    var img = document.getElementById('img2');
    setVisible(element, img);
    img.style.clip = 'rect(' + top + 'px, ' + right + 'px, ' + bottom + 'px, ' + left + 'px)';

}

function setPreview(element){
    var img = document.getElementById('img3');
    setVisible(element, img);
    img.style.top = -1 * element.offsetTop + 'px';
    img.style.left = -1 * element.offsetLeft + 'px';
}
