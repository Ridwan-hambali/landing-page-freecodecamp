var menu = document.getElementById('menu')
var navLinks = document.getElementById('nav-bar')
console.log(menu)
console.log(navLinks)

menu.addEventListener('click', function () {
    navLinks.classList.toggle('active')
    console.log('click')
})