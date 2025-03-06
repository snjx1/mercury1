// const pages = document.getElementById('pages')
// const Tumbi = document.getElementById('Tumbi')
// const tables = document.getElementById('tables')
const menu = document.querySelectorAll('#catalog nav a')
const goods = document.querySelectorAll('#pages > *')
const menumain = document.querySelectorAll('header nav a')
menu.forEach(a => {
    a.addEventListener ('click',function(event){
        linkid = (a.href.slice(a.href.search('#')))
        item = document.querySelector(linkid)
        goods.forEach(x => {
            x.style.display = 'none'
        })
        item.style.display = 'flex'

    })
})
menumain.forEach(a => {
    a.addEventListener ('click',function(event){
        linkid = (a.href.slice(a.href.search('#')))
        item = document.querySelector(linkid)
        goods.forEach(x => {
            x.style.display = 'none'
        })
        item.style.display = 'flex'

    })
})
const hamburger = document.getElementById('hamburger')
const vert_menu = document.getElementById('vert_menu')
hamburger.addEventListener('click',function (){
    vert_menu.style.display = 'flex'
    hamburger.src = 'icons/4115230-cancel-close-cross-delete_114048.png'
})
