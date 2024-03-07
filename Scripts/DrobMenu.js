/////////////////////////////////////////////////////// drobdown menu ////////////////////////////////////////////////////////////////
//show select div only  for "target" select id
		document.getElementById('target')
		.addEventListener('change',function (){
			'use strict';var vis = document.querySelector('.vis'),target = document.getElementById(this.value);
			if (vis !== null) {vis.className = 'hide';}
			if (target !== null ){target.className = 'vis';
			if(this.value == "content_00"){};
			if(this.value == "content_01"){};
			if(this.value == "content_02"){};
			if(this.value == "content_03"){};
			if(this.value == "content_04"){};
			if(this.value == "content_05"){};
			if(this.value == "content_06"){};
			if(this.value == "content_07"){};
			if(this.value == "content_08"){};
			if(this.value == "content_09"){};
			if(this.value == "content_10"){alrt_ATMPart(1000);};
			if(this.value == "content_11"){};
			if(this.value == "content_12"){};}
			
			});




function miva(obj) {

    var el = document.getElementById(obj);

        el.style.display = 'none';

}