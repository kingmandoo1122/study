window.onload = function(){

let btn_prev = document.querySelector(".btn_prev")
let btn_next = document.querySelector(".btn_next")
let train = document.querySelector(".train")
let train_list = train.children
let count = 0

btn_next.addEventListener("click",function(){
    count ++
    if (count > 2){count = 0}
    train_list[0].classList.remove("on")
    train_list[1].classList.remove("on")
    train_list[2].classList.remove("on")
    train_list[count].classList.add("on")
})

btn_prev.addEventListener("click",function(){
    count --
    if (count < 0 ){count = 2}
    train_list[0].classList.remove("on")
    train_list[1].classList.remove("on")
    train_list[2].classList.remove("on")
    train_list[count].classList.add("on")
})






}