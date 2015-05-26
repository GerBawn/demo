/**
 * Created by ling on 2015/5/26.
 */

window.onload = function(){
    var obtn = document.getElementById('returnTop');
    var timer = null;
    var clientHeight = document.documentElement.clientHeight || document.body.scrollTop;

    window.onscroll = function(){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        console.log(scrollTop + '  ' + clientHeight);
        if(scrollTop > clientHeight){
            obtn.style.display = 'block';
        }else{
            obtn.style.display = 'none';
        }
        console.log(" clientWidth：" + document.body.clientWidth);
        console.log(" clientHeight：" + document.body.clientHeight);
        console.log(" offsetWidth：" + document.body.offsetWidth);
        console.log(" offsetHeight：" + document.body.offsetHeight);
        console.log(" scrollWidth：" + document.body.scrollWidth);
        console.log(" scrollHeight：" + document.body.scrollHeight);
        console.log(" screenHeight：" + window.screen.height);
        console.log(" screenWidth：" + window.screen.width);
        console.log(" screenHeight：" + window.screen.availHeight);
        console.log(" screenWidth：" + window.screen.availWidth);
    }
    obtn.onclick = function(){
        clearInterval(timer);
        timer = setInterval(function(){
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop <= 0){
                clearInterval(timer);
            }
            document.documentElement.scrollTop = document.body.scrollTop -= 50;
            console.log(scrollTop);
        }, 30);
    }
}
