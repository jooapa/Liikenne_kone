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



function change1() {
	var elem = document.getElementById("TrafficButton1");
	if (elem.value=="Punainen 1") {
		elem.value = "--Vihreä-- 1";
		Start42();
	}
	else{
		elem.value = "Punainen 1";
		Start41();
	} 
}	

function change2() {
	var elem = document.getElementById("TrafficButton2");
	if (elem.value=="Punainen 2") {
		elem.value = "--Vihreä-- 2";
		Start32();
	}
	else {
		elem.value = "Punainen 2";
		Start31();
	} 
}	

function change3() {
	var elem = document.getElementById("TrafficButton3");
	if (elem.value=="Punainen 3") {
		elem.value = "--Vihreä-- 3";
		Start22();
	}
	else {
		elem.value = "Punainen 3";
		Start21();
	} 
}	

function change4() {
	var elem = document.getElementById("TrafficButton4");
	if (elem.value=="Punainen 4") {
		elem.value = "--Vihreä-- 4";
		Start12();
	}
	else {
		elem.value = "Punainen 4";
		Start11();		
	} 
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
}

function Start21() {
	lightSpot2 = 0;
	Start();

}
function Start22() {
	lightSpot2 = 1;
	Start();
}

function Start31() {
	lightSpot3 = 0;
	Start();
}

function Start32() {
	lightSpot3 = 1;
	Start();
}

function Start41() {
	lightSpot4 = 0;
	Start();
}

function Start42() {
	lightSpot4 = 1;
	Start();
	turn41();
}

function CloneCar() {
	var imgCar1 = document.createElement('img');
	imgCar1.src = 'car.png';
	imgCar1.style.width = "auto";
	imgCar1.style.height = "50px";
	imgCar1.style.position = "absolute";
	
	var imgCar2 = document.createElement('img');
	imgCar2.src = 'car.png';
	imgCar2.style.width = "auto";
	imgCar2.style.height = "50px";
	imgCar2.style.position = "absolute";

	var imgCar3 = document.createElement('img');
	imgCar3.src = 'car.png';
	imgCar3.style.width = "auto";
	imgCar3.style.height = "50px";
	imgCar3.style.position = "absolute";
	
	Car4.imgCar4.src = Car4.pic; 
	Car4.imgCar4.style.width = Car4.w
	Car4.imgCar4.style.height = Car4.h
	Car4.imgCar4.style.position = Car4.p




	//rng = Math.floor(Math.random() * 4);
	rng = 3
	


	console.log(rng)
	if(rng == 0 && car1Exist == false){
		let pos = 0;
		car1Exist = true;
		imgCar1.style.transform = "translate(220px, 400px)";
		document.getElementById('myContainer').appendChild(imgCar1);
		
		clearInterval(car1id);
		car1id = setInterval(car1frame, 10);
		
		function car1frame() {
			if (pos == 120) {
				clearInterval(car1id);
				console.log("Stopped"); 
				car1Stop = true
			} else {
				pos++; 
				imgCar1.style.top = -pos + 'px'; 
				car1Stop = false
			}
		}
	}

	if(rng == 1 && car2Exist == false) {
		let pos = 0;car2Exist = true;
		imgCar2.style.transform = "translate(420px, 150px)";
		imgCar2.style.transform += "rotate(-90deg)";
		document.getElementById('myContainer').appendChild(imgCar2);
		
		clearInterval(car2id);
		car2id = setInterval(car2frame, 10);
		
		function car2frame() {
			if (pos == 120) {
				clearInterval(car2id);
				console.log("Stopped"); car2Stop = true
			} else {
				pos++; 
				imgCar2.style.left = -pos + 'px'; car2Stop = false
			}
		}
	}
	
	if(rng == 2 && car3Exist == false) {
		let pos = 0;car3Exist = true;
		img.style.transform = "translate(160px, -30px)";
		img.style.transform += "rotate(180deg)";
		document.getElementById('myContainer').appendChild(img);
		
		clearInterval(car3id);car3id = setInterval(car3frame, 10);
		function car3frame() {
			if (pos == 120) {
				clearInterval(car3id);
				console.log("Stopped"); car3Stop = true
			} else {
				pos++; 
				img.style.top = pos + 'px'; car3Stop = false
			}
		}
	}
	
	if(rng == 3 && car4Exist == false) {
		Car4Rotation = 90
		car4Exist = true;
		Car4.imgCar4.style.transform = "translate(-20px, 215px)";
		Car4.imgCar4.style.transform += "rotate("+Car4Rotation+"deg)";
		document.getElementById('myContainer').appendChild(Car4.imgCar4);
		
		clearInterval(car4id);
		car4id = setInterval(car4frame, 10);
		function car4frame() {
			if (Car4.pos == 120) {
				clearInterval(car4id);
				console.log("Stopped car4");
				car4Stop = true;
				if (lightSpot4 == 1){
					turn41();
				}
		} else {
			Car4.pos++; 
			Car4.imgCar4.style.left = Car4.pos + 'px'; 
			car4Stop = false
			}
		}
	}
} 
Car4InterHalfDone = false
function turn41() {
	if(Car4InterHalfDone == false){
		if(lightSpot4 == 1 && Car4.pos == 120) {
			clearInterval(car4id);
			car4id = setInterval(car4frame, 10);
			function car4frame() {
				if (Car4.pos == 180) {
					console.log("Stopped car4 nyt");
					Car4InterHalfDone = true
					Car4.pos = 0;
					if (Car4.pos > 180) {
						car4Stop = true;
						Car4InterHalfDone = true
						console.log("pro")
						clearInterval(car4id);
					}
					else{
						console.log("Stopped car4");
						Car4.imgCar4.style.top = Car4.pos + 'px';
						Car4.pos++;
					}

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
Car4 = {
	pos: 0,
	imgCar4: document.createElement('img'),
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
