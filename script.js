let checkbox = document.getElementById('checkbox')
let head = document.getElementById('header')
let navBar = document.getElementById('nav-list1')
let navBar2 = document.getElementById('nav-list2')
let navBar3 = document.getElementById('nav-list3')
let navBar4 = document.getElementById('nav-list4')
let line = document.getElementById('line')
let redes = document.getElementsByClassName('redes')

window.onload = ()=> {
    if(localStorage.getItem('dark') === 'true') {
        checkbox.checked = true
        document.body.classList.toggle('dark')
        head.classList.toggle('dark')
        navBar.classList.toggle('dark')
        navBar2.classList.toggle('dark')
        navBar3.classList.toggle('dark')
        navBar4.classList.toggle('dark')
        line.classList.toggle('dark')
        for(let i = 0; i < redes.length; i++) {redes.item(i+1).classList.toggle('dark')}
    }
}

checkbox.addEventListener('change', ()=> {
    localStorage.setItem('dark', checkbox.checked)
    document.body.classList.toggle('dark')
    head.classList.toggle('dark')
    navBar.classList.toggle('dark')
    navBar2.classList.toggle('dark')
    navBar3.classList.toggle('dark')
    navBar4.classList.toggle('dark')
    line.classList.toggle('dark')
    for(let i = 0; i < redes.length; i++) {redes.item(i+1).classList.toggle('dark')}
})

let bars = document.getElementById('bars')
let navBarAll = document.getElementById('nav-bar')

bars.addEventListener('click', ()=> {
    navBarAll.classList.toggle('toggle')
    navBarAll.classList.toggle('disable')
})