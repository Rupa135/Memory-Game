var isFlipped = false;
var FirstCard;
var SecondCard;

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("click", flip)
})

function flip() {
    
    this.classList.add("flip");

    if (!isFlipped) {
        isFlipped = true;
        FirstCard = this;

    } else {
        SecondCard = this;
        checkIt();
    }

}

function checkIt() {

    if (FirstCard.dataset.image === SecondCard.dataset.image) {

        success();
    } else {
        fail();
    }
}

function success() {

    FirstCard.removeEventListener("click",flip);
    FirstCard.removeEventListener("click",flip);
    reset();
}

function fail() {

    setTimeout(() => {
        console.log(FirstCard);

        FirstCard.classList.remove("flip");
        SecondCard.classList.remove("flip");
        reset();
    }, 1000)

}

function reset() {

    isFlipped = false;
    FirstCard = null;
    SecondCard = null;


}

(function shuffle(){

    cards.forEach((card) => {
        var index = Math.floor(Math.random() * 16);
        card.style.order = index;
})
}());