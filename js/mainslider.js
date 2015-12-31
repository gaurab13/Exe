function sliderfun(){

var imagewidth=900;
var slider = document.getElementsByClassName("sliderLong")[0];
var sliderLong = slider.children[0];
var slides= slider.children;
length=slides.length;
navigation(length);
active= 1;

this.sliderleftmargin=0;
var imagewidth=imagewidth;
 animator = new Animator(sliderLong);
var prev= document.getElementById("left");
var next= document.getElementById("right");

 highlight(active);
 intervalId=setInterval(slide,2000);	

function slide(){

if(active<5){
sliderleftmargin= sliderleftmargin - imagewidth;
active++;
}
else{
sliderleftmargin=0;
active=1
}


animator.animate("margin-left", sliderleftmargin, 300);
highlight(active);
}

var array1= document.getElementsByClassName('pager')[0].children;
for( var i=0; i< array1.length; i++){
	var list = document.getElementsByClassName('pager')[0].children[i];
	list.id=i+1;
		list.addEventListener('click',function (event){
			var currentmargin= parseInt(sliderLong.style.marginLeft);
			if(currentmargin%imagewidth==0){
			clearInterval(intervalId);
			active = this.id;
			sliderleftmargin=(active-1)*imagewidth*-1;
			animator.animate("margin-left", sliderleftmargin, 300);
			intervalId= setInterval(slide,2000);
				highlight(active);
			}
		});
	

}


prev.addEventListener('click', function (event){
var currentmargin= parseInt(sliderLong.style.marginLeft);

 if(active >1 && currentmargin%imagewidth==0){
 	
	clearInterval(intervalId);
	sliderleftmargin=sliderleftmargin + imagewidth;
	active--;
	animator.animate("margin-left", sliderleftmargin, 300);
 	intervalId= setInterval(slide,2000);	
 	highlight(active);
		
}
});

next.addEventListener('click', function (event){
var currentmargin= parseInt(sliderLong.style.marginLeft);

 if(active < 5 && currentmargin%imagewidth==0){
	clearInterval(intervalId);
	sliderleftmargin=sliderleftmargin - imagewidth;
	active++;
	animator.animate("margin-left", sliderleftmargin, 300);
 intervalId= setInterval(slide,2000);
 highlight(active);	
}
});


}

function navigation(length){
//console.log("the length is : "+length);


var nav= document.getElementById("nav");
var ul = document.createElement("ul");
ul.className ="pager";
for(var i=0; i<length;i++){
	var li =document.createElement("li");
	
	ul.appendChild(li);
}
nav.appendChild(ul);
}

function highlight(active){
console.log("active has passed : "+ active);
var array1= document.getElementsByClassName('pager')[0].children;
for( var i=0; i< array1.length; i++){
	var unhighlight = document.getElementsByClassName('pager')[0].children[i];
	
	unhighlight.style.backgroundColor="blue";
}      	
var light = document.getElementsByClassName('pager')[0].children[active-1];
light.style.backgroundColor="red";

}




