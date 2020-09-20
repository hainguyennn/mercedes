
document.getElementById('showMore').onclick = function () {
    document.getElementById('showMore').style.display = 'none';
}
document.getElementById('showMorePopularCars').onclick = function () {
    document.getElementById('showMorePopularCars').style.display = 'none';
}
document.getElementById('showMoreVideoCars').onclick = function () {
    document.getElementById('showMoreVideoCars').style.display = 'none';
}
// Slide-menubar-on-scroll 
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("scroll-Menubar").style.top = "-120px";
    } else if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
        document.getElementById("scroll-Menubar").style.top = "0";
    }
}
// Hide Scrollbar
function disable_scroll() {
    var element = document.querySelector(".myDocument");
    element.classList.toggle("noscroll");
    var hideSubMenu = document.getElementById("hideSubMenu");
    hideSubMenu.classList.toggle("hide-SubMenu");
    document.getElementById('btnMenu').classList.toggle('open');
}
