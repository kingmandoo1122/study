$(document).ready(function(){
    $(".btn1").click(function(){
        $(".banner").css("color","red")
    })
    $(".btn2").click(function(){
        $(".banner").css("color","green")
    })

    $(".btn3").click(function(){
        $(".banner").css("color","blue")
    })
    $(".btn4").click(function(){
        let red = Math.random()*255
        let blue = Math.random()*255
        let green = Math.random()*255
        $(".banner").css("color",`rgb(${red},${blue},${green})`)
    })


    let count = 0

    $(".btnopen").click(function(){
        $(".banner").addClass("on")
        count = 1
    }) 
    $(".btnclose").click(function(){
        $(".banner").removeClass("on")
        count = 0
    }) 

    // $(".btntoggle").click(function(){
    //     count ++
    //     if(count % 2 == 0){
    //     $(".banner").addClass("on")}
    //     else{
    //     $(".banner").removeClass("on")}
    //     }
    // )

    $(".btntoggle").click(function(){
        if(count){
        $(".banner").removeClass("on")
        count = 0
    }
        else{
        $(".banner").addClass("on")
        count = 1    
    }
        }
    )


    // 
    
    let state = false
    $(".btntoggle").click(function(){
        if(state){
        $(".banner").removeClass("on")
            state = false
    }
        else{
        $(".banner").addClass("on")
        state = true
    }
        }
    )
    // $(".btntoggle").click(function(){
    //     $(".banner").toggleClass("on")
    // })
    

}
)
    
