console.log('Loaded!');

// Changed the text of the main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'New value';

// move the image
var img = documenet.getElementById('madi');
img.onclick = function(){
img.style.marginleft = '100px';
};
