$(document).ready(function(){
    //문서가 끝까지 읽힌 뒤 실행되는 소스코드
    // let atag = document.querySelector(".naver_link") 
    // let href1 = atag.getAttribute("href")
    let href2 = $(".naver_link").attr("href")
    // alert(href2)
    $(".naver_link").attr("href","https://www.daum.net")
    let text = $(".naver_link").text()
    console.log(text)


    $(".mom").children().css("border-bottom","1px solid red")
    $(".enom").parent().css("border","10px solid blue")
    $(".enom").prev().css("background","skyblue")
    $(".enom").next().css("background","red")
    $(".enom").next().next().css("background","red")
    $(".notice>li").eq(2).css("color","aqua")


})