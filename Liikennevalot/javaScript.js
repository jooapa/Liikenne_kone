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

Car4InterHalfDone = false
Car1InterHalfDone = false
Car2InterHalfDone = false
Car3InterHalfDone = false


function change1() {
	var elem = document.getElementById("TrafficButton1");
	if (elem.value=="Punainen") {
		elem.value = "--Vihreä--";
		Start42();
	}
	else{
		elem.value = "Punainen";
		Start41();
	} 
}	

function change2() {
	var elem = document.getElementById("TrafficButton2");
	if (elem.value=="Punainen") {
		elem.value = "--Vihreä--";
		Start32();
	}
	else {
		elem.value = "Punainen";
		Start31();
	} 
}	

function change3() {
	var elem = document.getElementById("TrafficButton3");
	if (elem.value=="Punainen") {
		elem.value = "--Vihreä--";
		Start22();
	}
	else {
		elem.value = "Punainen";
		Start21();
	} 
}	

function change4() {
	var elem = document.getElementById("TrafficButton4");
	if (elem.value=="Punainen") {
		elem.value = "--Vihreä--";
		Start12();
	}
	else {
		elem.value = "Punainen";
		Start11();		
	} 
}	

function onload(){
	CloneCar();
	Start();
}
function Start() {
	var imgLight1 = document.createElement('img');
	imgLight1.src = "lightc.png";
	imgLight1.style.transform = "translate(250px, 280px)";
	imgLight1.style.transform += "rotate(90deg)";
	imgLight1.style.width = "auto";
	imgLight1.style.height = "50px";
	imgLight1.style.position = "absolute";
	var olddata1=document.getElementById("TrafficLight1").lastChild;

	var imgLight2 = document.createElement('img');
	imgLight2.src = "lightc.png";
	imgLight2.style.transform = "translate(280px, 100px)";
	imgLight2.style.transform += "rotate(0deg)";
	imgLight2.style.width = "auto";
	imgLight2.style.height = "50px";
	imgLight2.style.position = "absolute";
	var olddata2=document.getElementById("TrafficLight2").lastChild;

	var imgLight3 = document.createElement('img');
	imgLight3.src = "lightc.png";
	imgLight3.style.transform = "translate(100px, 80px)";
	imgLight3.style.transform += "rotate(-90deg)";
	imgLight3.style.width = "auto";
	imgLight3.style.height = "50px";
	imgLight3.style.position = "absolute";
	var olddata3=document.getElementById("TrafficLight3").lastChild;

	var imgLight4 = document.createElement('img');
	imgLight4.src = "lightc.png";
	imgLight4.style.transform = "translate(80px, 250px)";
	imgLight4.style.transform += "rotate(180deg)";
	imgLight4.style.width = "auto";
	imgLight4.style.height = "50px";
	imgLight4.style.position = "absolute";
	var olddata4=document.getElementById("TrafficLight4").lastChild;

	if(lightSpot1 == 0) {
		if(FirstTimeGOingThrough1 == 0){
			FirstTimeGOingThrough1 = 1
			document.getElementById("TrafficLight1").removeChild(olddata1);
		}
		imgLight1.style.filter += "hue-rotate(290deg)";
		document.getElementById('TrafficLight1').appendChild(imgLight1);
	}		
	if(lightSpot1 == 1) {
		imgLight1.style.filter += "hue-rotate(30deg)";
		document.getElementById("TrafficLight1").removeChild(olddata1);
		document.getElementById('TrafficLight1').appendChild(imgLight1);
	}
	//----------------------------------------------------------------
	if(lightSpot2 == 0) {
		imgLight2.style.filter += "hue-rotate(290deg)";
		if(FirstTimeGOingThrough2 == 0){FirstTimeGOingThrough2 = 1
			document.getElementById("TrafficLight2").removeChild(olddata2);
		}
		document.getElementById('TrafficLight2').appendChild(imgLight2);
	}		

	if(lightSpot2 == 1) {
		imgLight2.style.filter += "hue-rotate(30deg)";
		if(FirstTimeGOingThrough2 == 0){FirstTimeGOingThrough2 = 1
			document.getElementById("TrafficLight2").removeChild(olddata2);
		}			
		document.getElementById('TrafficLight2').appendChild(imgLight2);
	}
	//----------------------------------------------------------------
	if(lightSpot3 == 0) {
		imgLight3.style.filter += "hue-rotate(290deg)";
		if(FirstTimeGOingThrough3 == 0){FirstTimeGOingThrough3 = 1
			document.getElementById("TrafficLight3").removeChild(olddata3);
		}	
		document.getElementById('TrafficLight3').appendChild(imgLight3);
	}		
	if(lightSpot3 == 1) {
		imgLight3.style.filter += "hue-rotate(30deg)";
		if(FirstTimeGOingThrough3 == 0){FirstTimeGOingThrough3 = 1
			document.getElementById("TrafficLight3").removeChild(olddata3);
		}	
		document.getElementById('TrafficLight3').appendChild(imgLight3);
		console.log("31");
	}
	//----------------------------------------------------------------
	if(lightSpot4 == 0) {
		imgLight4.style.filter += "hue-rotate(290deg)";
		if(FirstTimeGOingThrough4 == 0){FirstTimeGOingThrough4 = 1
			document.getElementById("TrafficLight4").removeChild(olddata4);
		}	
		document.getElementById('TrafficLight4').appendChild(imgLight4);console.log("32");
	}		

	if(lightSpot4 == 1) {
		imgLight4.style.filter += "hue-rotate(30deg)";
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

function Start11() {
	lightSpot1 = 0;
	Start();
}

function Start12() {
	lightSpot1 = 1;
	Start();
	if(Car1RoadTurn == 2){
		if (lightSpot1 == 1){
			turn12();
			console.log("car1 going to rotate to road 2")
		}
	}
	if(Car1RoadTurn == 3){
		if (lightSpot1 == 1){
			turn13();
			console.log("car1 going to rotate to road 2")
		}
	}
	if(Car1RoadTurn == 4){
		if (lightSpot1 == 1){
			turn14();
			console.log("car1 going to rotate to road 2")
		}
	}
}


function Start21() {
	lightSpot2 = 0;
	Start();

}
function Start22() {
	lightSpot2 = 1;
	Start();
	if(Car2RoadTurn == 1){
		if (lightSpot2 == 1){
			turn21();
			console.log("car1 going to rotate to road 2")
		}
	}
	if(Car2RoadTurn == 3){
		if (lightSpot2 == 1){
			turn23();
			console.log("car1 going to rotate to road 2")
		}
	}
	if(Car2RoadTurn == 4){
		if (lightSpot2 == 1){
			turn24();
			console.log("car1 going to rotate to road 2")
		}
	}
}

function Start31() {
	lightSpot3 = 0;
	Start();
}

function Start32() {
	lightSpot3 = 1;
	Start();
	if(Car3RoadTurn == 1){
		if (lightSpot3 == 1){
			turn31();
			console.log("car3 going to rotate to road 1")
		}
	}
	if(Car3RoadTurn == 4){
		if (lightSpot3 == 1){
			turn34();
			console.log("car3 going to rotate to road 4")
		}
	}
	if(Car3RoadTurn == 2){
		if (lightSpot3 == 1){
			turn32();
			console.log("car3 going to rotate to road 2")
		}
	}
}

function Start41() {
	lightSpot4 = 0;
	Start();
}

function Start42() {
	lightSpot4 = 1;
	Start();
	if(Car4RoadTurn == 1){
		if (lightSpot4 == 1){
			turn41();
			console.log("car4 going to rotate to road 1")
		}
	}
	if(Car4RoadTurn == 3){
		if (lightSpot4 == 1){
			turn43();
			console.log("car4 going to rotate to road 4")
		}
	}
	if(Car4RoadTurn == 2){
		if (lightSpot4 == 1){
			turn42();
			console.log("car4 going to rotate to road 2")
		}
	}
}

function CloneCar() {

	Car1.imgCar1.src = Car1.pic; 
	Car1.imgCar1.style.width = Car1.w
	Car1.imgCar1.style.height = Car1.h
	Car1.imgCar1.style.position = Car1.p
	
	Car2.imgCar2.src = Car2.pic; 
	Car2.imgCar2.style.width = Car2.w
	Car2.imgCar2.style.height = Car2.h
	Car2.imgCar2.style.position = Car2.p

	Car3.imgCar3.src = Car3.pic; 
	Car3.imgCar3.style.width = Car3.w
	Car3.imgCar3.style.height = Car3.h
	Car3.imgCar3.style.position = Car3.p
	
	Car4.imgCar4.src = Car4.pic; 
	Car4.imgCar4.style.width = Car4.w
	Car4.imgCar4.style.height = Car4.h
	Car4.imgCar4.style.position = Car4.p
	
	//rng = Math.floor(Math.random() * 4);
	rng = 0;
	


	console.log(rng)
	if(rng == 0 && car1Exist == false){
		Car1Rotation = 0
		car1Exist = true;
		Car1.imgCar1.style.transform = "translate(220px, 390px)";
		Car1.imgCar1.style.transform += "rotate("+Car1Rotation+"deg)";
		document.getElementById('myContainer').appendChild(Car1.imgCar1);
		Car1RoadTurn = Math.floor(Math.random() * 4) +1;
		if(Car1RoadTurn == 1){Car1RoadTurn = 2}
		clearInterval(car1id);
		car1id = setInterval(car1frame, 3);
		function car1frame() {
			if (Car1.pos == 120) {
				clearInterval(car1id);
				console.log("car1 stoppped at light");
				car1Stop = true;
				
				console.log(Car1RoadTurn);

				
				if(Car1RoadTurn == 2){
					if (lightSpot1 == 1){
						turn12();
						console.log("car1 going to rotate to road 2")
					}
				}
				if(Car1RoadTurn == 3){
					if (lightSpot1 == 1){
						turn13();
						console.log("car1 going to rotate to road 2")
					}
				}
				if(Car1RoadTurn == 4){
					if (lightSpot1 == 1){
						turn14();
						console.log("car1 going to rotate to road 2")
					}
				}
				}
				else {
					Car1.pos++; 
					Car1.imgCar1.style.top = -Car1.pos + 'px'; 
					car1Stop = false
				}
			}
	}
	rng = 1;
	if(rng == 1 && car2Exist == false) {
		Car2Rotation = -90
		car2Exist = true;
		Car2.imgCar2.style.transform = "translate(410px, 145px)";
		Car2.imgCar2.style.transform += "rotate("+Car2Rotation+"deg)";
		document.getElementById('myContainer').appendChild(Car2.imgCar2);
		Car2RoadTurn = Math.floor(Math.random() * 4) +1;
		if(Car2RoadTurn == 2){Car2RoadTurn = 4}
		clearInterval(car2id);
		car2id = setInterval(car2frame, 3);
		function car2frame() {
			if (Car2.pos == 120) {
				clearInterval(car2id);
				console.log("car2 stoppped at light");
				car2Stop = true;
				console.log(Car2RoadTurn);

				if(Car2RoadTurn == 1){
					if (lightSpot2 == 1){
						turn21();
						console.log("car2 going to rotate to road 1")
					}
				}
				if(Car2RoadTurn == 3){
					if (lightSpot2 == 1){
						turn23();
						console.log("car2 going to rotate to road 3")
					}
				}
				if(Car2RoadTurn == 4){
					if (lightSpot2 == 1){
						turn24();
						console.log("car2 going to rotate to road 4")
					}
				}
				}
				else {
					Car2.pos++; 
					Car2.imgCar2.style.left = -Car2.pos + 'px'; 
					car2Stop = false
				}
			}
	}
	rng = 2;
	if(rng == 2 && car3Exist == false) {

		Car3Rotation = 180
		car3Exist = true;
		Car3.imgCar3.style.transform = "translate(160px, -30px)";
		Car3.imgCar3.style.transform += "rotate("+Car3Rotation+"deg)";
		document.getElementById('myContainer').appendChild(Car3.imgCar3);
		Car3RoadTurn = Math.floor(Math.random() * 4) +1;
		if(Car3RoadTurn == 3){Car3RoadTurn = 1}
		clearInterval(car3id);
		car3id = setInterval(car3frame, 3);
		function car3frame() {
			if (Car3.pos == 120) {
				clearInterval(car3id);
				console.log("car3 stoppped at light");
				car3Stop = true;
				console.log(Car3RoadTurn);

				
				if(Car3RoadTurn == 1){
					if (lightSpot3 == 1){
						turn31();
						console.log("car3 going to rotate to road 1")
					}
				}
				if(Car3RoadTurn == 2){
					if (lightSpot3 == 1){
						turn32();
						console.log("car3 going to rotate to road 3")
					}
				}
				if(Car3RoadTurn == 4){
					if (lightSpot3 == 1){
						turn34();
						console.log("car3 going to rotate to road 4")
					}
				}
				}
				else {
					Car3.pos++; 
					Car3.imgCar3.style.top = Car3.pos + 'px'; 
					car3Stop = false
				}
			}
	}
	rng = 3;
	if(rng == 3 && car4Exist == false) {
		Car4Rotation = 90
		car4Exist = true;
		Car4.imgCar4.style.transform = "translate(-25px, 210px)";
		Car4.imgCar4.style.transform += "rotate("+Car4Rotation+"deg)";
		document.getElementById('myContainer').appendChild(Car4.imgCar4);
		Car4RoadTurn = Math.floor(Math.random() * 4) +1;
		if(Car4RoadTurn == 4){Car4RoadTurn = 1}
		Car4RoadTurn = 3
		clearInterval(car4id);
		car4id = setInterval(car4frame, 3);
		function car4frame() {
			if (Car4.pos == 120) {
				clearInterval(car4id);
				console.log("car4 stoppped at light");
				car4Stop = true;
				console.log(Car4RoadTurn);

				
				if(Car4RoadTurn == 1){
					if (lightSpot4 == 1){
						turn41();
						console.log("car4 going to rotate to road 1")
					}
				}
				if(Car4RoadTurn == 2){
					if (lightSpot4 == 1){
						turn42();
						console.log("car4 going to rotate to road 2")
					}
				}
				if(Car4RoadTurn == 3){
					if (lightSpot4 == 1){
						turn43();
						console.log("car4 going to rotate to road 4")
					}
				}
				}
				else {
					Car4.pos++; 
					Car4.imgCar4.style.left = Car4.pos + 'px'; 
					car4Stop = false
				}
			}
	}
} 


function turn12() {
	if(Car1InterHalfDone == false){
		if(lightSpot1 == 1 && Car1.pos == 120) {
			clearInterval(car1id);
			car1id = setInterval(car1frame, 3);
			function car1frame() {
				if (Car1.pos == 180) {
					clearInterval(car1id);
					console.log("Car1 is keskel");
					Car1InterHalfDone = true
					Car1.pos = 0;
					turn122();
					
					//Crash detection
					
				} else {
					Car1.pos++; 
					Car1.imgCar1.style.top = -Car1.pos + 'px';
					Car1.imgCar1.style.transform += "rotate("+ 1.5 +"deg)"; 
					car1Stop = false
				}
			}
		}
	}
}

function turn122(){
	clearInterval(car1id);
	car1id = setInterval(car1frame, 3);
	function car1frame() {
		if (Car1.pos == 180) {
			clearInterval(car1id);
			console.log("Car1 is keskel");
			Car1InterHalfDone = true
			Car1.pos = 1;
			Car1Reset();			
			
			//Crash detection
			
		} else {
			Car1.pos++; 
			Car1.imgCar1.style.left = Car1.pos + 'px';
			Car1.imgCar1.style.transform += "rotate("+ 0 +"deg)"; 
			car1Stop = false
		}
	}
}

function turn13() {
	if(Car1InterHalfDone == false){
		if(lightSpot1 == 1 && Car1.pos == 120) {
			clearInterval(car1id);
			car1id = setInterval(car1frame, 3);
			function car1frame() {
				if (Car1.pos == 450) {
					clearInterval(car1id);
					
					Car1.pos = 0;
					
					//Crash detection
					Car1Reset();
				} else {
					Car1.pos++; 
					Car1.imgCar1.style.top = -Car1.pos + 'px';
					car1Stop = false
					if(Car1.pos > 190 && Car1.pos < 250){
						console.log("Car1 is keskel");
						Car1InterHalfDone = true
					}
				}
			}
		}
	}
}

function turn14() {
	if(Car1InterHalfDone == false){
		if(lightSpot1 == 1 && Car1.pos == 120) {
			clearInterval(car1id);
			car1id = setInterval(car1frame, 3);
			function car1frame() {
				if (Car1.pos == 240) {
					clearInterval(car1id);
					console.log("Car1 is keskel");
					Car1InterHalfDone = true
					Car1.pos = 0;
					turn144();
					
					//Crash detection
					
				} else {
					Car1.pos++; 
					Car1.imgCar1.style.top = -Car1.pos + 'px';
					Car1.imgCar1.style.transform += "rotate("+ -0.75 +"deg)"; 
					car1Stop = false
				}
			}
		}
	}
}

function turn144(){
	clearInterval(car1id);
	car1id = setInterval(car1frame, 3);
	function car1frame() {
		if (Car1.pos == 260) {
			clearInterval(car1id);
			console.log("Car1 is keskel");
			Car1InterHalfDone = true
			Car1.pos = 1;
			Car1Reset();			
			
			//Crash detection

		} else {
			Car1.pos++; 
			Car1.imgCar1.style.left = -Car1.pos + 'px';
			Car1.imgCar1.style.transform += "rotate("+ 0 +"deg)"; 
			car1Stop = false
		}
	}
}

function turn21() {
	if(Car2InterHalfDone == false){
		if(lightSpot2 == 1 && Car2.pos == 120) {
			clearInterval(car2id);
			car2id = setInterval(car2frame, 3);
			function car2frame() {
				if (Car2.pos == 245) {
					clearInterval(car2id);
					console.log("Car2 is keskel");
					Car2InterHalfDone = true
					Car2.pos = 0;
					turn211();
					
					//Crash detection

				} else {
					Car2.pos++; 
					Car2.imgCar2.style.left = -Car2.pos + 'px';
					Car2.imgCar2.style.transform += "rotate("+ -0.705 +"deg)"; 
					car2Stop = false
				}
			}
		}
	}
}

function turn211(){
	clearInterval(car2id);
	car2id = setInterval(car2frame, 3);
	function car2frame() {
		if (Car2.pos == 260) {
			clearInterval(car2id);
			console.log("Car2 is keskel");
			Car2InterHalfDone = true
			Car2.pos = 0;
			Car2Reset();			
			
			//Crash detection

		} else {
			Car2.pos++; 
			Car2.imgCar2.style.top = Car2.pos + 'px';
			Car2.imgCar2.style.transform += "rotate("+ 0 +"deg)"; 
			car2Stop = false
		}
	}
}

function turn23() {
	if(Car2InterHalfDone == false){
		if(lightSpot2 == 1 && Car2.pos == 120) {
			clearInterval(car2id);
			car2id = setInterval(car2frame, 3);
			function car2frame() {
				if (Car2.pos == 190) {
					clearInterval(car2id);
					console.log("Car2 is keskel");
					Car2InterHalfDone = true
					Car2.pos = 0;
					turn233();
					
					//Crash detection

				} else {
					Car2.pos++; 
					Car2.imgCar2.style.left = -Car2.pos + 'px';
					Car2.imgCar2.style.transform += "rotate("+ 1.3 +"deg)"; 
					car2Stop = false
				}
			}
		}
	}
}

function turn233(){
	clearInterval(car2id);
	car2id = setInterval(car2frame, 3);
	function car2frame() {
		if (Car2.pos == 240) {
			clearInterval(car2id);
			console.log("Car2 is lopussa");
			Car2InterHalfDone = true
			Car2.pos = 1;
			Car2Reset();			
			
			//Crash detection

		} else {
			Car2.pos++; 
			Car2.imgCar2.style.top = -Car2.pos + 'px';
			Car2.imgCar2.style.transform += "rotate("+ 0 +"deg)"; 
			car2Stop = false
		}
	}
}

function turn24() {
	if(Car2InterHalfDone == false){
		if(lightSpot2 == 1 && Car2.pos == 120) {
			clearInterval(car2id);
			car2id = setInterval(car2frame, 3);
			function car2frame() {
				if (Car2.pos == 450) {
					clearInterval(car2id);
					
					Car2.pos = 0;
					
					//Crash detection
					Car2Reset();
				} else {
					Car2.pos++; 
					Car2.imgCar2.style.left = -Car2.pos + 'px';
					car2Stop = false
					if(Car2.pos > 190 && Car2.pos < 250){
						console.log("Car2 is keskel");
						Car2InterHalfDone = true
					}
				}
			}
		}
	}
}

function turn31() {
	if(Car3InterHalfDone == false){
		if(lightSpot3 == 1 && Car3.pos == 120) {
			clearInterval(car3id);
			car3id = setInterval(car3frame, 3);
			function car3frame() {
				if (Car3.pos == 450) {
					clearInterval(car3id);
					
					Car3.pos = 0;
					
					//Crash detection
					Car3Reset();
				} else {
					Car3.pos++; 
					Car3.imgCar3.style.top = Car3.pos + 'px';
					car3Stop = false
					if(Car3.pos > 190 && Car3.pos < 250){
						console.log("Car3 is keskel");
						Car3InterHalfDone = true
					}
				}
			}
		}
	}
}

function turn32() {
	if(Car3InterHalfDone == false){
		if(lightSpot3 == 1 && Car3.pos == 120) {
			clearInterval(car3id);
			car3id = setInterval(car3frame, 3);
			function car3frame() {
				if (Car3.pos == 235) {
					clearInterval(car3id);
					console.log("Car3 is keskel");
					Car3InterHalfDone = true
					Car3.pos = 0;
					turn322();
					
					//Crash detection

				} else {
					Car3.pos++; 
					Car3.imgCar3.style.top = Car3.pos + 'px';
					Car3.imgCar3.style.transform += "rotate("+ -0.782 +"deg)"; 
					car3Stop = false
				}
			}
		}
	}
}

function turn322(){
	clearInterval(car3id);
	car3id = setInterval(car3frame, 3);
	function car3frame() {
		if (Car3.pos == 260) {
			clearInterval(car3id);
			console.log("Car3 is lopussa");
			Car3InterHalfDone = true
			Car3.pos = 1;
			Car3Reset();			
			
			//Crash detection

		} else {
			Car3.pos++; 
			Car3.imgCar3.style.left = Car3.pos + 'px';
			Car3.imgCar3.style.transform += "rotate("+ 0 +"deg)"; 
			car3Stop = false
		}
	}
}

function turn34() {
	if(Car3InterHalfDone == false){
		if(lightSpot3 == 1 && Car3.pos == 120) {
			clearInterval(car3id);
			car3id = setInterval(car3frame, 3);
			function car3frame() {
				if (Car3.pos == 180) {
					clearInterval(car3id);
					console.log("Car3 is keskel");
					Car3InterHalfDone = true
					Car3.pos = 0;
					turn344();
					
					//Crash detection

				} else {
					Car3.pos++; 
					Car3.imgCar3.style.top = Car3.pos + 'px';
					Car3.imgCar3.style.transform += "rotate("+ 1.5 +"deg)"; 
					car3Stop = false
				}
			}
		}
	}
}

function turn344(){
	clearInterval(car3id);
	car3id = setInterval(car3frame, 3);
	function car3frame() {
		if (Car3.pos == 240) {
			clearInterval(car3id);
			console.log("Car3 is lopussa");
			Car3InterHalfDone = true
			Car3.pos = 1;
			Car3Reset();			
			
			//Crash detection

		} else {
			Car3.pos++; 
			Car3.imgCar3.style.left = -Car3.pos + 'px';
			Car3.imgCar3.style.transform += "rotate("+ 0 +"deg)"; 
			car3Stop = false
		}
	}
}

function turn41() {
	if(Car4InterHalfDone == false){
		if(lightSpot4 == 1 && Car4.pos == 120) {
			clearInterval(car4id);
			car4id = setInterval(car4frame, 3);
			function car4frame() {
				if (Car4.pos == 180) {
					clearInterval(car4id);
					console.log("Car4 is keskel");
					Car4InterHalfDone = true
					Car4.pos = 0;
					turn411();
					
					//Crash detection

				} else {
					Car4.pos++; 
					Car4.imgCar4.style.left = Car4.pos + 'px';
					Car4.imgCar4.style.transform += "rotate("+ 1.5 +"deg)"; 
					car4Stop = false
				}
			}
		}
	}
}

function turn411(){
	clearInterval(car4id);
	car4id = setInterval(car4frame, 3);
	function car4frame() {
		if (Car4.pos == 240) {
			clearInterval(car4id);
			console.log("Car4 is lopussa");
			Car4InterHalfDone = true
			Car4.pos = 1;
			Car4Reset();			
			
			//Crash detection

		} else {
			Car4.pos++; 
			Car4.imgCar4.style.top = Car4.pos + 'px';
			Car4.imgCar4.style.transform += "rotate("+ 0 +"deg)"; 
			car4Stop = false
		}
	}
}
function turn43() {
	if(Car4InterHalfDone == false){
		if(lightSpot4 == 1 && Car4.pos == 120) {
			clearInterval(car4id);
			car4id = setInterval(car4frame, 3);
			function car4frame() {
				if (Car4.pos == 240) {
					clearInterval(car4id);
					console.log("Car4 is keskel");
					Car4InterHalfDone = true
					Car4.pos = 0;
					turn433();
					
					//Crash detection

				} else {
					Car4.pos++; 
					Car4.imgCar4.style.left = Car4.pos + 'px';
					Car4.imgCar4.style.transform += "rotate("+ -0.75 +"deg)"; 
					car4Stop = false
				}
			}
		}
	}
}

function turn433(){
	clearInterval(car4id);
	car4id = setInterval(car4frame, 3);
	function car4frame() {
		if (Car4.pos == 260) {
			clearInterval(car4id);
			console.log("Car4 is lopussa");
			Car4InterHalfDone = true
			Car4.pos = 1;
			Car4Reset();			
			
			//Crash detection

		} else {
			Car4.pos++; 
			Car4.imgCar4.style.top = -Car4.pos + 'px';
			Car4.imgCar4.style.transform += "rotate("+ 0 +"deg)"; 
			car4Stop = false
		}
	}
}





Car4 = {
	pos: 0,
	imgCar4: document.createElement('img'),
	pic: 'car.png',
	w: "auto",
	h: "50px",
	p: "absolute",
}

Car1 = {
	pos: 0,
	imgCar1: document.createElement('img'),
	pic: 'car.png',
	w: "auto",
	h: "50px",
	p: "absolute",
}
Car2 = {
	pos: 0,
	imgCar2: document.createElement('img'),
	pic: 'car.png',
	w: "auto",
	h: "50px",
	p: "absolute",
}
Car3 = {
	pos: 0,
	imgCar3: document.createElement('img'),
	pic: 'car.png',
	w: "auto",
	h: "50px",
	p: "absolute",
}

//road system  car "1-4" turning to road "1-4"
var car1Turn2 = 0;
var car1Turn3 = 0;
var car1Turn4 = 0;

var car2Turn3 = 0;
var car2Turn4 = 0;
var car2Turn1 = 0;

var car3Turn4 = 0;
var car3Turn1 = 0;
var car3Turn2 = 0;

var car4Turn1 = 0;
var car4Turn2 = 0;
var car4Turn4 = 0;




//Tee ohjelma, jolla ohjaat kuvan mukaisen 4 tien risteyksen liikennevaloja.
//Huomio liikenneturvallisuus ja ajovuorot. Valojen ohjaus käynnistetään ja 
//pysäytetään hiirellä nappia painamalla. Havainnollista jollakin tavalla milloin 
//kelläkin on ajovuoro ja milloin odotusvuoro. Käytä vähintään kaksia nuolivaloja ja ajastusta. 
//Huomioiden liikenteen joustavuus ja turvallisuus mahdollista liikennevalojen 
//ohjauksella ajaminen useammasta suunnasta samanaikaisesti.
