var myMap;
var myPlacemark;
ymaps.ready(init);
function init (){
    myMap = new ymaps.Map('map', {
        center: [59.939536, 30.329119],
        zoom: 16,
        controls: []
    });
    myPlacemark = new ymaps.Placemark ([59.938631, 30.323055], {
        hintContent: 'Мы здесь!'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/pin-and-shadow.png',
        iconImageSize: [218, 142],
        iconImageOffset: [-38, -140]
    });
    myMap.geoObjects
    .add(myPlacemark);
}

var feedbackLink = document. querySelector(".feedback-link");
var feedbackPopup = document.querySelector(".feedback-background");
var feedbackClose = feedbackPopup.querySelector(".feedback-close");
var feedbackForm = feedbackPopup.querySelector(".feedback-form");
var feedbackName = feedbackPopup.querySelector(".feedback-name");
var feedbackEmail = feedbackPopup.querySelector(".feedback-email");
var feedbackArea = feedbackPopup.querySelector(".feedback-area");
var feedbackBlock = document.querySelector(".feedback-block");

  feedbackLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("feedback-background-show");
    feedbackName.focus();
  });
    feedbackClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("feedback-background-show");
    });

    function onSubmit(evt) {
      if (!feedbackName.value || !feedbackEmail.value || !feedbackArea.value) {
      evt.preventDefault();
      feedbackBlock.classList.add("feedback-block-error");
      console.log("Введите, пожалуйста, имя, e-mail и сообщение");
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