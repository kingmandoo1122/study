$(document).ready(function(){

    let count = 0
    $(".btn_prev").click(function(){
        count --
        if (count < 0 ){count = 2}
        $(".train").css("transform",`translateX(${count*-33.33}%)`)
    })

    $(".btn_next").click(function(){
        count ++
        if (count > 2){ count = 0}
        $(".train").css("transform",`translateX(${count*-33.33}%)`)
    })
})