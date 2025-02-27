window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.backgroundColor = "rgba(57, 57, 57, 0.8)";
    } else {
        header.style.backgroundColor = "rgb(57, 57, 57)";
    }
});
