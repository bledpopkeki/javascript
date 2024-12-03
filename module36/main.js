$("li").click(function(){
    alert("li has been clicked")
})
$("#h1").click(function(){
    $("#h1").text("anik dhe bled")
    $("#h1").append(" edhe nil")
})

$('#id1').click(function(){
$(this).addClass("clicked");
}).find("span").attr("title", "this is a span");