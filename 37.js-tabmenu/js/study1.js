window.onload = function(){
    let tab_dt = document.querySelectorAll(".tabmenu>dt")

    // tab_dt[0].addEventListener("click",function(){
    //     tab_dt[0].classList.remove("on")
    //     tab_dt[1].classList.remove("on")
    //     tab_dt[2].classList.remove("on")
    //     tab_dt[0].classList.add("on")
    // })
    
    // tab_dt[1].addEventListener("click",function(){
    //     tab_dt[0].classList.remove("on")
    //     tab_dt[1].classList.remove("on")
    //     tab_dt[2].classList.remove("on")
    //     tab_dt[1].classList.add("on")
    // })


    // tab_dt[2].addEventListener("click",function(){
    //     tab_dt[0].classList.remove("on")
    //     tab_dt[1].classList.remove("on")
    //     tab_dt[2].classList.remove("on")
    //     tab_dt[2].classList.add("on")
    // })


    for(let i=0;i<tab_dt.length;i++){
        tab_dt[i].addEventListener("click",function(){
            for(let j=0;j<tab_dt.length;j++){
                tab_dt[j].classList.remove("on")
            }
        tab_dt[i].classList.add("on")
        })


    
    }

}