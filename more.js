function loadAdv () {
    const advSection = document.querySelector('.adv');
    const advNumber = 4;
    const number = Math.floor(Math.random()*advNumber);
    
    const img = new Image();
    img.src = `images/${number + 1}.jpg`;
    advSection.prepend(img);
};

loadAdv();