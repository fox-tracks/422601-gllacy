// карта
var myMap;
var myPlacemark;
if (window.ymaps) {
    ymaps.ready(init);
}
function init() {
    myMap = new ymaps.Map("map", {
        center: [59.939306, 30.329419],
        zoom: 16,
        controls: []
    });
    myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
        hintContent: "Мы здесь!"
    }, {
            iconLayout: "default#image",
            iconImageHref: "img/pin-and-shadow.png",
            iconImageSize: [218, 142],
            iconImageOffset: [-38, -140]
        });
    myMap.geoObjects
        .add(myPlacemark);
}
// модальное окно и валидация
var feedbackLink = document.querySelector(".feedback-link");
var feedbackPopup = document.querySelector(".feedback-background");
var feedbackClose = feedbackPopup.querySelector(".feedback-close");
var feedbackForm = feedbackPopup.querySelector(".feedback-form");
var feedbackName = feedbackPopup.querySelector(".feedback-name");
var feedbackEmail = feedbackPopup.querySelector(".feedback-email");
var feedbackArea = feedbackPopup.querySelector(".feedback-area");
var feedbackBlock = document.querySelector(".feedback-block");

feedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("feedback-background-show");
    feedbackName.focus();
});
feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("feedback-background-show");
});

function onSubmit(evt) {
    if (!feedbackName.value || !feedbackEmail.value || !feedbackArea.value) {
        evt.preventDefault();
        feedbackBlock.classList.remove("feedback-block-error");
        setTimeout(function() { 
            feedbackBlock.classList.add("feedback-block-error"); 
        }, 0);
    }
}

feedbackForm.addEventListener("submit", onSubmit);
feedbackForm.addEventListener("click", onSubmit);
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (feedbackPopup.classList.contains("feedback-background-show")) {
            feedbackPopup.classList.remove("feedback-background-show");
        }
    }
});

// признак заполненности текстовых полей
var textFields = document.querySelectorAll(".text");
var i;

function onInputChange(evt) {
    var input = evt.target;
    if (input.value) {
        input.classList.remove("text-empty");
    } else {
        input.classList.add("text-empty");
    }
}

for (i = 0; i < textFields.length; i++) {
    textFields[i].addEventListener("change", onInputChange);
}

