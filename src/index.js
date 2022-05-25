document.addEventListener('DOMContentLoaded', (e) => {
    loadRamens()
})

function loadRamens(){
fetch('http://localhost:3000/ramens')
.then(resp => resp.json())
.then(data => pasteInfo(data))

}

function pasteInfo(data) {
    const menu = document.querySelector('#ramen-menu')
    data.forEach(data => {
        const showName = document.querySelector('.name')
        const img = document.createElement('img')
        img.src = data.image
        img.alt = data.name
        //Ended here, trying to get individual names to display
        showName.textContent = data.name
        menu.append(img)
    });
}

ramenSelector()
function ramenSelector() {
    const selectPhoto = document.querySelector('#ramen-menu')
    selectPhoto.addEventListener('click', (e) => {
        const replacePhoto = document.querySelector('.detail-image')
        replacePhoto.src = e.target.src
    }) 
}

ramenForm()
function ramenForm() {
    document.querySelector('#new-ramen').addEventListener('submit', (e) => {
        e.preventDefault()
        newComment(e.target['new-comment'].value)
        newRating(e.target['new-rating'].value)
        newImage(e.target['new-image'].value)
        newRestaurant(e.target['new-restaurant'].value)
        newName(e.target['new-name'].value)
    })
}

function newComment(comment) {
    const commentLocation = document.getElementById('comment-display')
    commentLocation.textContent = comment
}

function newRating(rating) {
    const ratingLoction = document.getElementById('rating-display')
    ratingLoction.textContent = rating
}

function newImage(image) {
    const displayImg = document.querySelector('.detail-image')
    displayImg.src = image
}

function newRestaurant(restaurant) {
    const restaurantName = document.querySelector('.restaurant')
    restaurantName.textContent = restaurant
}

function newName(name) {
    const ramenName = document.querySelector('.name')
    ramenName.textContent = name
}