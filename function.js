var playerNew = document.querySelector(".jd-content-player-new");
var playerMain = document.querySelector(".jd-content-player");
var contentModal = document.querySelector(".jd-content-modal");
var boxModal = document.querySelector(".jd-modal");
var btn = document.querySelector(".jd-btn-zoom");
var i = 0;
var j = 0;
var boxPlayerNew = '';
var boxPlayer = '';
var modal = '';


var listPlayerNews = Modelos.filter(modelo => modelo.order === 'new');

while(i < listPlayerNews.length){
    var imgNew = listPlayerNews[i].img;
    var modelNew = listPlayerNews[i].model;
    var priceNew = listPlayerNews[i].price;
    var sizeNew = listPlayerNews[i].size;
    var idNew = listPlayerNews[i].id;

    boxPlayerNew = '<div class="jd-box-player">'+
                '<div class="jd-box-img-player">'+
                '<img class="jd-img-player" src="'+ imgNew +'">'+
                '<span class="jd-new">New PLayer</span>'+
                '</div>'+
                '<span class="jd-code">Code: '+ modelNew +'</span>'+
                '<h1 class="jd-price">$ '+ priceNew +' <sup>xats</sup></h1>'+
                '<button class="jd-btn-zoom" id="'+ idNew +'">Zoom</button>'+
                '<p class="jd-size">Size: '+ sizeNew +'</p>'+
                '</div>';
            playerNew.innerHTML += boxPlayerNew;
    i++;
}

for(var i = 0; i < playerNew.children.length; i++){
    btn = playerNew.children[i].querySelector(".jd-btn-zoom");
    btn.addEventListener('click', onBtnShow);
} 

var listPlayer = Modelos.filter(modelo => modelo.order === 'html');

while(j < listPlayer.length){
    var img = listPlayer[j].img;
    var model = listPlayer[j].model;
    var price = listPlayer[j].price;
    var size = listPlayer[j].size;
    var id = listPlayer[j].id;

    boxPlayer = '<div class="jd-box-player">'+
                '<div class="jd-box-img-player">'+
                '<img class="jd-img-player" src="'+ img +'">'+
                '</div>'+
                '<span class="jd-code">Code: '+ model +'</span>'+
                '<h1 class="jd-price">$ '+ price +' <sup>xats</sup></h1>'+
                '<button class="jd-btn-zoom" id="'+ id +'">Zoom</button>'+
                '<p class="jd-size">Size: '+ size +'</p>'+
                '</div>';
            playerMain.innerHTML += boxPlayer;
    j++;
}

for(var j = 0; j < playerMain.children.length; j++){
    btn = playerMain.children[j].querySelector(".jd-btn-zoom");
    btn.addEventListener('click', onBtnShow);
}

function onBtnShow(ev){
    var evn = ev.currentTarget.id;

    boxModal.classList.add("jd-show");

    var listModal = Modelos.filter(player => player.id == evn);
    imgModal = listModal.map(img => img.img);
    modelModal = listModal.map(model => model.model);
    priceModal = listModal.map(price => price.price);
    sizeModal = listModal.map(size => size.size);

    modal = '<div class="jd-box-modal">'+
            '<div class="jd-top-modal">'+
            '<h1 class="jd-title-modal">Player Modelo '+ modelModal +'</h1>'+
            '<div class="jd-btn-close" onclick="onBtnClick()"></div>'+
            '</div>'+
            '<div class="jd-box-player-modal">'+
            '<div class="jd-box-img-modal">'+
            '<img class="jd-img-modal" src="'+ imgModal +'">'+
            '</div>'+
            '<span class="jd-item-modal">Modelo: <strong>'+ modelModal +'</strong></span>'+
            '<span class="jd-item-modal">Price: <strong>'+ priceModal +'</strong><sup>xats</sup></span>'+
            '<span class="jd-item-modal">Size: <strong>'+ sizeModal +'</strong></span>'+
            '</div>'+
            '</div>';

            boxModal.innerHTML = modal;

    console.log("ok");
}

function onBtnClick(){
    boxModal.classList.remove("jd-show");
}







console.log(Modelos.length);