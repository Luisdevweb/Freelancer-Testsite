const Menu= document.getElementById("menu");
const NavBar=document.getElementById("navbar");
const NavBarLinks=document.querySelectorAll('.navbar__link');
Menu.addEventListener('click',(e)=>{
    NavBar.classList.add("navbar--translate");
})
NavBar.addEventListener('click',e=>{
    if(e.target.classList.contains('navbar__link')){
        NavBarLinks.forEach(item=>{
            item.classList.remove('navbar__link--active');
        })
        e.target.classList.add('navbar__link--active');
    }
    NavBar.classList.remove("navbar--translate")
})
