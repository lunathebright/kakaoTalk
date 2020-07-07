
//음소거 버튼
const muteBtn = document.querySelector('.chat-setting>:first-child');

muteBtn.addEventListener('click', muteWork);

function muteWork () {
    if (muteBtn.className === 'far fa-bell') {
        muteBtn.className = 'far fa-bell-slash'
    } else {
        muteBtn.className = 'far fa-bell'
    };
};

//message send
const textArea = document.querySelector('.typing-area__typing > textarea');
const sendBtn = document.querySelector('.typing-area__typing > input');
const chatBox = document.querySelector('.chat-contents__top');

textArea.addEventListener('keydown',submitWork);
sendBtn.addEventListener('click',submitWork);

function submitWork (e) {
    if ((textArea.value === '') || (textArea.value === '' && e.keyCode ===13)) return;
    if (e.keyCode === 13 || e.keyCode === 17 || e.target === sendBtn) {
        var keyNumber = e.keyCode;
        var target = e.target;
        
        e.preventDefault();
        createChatBubble();
        scrollSet();
        textArea.value = '';
    };

    function createChatBubble () {
        const chatInfoImg = document.querySelector('.chat-info > img');
        const chatInfoNameBox = document.querySelector('.chat-info__info > b');
        const chatInfoName = chatInfoNameBox.childNodes[0].textContent;
        
        const date = new Date();
        const hour = date.getHours();
        const hourAMPM = hour - 12;
        const min = date.getMinutes();
    
        const chatBubble = document.createElement('div');
        const innerBubble = document.createElement('div');
        const chatBubbleText = document.createElement('p');
        const chatTime = document.createElement('span');
        const profileImg = document.createElement('img');
        const friendName = document.createElement('b');

        if (keyNumber === 13 || target === sendBtn) {
            chatBubble.classList.add('my-chat-bubble', 'chat-bubble');
            chatBubbleText.innerText = textArea.value;
            if (hour < 12) {
                chatTime.innerText = `${hour}:${min < 10 ? `0${min}` : min} AM`
            } else if (hour > 11) {
                chatTime.innerText = `${hour > 12 ? hourAMPM : hour}:${min < 10 ? `0${min}` : min} PM`
            };
        
            chatBox.appendChild(chatBubble);
            chatBubble.appendChild(innerBubble);
            innerBubble.appendChild(chatBubbleText);
            innerBubble.appendChild(chatTime);
        };
        
        if (keyNumber === 17) {
            chatBubble.classList.add('friend-chat-bubble', 'chat-bubble');
            chatBubbleText.innerText = textArea.value;
            if (hour < 12) {
                chatTime.innerText = `${hour}:${min < 10 ? `0${min}` : min} AM`
            } else if (hour > 11) {
                chatTime.innerText = `${hour > 12 ? hourAMPM : hour}:${min < 10 ? `0${min}` : min} PM`
            }

            profileImg.src = chatInfoImg.src;
            friendName.innerText = chatInfoName;

            chatBox.appendChild(chatBubble);
            chatBubble.appendChild(profileImg);
            chatBubble.appendChild(friendName);
            chatBubble.appendChild(innerBubble);
            innerBubble.appendChild(chatBubbleText);
            innerBubble.appendChild(chatTime);
        };

        //메세지 시간 마지막 버블에만 띄우기//
        // const chainedFriendBubble = document.querySelectorAll('.friend-chat-bubble+.friend-chat-bubble');
        // const chainedMyBubble = document.querySelectorAll('.my-chat-bubble+.my-chat-bubble');
        // var bubbleLength = chainedMyBubble.length;
        // console.log(bubbleLength);
        
        // console.log(chainedFriendBubble);
        // console.log(chainedMyBubble);

        // for (let i = 0; i < chainedMyBubble.length; i++) {
        //     chainedMyBubble[i].querySelector('span').innerText = ''
        // }
        // chainedMyBubble[bubbleLength-1].querySelector('span').innerText = `${hour}:${min < 10 ? `0${min}` : min} AM`;

       
    };
};


//스크롤
function scrollSet () {
    const chatBoxDivs = document.querySelectorAll('.chat-contents__top > div.chat-bubble');
    const lastChatBox = chatBoxDivs.length;

    for (let i = 0; i < lastChatBox; i++) {
        chatBoxDivs[i].classList.remove('last-bubble')
    };

    chatBoxDivs[lastChatBox-1].classList.add('last-bubble');
    document.querySelector('.last-bubble').scrollIntoView();
};

//투명도 조절
const body = document.querySelector('body');
const opacityRange = document.querySelector('.opacity-range');

opacityRange.addEventListener('input', handleOpacity);

function handleOpacity (e) {
    body.style.opacity = e.target.value;
};

scrollSet();


