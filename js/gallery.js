// get the element from the html
let items = document.querySelectorAll('.slider .list .item');
let thumbnails = document.querySelectorAll('.thumbnail .item');
// prev and next
let prev = document.getElementById('prev');
let next = document.getElementById('next'); 


let countItem = items.length;
let itemActive = 0; 

next.onclick = function() {
    itemActive = itemActive + 1; 
    if (itemActive >= countItem) {
        itemActive = 0; 
    }
    showSlider(); 
}

prev.onclick = function() {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1; 
    }
    showSlider();
}

// auto run the slider
let refresh = setInterval(() => {
    next.click(); 
}, 3000) // runs this every 3 sec


// by click thumbnail
thumbnails.forEach((thumbnails, index) => {
    thumbnails.addEventListener('click', () => {
        itemActive = index; 
        showSlider();
    })
})

function showSlider() {
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active'); 
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active')
    thumbnails[itemActive].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)

}

