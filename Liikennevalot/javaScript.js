/*
const myImage = new Image(100, 200);
var i = undefined
const sleep = (time) => {
	return new Promise((resolve) => setTimeout(resolve, time))
  }
*/
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

var FirstTimeGOingThrough1 = 1;
var FirstTimeGOingThrough2 = 1;
var FirstTimeGOingThrough3 = 1;
var FirstTimeGOingThrough4 = 1;

let FirstTimeGOingThroughStartArrows1 = 1;
let FirstTimeGOingThroughStartArrows2 = 1;
let FirstTimeGOingThroughStartArrows3 = 1;
let FirstTimeGOingThroughStartArrows4 = 1;

var ArrowThrough1 = 1;
var ArrowThrough2 = 1;
var ArrowThrough3 = 1;
var ArrowThrough4 = 1;

Car4InterHalfDone = false
Car1InterHalfDone = false
Car2InterHalfDone = false
Car3InterHalfDone = false

Car1Tile = 0
Car2Tile = 0
Car3Tile = 0
Car4Tile = 0

var autoNopeus = 5

function changeCarSpeed(){
	LoadArrows();
	//autoNopeus = prompt("Syötä Auton Nopeus", "Sitä pienempi numero sitä nopeampi 'toimii vaan ainakin operassa'")
}
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
	//LoadArrows();
}
function Start() {
	var imgLight1 = document.createElement('img');
	imgLight1.src = "lightc.png";
	imgLight1.style.transform = "translate(250px, 280px)";
	imgLight1.style.transform += "rotate(90deg)";
	imgLight1.style.width = "auto";
	imgLight1.style.height = "50px";
	imgLight1.style.position = "absolute";
	let olddata1=document.getElementById("TrafficLight1").lastChild;

	var imgLight2 = document.createElement('img');
	imgLight2.src = "lightc.png";
	imgLight2.style.transform = "translate(280px, 100px)";
	imgLight2.style.transform += "rotate(0deg)";
	imgLight2.style.width = "auto";
	imgLight2.style.height = "50px";
	imgLight2.style.position = "absolute";
	let olddata2=document.getElementById("TrafficLight2").lastChild;

	var imgLight3 = document.createElement('img');
	imgLight3.src = "lightc.png";
	imgLight3.style.transform = "translate(100px, 80px)";
	imgLight3.style.transform += "rotate(-90deg)";
	imgLight3.style.width = "auto";
	imgLight3.style.height = "50px";
	imgLight3.style.position = "absolute";
	let olddata3=document.getElementById("TrafficLight3").lastChild;

	var imgLight4 = document.createElement('img');
	imgLight4.src = "lightc.png";
	imgLight4.style.transform = "translate(80px, 250px)";
	imgLight4.style.transform += "rotate(180deg)";
	imgLight4.style.width = "auto";
	imgLight4.style.height = "50px";
	imgLight4.style.position = "absolute";
	let olddata4=document.getElementById("TrafficLight4").lastChild;
	
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
	}
	//----------------------------------------------------------------
	if(lightSpot4 == 0) {
		imgLight4.style.filter += "hue-rotate(290deg)";
		if(FirstTimeGOingThrough4 == 0){FirstTimeGOingThrough4 = 1
			document.getElementById("TrafficLight4").removeChild(olddata4);
		}	
		document.getElementById('TrafficLight4').appendChild(imgLight4);
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
		}
	}
	if(Car1RoadTurn == 3){
		if (lightSpot1 == 1){
			turn13();
		}
	}
	if(Car1RoadTurn == 4){
		if (lightSpot1 == 1){
			turn14();
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
		}
	}
	if(Car2RoadTurn == 3){
		if (lightSpot2 == 1){
			turn23();
		}
	}
	if(Car2RoadTurn == 4){
		if (lightSpot2 == 1){
			turn24();
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
		}
	}
	if(Car3RoadTurn == 4){
		if (lightSpot3 == 1){
			turn34();
		}
	}
	if(Car3RoadTurn == 2){
		if (lightSpot3 == 1){
			turn32();
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
		}
	}
	if(Car4RoadTurn == 3){
		if (lightSpot4 == 1){
			turn43();
		}
	}
	if(Car4RoadTurn == 2){
		if (lightSpot4 == 1){
			turn42();
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
	createCar1();	
	createCar2();
	createCar3();
	createCar4();
} 

function createCar1(){

	Car1.imgCar1.style.top = '0px';
	Car1.imgCar1.style.left = '0px';
	Car1.imgCar1.style.transform += "rotate(0deg)";
	Car1Rotation = 0
	car1Exist = true;
	Car1.imgCar1.style.transform = "translate(220px, 390px)";
	Car1.imgCar1.style.transform += "rotate("+Car1Rotation+"deg)";
	document.getElementById('myContainer').appendChild(Car1.imgCar1);
	Car1RoadTurn = Math.floor(Math.random() * 3) +1;
	if(Car1RoadTurn == 1){Car1RoadTurn = 2}
	else if(Car1RoadTurn == 2){Car1RoadTurn = 3}
	else if(Car1RoadTurn == 3){Car1RoadTurn = 4}
	clearInterval(car1id);
	car1id = setInterval(car1frame, autoNopeus);
	function car1frame() {
		if (Car1.pos == 120) {
			clearInterval(car1id);
			
			LoadArrow1();
			car1Stop = true;
			
			if(Car1RoadTurn == 2){
				if (lightSpot1 == 1){
					turn12();
				}
			}
			if(Car1RoadTurn == 3){
				if (lightSpot1 == 1){
					turn13();
				}
			}
			if(Car1RoadTurn == 4){
				if (lightSpot1 == 1){
					turn14();
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

function createCar2(){
	Car2.imgCar2.style.top = '0px';
	Car2.imgCar2.style.left = '0px';
	Car2.imgCar2.style.transform += "rotate(0deg)";
	Car2Rotation = -90
	car2Exist = true;
	Car2.imgCar2.style.transform = "translate(410px, 145px)";
	Car2.imgCar2.style.transform += "rotate("+Car2Rotation+"deg)";
	document.getElementById('myContainer').appendChild(Car2.imgCar2);
	Car2RoadTurn = Math.floor(Math.random() * 3) +1;
	if(Car2RoadTurn == 1){Car2RoadTurn = 1}
	else if(Car2RoadTurn == 2){Car2RoadTurn = 3}
	else if(Car2RoadTurn == 3){Car2RoadTurn = 4}
	clearInterval(car2id);
	car2id = setInterval(car2frame, autoNopeus);
	function car2frame() {
		if (Car2.pos == 120) {
			clearInterval(car2id);
			LoadArrow2();
			console.log("car2 stoppped at light");
			car2Stop = true;
			console.log(Car2RoadTurn);

			if(Car2RoadTurn == 1){
				if (lightSpot2 == 1){
					turn21();
				}
			}
			if(Car2RoadTurn == 3){
				if (lightSpot2 == 1){
					turn23();
				}
			}
			if(Car2RoadTurn == 4){
				if (lightSpot2 == 1){
					turn24();
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

function createCar3(){
		Car3.imgCar3.style.top = '0px';
		Car3.imgCar3.style.left = '0px';
		Car3.imgCar3.style.transform += "rotate(0deg)";
		Car3Rotation = 180
		car3Exist = true;
		Car3.imgCar3.style.transform = "translate(160px, -30px)";
		Car3.imgCar3.style.transform += "rotate("+Car3Rotation+"deg)";
		document.getElementById('myContainer').appendChild(Car3.imgCar3);
		Car3RoadTurn = Math.floor(Math.random() * 3) +1;
		if(Car3RoadTurn == 1){Car3RoadTurn = 1}
		else if(Car3RoadTurn == 2){Car3RoadTurn = 2}
		else if(Car3RoadTurn == 3){Car3RoadTurn = 4}
		clearInterval(car3id);
		car3id = setInterval(car3frame, autoNopeus);
		function car3frame() {
			if (Car3.pos == 120) {
				clearInterval(car3id);
				LoadArrow3();
				console.log("car3 stoppped at light");
				car3Stop = true;
				
				if(Car3RoadTurn == 1){
					if (lightSpot3 == 1){
						turn31();
					}
				}
				if(Car3RoadTurn == 2){
					if (lightSpot3 == 1){
						turn32();
					}
				}
				if(Car3RoadTurn == 4){
					if (lightSpot3 == 1){
						turn34();
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

function createCar4(){
		Car4.imgCar4.style.top = '0px';
		Car4.imgCar4.style.left = '0px';
		Car4.imgCar4.style.transform += "rotate(0deg)"; 
		Car4Rotation = 90
		car4Exist = true;
		Car4.imgCar4.style.transform = "translate(-25px, 210px)";
		Car4.imgCar4.style.transform += "rotate("+Car4Rotation+"deg)";
		document.getElementById('myContainer').appendChild(Car4.imgCar4);
		Car4RoadTurn = Math.floor(Math.random() * 3) +1;
		if(Car4RoadTurn == 1){Car4RoadTurn = 1}
		else if(Car4RoadTurn == 2){Car4RoadTurn = 2}
		else if(Car4RoadTurn == 3){Car4RoadTurn = 3}
		clearInterval(car4id);
		
		car4id = setInterval(car4frame, autoNopeus);
		function car4frame() {
			if (Car4.pos == 120) {
				clearInterval(car4id);
				LoadArrow4();
				console.log("car4 stoppped at light");
				car4Stop = true;

				
				if(Car4RoadTurn == 1){
					if (lightSpot4 == 1){
						turn41();
					}
				}
				if(Car4RoadTurn == 2){
					if (lightSpot4 == 1){
						turn42();
					}
				}
				if(Car4RoadTurn == 3){
					if (lightSpot4 == 1){
						turn43();
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

function turn12() {
		if(lightSpot1 == 1 && Car1.pos == 120) {
			clearInterval(car1id);
			car1id = setInterval(car1frame, autoNopeus);
			function car1frame() {
				if (Car1.pos == 180) {
					clearInterval(car1id);
					Car1.pos = 0;
					turn122();
					Car1Tile = 0;
					//Crash detection
					
				} else {
					Car1.pos++; 
					Car1.imgCar1.style.top = -Car1.pos + 'px';
					Car1.imgCar1.style.transform += "rotate("+ 1.5 +"deg)"; 
					car1Stop = false
					if(Car1.pos > 140 && Car1.pos < 180){
						console.log("Car1 tile1");
						Car1Tile = 1;
						CrashDetect();
						
						if(stopCars == 1){
							clearInterval(car1id);
						}
					}
					else{
						Car1Tile = 0;
					}
				}
			}
		}
}

function turn122(){
	clearInterval(car1id);
	car1id = setInterval(car1frame, autoNopeus);
	function car1frame() {
		if (Car1.pos == 180) {
			clearInterval(car1id);
			Car1.pos = 1;
			createCar1();			
			//Crash detection
			Car1Tile = 0;
		} else {
			Car1.pos++; 
			Car1.imgCar1.style.left = Car1.pos + 'px';
			Car1.imgCar1.style.transform += "rotate("+ 0 +"deg)"; 
			car1Stop = false
			if(Car1.pos > 0 && Car1.pos < 50){
				console.log("Car1 tile1");
				Car1Tile = 1;
				CrashDetect();
					
				if(stopCars == 1){
					clearInterval(car1id);
				}
			}
			else{
				Car1Tile = 0;
			}
		}
	}
}

function turn13() {
	if(lightSpot1 == 1 && Car1.pos == 120) {
		clearInterval(car1id);
		car1id = setInterval(car1frame, autoNopeus);
		function car1frame() {
			if (Car1.pos == 450) {
				clearInterval(car1id);
				
				Car1.pos = 0;
				createCar1();
				Car1Tile = 0;
				//Crash detection
				
			} else {
				Car1.pos++; 
				Car1.imgCar1.style.top = -Car1.pos + 'px';
				car1Stop = false
				if(Car1.pos > 160 && Car1.pos < 220){
					console.log("Car1 tile1");
					Car1Tile = 1;
					CrashDetect();	
					if(stopCars == 1){
						clearInterval(car1id);
					}
				}
				if(Car1.pos > 220 && Car1.pos < 275){
					console.log("Car1 tile2");
					Car1Tile = 2;
					CrashDetect();	
					if(stopCars == 1){
						clearInterval(car1id);
					}
				}
				else{
					Car1Tile = 0;
				}
			}
		}
	}
}

function turn14() {
	if(lightSpot1 == 1 && Car1.pos == 120) {
		clearInterval(car1id);
		car1id = setInterval(car1frame, autoNopeus);
		function car1frame() {
			if (Car1.pos == 240) {
				clearInterval(car1id);
				Car1.pos = 0;
				turn144();
				Car1Tile = 0;
			} else {
				Car1.pos++; 
				Car1.imgCar1.style.top = -Car1.pos + 'px';
				Car1.imgCar1.style.transform += "rotate("+ -0.75 +"deg)"; 
				car1Stop = false
				if(Car1.pos > 140 && Car1.pos < 200){
					console.log("Car1 tile1");
					Car1Tile = 1;
					CrashDetect();	
					if(stopCars == 1){
						clearInterval(car1id);
					}
				}
				if(Car1.pos > 200 && Car1.pos < 360){
					console.log("Car1 tile2");
					Car1Tile = 2;
					CrashDetect();	
					if(stopCars == 1){
						clearInterval(car1id);
					}
				}
				else{
					Car1Tile = 0;
				}
			
			}
		}
	}
}

function turn144(){
	clearInterval(car1id);
	car1id = setInterval(car1frame, autoNopeus);
	function car1frame() {
		if (Car1.pos == 260) {
			clearInterval(car1id);
			Car1.pos = 1;
			createCar1();			
			Car2Tile = 0;
			//Crash detection

		} else {
			Car1.pos++; 
			Car1.imgCar1.style.left = -Car1.pos + 'px';
			Car1.imgCar1.style.transform += "rotate("+ 0 +"deg)"; 
			car1Stop = false
			if(Car1.pos > 0 && Car1.pos < 32){
				console.log("Car1 tile2");
				Car1Tile = 2;
				CrashDetect();	
				if(stopCars == 1){
					clearInterval(car1id);
				}
			}
			if(Car1.pos > 32 && Car1.pos < 100){
				console.log("Car1 tile3");
				Car1Tile = 3;
				CrashDetect();	
				if(stopCars == 1){
					clearInterval(car1id);
				}
			}
			else{
				Car1Tile = 0;
			}
		}
	}
}


function turn21() {
		if(lightSpot2 == 1 && Car2.pos == 120) {
			clearInterval(car2id);
			car2id = setInterval(car2frame, autoNopeus);
			function car2frame() {
				if (Car2.pos == 245) {
					clearInterval(car2id);
					Car2.pos = 0;
					turn211();
					Car2Tile = 0;
					//Crash detection

				} else {
					Car2.pos++; 
					Car2.imgCar2.style.left = -Car2.pos + 'px';
					Car2.imgCar2.style.transform += "rotate("+ -0.705 +"deg)"; 
					car2Stop = false
					if(Car2.pos > 140 && Car2.pos < 200){
						console.log("Car2 tile2");
						Car2Tile = 2;
						CrashDetect();
							
						if(stopCars == 1){
							clearInterval(car2id);
						}
					}
					if(Car2.pos > 210 && Car2.pos < 360){
						console.log("Car2 tile3");
						Car2Tile = 3;
						CrashDetect();	
						if(stopCars == 1){
							clearInterval(car2id);
						}
					}
					else{
						Car2Tile = 0
					}
				}
			}
		}
}

function turn211(){
	clearInterval(car2id);
	car2id = setInterval(car2frame, autoNopeus);
	function car2frame() {
		if (Car2.pos == 260) {
			clearInterval(car2id);
			Car2.pos = 0;
			createCar2();			
			Car2Tile = 0;
			//Crash detection

		} else {
			Car2.pos++; 
			Car2.imgCar2.style.top = Car2.pos + 'px';
			Car2.imgCar2.style.transform += "rotate("+ 0 +"deg)"; 
			car2Stop = false
			if(Car2.pos > 0 && Car2.pos < 32){
				console.log("Car2 tile33");
				Car2Tile = 3;
				CrashDetect();
				if(stopCars == 1){
					clearInterval(car2id);
				}
			}
			if(Car2.pos > 33 && Car2.pos < 100){
				console.log("Car2 tile4");
				Car2Tile = 4;
				CrashDetect();	
				if(stopCars == 1){
					clearInterval(car2id);
				}

			}
			else{
				Car2Tile = 0;
			}
		}
	}
}

function turn23() {
		if(lightSpot2 == 1 && Car2.pos == 120) {
			clearInterval(car2id);
			car2id = setInterval(car2frame, autoNopeus);
			function car2frame() {
				if (Car2.pos == 190) {
					clearInterval(car2id);
					Car2.pos = 0;
					turn233();
					Car2Tile = 0;
					//Crash detection

				} else {
					Car2.pos++; 
					Car2.imgCar2.style.left = -Car2.pos + 'px';
					Car2.imgCar2.style.transform += "rotate("+ 1.3 +"deg)"; 
					car2Stop = false
					if(Car2.pos > 140 && Car2.pos < 180){
						console.log("Car2 tile2");
						Car2Tile = 2;
						CrashDetect();	
						if(stopCars == 1){
							clearInterval(car2id);
						}
					}
					else{
						Car2Tile = 0;
					}
				}
			}
		}
}

function turn233(){
	clearInterval(car2id);
	car2id = setInterval(car2frame, autoNopeus);
	function car2frame() {
		if (Car2.pos == 240) {
			clearInterval(car2id);
			Car2.pos = 1;
			createCar2();				
			Car2Tile = 0;
			//Crash detection

		} else {
			Car2.pos++; 
			Car2.imgCar2.style.top = -Car2.pos + 'px';
			Car2.imgCar2.style.transform += "rotate("+ 0 +"deg)"; 
			car2Stop = false
			if(Car2.pos > 0 && Car2.pos < 50){
				console.log("Car2 tile2");
				Car2Tile = 2;
				CrashDetect();	
				if(stopCars == 1){
					clearInterval(car2id);
				}
			}
			else{
				Car2Tile = 0;
			}
		}
	}
}

function turn24() {
	if(lightSpot2 == 1 && Car2.pos == 120) {
		clearInterval(car2id);
		car2id = setInterval(car2frame, autoNopeus);
		function car2frame() {
			if (Car2.pos == 450) {
				clearInterval(car2id);
				
				Car2.pos = 0;
				createCar2();	
				Car2Tile = 0;
				//Crash detection
			} else {
				Car2.pos++; 
				Car2.imgCar2.style.left = -Car2.pos + 'px';
				car2Stop = false
				if(Car2.pos > 160 && Car2.pos < 220){
					console.log("Car2 tile2");
					Car2Tile = 2;
					CrashDetect();	
					if(stopCars == 1){
						clearInterval(car2id);
					}
				}
				if(Car2.pos > 220 && Car2.pos < 275){
					console.log("Car2 tile3");
					Car2Tile = 3;
					CrashDetect();	
					if(stopCars == 1){
						clearInterval(car2id);
					}
				}
				else{
					Car2Tile = 0;
				}
			}
		}
	}
}


function turn31() {
		if(lightSpot3 == 1 && Car3.pos == 120) {
			clearInterval(car3id);
			car3id = setInterval(car3frame, autoNopeus);
			function car3frame() {
				if (Car3.pos == 450) {
					clearInterval(car3id);
					
					Car3.pos = 0;
					createCar3();
					Car3Tile = 0;
					//Crash detection
				} else {
					Car3.pos++; 
					Car3.imgCar3.style.top = Car3.pos + 'px';
					car3Stop = false
					if(Car3.pos > 140 && Car3.pos < 210){
						console.log("Car3 tile3");
						Car3Tile = 3;
						CrashDetect();	
						if(stopCars == 1){
							clearInterval(car3id);
						}
					}
					if(Car3.pos > 210 && Car3.pos < 275){
						console.log("Car3 tile44");
						Car3Tile = 4;
						CrashDetect();	
						if(stopCars == 1){
							clearInterval(car3id);
						}
					}
					else{
						Car3Tile = 0;
					}
				}
			}
		}
}

function turn32() {
		if(lightSpot3 == 1 && Car3.pos == 120) {
			clearInterval(car3id);
			car3id = setInterval(car3frame, autoNopeus);
			function car3frame() {
				if (Car3.pos == 235) {
					clearInterval(car3id);
					Car3.pos = 0;
					turn322();
					Car3Tile = 0;
					//Crash detection

				} else {
					Car3.pos++; 
					Car3.imgCar3.style.top = Car3.pos + 'px';
					Car3.imgCar3.style.transform += "rotate("+ -0.782 +"deg)"; 
					car3Stop = false
					if(Car3.pos > 140 && Car3.pos < 200){
						console.log("Car3 tile3");
						Car3Tile = 3;
						CrashDetect();	
						if(stopCars == 1){
							clearInterval(car3id);
						}
					}
					if(Car3.pos > 200 && Car3.pos < 360){
						console.log("Car3 tile4");
						Car3Tile = 4;
						CrashDetect();	
						if(stopCars == 1){
							clearInterval(car3id);
						}
					}
					else{
						Car3Tile = 0;
					}
				}
			}
		}
}

function turn322(){
	clearInterval(car3id);
	car3id = setInterval(car3frame, autoNopeus);
	function car3frame() {
		if (Car3.pos == 260) {
			clearInterval(car3id);
			console.log("Car3 is lopussa");
			Car3.pos = 1;
			createCar3();				
			Car3Tile = 0;
			//Crash detection

		} else {
			Car3.pos++; 
			Car3.imgCar3.style.left = Car3.pos + 'px';
			Car3.imgCar3.style.transform += "rotate("+ 0 +"deg)"; 
			car3Stop = false
			if(Car3.pos > 0 && Car3.pos < 32){
				console.log("Car3 tile4");
				Car3Tile = 4;
				CrashDetect();	
				if(stopCars == 1){
					clearInterval(car3id);
				}
			}
			if(Car3.pos > 32 && Car3.pos < 100){
				console.log("Car3 tile1");
				Car3Tile = 1;
				CrashDetect();	
				if(stopCars == 1){
					clearInterval(car3id);
				}
			}
			else{
				Car3Tile = 0;
			}
		}
	}
}

function turn34() {
	if(lightSpot3 == 1 && Car3.pos == 120) {
		clearInterval(car3id);
		car3id = setInterval(car3frame, autoNopeus);
		function car3frame() {
			if (Car3.pos == 180) {
				clearInterval(car3id);
				Car3.pos = 0;
				turn344();
				Car3Tile = 0;
				//Crash detection

			} else {
				Car3.pos++; 
				Car3.imgCar3.style.top = Car3.pos + 'px';
				Car3.imgCar3.style.transform += "rotate("+ 1.5 +"deg)"; 
				car3Stop = false
				if(Car3.pos > 140 && Car3.pos < 180){
					console.log("Car3 tile3");
					Car3Tile = 3;
					CrashDetect();	
					if(stopCars == 1){
						clearInterval(car3id);
					}
				}
				else{
					Car3Tile = 0;
				}
			}
		}
	}
}

function turn344(){
	clearInterval(car3id);
	car3id = setInterval(car3frame, autoNopeus);
	function car3frame() {
		if (Car3.pos == 240) {
			clearInterval(car3id);
			console.log("Car3 is lopussa");
			Car3.pos = 1;
			createCar3();			
			Car3Tile = 0;
			//Crash detection

		} else {
			Car3.pos++; 
			Car3.imgCar3.style.left = -Car3.pos + 'px';
			Car3.imgCar3.style.transform += "rotate("+ 0 +"deg)"; 
			car3Stop = false
			if(Car3.pos > 0 && Car3.pos < 50){
				console.log("Car3 tile3");
				Car3Tile = 3;
				CrashDetect();	
				if(stopCars == 1){
					clearInterval(car3id);
				}
			}
			else{
				Car3Tile = 0;
			}
		}
	}
}


function turn41() {
	if(lightSpot4 == 1 && Car4.pos == 120) {
		clearInterval(car4id);
		car4id = setInterval(car4frame, autoNopeus);
		function car4frame() {
			if (Car4.pos == 180) {
				clearInterval(car4id);
				Car4InterHalfDone = true
				Car4.pos = 0;
				turn411();
				Car4Tile = 0
				//Crash detection

			} else {
				Car4.pos++; 
				Car4.imgCar4.style.left = Car4.pos + 'px';
				Car4.imgCar4.style.transform += "rotate("+ 1.5 +"deg)"; 
				car4Stop = false
				if(Car4.pos > 140 && Car4.pos < 180){
					console.log("Car4 tile4");
					Car4Tile = 4;
					CrashDetect();	
					if(stopCars == 1){
						clearInterval(car4id);
					}
				}
				else{
					Car4Tile = 0;
				}
			}
		}
	}
}

function turn411(){
	clearInterval(car4id);
	car4id = setInterval(car4frame, autoNopeus);
	function car4frame() {
		if (Car4.pos == 240) {
			clearInterval(car4id);
			console.log("Car4 is lopussa");
			createCar4();
			Car4.pos = 0;
			Car4Tile = 0
			//Crash detection

		} else {
			Car4.pos++; 
			Car4.imgCar4.style.top = Car4.pos + 'px';
			Car4.imgCar4.style.transform += "rotate("+ 0 +"deg)"; 
			car4Stop = false
			if(Car4.pos > 0 && Car4.pos < 50){
				console.log("Car4 tile4");
				Car4Tile = 4;
				CrashDetect();	
				if(stopCars == 1){
					clearInterval(car4id);
				}
			}
			else{
				Car4Tile = 0;
			}
		}
	}
}

function turn42() {
	if(lightSpot4 == 1 && Car4.pos == 120) {
		clearInterval(car4id);
		car4id = setInterval(car4frame, autoNopeus);
		function car4frame() {
			if (Car4.pos == 450) {
				clearInterval(car4id);
				
				Car4.pos = 0;
				Car4Tile = 0
				//Crash detection
				createCar4();
				//--------
			} else {
				Car4.pos++; 
				Car4.imgCar4.style.left = Car4.pos + 'px';
				car4Stop = false
				if(Car4.pos > 150 && Car4.pos < 210){
					console.log("Car4 tile4");
					Car4Tile = 4;
					CrashDetect();	
					if(stopCars == 1){
						clearInterval(car4id);
					}
				}
				if(Car4.pos > 210 && Car4.pos < 275){
					console.log("Car4 tile1");
					Car4Tile = 1;
					CrashDetect();	
					if(stopCars == 1){
						clearInterval(car4id);
					}
				}
				else{
					Car4Tile = 0;
				}
			}
		}
	}

}

function turn43() {
		if(lightSpot4 == 1 && Car4.pos == 120) {
			clearInterval(car4id);
			car4id = setInterval(car4frame, autoNopeus);
			function car4frame() {
				if (Car4.pos == 240) {
					clearInterval(car4id);
					Car4.pos = 0;
					turn433();
					Car4Tile = 0
					//Crash detection

				} else {
					Car4.pos++; 
					Car4.imgCar4.style.left = Car4.pos + 'px';
					Car4.imgCar4.style.transform += "rotate("+ -0.75 +"deg)"; 
					car4Stop = false
					if(Car4.pos > 140 && Car4.pos < 200){
						console.log("Car4 tile4");
						Car4Tile = 4;
						CrashDetect();	
						if(stopCars == 1){
							clearInterval(car4id);
						}
					}
					if(Car4.pos > 200 && Car4.pos < 360){
						console.log("Car4 tile1");
						Car4Tile = 1;
						CrashDetect();	
						if(stopCars == 1){
							clearInterval(car4id);
						}
					}
					else{
						Car4Tile = 0;
					}
				}
			}
		}
}

function turn433(){
	clearInterval(car4id);
	car4id = setInterval(car4frame, autoNopeus);
	function car4frame() {
		if (Car4.pos == 260) {
			clearInterval(car4id);
			console.log("Car4 is lopussa");
			Car4.pos = 1;
			Car4Tile = 0
			createCar4();
			//Crash detection


		} else {
			Car4.pos++; 
			Car4.imgCar4.style.top = -Car4.pos + 'px';
			Car4.imgCar4.style.transform += "rotate("+ 0 +"deg)"; 
			car4Stop = false
			if(Car4.pos > 0 && Car4.pos < 32){
				console.log("Car4 tile1");
				Car4Tile = 1;
				CrashDetect();	
				if(stopCars == 1){
					clearInterval(car4id);
				}
			}
			if(Car4.pos > 32 && Car4.pos < 100){
				console.log("Car4 tile2");
				Car4Tile = 2;
				CrashDetect();	
				if(stopCars == 1){
					clearInterval(car4id);
				}
			}
			else{
				Car4Tile = 0;
			}
		}
	}
} 	

function LoadArrow1(){

	var Arrow1 = document.createElement('img');
	Arrow1.src = "arrow.svg";
	Arrow1.style.transform = "translate(75px, 300px)";
	Arrow1.style.width = "auto";
	Arrow1.style.height = "30px";
	Arrow1.style.position = "absolute";
	Arrow1.style.zIndex = "5";
	let lastArrow1=document.getElementById("Arrow1id").lastChild;
	
		if(FirstTimeGOingThroughStartArrows1 === 0){
			document.getElementById("Arrow1id").removeChild(lastArrow1);
		}
		if (Car1RoadTurn === 4){
			Arrow1.style.transform += "rotate(180deg)";
			document.getElementById('Arrow1id').appendChild(Arrow1);
		}
		else if (Car1RoadTurn === 2){
			Arrow1.style.transform += "rotate(0deg)";
			document.getElementById('Arrow1id').appendChild(Arrow1);
		}
		else if (Car1RoadTurn === 3){
			Arrow1.style.transform += "rotate(-90deg)";
			document.getElementById('Arrow1id').appendChild(Arrow1);
		}

		FirstTimeGOingThroughStartArrows1 = 0;

}
function LoadArrow2(){	
	var Arrow2 = document.createElement('img');
	Arrow2.src = "arrow.svg";
	Arrow2.style.transform = "translate(115px, 110px)";
	Arrow2.style.width = "auto";
	Arrow2.style.height = "30px";
	Arrow2.style.position = "absolute";
	let lastArrow2=document.getElementById("Arrow2id").lastChild;


		if(FirstTimeGOingThroughStartArrows2 === 0){
			document.getElementById("Arrow2id").removeChild(lastArrow2);
		}
		if (Car2RoadTurn === 1){
			Arrow2.style.transform += "rotate(90deg)";
			document.getElementById('Arrow2id').appendChild(Arrow2);
		}
		else if (Car2RoadTurn === 3){
			Arrow2.style.transform += "rotate(270deg)";
			document.getElementById('Arrow2id').appendChild(Arrow2);
		}
		else if (Car2RoadTurn === 4){
			Arrow2.style.transform += "rotate(180deg)";
			document.getElementById('Arrow2id').appendChild(Arrow2);
		}

		FirstTimeGOingThroughStartArrows2 = 0;

}
function LoadArrow3(){	
	var Arrow3 = document.createElement('img');
	Arrow3.src = "arrow.svg";
	Arrow3.style.transform = "translate(-75px, 80px)";
	Arrow3.style.width = "auto";
	Arrow3.style.height = "30px";
	Arrow3.style.position = "absolute";
	let lastArrow3=document.getElementById("Arrow3id").lastChild;


		if(FirstTimeGOingThroughStartArrows3 === 0){
			document.getElementById("Arrow3id").removeChild(lastArrow3);
		}
		if (Car3RoadTurn === 1){
			Arrow3.style.transform += "rotate(90deg)";
			document.getElementById('Arrow3id').appendChild(Arrow3);
		}
		else if (Car3RoadTurn === 2){
			Arrow3.style.transform += "rotate(0deg)";
			document.getElementById('Arrow3id').appendChild(Arrow3);
		}
		else if (Car3RoadTurn === 4){
			Arrow3.style.transform += "rotate(180deg)";
			document.getElementById('Arrow3id').appendChild(Arrow3);
		}

		FirstTimeGOingThroughStartArrows3 = 0;

}
function LoadArrow4(){	
	var Arrow4 = document.createElement('img');
	Arrow4.src = "arrow.svg";
	Arrow4.style.transform = "translate(-105px, 260px)";
	Arrow4.style.width = "auto";
	Arrow4.style.height = "30px";
	Arrow4.style.position = "absolute";
	let lastArrow4=document.getElementById("Arrow4id").lastChild;


		if(FirstTimeGOingThroughStartArrows4 === 0){
			document.getElementById("Arrow4id").removeChild(lastArrow4);
		}
		if (Car4RoadTurn === 1){
			Arrow4.style.transform += "rotate(90deg)";
			document.getElementById('Arrow4id').appendChild(Arrow4);
		}
		else if (Car4RoadTurn === 2){
			Arrow4.style.transform += "rotate(0deg)";
			document.getElementById('Arrow4id').appendChild(Arrow4);
		}
		else if (Car4RoadTurn === 3){
			Arrow4.style.transform += "rotate(-90deg)";
			document.getElementById('Arrow4id').appendChild(Arrow4);
		}

		FirstTimeGOingThroughStartArrows4 = 0;

}





function CrashDetect(){
	if (Car1Tile == 2 && Car2Tile == 2){
		console.error();
		CallGameOver();
		stopCars = 1
	}
	if (Car1Tile == 3 && Car2Tile == 3){
		console.error();
		CallGameOver();
		stopCars = 1
	}
	if (Car1Tile == 1 && Car3Tile == 1){
		console.error();
		CallGameOver();
		stopCars = 1
	}
	if (Car1Tile == 3 && Car3Tile == 3){
		console.error();
		CallGameOver()
		stopCars = 1
	}
	if (Car1Tile == 1 && Car4Tile == 1){
		console.error();
		CallGameOver();
		stopCars = 1
	}
	if (Car1Tile == 2 && Car4Tile == 2){
		console.error();
		CallGameOver();
		stopCars = 1
	}
	
	if (Car2Tile == 3 && Car3Tile == 3){
		console.error();
		CallGameOver();
		stopCars = 1
	}
	if (Car2Tile == 4 && Car3Tile == 4){
		console.error();
		CallGameOver();
		stopCars = 1
	}
	if (Car2Tile == 2 && Car4Tile == 2){
		console.error(Car2Tile == 2 && Car4Tile == 2);
		CallGameOver();
		stopCars = 1
	}
	if (Car2Tile == 4 && Car4Tile == 4){
		console.error(Car2Tile == 4 && Car4Tile == 4);
		CallGameOver();
		stopCars = 1
	}
	if (Car4Tile == 4 && Car3Tile == 4){
		console.error();
		CallGameOver();
		stopCars = 1
	}
	if (Car4Tile == 4 && Car1Tile == 4){
		console.error(Car4Tile == 4 && Car1Tile == 4);
		CallGameOver();
		stopCars = 1
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
function CallGameOver(){
	if(gameover = true){
	document.getElementById("Js_display_flex").style.display = "inherit";
	gameover = false
	}

}
//road system  car "1-4" turning to road "1-4"





//Tee ohjelma, jolla ohjaat kuvan mukaisen 4 tien risteyksen liikennevaloja.
//Huomio liikenneturvallisuus ja ajovuorot. Valojen ohjaus käynnistetään ja 
//pysäytetään hiirellä nappia painamalla. Havainnollista jollakin tavalla milloin 
//kelläkin on ajovuoro ja milloin odotusvuoro. Käytä vähintään kaksia nuolivaloja ja ajastusta. 
//Huomioiden liikenteen joustavuus ja turvallisuus mahdollista liikennevalojen 
//ohjauksella ajaminen useammasta suunnasta samanaikaisesti.