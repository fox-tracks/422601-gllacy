var myMap;
var myPlacemark;
ymaps.ready(init);
function init (){
    myMap = new ymaps.Map('map', {
        center: [59.939536, 30.329119],
        zoom: 16
    });
    myPlacemark = new ymaps.Placemark ([59.938631, 30.323055], {
        hintContent: 'Мы здесь!'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/pin.svg',
        iconImageSize: [80, 140],
        iconImageOffset: [-38, -140]
    });
    myMap.geoObjects
    .add(myPlacemark);
}
