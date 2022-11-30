
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items:8,
        margin:20
    });
});

function openMenu() {
    let modal = document.querySelector('.menu-media')
    modal.style.display = 'block';
}
function close01(){
    let close = document.querySelector('.menu-media')
    close.style.display = 'none';
}
