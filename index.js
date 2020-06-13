var inputMet = document.querySelector("#meters > input")
var inputFeet = document.querySelector("#feet > input")
var inputInch = document.querySelector("#inch > input")

function round(num){
	return Math.round(num*100)/100;
}

function metTo(){
	var mHeight = parseFloat(inputMet.value);
	var fHeight = mHeight * 3.2808;
	var iHeight = mHeight * 39.370;
	inputFeet.value = round(fHeight);
	inputInch.value = round(iHeight);
}

function feetTo(){
	var fHeight = parseFloat(inputFeet.value);
	var mHeight = fHeight / 3.2808;
	var iHeight = fHeight * 12;
	inputMet.value = round(mHeight);
	inputInch.value = round(iHeight);
}

function inchTo(){
	var iHeight = parseFloat(inputInch.value);
	var mHeight = iHeight / 39.370;
	var fHeight = iHeight * 0.083333;
	inputMet.value = round(mHeight);
	inputFeet.value = round(fHeight);
}

inputMet.addEventListener("input", metTo);
inputFeet.addEventListener("input", feetTo);
inputInch.addEventListener("input", inchTo);

