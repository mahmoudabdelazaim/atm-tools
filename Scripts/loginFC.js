	//this shows the div // you can change keyup with focusout to hide 
		$(document).ready(function() {'use strict';$('#ae').on('keyup',function() {$('#ae-form').toggle(this.value.trim().toLowerCase() == 'raya');});});
		// delay fn
		var delay = function() {'use strict';$('#ae').on('keyup',function() {if(this.value.trim().toLowerCase() == 'raya'){$('#ae-input').delay(0).hide();}});};
		//this needs to hide the input box		
		$(document).ready(delay());
		
		
		