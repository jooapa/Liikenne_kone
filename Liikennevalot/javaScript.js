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
	lightSpot1 = 0;
	lightSpot2 = 0;
	lightSpot3 = 0;
	lightSpot4 = 0;

	var FirstTimeGOingThrough1 = 1
	var FirstTimeGOingThrough2 = 1
	var FirstTimeGOingThrough3 = 1
	var FirstTimeGOingThrough4 = 1



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
		
		var imgLight1 = document.createElement('img');
		imgLight1.src = "lightc.png";
		imgLight1.style.transform = "translate(260px, 280px)";
		imgLight1.style.transform += "rotate(90deg)";
		imgLight1.style.width = "auto";
		imgLight1.style.height = "50px";
		imgLight1.style.position = "absolute";
		var olddata1=document.getElementById("TrafficLight1").lastChild;

		var imgLight2 = document.createElement('img');
		imgLight2.src = "lightc.png";
		imgLight2.style.transform = "translate(280px, 105px)";
		imgLight2.style.transform += "rotate(0deg)";
		imgLight2.style.width = "auto";
		imgLight2.style.height = "50px";
		imgLight2.style.position = "absolute";
		var olddata2=document.getElementById("TrafficLight2").lastChild;

		var imgLight3 = document.createElement('img');
		imgLight3.src = "lightc.png";
		imgLight3.style.transform = "translate(105px, 90px)";
		imgLight3.style.transform += "rotate(-90deg)";
		imgLight3.style.width = "auto";
		imgLight3.style.height = "50px";
		imgLight3.style.position = "absolute";
		var olddata3=document.getElementById("TrafficLight3").lastChild;

		var imgLight4 = document.createElement('img');
		imgLight4.src = "lightc.png";
		imgLight4.style.transform = "translate(85px, 260px)";
		imgLight4.style.transform += "rotate(180deg)";
		imgLight4.style.width = "auto";
		imgLight4.style.height = "50px";
		imgLight4.style.position = "absolute";
		var olddata4=document.getElementById("TrafficLight4").lastChild;



		if(lightSpot1 == 0){
			if(FirstTimeGOingThrough1 == 0){FirstTimeGOingThrough1 = 1
				document.getElementById("TrafficLight1").removeChild(olddata1);
			}
			imgLight1.style.filter += "hue-rotate(30deg)";
			document.getElementById('TrafficLight1').appendChild(imgLight1);
		}		
		if(lightSpot1 == 1){
			imgLight1.style.filter += "hue-rotate(290deg)";
			document.getElementById("TrafficLight1").removeChild(olddata1);
			document.getElementById('TrafficLight1').appendChild(imgLight1);
		}
		
		if(lightSpot2 == 0){
			imgLight2.style.filter += "hue-rotate(30deg)";
			if(FirstTimeGOingThrough2 == 0){FirstTimeGOingThrough2 = 1
				document.getElementById("TrafficLight2").removeChild(olddata2);
			}
			document.getElementById('TrafficLight2').appendChild(imgLight2);
		}		

		if(lightSpot2 == 1){
			imgLight2.style.filter += "hue-rotate(290deg)";
			if(FirstTimeGOingThrough2 == 0){FirstTimeGOingThrough2 = 1
				document.getElementById("TrafficLight2").removeChild(olddata2);
			}			
			document.getElementById('TrafficLight2').appendChild(imgLight2);
		}
		
		if(lightSpot3 == 0){
			imgLight3.style.filter += "hue-rotate(30deg)";
			if(FirstTimeGOingThrough3 == 0){FirstTimeGOingThrough3 = 1
				document.getElementById("TrafficLight3").removeChild(olddata3);
			}	
			document.getElementById('TrafficLight3').appendChild(imgLight3);
		}		

		if(lightSpot3 == 1){
			imgLight3.style.filter += "hue-rotate(290deg)";
			if(FirstTimeGOingThrough3 == 0){FirstTimeGOingThrough3 = 1
				document.getElementById("TrafficLight3").removeChild(olddata3);
			}	
			document.getElementById('TrafficLight3').appendChild(imgLight3);
			console.log("31");
		}
		if(lightSpot4 == 0){
			imgLight4.style.filter += "hue-rotate(30deg)";
			if(FirstTimeGOingThrough4 == 0){FirstTimeGOingThrough4 = 1
				document.getElementById("TrafficLight4").removeChild(olddata4);
			}	
			document.getElementById('TrafficLight4').appendChild(imgLight4);console.log("32");
		}		

		if(lightSpot4 == 1){
			imgLight4.style.filter += "hue-rotate(290deg)";
			if(FirstTimeGOingThrough4 == 0){FirstTimeGOingThrough4 = 1
				document.getElementById("TrafficLight4").removeChild(olddata4);
			}	
			document.getElementById('TrafficLight4').appendChild(imgLight4)
		}
		
		FirstTimeGOingThrough1 = 0
		FirstTimeGOingThrough2 = 0
		FirstTimeGOingThrough3 = 0
		FirstTimeGOingThrough4 = 0
		
	}
	
	function Start11(){
		 
		lightSpot1 = 0;
		Start();
	}
	function Start12(){
		lightSpot1 = 1;
		Start();
	}
	function Start21(){
		lightSpot2 = 0;
		Start();
	}
	function Start22(){
		lightSpot2 = 1;
		Start();
	}
	function Start31(){
		lightSpot3 = 0;
		Start();
	}
	function Start32(){
		lightSpot3 = 1;
		Start();
	}
	function Start41(){
		lightSpot4 = 0;
		Start();
	}
	function Start42(){
		lightSpot4 = 1;
		Start();
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
			img.style.transform = "translate(220px, 400px)";
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
			img.style.transform = "translate(420px, 150px)";
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
			img.style.transform = "translate(160px, -30px)";
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