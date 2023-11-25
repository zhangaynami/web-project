function inzoom(element) {
    var card = element.querySelector(".card")
    var mask = element.querySelector(".card .msak")
    var card_img_top = element.querySelector(".card-img-top")
    var card_title = element.querySelector(".card-title")

    card_img_top.style.transform = "scale(1.1)" ;
    card_img_top.style.transition = 'transform 1s';

    card_title.style.fontSize ="1.5rem"  ;
    card_title.style.transition = '1s';
    
    }

function outzoom(element) {

    var  card_img_top= element.querySelector(".card-img-top")
    var card_title = element.querySelector(".card-title")

    card_img_top.style.transform = "scale(1.0)" ;
    card_img_top.style.transition = 'transform 1s';

    card_title.style.fontSize ="1.2rem"  ;
    card_title.style.transition.fontSize = '1s';
}