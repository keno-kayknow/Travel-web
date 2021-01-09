const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')

menu.addEventListener('click', function(){
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
})
