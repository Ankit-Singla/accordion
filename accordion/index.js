$(document).ready(function(){
	var tabs = $('div.tab1');
	var contents = $('div.content1');

	// $('p').delay(1);


	for(var count = 1; count < tabs.length; count++){
		$(tabs[count]).removeClass('tab2');
	}
	for(var count = 1; count < tabs.length; count++){
		$(contents[count]).removeClass('content2');
	}

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


