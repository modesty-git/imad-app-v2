console.log('Loaded!');

// Changed the text of the main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'New value';

// move the image
var img = document.getElementById('madi');
img.onclick = function(){
    img.style.marginLeft = '1000px';
};
