canvas = document.getElementById("myCanvas");
cntx = canvas.getContext("2d");

MouseEvent = "";
var last_pos_x, last_pos_y;
color = "black";
cntx.strokeStyle = color;
cntx.lineWidth = 2;

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    MouseEvent = "mouseup";

}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    MouseEvent = "mouseleave";

}
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    MouseEvent = "mousedown";

}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_pos_x = e.clientX - canvas.offsetLeft;
    current_pos_y = e.clientY - canvas.offsetTop;

    if (MouseEvent == "mousedown") {
        cntx.beginPath();
        cntx.strokeStyle = color;
        cntx.lineWidth = 2;
        //cntx.moveTo(last_pos_x,last_pos_y);
        //cntx.lineTo(current_pos_x,current_pos_y);
        cntx.arc(current_pos_x,current_pos_y,20,0,2*Math.PI);
        cntx.stroke(); 
    }
    last_pos_x=current_pos_x;
    last_pos_y=current_pos_y;
} 
