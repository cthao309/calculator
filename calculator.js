$(function(){

	console.log('jquery is functional')

	var userInput = [];

	//Write your JavaScript code here
	var inputArray=[];
	var formattedArray=[];
	var content;
	var answer;
	var supporttedOperation=['+','-','/','*','^','radius','%','^2'];

	$('button').on('click', function(e){
		userInput.push(this.dataset);
		console.log(userInput);
	});

	var btn0=document.getElementById('0');
	btn0.addEventListener('click',function(e){
			content=btn0.textContent;
			console.log(e);
			inputArray.push(content);
			input(content);
		});

	var btn1=document.getElementById('1');
	btn1.addEventListener('click',function(){
			content=btn1.textContent;
			inputArray.push(content);
			input(content);
		});

	var btn2=document.getElementById('2');
	btn2.addEventListener('click',function(){
			content=btn2.textContent;
			inputArray.push(content);
			input(content);
		});

	var btn3=document.getElementById('3');
	btn3.addEventListener('click',function(){
			content=btn3.textContent;
			inputArray.push(content);
			input(content);
		});

	var btn4=document.getElementById('4');
	btn4.addEventListener('click',function(){
			content=btn4.textContent;
			inputArray.push(content);
			input(content);
		});

	var btn5=document.getElementById('5');
	btn5.addEventListener('click',function(){
			content=btn5.textContent;
			inputArray.push(content);
			input(content);
		});

	var btn6=document.getElementById('6');
	btn6.addEventListener('click',function(){
			content=btn6.textContent;
			inputArray.push(content);
			input(content);
		});

	var btn7=document.getElementById('7');
	btn7.addEventListener('click',function(){
			content=btn7.textContent;
			inputArray.push(content);
			input(content);
		});

	var btn8=document.getElementById('8');
	btn8.addEventListener('click',function(){
			content=btn8.textContent;
			inputArray.push(content);
			input(content);
		});

	var btn9=document.getElementById('9');
	btn9.addEventListener('click',function(){
			content=btn9.textContent;
			inputArray.push(content);
			input(content);
		});


	var divide=document.getElementById('div');
	divide.addEventListener('click',function(){
			var x='/'
			inputArray.push(x);
			input(x);
		});

	var multiply=document.getElementById('mult');
	multiply.addEventListener('click',function(){
			var x='*'
			inputArray.push(x);
			input(x);
		});

	var add=document.getElementById('add');
	add.addEventListener('click',function(){
			var x='+'
			inputArray.push(x);
			input(x);
		});

	var subt=document.getElementById('sub');
	subt.addEventListener('click',function(){
			var x='-'
			inputArray.push(x);
			input(x);
		});

	var per=document.getElementById('percent');
	per.addEventListener('click',function(){
			var x='%'
			inputArray.push(x);
			input(x);
		});

	var po=document.getElementById('power');
	po.addEventListener('click',function(){
			var x='^'
			inputArray.push(x);
			input(x);
		});

	var sq=document.getElementById('sq');
	sq.addEventListener('click',function(){
			var x='^2'
			inputArray.push(x);
			input(x);
		});

	var area=document.getElementById('area');
	area.addEventListener('click',function(){
		var x='radius'
		inputArray.push(x);
		input(x);
	});

	var equal_Sign=document.getElementById('equalSign');
	equal_Sign.addEventListener('click',operationSelection);

	/*
		==========================================================
		This function will display the input onto the calculator's screen
		==========================================================
	*/
	function input(e){

		console.log(inputArray);
		var newEl=document.createElement('span');
		var text=document.createTextNode(e);
		newEl.appendChild(text);

		document.getElementById('entry').appendChild(newEl);

	}

	/*
		===========================================================
		This function will display the output onto the calculator's screen
		===========================================================
	*/
	function result(e){

	/*	inputArray.push(e);*/
		console.log(inputArray);
		var newEl=document.createElement('p');
		var text=document.createTextNode(e);
		newEl.appendChild(text);

		document.getElementById('result').appendChild(newEl);

	}

	/*
		============================================================
		This function format the inputArray to perform the operation
		============================================================
	*/
	function formatArray(){

		var number=[];

		for (var i = 0; i < inputArray.length; i++)
	  {
	  		if(supporttedOperation.indexOf(inputArray[i])!==-1)
				{
						formattedArray.push(number.join(''));
						formattedArray.push(inputArray[i]);
						number=[];
				}
	  		else{
	  			number.push(inputArray[i]);
	  		}
	  		if(i===inputArray.length-1){
	  			formattedArray.push(number.join(''));
					number=[];
	  		}
	  }
	  console.log(formattedArray);
	  console.log(number);

	}

	/*
		========================================================
		This function select which function it need to perform
		========================================================
	*/
	function operationSelection(){
		console.log('Operation selection is here');

		formatArray();

		var number=[];
		for (var i = 0; i < formattedArray.length; i++)
	  {


	  	if(formattedArray[i]==='/'){
				division(formattedArray[i-1],formattedArray[i+1]);
			}

			if(formattedArray[i]==='*'){
				multiplication(formattedArray[i-1],formattedArray[i+1]);
			}

	  	if(formattedArray[i]==='+'){
				addition(formattedArray[i-1],formattedArray[i+1]);
			}

			if(formattedArray[i]==='-'){
				subtraction(formattedArray[i-1],formattedArray[i+1]);
			}

			if(formattedArray[i]==='%'){
				percentOf(formattedArray[i-1],formattedArray[i+1]);
			}

			if(formattedArray[i]==='^'){
				power(formattedArray[i-1],formattedArray[i+1]);
			}

			if(formattedArray[i]==='^2'){
				squareNumber(formattedArray[i-1]);
			}

			if(formattedArray[i]==='radius'){
				areaOfCircle(formattedArray[i-1]);
			}
		}
		result(answer);

	}


	/*
		==========================================================
		This function will divide two number
		==========================================================
	*/
	function division(num1,num2){

		answer=num1/num2;
		console.log(answer);
		result(answer);

	}

	/*
		==========================================================
		This function will multiply two number
		==========================================================
	*/
	function multiplication(num1,num2){

		answer=num1*num2;
		console.log(answer);
		result(answer);
		
	}

	/*
		==========================================================
		This function will add two number
		==========================================================
	*/
	function addition(num1,num2) {
		
	  if(answer){
	  	answer +=parseInt(num2)
	  }
	  else{

			answer = parseInt(num1)+parseInt(num2);
		  
		}
	  result(answer);
	  console.log(answer);
	}

	/*
		==========================================================
		This function will subtract two number
		==========================================================
	*/
	function subtraction(num1,num2) {

	 if(answer){
	  	answer -=parseInt(num2)
	  }
	  else{

			answer = parseInt(num1)-parseInt(num2);
		  
		}
	  result(answer);
	  console.log(answer);

	}
	/*
		==========================================================
		This function will square the inputted number 
		==========================================================
	*/
	function squareNumber(num1) {
	  
	  answer=num1*num1;
	  result(answer);
	  console.log(answer);

	}

	/*
		============================================================
		This function will display the output an area of the circule onto the calculator's screen
		============================================================
	*/
	function areaOfCircle(radius) {
	  answer = Math.PI * radius*radius;
	  console.log(answer);
	  result(answer);
	  /*debugger;*/
	}

	/*
		============================================================
		This function will display the output percetage of two number onto the calculator's screen
		============================================================
	*/
	function percentOf(num1,num2) {
	  answer = (num1/num2) * 100;

	  console.log(answer+ '%');

	  var t=answer+ '%';
	  result(t);
	}

	function power(num1,num2){
		answer=Math.pow(num1,num2);
		console.log(answer);
		result(answer);

	}

	/*
		=======================================================
		This will clear the input and output of the calculator
		=======================================================
	*/
	var restart = document.getElementById('reset');
	restart.addEventListener('click', function() {
	  window.location.reload();
	});
});