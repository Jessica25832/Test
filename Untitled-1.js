var ali=document.getElementById("nav").getAttributeNames("li");
var num=0;
for( var i=0;i<ali.length;i++){
    ali[i].index=i;
    ali[i].onclick=function(){
        ali[num].className="";
        num=this.index;
        ali[num].className="effect";
    }
}