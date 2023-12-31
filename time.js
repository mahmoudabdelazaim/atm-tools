
		function startTime() {
			const today = new Date();
			let h = today.getHours();
			let m = today.getMinutes();
			let s = today.getSeconds();
			let D = today.getDate(); 
			let M = today.getMonth() + 1;
			let Y =today.getFullYear();
			m = checkTime(m);
			s = checkTime(s);
			document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s +"  "+ D + "/" + M + "/" + Y;
			setTimeout(startTime, 1000);
							}

		function checkTime(i) {
			if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
			return i;
							}
							
							
							
						

