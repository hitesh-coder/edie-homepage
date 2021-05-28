const icon = document.getElementsByClassName('icon');
const navbar = document.getElementsByClassName('navbar');

icon[1].style.display = "none";
icon[1].style.position = "fixed";
icon[1].style.color = "white";

icon[0].addEventListener('click', () => {
    icon[0].style.display = "none";
    icon[1].style.display = "inline-block";
    navbar[0].style.clipPath = "circle(150% at 100% 0)"
})

icon[1].addEventListener('click', () => {
    icon[1].style.display = "none";
    icon[0].style.display = "inline-block";
    navbar[0].style.clipPath = "circle(0 at 100% 0)"
})

console.log(icon);