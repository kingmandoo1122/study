window.onload = function(){

    let btn_close_popup = document.querySelector(".btn_close_popup")
    let popup = document.querySelector(".popup")

    btn_close_popup.addEventListener("click",function(e){
        e.preventDefault() // 기본기능삭제
        popup.classList.add("hide")
    })


}