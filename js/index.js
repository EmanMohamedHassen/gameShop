var imageCount = 1;
var total = 4;

function photo(x) {
	var image = document.getElementById('image');
	imageCount = imageCount + x;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "assets/images/carousel/img"+ imageCount +".png";
	clearInterval(time); 								// clear interval stops the set interval.
	time =  window.setInterval(function photoA() { 		// givig the value of time the samfunction below starts the loop 
	var image = document.getElementById('image');
	imageCount = imageCount + 1;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "assets/images/carousel/img"+ imageCount +".png";
	},2000);
	}
 
var time = window.setInterval(function photoA() {    // just addign the sunction to the variable so you can target it.
	var image = document.getElementById('image');
	imageCount = imageCount + 1;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "assets/images/carousel/img"+ imageCount +".png";
	},2000);

   var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.responseText);
        for(var i = 0 ; i < obj.length ; i++){
        document.getElementById('img'+(i+1)).src = obj[i].imageURL;
            
       var name = document.getElementById('name'+(i+1))
       var nValue =obj[i].name;
        var nNode = document.createTextNode(nValue);
            name.append(nNode);
            
        var publisher = document.getElementById('publisher'+(i+1))
        var pValue =obj[i].publisher;
        var pNode = document.createTextNode(pValue);
            publisher.append(pNode);
            
         var rate = document.getElementById('rate'+(i+1))
        var rValue =obj[i].rating;
        var rNode = document.createTextNode(rValue);
            rate.append(rNode);
        }
    }
  };
xmlhttp.open("GET","https://api.myjson.com/bins/l9pn3", true);
xmlhttp.send();
