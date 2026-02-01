//const openButton = document.getElementById('open-sidebar-button')
const navbar = document.getElementById('navbar')
//const overlay = document.getElementById('overlay')
//const media = window.matchMedia("(width < 1000px)")
//media.addEventListener('change', (e) => updateNavbar(e))

function openSidebar(){
  navbar.classList.add('show')
}

function closeSidebar(){
  navbar.classList.remove('show')
}