const btn = document.getElementById('hamburger-button')
const menu = document.getElementById('hamburger-menu-list')

btn.addEventListener('click', () => {
    menu.classList.toggle('active')
})