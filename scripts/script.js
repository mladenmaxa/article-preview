let share = document.querySelector('#share-btn');
let shareImg = document.querySelector('#share-btn img');
let shareIcons = document.querySelector('.share-article');

share.addEventListener('click', () => {
    shareIcons.classList.add('active');
})

document.querySelector('body').addEventListener('click', e => {
    if(e.target !== shareImg) {
        shareIcons.classList.remove('active');
    }
})