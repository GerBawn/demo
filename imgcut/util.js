/**
 * Created by ling on 2015/4/23.
 */

/**
 * 获取元素距离屏幕左边的距离
 */
function getPosition(element){
    //direction = 'offset' + direction.substr(0, 1).toUpperCase() + direction.substr(1);
    var left = element.offsetLeft,
        top = element.offsetTop,
        parent = element.offsetParent;
    while(parent !== null){
        left += parent.offsetLeft,
        top += parent.offsetTop,
        parent = parent.offsetParent;
    }

    return {'left': left, 'top': top};
}

