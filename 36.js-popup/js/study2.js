window.onload = function(){

    let open_popup = document.querySelector(".open_popup")
    let popup = document.querySelector(".popup")
    let btn_close_popup = document.querySelector(".btn_close_popup")
    open_popup.addEventListener("click",function(){
        popup.classList.add("show")
    })
    btn_close_popup.addEventListener("click",function(e){
        e.preventDefault()
        popup.classList.remove("show")
        })


}