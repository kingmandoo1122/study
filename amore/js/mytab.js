window.onload = function(){

    function mytab(dlclassname){
        let tab_menu_dt = document.querySelectorAll(`${dlclassname}`)

        for(let i=0;i<tab_menu_dt.length;i++){
            tab_menu_dt[i].addEventListener("click",function(){
                for(let j=0;j<tab_menu_dt.length;j++){
                    tab_menu_dt[j].classList.remove("on")
                }
                tab_menu_dt[i].classList.add("on")
            })
        }

    }


}