var v = 0;
var max = 5000;
var curr = 0;

function update(c){
	curr = c;
	var raised = document.getElementById("raised");
	raised.innerHTML = "&pound;"+curr+" raised!";
	setTimeout(loadBar, 500);
}

function loadBar(){
	var bar = document.getElementById("progressbar");
	bar.setAttribute("aria-valuenow", v);
	bar.setAttribute("style", "width:"+((100*curr)/max)+"%");
	if(v<curr)v++;
}

update(100);