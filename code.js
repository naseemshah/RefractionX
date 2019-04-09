 /* Code to re-size the th sim according to viewport hieght*/
         var newsize=1;
         resizeSim();
         function resizeSim() {
          var viewportHeight= document.documentElement.clientHeight;
          var SimElement = document.querySelector(".container");
          newsize=viewportHeight/1000;
          console.log(newsize);
          SimElement.style.setProperty('--size', newsize)
         }
         window.addEventListener("resize", resizeSim)
  /*end of code*/

function updateangle(){
var angle=45-slider.value;
var angle12=45-r;
var kh=45.0-(Math.asin(Math.sin((Math.PI/180)*slider.value)/slider2.value))*(180/Math.PI);

var r= (Math.asin(Math.sin((Math.PI/180)*slider.value)/slider2.value))*(180/Math.PI);

var myElement = document.getElementById("item");
myElement.setAttribute('transform','rotate('+ angle +',200,200)');

var myElement3 = document.getElementById("rect");
myElement3.setAttribute('fill-opacity', + (slider2.value/2.5) + - 0 );
if(slider.value==90)
{
kh=-45;
}
var myElement2 = document.getElementById("item2");
myElement2.setAttribute('transform','rotate('+ kh +',200,200)');
document.getElementById("angler").innerHTML=r.toFixed(2);

}


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value;

slider.oninput = function() {
output.innerHTML = this.value;
updateangle();
}
slider2.oninput = function() {
output2.innerHTML = this.value;
updateangle();

}
updateangle();
