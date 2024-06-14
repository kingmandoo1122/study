$(document).ready(function(){
    let count = 0 
    let timer

    $("#btn_play").click(function(){
        clearInterval(timer)
        timer = setInterval(function(){
        count++
        $(".box").css("transform",`rotate(${10 * count}deg)`)
        
        },1000)

        $("#btn_stop").click(function(){
            clearInterval(timer)
            console.log(timer)
        })


    })
})
