// 친구 기본 화면//

//광고
function loadAdv () {
    const advSection = document.querySelector('.adv');
    const advNumber = 4;
    const number = Math.floor(Math.random()*advNumber);
    
    const img = new Image();
    img.src = `images/${number + 1}.jpg`;
    advSection.prepend(img);
};

loadAdv();

//즐겨찾기 fold
const foldBtn = document.querySelector('.friend-list__fold');
const foldList = document.querySelector('.friend-favorite > ul');
const foldListElems = foldList.querySelectorAll('li');
const liHeight = foldListElems[0].offsetHeight;

foldBtn.addEventListener('click', listFoldWork) ;

function listFoldWork () {
    if (foldBtn.classList.contains('fold-btn')) {
        foldBtn.classList.remove('fold-btn');
        foldList.style.height = liHeight * foldListElems.length + 'px';
    } else {
        foldBtn.classList.add('fold-btn');        
        foldList.style.height = 0 + 'px';
    }
};

function listHeight () {
    foldList.style.height = liHeight * foldListElems.length + 'px';
};
listHeight();


//전체 친구 수
const friendUl = document.querySelectorAll('.friend-list');
const friendsFavorite = friendUl[0];
const friendsAll = friendUl[1];
const friendsAllList = friendsAll.querySelector('ul');
const friendsNumberInfo = friendsAll.querySelector('span');

const friendsNumber = friendsAllList.querySelectorAll('li');

function wholeFriendNumber () {
    friendsNumberInfo.innerText = `친구 ${friendsNumber.length}명`;
}
wholeFriendNumber ();



//친구 추가 화면//

//친구 추가 화면 of off
const addFriendBtn = document.querySelector('.icon i');
const addFriendScreen = document.querySelector('.add-main');
const offScreenBtn = document.querySelector('.add-contents > i:first-of-type');
const addContents = document.querySelector('.add-contents');

addFriendBtn.addEventListener('click', addFriendOnWork);
offScreenBtn.addEventListener('click', addFriendOffWork);

function addFriendOnWork () {
    addFriendScreen.classList.add('on');
    addContents.style.display = 'block';
};
function addFriendOffWork () {
    addFriendScreen.classList.remove('on');
    addContents.style.display = 'none';
}
addFriendOffWork();

//친구 추가 미리보기
const registerName = document.querySelector('.register-name');
const registerNameBtn = document.querySelector('.add-friendinfo > i');
const registerImg = document.querySelector('.register-img');
const friendPlusBtn = document.querySelector('.add-contents > i:nth-of-type(2)');

const prevealImg = document.querySelector('.preveal > img');
const prevealName = document.querySelector('.preveal > b');

registerNameBtn.addEventListener('click', prevealWork);
registerName.addEventListener('keydown', prevealWork);
registerImg.addEventListener('input', prevealWork);
var nameValue;

function prevealWork (e) {
    if (e.keyCode === 13 || e.target === registerNameBtn) {
        nameValue = registerName.value
        prevealName.innerText = nameValue;
        prevealName.style.backgroundColor = 'transparent';
    };    

    if (e.target === registerImg) {
        const registerImgSrc = registerImg.value.substring(12);
        prevealImg.src = `images/${registerImgSrc}`;
    };
};

//친구 리스트에 추가
friendPlusBtn.addEventListener('click', addFriendLiWork);
friendPlusBtn.addEventListener('click', wholeFriendNumber);

function addFriendLiWork () {
    if (registerName.value === '' || registerImg.value === '') return;
    const friendLi = document.createElement('li');
    const innerDiv = document.createElement('div');
    innerDiv.classList.add('friend-list__friend')
    const friendImg = document.createElement('img');
    const friendName = document.createElement('b');

    const registerImgSrc = registerImg.value.substring(12);

    friendImg.src = `images/${registerImgSrc}`;
    friendName.innerText = nameValue;

    friendsAllList.appendChild(friendLi);
    friendLi.appendChild(innerDiv);
    innerDiv.appendChild(friendImg);
    innerDiv.appendChild(friendName);

    resetAddFriend ();
    alertAddFriend();
};

function resetAddFriend () { 
    prevealName.innerText = '';
    prevealImg.src = '';
    registerName.value = '';
    registerImg.value = '';  
    prevealName.style.backgroundColor = 'rgba(255, 255, 255, 0.781)';
};

function alertAddFriend () {
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('alert-div');    
    const alertP = document.createElement('p');
    alertP.classList.add('alert-p');
    alertP.innerText = '새로운 친구 등록이 완료되었습니다 XD';
    addContents.appendChild(alertDiv);
    alertDiv.appendChild(alertP);

    setTimeout (function () {alertDiv.parentNode.removeChild(alertDiv);}, 3000)
};
