$(document).ready(function(){
    let count = 0 
    let timer
    let num = true

    timer = setInterval(function(){
        count ++
        if (count>2){count=0}
        $(".train").css("transform",`translateX(${count*-33.33}%)`)
    },1000)

    $(".btn_next").click(function(){
        if (num){
            clearInterval(timer)
            num = false
        }
        else{
            setInterval(function(){
                count ++
                if (count>2){count=0}
                $(".train").css("transform",`translateX(${count*-33.33}%)`)
            },1000)
            num = true
        }

      })
})