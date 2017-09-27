var inputBox = document.getElementById('input-box')
var btn = document.getElementById('submit-input-box')
var ol = document.getElementById('ordered')

btn.addEventListener("click", function(){

	var text = inputBox.value

	var tokens = text.split(',') .map(k => k.trim()
		tokens.sort()
		showValues.innerHTML=""
		for(var token of tokens){
			var toAppend = document.createElement("li")
			toAppend.innerText = token
			showValues.appendChild(toAppend)
		}

	var showValues =  tokens.join('  ')
		console.log(showValues)

}) 

