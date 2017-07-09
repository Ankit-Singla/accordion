// $(document).ready( function(){
// 	// var tabs = document.getElementsByClassName("tab1", "tab2");
// 	// var contents = document.getElementsByClassName("content1 content2");

// 	var tabs = document.getElementsByClassName("tab1", "tab2");
// 	var contents = document.getElementsByClassName("content1", "content2");

// 	for(var k = 0; k < tabs.length; k++){
// 		console.log(tabs[k].classList);
// 		// removeClass(tabs[k], "tab2");
// 		console.log(tabs[k].classList);
// 	}

// 	for(var l = 0; l < contents.length; l++){
// 		console.log(contents[l].classList);
// 		// removeClass(contents[l], "content2");
// 		console.log(contents[l].classList);
// 	}

// 	for(var i = 0; i < tabs.length; i++){
// 		tabs[i].addEventListener('click', myFunction.bind(null, i));
// 	}	

// 	function myFunction(j){
// 		// tabs[j].style.backgroundColor = 'blue';
// 		// tabs[j].getElementsByTagName('h3')[0].style.color = 'white';
// 		// contents[j].style.height = '241px';
// 		// contents[j].getElementsByTagName('p')[0].style.display = 'block';

// 		console.log(event);
// 		var k = 0;
// 		for(k = 0; k < tabs.length; k++){
// 			console.log(j);
// 			console.log(tabs[k]);
// 			if(k == j){
// 				// console.log(tabs[k]);
// 				// console.log("yes");
// 				// console.log(tabs[k].classList);
// 				// if(hasClass(tabs[k], 'tab1')){
// 				// 	console.log(tabs[k]);
// 				// 	removeClass(tabs[k], 'tab1');
// 				// 	// console.log(tabs[k].classList);
// 				// }
// 				// // if(!hasClass(tabs[k], 'tab2')){
// 				// 	console.log(tabs[k]);
// 				// 	addClass(tabs[k], 'tab2');
// 				// 	console.log(tabs[k].classList);
// 				// // }
// 				addClass(tabs[k], 'tab2');
// 				removeClass(tabs[k], 'tab1');
				
// 			}else{
// 				// console.log("no");
// 				// console.log(tabs[k].classList);
// 				// if(hasClass(tabs[k], 'tab2')){
// 				// 	removeClass(tabs[k], 'tab2');
// 				// 	console.log(tabs[k].classList);
// 				// }
// 				// if(!hasClass(tabs[k], 'tab1')){
// 				// 	addClass(tabs[k], 'tab1');
// 				// 	console.log(tabs[k].classList);
// 				// }
// 				addClass(tabs[k], 'tab1');
// 				removeClass(tabs[k], 'tab2');
// 			}
			
// 		}

// 	}


// 	function hasClass(el, className) {
// 	  if (el.classList)
// 	    return el.classList.contains(className)
// 	  else
// 	    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
// 	}

// 	function addClass(el, className) {
// 	  if (el.classList)
// 	    el.classList.add(className)
// 	  else if (!hasClass(el, className)) el.className += " " + className
// 	}

// 	function removeClass(el, className) {
// 	  if (el.classList)
// 	    el.classList.remove(className)
// 	  else if (hasClass(el, className)) {
// 	    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
// 	    el.className=el.className.replace(reg, ' ')
// 	  }
// 	}

// });		

// 		// tabs[1].addEventListener('click', function(){
// 		// 	tabs[1].style.backgroundColor = 'blue';
// 		// 	tabs[1].getElementsByTagName('h3')[0].style.color = 'white';
// 		// 	// var contents = document.getElementsByClassName("content");
// 		// 	// contents[1].style.height = '241px';
// 		// 	// contents[1].getElementsByTagName('p')[0].style.display = 'visible';
// 		// });
// 		// tabs[2].addEventListener('click', function(){
// 		// 	tabs[2].style.backgroundColor = 'blue';
// 		// 	tabs[2].getElementsByTagName('h3')[0].style.color = 'white';
// 		// 	// var contents = document.getElementsByClassName("content");
// 		// 	// contents[2].style.height = '241px';
// 		// 	// contents[2].getElementsByTagName('p')[0].style.display = 'visible';
// 		// });
// 		// tabs[3].addEventListener('click', function(){
// 		// 	tabs[3].style.backgroundColor = 'blue';
// 		// 	tabs[3].getElementsByTagName('h3')[0].style.color = 'white';
// 		// 	// var contents = document.getElementsByClassName("content");
// 		// 	// contents[3].style.height = '241px';
// 		// 	// contents[3].getElementsByTagName('p')[0].style.display = 'visible';
// 		// });
// 	// }

		
// JQUERY

// $(document).ready(function(){
// 	var tabs = $('div.tab1');
// 	var contents = $('div.content1');

// 	for (var i = 0; i < $(tabs).length; i++) {
// 		console.log(i);
// 		$(tabs[i]).click(myFunc.bind(null, i));
// 	}

// 	function myFunc(event, j){
// 		console.log(event);
// 		console.log($(tabs));
// 		for(var k = 0; k < $(tabs).length; k++){
// 			console.log($(tabs[k]).classList);
// 			if(k == j){
// 				$(tabs[k]).addClass('tab2');
// 				$(tabs[k]).removeClass('tab1');
// 			}else{
// 				$(tabs[k]).addClass('tab1');
// 				$(tabs[k]).removeClass('tab2');
// 			}
// 		}
// 	}


// });	



$(document).ready(function(){
	var tabs = $('div.tab1');
	var contents = $('div.content1');


	for(var count = 1; count < tabs.length; count++){
		$(tabs[count]).removeClass('tab2');
	}
	for(var count = 1; count < tabs.length; count++){
		$(contents[count]).removeClass('content2');
	}

	// for (var i = 0; i < $(tabs).length; i++) {
	// 	console.log(i);
	// 	$(tabs[i]).on('click', function(event, i){
	// 		myFunc(event, i);
	// 	});
	// }

	

	//selected wale section pe click krne se ek blue color ka extra bolder aa jayega
	//ye wala feature last mein dalne ki koshish krni hai

	for (var i = 0; i < $(tabs).length; i++) {
		console.log(i);
		$(tabs[i]).on('click', myFunc.bind(tabs[i], i));
	}

	function myFunc(j, event){
		console.log(event);
		console.log($(tabs));
		console.log(j);
		for(var k = 0; k < $(tabs).length; k++){
			$(tabs[k]).removeClass('tab1');
			$(tabs[k]).removeClass('tab2');
			$(contents[k]).removeClass('content1');
			$(contents[k]).removeClass('content2');

			if(k == j){
				console.log("yes");
				$(tabs[k]).addClass('tab2');
				// $(tabs[k]).removeClass('tab1');
				$(contents[k]).addClass('content2');
			}else{
				console.log("no");
				$(tabs[k]).addClass('tab1');
				// $(tabs[k]).removeClass('tab2');
				$(contents[k]).addClass('content1');
			}
		}
	}


});	


