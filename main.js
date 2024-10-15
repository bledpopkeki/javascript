
var button1=document.getElementById("b1");
var button2=document.getElementById("b2");
var button3=document.getElementById("b3");
var ds_text=document.getElementById("txt1");

button1.onclick=function(){
    ds_text.style.color="blue";
    ds_text.style.textAlign = "center";
    ds_text.style.fontSize = "50px";
    js_text.setAtrribute('class','test')

}
button2.onmouseover=function(){
    alert("you hovered over me");
}
button3.onmouseleave=function(){
    ds_text.style.cssText = "color:red; text-align: right; font-size: 100px; background-color: lightblue;"
}





















