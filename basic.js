const mediaQuery = document.querySelector('.for-mediaquery');
const p = document.createElement('P');
mediaQuery.appendChild(p);
p.classList.add('media-p')
p.innerText = '600px 이하로 줄여주세요! XD';
const mediaP = document.querySelector('.media-p');

function resizeWork () {
    if (innerWidth > 600) {
        mediaP.style = 'display:block'
    };
};

var clearWork;

window.addEventListener('resize', function() {
    clearTimeout(clearWork);
    clearWork = setTimeout(resizeWork, 500);
});

resizeWork();

