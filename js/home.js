function moveImg(pos){
    var left = -pos*1900;
    var imgEle = document.getElementById("content");
    imgEle.style.marginLeft = left+"px";

}