$(function(){



    // 화면 전체의 
    let a = document.querySelector(".a")
    let scrtop = 0
    let devheight = $(window).height() //화면높이
    let coords = $(".a").offset()

    console.log(coords) //객체형태로 return

    $(window).scroll(function(){
        scrtop = $(window).scrollTop()
        console.log(scrtop)
        if(scrtop > coords.top - devheight*0.5){
            $(".a").addClass("on")
        }
        else{
            $(".a").removeClass("on")
        }
        
    })

    $(window).scroll(function(){
        scrtop = $(this).scrollTop()
        $("p").each(function(){
            if(scrtop > $(this).offset().top - devheight*0.7)
            // 스크롤바가 화면높이의 위에서 50% 지점라인을 넘어섰을때 실행될 소스코드
        {$(this).addClass("on")}
        else{
            $(this).removeClass("on")
        }
        })
    })
    
}
)


// offsetTop - > 해당하는 태그의 top위치를 px값으로 리턴
// window.innerHeight -> 화면창 크기를 px값으로 리턴
// window.scrollY -> 스크롤Y값을 px값으로 리턴 (계속바뀜)


// window.onload =function(){
//     let count=0 
//     let a = document.querySelector(".a")

//     console.log(window.innerHeight)
//     console.log(a.offsetHeight)
// }

