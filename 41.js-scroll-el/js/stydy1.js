
//  $(document).ready(function(){
//     let scrtop = 0 


//     $(window).scroll(function(){
//         let elv_height = $(".elv").height()
//         let building_top = $(".building").offset().top
//         let building_height = $(".building").height()
//         let ani_length = building_height - elv_height
//         let distance = scrtop - building_top
//         let ani_per = distance / ani_length * 100
//         let height = $(".contents").offset().top - elv_height
//         // distance<ani_length
//         console.log($(".contents").offset().top)

//         scrtop = $(window).scrollTop() 
//         if(distance<0){
//             $(".elv").removeClass("fixed")
//             $(".elv").removeClass("bottom")
//         }

//         if (distance>=0 && scrtop < height ){
//            $(".elv").addClass("fixed")
//            $(".elv").removeClass("bottom")
//            $(".cur_bar").css("width",`${ani_per}%`)
//            $(".per").html(`엘리베이터가 ${Math.round(ani_per*10)/10}% 만큼 진행되고 있습니다.`)
//         }

//         if(distance > ani_length){
//             $(".elv").removeClass("fixed")
//             $(".elv").addClass("bottom")
//         }

//     })

//  })
    

    

 




// // window.onload = function(){

// // let rect 
// // let scroll
// // // console.log('ggg')
// // let building = document.querySelector(".building")
// // let buildingtop = building.getBoundingClientRect().top

// // function getitemtop(tag){
// //     rect = tag.getBoundingClientRect().top
// //     return rect + scroll
// // }

// // console.log(buildingtop)


// // window.addEventListener("scroll",function(){
// //     scroll = window.scrollY
// //     if(scroll>getitemtop(building)){

// //     }



// // })


// // }