let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scroll");

    }else{
        nav.classList.remove("header-scroll");
    }
}

// NAVBAR HIDE

var navbar = document.querySelectorAll(".nav-link");
var navCollapse = document.querySelector(". navbar-collapse.collapse");
navbar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})