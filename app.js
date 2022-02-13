

var menuItems = document.getElementById('menu-items');
menuItems.style.maxHeight = '0px';



function handelToggelMenu(){
    if(menuItems.style.maxHeight == '0px'){
        menuItems.style.maxHeight = '200px';
    }
    else{
        menuItems.style.maxHeight = '0px';
    }

}

// <<<<<<<<<<<<< Code For Singel Product Page >>>>>>>>>>>>>>>

var productImg = document.getElementById('productImg');
var smallImg = document.getElementsByClassName('small-img');

smallImg[0].onclick = function(){
    productImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    productImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    productImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
    productImg.src = smallImg[3].src;
};

// <<<<<<<<<<<<< Code For Singel Product Page END >>>>>>>>>>>>>>>

// <<<<<<<<<<<<< JS For Login/Register Form >>>>>>>>>>>>>



// <<<<<<<<<<<<< JS For Login/Register Form END >>>>>>>>>>>>>