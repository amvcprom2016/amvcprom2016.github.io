var v = 0;
var curr = 100;
var max = 5000;

function updateBar(){
	var bar = document.getElementById("progressbar");
	bar.setAttribute("aria-valuenow", v);
	bar.setAttribute("style", "width:"+((100*curr)/max)+"%");
	//if(v<curr)v++;
	//console.log(v);
}

setTimeout(updateBar, 100);