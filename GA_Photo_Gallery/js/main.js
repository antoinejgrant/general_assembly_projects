var images = ["img/thumb_0.jpg", "img/thumb_1.jpg", "img/thumb_2.jpg", "img/thumb_3.jpg", "img/thumb_4.jpg"];
var currentImage = 0;	


function changePicture(whichNum) {
	var img = document.getElementById('mainImage');
	img.setAttribute('src', images[whichNum]);
	currentImage = whichNum;
}

function nextImage() {
	currentImage++;
	if(currentImage===images.length){
		currentImage = 0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src', images[currentImage]);
}

function prevImage() {
	currentImage = currentImage -1;
	if(currentImage===-1){
		currentImage=0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src', images[currentImage]);
}