window.onload = function(){
	var box = document.getElementById('container');
	var imgs = box.getElementsByTagName('img');
	var imgWidth = imgs[0].offsetWidth;
	var exposeWidth = 160;
	var containerWidth = imgWidth + (imgs.length - 1) * 160;

	box.style.width = containerWidth + 'px';

	var resetImgPos = function(){
		for(var i = 1; i < imgs.length; i++){
			imgs[i].style.left = imgWidth + exposeWidth * (i - 1) + 'px';
		}
	};

	resetImgPos();

	for(var i = 0; i < imgs.length; i++){
		imgs[i].onmouseover = function(){
			resetImgPos();
				this.style.left = parseInt(this.style.left,  10) - (imgWidth - exposeWidth) + 'px';
		};
		imgs[i].onmouseout = function(){
			resetImgPos();
		};
	}
};
