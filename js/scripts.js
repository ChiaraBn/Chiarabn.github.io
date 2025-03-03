
$(document).ready(function () {
    
    $("span.navbar-toggler-icon").on("click", function() {
        toggleNavbar();
    })
    $(".nav-link").on('click', function() {
        document.getElementById('navbarNav').classList.remove('show');
    });


    $('#downloadCv').on('click', function() {
        let target = "./assets/ChiaraBoni.pdf";
        window.open(target, "_blank");
    })
})

function toggleNavbar() {
    let target = document.getElementById('navbarNav');
    (target.classList.contains('show')) ?
        target.classList.remove('show') :  
        target.classList.add('show');
}