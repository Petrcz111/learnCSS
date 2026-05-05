const btn1 = document.getElementById('unroll-button')
const btn2 = document.getElementById('unroll-button2')
const btn3 = document.getElementById('unroll-button3')
const menu1 = document.getElementById('unroll-menu-list')
const menu2 = document.getElementById('unroll-menu-list2')
const menu3 = document.getElementById('unroll-menu-list3')

btn1.addEventListener('click', () => {
    menu1.classList.toggle('active1')
    if(menu1.classList.contains('active1')) {
        btn1.querySelector('i').classList.remove('fa-angle-down')
        btn1.querySelector('i').classList.add('fa-angle-up')
        //https://chatgpt.com/share/69edf1bf-8710-83eb-885b-eea80cd166d4
    } else {
        btn1.querySelector('i').classList.remove('fa-angle-up')
        btn1.querySelector('i').classList.add('fa-angle-down')
    }
})

btn2.addEventListener('click', () => {
    menu2.classList.toggle('active1')
    if(menu2.classList.contains('active1')) {
        btn2.querySelector('i').classList.remove('fa-angle-down')
        btn2.querySelector('i').classList.add('fa-angle-up')
    } else {
        btn2.querySelector('i').classList.remove('fa-angle-up')
        btn2.querySelector('i').classList.add('fa-angle-down')
    }
})

btn3.addEventListener('click', () => {
    menu3.classList.toggle('active1')
    if(menu3.classList.contains('active1')) {
        btn3.querySelector('i').classList.remove('fa-angle-down')
        btn3.querySelector('i').classList.add('fa-angle-up')
    } else {
        btn3.querySelector('i').classList.remove('fa-angle-up')
        btn3.querySelector('i').classList.add('fa-angle-down')
    }
})