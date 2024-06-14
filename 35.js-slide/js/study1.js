window.onload = function(){
let btn_prev = document.querySelector(".btn_prev")
let btn_next = document.querySelector(".btn_next")
let slider = document.querySelector(".train")
let count = 0

btn_next.addEventListener("click",function(){
    // count += -500
    count++
    if(count>2){count = 0}
    slider.style.transform = `translateX(${count*-33.333}%)`
})

btn_prev.addEventListener("click",function(){
    count --
    if(count<0){count = 2}
    slider.style.transform = `translateX(${count*-33.333}%)`
})

}
    //문서가 다 읽혀진 다음 실행되는 소스코드

