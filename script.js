
console.log("blinding lights")

let menu_open = document.querySelector(".menu-open") 
let menu_close = document.querySelector(".menu-close") 
let overlay = document.querySelector(".overlay ") 
let nav_links= document.querySelector(".nav-links")
console.log( menu_open , menu_close , overlay , nav_links) 


    document.addEventListener("scroll" , ( e )=>{
        let list = Array.from(nav_links.classList)
        console.log(list , list.includes("menu_active"))

        if(list.includes("menu_active")){
            e.preventDefault()      
        }
        console.log("scroll locking")
    })    

menu_open.addEventListener("click", ()=>{
    overlay.classList.toggle("overlay_active")
    menu_open.classList.toggle("display_icon")
    menu_close.classList.toggle("display_icon")
    nav_links.classList.toggle("menu_active")

})
menu_close.addEventListener("click", ()=>{
    nav_links.classList.toggle("menu_active")
    menu_open.classList.toggle("display_icon")
    menu_close.classList.toggle("display_icon")
    overlay.classList.toggle("overlay_active")
})
