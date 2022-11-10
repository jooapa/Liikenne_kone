const myImage = new Image(100, 200);
var i = undefined
const sleep = (time) => {
	return new Promise((resolve) => setTimeout(resolve, time))
  }

  	car1Exist = false
	car1Stop = false
  	car2Exist = false
	car2Stop = false
  	car3Exist = false
	car3Stop = false
  	car4Exist = false
	car4Stop = false

	var car1id = null;
	var car2id = null;
	var car3id = null;
	var car4id = null;


	function change(){

		var elem = document.getElementById("myButton1");
			if (elem.value=="Punainen"){
				elem.value = "Vihreä";
			}
			else{
				elem.value = "Punainen";
				imgContainer.appendChild(sourceImage.cloneNode(true));
			} 
	}	
	
	function Start(){
		lightSpot = 2;
		var imgLight = document.createElement('img');
		imgLight.src = "lightc.png";
		imgLight.style.width = "auto";
		imgLight.style.height = "50px";
		imgLight.style.position = "absolute";
		imgLight.style.filter = "saturate(1)";

		if(lightSpot == 0){
			imgLight.style.transform = "translate(245px, 280px)";
			imgLight.style.transform += "rotate(90deg)";
			imgLight.style.filter += "hue-rotate(290deg)";
			document.getElementById('myContainer').appendChild(imgLight);
		}	

		if(lightSpot == 1){
			imgLight.style.transform = "translate(245px, 280px)";
			imgLight.style.transform += "rotate(90deg)";
			imgLight.style.filter += "hue-rotate(0deg)";
			document.getElementById('myContainer').appendChild(imgLight);
		}	

		if(lightSpot == 2){
			imgLight.style.transform = "translate(245px, 280px)";
			imgLight.style.transform += "rotate(90deg)";
			imgLight.style.filter += "hue-rotate(30deg)";
			document.getElementById('myContainer').appendChild(imgLight);
		}	
	}





	function GFG_Fun() {

		var img = document.createElement('img');
		img.src = 'car.png';
		img.style.width = "auto";
		img.style.height = "50px";
		img.style.position = "absolute";

		rng = Math.floor(Math.random() * 4);

		console.log(rng)
		if(rng == 0 && car1Exist == false){let pos = 0;car1Exist = true;
			img.style.transform = "translate(210px, 400px)";
			document.getElementById('myContainer').appendChild(img);
			
			
			clearInterval(car1id);car1id = setInterval(car1frame, 10);
			function car1frame() {if (pos == 120) {
				clearInterval(car1id);
				console.log("Stopped"); car1Stop = true
			  } else {pos++; 
				img.style.top = -pos + 'px'; car1Stop = false
			  }
			}
		}

		if(rng == 1 && car2Exist == false){let pos = 0;car2Exist = true;
			img.style.transform = "translate(410px, 150px)";
			img.style.transform += "rotate(-90deg)";
			document.getElementById('myContainer').appendChild(img);
			
			
			
			clearInterval(car2id);car2id = setInterval(car2frame, 10);
			function car2frame() {if (pos == 120) {
				clearInterval(car2id);
				console.log("Stopped"); car2Stop = true
			  } else {pos++; 
				img.style.left = -pos + 'px'; car2Stop = false
			  }
			}
		}
		
		if(rng == 2 && car3Exist == false){let pos = 0;car3Exist = true;
			img.style.transform = "translate(150px, -30px)";
			img.style.transform += "rotate(180deg)";
			document.getElementById('myContainer').appendChild(img);
			
			
			
			clearInterval(car3id);car3id = setInterval(car3frame, 10);
			function car3frame() {if (pos == 120) {
				clearInterval(car3id);
				console.log("Stopped"); car3Stop = true
			  } else {pos++; 
				img.style.top = pos + 'px'; car3Stop = false
			  }
			}
		}
		
		if(rng == 3 && car4Exist == false){let pos = 0;car4Exist = true;
			img.style.transform = "translate(-20px, 215px)";
			img.style.transform += "rotate(90deg)";
			document.getElementById('myContainer').appendChild(img);
			
			
			
			clearInterval(car4id);car4id = setInterval(car4frame, 10);
			function car4frame() {if (pos == 120) {
				clearInterval(car4id);
				console.log("Stopped"); car4Stop = true
			} else {pos++; 
				img.style.left = pos + 'px'; car4Stop = false
			  }
			}
		}
	} 
	
	
	




	/*
	function TrafficLight(){
		var img1 = document.createElement('img');
		var img2 = document.createElement('img');
		var img3 = document.createElement('img');
		var img4 = document.createElement('img');

		if("value == 11"){
			img1.src = 'redTR.png';
		img1.style.width = "auto";
		img1.style.height = "250px";
		img1.style.justifyContent = "center";
		img1.style.left = "-75px";
		img1.style.top = "100px";
		img1.style.position = "absolute";
		}	
		

		
		
		
		img2.src = 'redTR.png';
		img2.style.width = "auto";
		img2.style.height = "250px";
		img2.style.left = "50px";
		img2.style.top = "100px";
		img2.style.position = "absolute";
		
		

		img3.src = 'redTR.png';
		img3.style.width = "auto";
		img3.style.height = "250px";
		img3.style.justifyContent = "center";
		img3.style.left = "175px";
		img3.style.top = "100px";
		img3.style.position = "absolute";
		
		

		
		img4.src = 'redTR.png';
		img4.style.width = "auto";
		img4.style.height = "250px";
		img4.style.justifyContent = "center";
		img4.style.left = "300px";
		img4.style.top = "100px";
		img4.style.position = "absolute";

		document.getElementById('ControllerChild').appendChild(img1);
		document.getElementById('ControllerChild').appendChild(img2);
		document.getElementById('ControllerChild').appendChild(img3);
		document.getElementById('ControllerChild').appendChild(img4);
	
}
*/