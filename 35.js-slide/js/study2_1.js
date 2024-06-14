$(document).ready(function(){


    let count = 0 
    $(".btn_next").click(function(){
        count ++
        if (count >2){ count = 0}
        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")
    })

    $(".btn_prev").click(function(){
        count --
        if (count <0){ count = 2}
        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")
        
    })
    

})