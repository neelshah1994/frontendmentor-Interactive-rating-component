var ratingStart = document.getElementById('rating-start');
var ratingCompleted = document.getElementById('rating-completed');
ratingCompleted.style.display = 'none';

var ratingBtns = document.getElementsByClassName('rating');
var submitBtn = document.getElementById('submit');
var selectedRatingEle = document.getElementById('selected');
console.log(ratingBtns);
var selectedRating = 0;

for (let i = 0; i < ratingBtns.length; i++) {
    const element = ratingBtns[i];
    element.onclick = ratingSelect;
}

submitBtn.onclick = submitRatings;

function ratingSelect(event) {
    let selected = event.target;
    for (let i = 0; i < ratingBtns.length; i++) {
        const element = ratingBtns[i];
        element.classList.remove('active');
    }
    
    selected.classList += ' active';
    selectedRating = selected.getAttribute('rating');
}

function submitRatings(event) {
    selectedRatingEle.innerHTML = selectedRating;
    ratingStart.style.display = 'none';
    ratingCompleted.style.display = 'block';
}