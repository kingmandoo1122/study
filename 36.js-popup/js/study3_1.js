$(document).ready(function(){
    $(".open_popup").click(function(){
        $(".popup").addClass("show")
        $(".black_cover").addClass("show")
    $(".popup_ctl").click(function(e){
        e.preventDefault()
        $(".popup").removeClass("show")
        $(".black_cover").removeClass("show")
    })
    })
})