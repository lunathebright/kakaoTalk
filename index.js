function loadAdv () {
    const advSection = document.querySelector('.adv');
    const advNumber = 4;
    const number = Math.floor(Math.random()*advNumber);
    
    const img = new Image();
    img.src = `images/${number + 1}.jpg`;
    advSection.prepend(img);
};

loadAdv();

const chatMoreMenuBtn = document.querySelector('.chat-more');
const chatMoreMenu = document.querySelector('.chat-more__menu');

chatMoreMenuBtn.addEventListener('click', chatMoreClick);

function chatMoreClick () {
    if (chatMoreMenu.style.display === 'block') {
        chatMoreMenu.style.display = 'none'
    } else {chatMoreMenu.style.display = 'block'}
};
