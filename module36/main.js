
$("#showbutton").click(function(){
    $("#hidden").show(5000);

})
$("#hidebutton").click(function(){
    $("#hidden").hide();
})
$(".animate").click(function(){
    $(this).animate({
        "left" : "+=50px",
        "width" : "400px",
        "height" : "400px",
        "fontSize" : "50px",
        "opacity" : "-=0.1"
});
})