$(document).ready(function(){

    //sticky-hader
    $(".js-services-sticky-header").waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky");
        }else{
            $("nav").removeClass("sticky");
        }
    })

    //ACTIVE LINK 
    $(".main-nav li").click(function(){
        $(".main-nav li").removeClass("active");
        $(this).addClass("active");
    });
    $(".logo a").click(function(){
        $(".main-nav li").removeClass("active");
        $(".main-nav li:first-child").addClass("active")
    })

    //mixitup--filtering function
    var mixer = mixitup('.mix-container');


});
function openNav(){
    document.getElementById("my-nav").style.width = "75%";
}
function closeNav(){
    document.getElementById("my-nav").style.width = "0";
}
