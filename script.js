let menu=document.querySelector("nav ul")
let menuIcon=document.querySelector(".menu-icon i")
let button=document.querySelector(".menu-icon")

button.addEventListener('click',function(){
    menu.classList.toggle("active")
    if(menuIcon.getAttribute("class")=="fa fa-reorder"){
        menuIcon.setAttribute("class","fa fa-close")
    }else{
        menuIcon.setAttribute("class","fa fa-reorder")
    }
})