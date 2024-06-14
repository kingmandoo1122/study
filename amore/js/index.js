window.onload = function(){

// let main_tap_dt = document.querySelectorAll(".main_tap>dl>dt")

//     for(let i=0;i<main_tap_dt.length;i++){
//         main_tap_dt[i].addEventListener("click",function(){
//             for(let j=0;j<main_tap_dt.length;j++){
//                 main_tap_dt[j].classList.remove("on")
//             }
//             main_tap_dt[i].classList.add("on")
//         })
//     }




// let tab_menu_dt = document.querySelectorAll(".tab_menu>dt")

//     for(let i=0;i<tab_menu_dt.length;i++){
//         tab_menu_dt[i].addEventListener("click",function(){
//             for(let j=0;j<tab_menu_dt.length;j++){
//                 tab_menu_dt[j].classList.remove("on")
//             }
//             tab_menu_dt[i].classList.add("on")
//         })
//     }

    
    function mytab(tab){
        for(let i=0;i<tab.length;i++){
            tab[i].addEventListener("click",function(){
                for(let j=0;j<tab.length;j++){
                    tab[j].classList.remove("on")
                }
                tab[i].classList.add("on")
            })
        }
    }
function dltag(classname){
    mytab(document.querySelectorAll(`${classname}`))
}

dltag(".tab_menu>dt")
dltag(".main_tap>dl>dt")
}


