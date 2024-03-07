
////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
		//golobal variables
		const lyn1	 	= '@echo y | reg add "HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Wincor Nixdorf\\ProTopas\\CurrentVersion\\LYNXPAR\\CASH_DISPENSER" /v VALUE_1 /t REG_SZ /d ';
		const lyn2 		= '@echo y | reg add "HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Wincor Nixdorf\\ProTopas\\CurrentVersion\\LYNXPAR\\CASH_DISPENSER" /v VALUE_2 /t REG_SZ /d ';
		const lyn3 		= '@echo y | reg add "HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Wincor Nixdorf\\ProTopas\\CurrentVersion\\LYNXPAR\\CASH_DISPENSER" /v VALUE_3 /t REG_SZ /d ';
		const lyn4 		= '@echo y | reg add "HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Wincor Nixdorf\\ProTopas\\CurrentVersion\\LYNXPAR\\CASH_DISPENSER" /v VALUE_4 /t REG_SZ /d ';
		const PortNum 	= '@echo y | reg add "HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Wincor Nixdorf\\ProTopas\\CurrentVersion\\CCOPEN\\COMMUNICATION\\TCPIP\\PROJECT" /v PORTNUMBER /t REG_SZ /d ';
		const LocalPort = '@echo y | reg add "HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Wincor Nixdorf\\ProTopas\\CurrentVersion\\CCOPEN\\COMMUNICATION\\TCPIP\\PROJECT" /v LOCALPORT /t REG_SZ /d ';
		const Camera 	='@echo y | reg add "HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Wincor Nixdorf\\ProTopas\\CurrentVersion\\CCOPEN\\PROTOCOL\\PARAMETER" /v CAMERA_MACHINE_NO /t REG_SZ /d ';
		const Terminal 	='@echo y | reg add "HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Wincor Nixdorf\\ProAgent\\CurrentVersion\\SSTP" /v TerminalId /t REG_SZ /d ';
		const Peer		='@echo y | reg add "HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Wincor Nixdorf\\ProTopas\\CurrentVersion\\CCOPEN\\COMMUNICATION\\TCPIP\\PROJECT" /v REMOTEPEER /t REG_SZ /d ';
		const Wallet	='@echo y | reg add "HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\RAYA\\BMMOBWLT" /v ATMID /t REG_SZ /d ';
		
		
	
		
		///////////////////NBE .REG AND .bat data entry and download
		//NBE Auto GateWay Input
		var firstInput = document.getElementsByName("NBE_IP_1")[0];
		var secondInput = document.getElementsByName("NBE_Gateway_1")[0];

		function process(e) {
		secondInput.value = e.target.value.replace(/\s/g, '-');
						}
		firstInput.addEventListener("input", process);
        ////////////////NBE Auto local port Input

		
		var NBE_PortNumber = document.getElementsByName("NBE_PN")[0];
		var NBE_LocalPort = document.getElementsByName("NBE_LP")[0];
		function NBE_PORT_AND_LOCAL(e) {
		NBE_LocalPort.value = e.target.value.replace(/\s/g, '-');
						}
		NBE_PortNumber.addEventListener("input", NBE_PORT_AND_LOCAL);

		
////////
		function NBE(e){					
		var NBE_Shutdown		= document.getElementById("NBE_Shutdown").value;		
		var NBE_TID1			= document.getElementById("NBE_TID1").value;       					   
		var NBE_TID2			= document.getElementById("NBE_TID2").value;  					   
		var NBE_PN				= document.getElementById("NBE_PN").value;	
		var NBE_LP				= document.getElementById("NBE_LP").value;
		var NBE_RPeer			= document.getElementById("NBE_RPeer").value;		
		var NBE_Val1			= document.getElementById("NBE_Val1").value;	   			  
		var NBE_Val2			= document.getElementById("NBE_Val2").value;	  			  
		var NBE_Val3			= document.getElementById("NBE_Val3").value;	 			 
		var NBE_Val4			= document.getElementById("NBE_Val4").value;	 			  
		var NBE_IP_1			= document.getElementById("NBE_IP_1").value;
		var NBE_IP_2			= document.getElementById("NBE_IP_2").value;	    				 
		var NBE_Subnetmask_1	= document.getElementById("NBE_Subnetmask_1").value;			     
		var NBE_Subnetmask_2	= document.getElementById("NBE_Subnetmask_2").value;			     
		var NBE_Gateway_1		= document.getElementById("NBE_Gateway_1").value;	
		var NBE_Gateway_2		= document.getElementById("NBE_Gateway_2").value;	
		var NBE_LanName			= document.getElementById("NBE_LanName").value;	   
		var NBE_DisLanName      = document.getElementById("NBE_DisLanName").value;	 

		//.bat file computer name and ATM IPs // Changes text area and .bat file contents
		const NBE_PCname = document.getElementById('NBE_PCname');
			NBE_PCname.value = 'REM --add the following to the top of your bat file--\r\n @echo off \r\n :: BatchGotAdmin \r\n:------------------------------------- \r\n REM  --> Check for permissions \r\n >nul 2>&1 "%SYSTEMROOT%\\system32\\cacls.exe" "%SYSTEMROOT%\\system32\\config\\system" \r\n REM --> If error flag set, we do not have admin. \r\n' +"if '%errorlevel%' NEQ '0' ("+'\r\n' +"    echo Requesting administrative privileges..."+'\r\n' +"    goto UACPrompt"+'\r\n' +") else ( goto gotAdmin )"
			+'\r\n' +":UACPrompt"+'\r\n' +'    echo Set UAC = CreateObject^("Shell.Application"^) > "%temp%\\getadmin.vbs"'+'\r\n' +'    set params = %*:"=""'+'\r\n' +'    echo UAC.ShellExecute "cmd.exe", "/c %~s0 %params%", "", "runas", 1 >> "%temp%\\getadmin.vbs"'+'\r\n' +'    "%temp%\\getadmin.vbs"'+'\r\n' +'    del "%temp%\\getadmin.vbs"'+'\r\n' +'    exit /B'+'\r\n' +':gotAdmin'+'\r\n' +'    pushd "%CD%"'+'\r\n' +'    CD /D "%~dp0"'
			+'\r\n:--------------------------------------\r\n'
			+'WMIC ComputerSystem where Name="%ComputerName%" call Rename Name="'+NBE_TID1+'-'+NBE_TID2+'"'+'\r\n'
			+'netsh interface ip set address name="'+NBE_LanName+'"'+' source=static ^ address='+NBE_IP_1+'.'+NBE_IP_2+' mask='+NBE_Subnetmask_1+'.'+NBE_Subnetmask_2+' gate='+NBE_Gateway_1+'.'+NBE_Gateway_2
			+'\r\n'+'netsh interface set interface "'+NBE_DisLanName+'" disable'
			
			+'\r\n:--------------------------------------\r\n'
			+Terminal+NBE_TID1+'-'+NBE_TID2+'\r\n'
			+Camera+NBE_TID2+'\r\n'
			+PortNum+NBE_PN+'\r\n'
			+Peer+NBE_RPeer+'\r\n'
			+LocalPort+NBE_LP+'\r\n'
			+lyn1+NBE_Val1+'\r\n'+lyn2+NBE_Val2+'\r\n'+lyn3+NBE_Val3+'\r\n'+lyn4+NBE_Val4	
			+'\r\n:--------------------------------------\r\n'
			+'\r\n'+NBE_Shutdown;
		console.log(NBE_PCname.value);
		
		// download file .bat 
		var textcontent = document.getElementById("NBE_PCname").value;
		var downloadableLink = document.createElement('a');
		downloadableLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textcontent));
		downloadableLink.download ='NBE['+NBE_TID1+'-'+NBE_TID2+"].bat";
		document.body.appendChild(downloadableLink);
		downloadableLink.click();
		document.body.removeChild(downloadableLink);
		
		
		}






///////////////////////////////////////////////////////////////


		//BM	
		function BM(e){																											
		var BM_TID1			= document.getElementById("BM_TID1").value;       					   
		var BM_TID2			= document.getElementById("BM_TID2").value;  					  
		var BM_PN			= document.getElementById("BM_PN").value;		
		var BM_LP			= document.getElementById("BM_LP").value;
		var BM_RPeer		= document.getElementById("BM_RPeer").value;			
		var BM_Val1			= document.getElementById("BM_Val1").value;	   			
		var BM_Val2			= document.getElementById("BM_Val2").value;	  			   
		var BM_Val3			= document.getElementById("BM_Val3").value;	 			
		var BM_Val4			= document.getElementById("BM_Val4").value;	 			  
		var BM_IP			= document.getElementById("BM_IP").value;	    				 
		var BM_Subnetmask_1	= document.getElementById("BM_Subnetmask_1").value;			      
		var BM_Subnetmask_2	= document.getElementById("BM_Subnetmask_2").value;			      
		var BM_Gateway		= document.getElementById("BM_Gateway").value;		      
		var BM_LanName		= document.getElementById("BM_LanName").value;	 
		var BM_Shutdown		= document.getElementById("BM_Shutdown").value;	 
		//.bat file computer name and ATM IPs Changes // text area and .bat file contents
		const BM_PCname = document.getElementById('BM_PCname');
			BM_PCname.value = 'REM --add the following to the top of your bat file--\r\n @echo off \r\n :: BatchGotAdmin \r\n:------------------------------------- \r\n REM  --> Check for permissions \r\n >nul 2>&1 "%SYSTEMROOT%\\system32\\cacls.exe" "%SYSTEMROOT%\\system32\\config\\system" \r\n REM --> If error flag set, we do not have admin. \r\n' +"if '%errorlevel%' NEQ '0' ("+'\r\n' +"    echo Requesting administrative privileges..."+'\r\n' +"    goto UACPrompt"+'\r\n' +") else ( goto gotAdmin )"
			+'\r\n' +":UACPrompt"+'\r\n' +'    echo Set UAC = CreateObject^("Shell.Application"^) > "%temp%\\getadmin.vbs"'+'\r\n' +'    set params = %*:"=""'+'\r\n' +'    echo UAC.ShellExecute "cmd.exe", "/c %~s0 %params%", "", "runas", 1 >> "%temp%\\getadmin.vbs"'+'\r\n' +'    "%temp%\\getadmin.vbs"'+'\r\n' +'    del "%temp%\\getadmin.vbs"'+'\r\n' +'    exit /B'+'\r\n' +':gotAdmin'+'\r\n' +'    pushd "%CD%"'+'\r\n' +'    CD /D "%~dp0"'
			+'\r\n:--------------------------------------\r\n'
			+'WMIC ComputerSystem where Name="%ComputerName%" call Rename Name="'+BM_TID1+'-'+BM_TID2+'"'+'\r\n'
			+'netsh interface ip set address name="'+BM_LanName+'"'+' source=static ^ address='+BM_IP+' mask='+BM_Subnetmask_1+'.'+BM_Subnetmask_2+' gate='+BM_Gateway
			+'\r\n:--------------------------------------\r\n'
			+Terminal+BM_TID2+'_'+BM_TID1+BM_TID2+'\r\n'
			+Camera+BM_TID1+BM_TID2+'\r\n'
			+PortNum+BM_PN+'\r\n'
			+Peer+BM_RPeer+'\r\n'
			+LocalPort+BM_LP+'\r\n'
			+Wallet+BM_TID1+BM_TID2+'\r\n'
			+lyn1+BM_Val1+'\r\n'+lyn2+BM_Val2+'\r\n'+lyn3+BM_Val3+'\r\n'+lyn4+BM_Val4
			+'\r\n:--------------------------------------\r\n'
			+'\r\n'+BM_Shutdown;
		console.log(BM_PCname.value);
		// download file .bat 
		var textcontent = document.getElementById("BM_PCname").value;
		var downloadableLink = document.createElement('a');
		downloadableLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textcontent));
		downloadableLink.download = 'BM['+BM_TID1+'-'+BM_TID2+ '].bat';
		document.body.appendChild(downloadableLink);
		downloadableLink.click();
		document.body.removeChild(downloadableLink);}
		
		//ENPO
		function ENPO(e){																											
		var ENPO_TID1= document.getElementById("ENPO_TID1").value;       					   
		var ENPO_TID2= document.getElementById("ENPO_TID2").value;  					   
		var ENPO_Shutdown= document.getElementById("ENPO_Shutdown").value;   					 																										// Camera machine num
		var ENPO_PN= document.getElementById("ENPO_PN").value;						  
		var ENPO_LP	= document.getElementById("ENPO_LP").value;
		var ENPO_RPeer= document.getElementById("ENPO_RPeer").value;
		
		var ENPO_Val1= document.getElementById("ENPO_Val1").value;	   			  
		var ENPO_Val2= document.getElementById("ENPO_Val2").value;	  			  
		var ENPO_Val3= document.getElementById("ENPO_Val3").value;	 			  
		var ENPO_Val4= document.getElementById("ENPO_Val4").value;	 			   
		var ENPO_IP= document.getElementById("ENPO_IP").value;	    				
		var ENPO_Subnetmask_1= document.getElementById("ENPO_Subnetmask_1").value;			     
		var ENPO_Subnetmask_2= document.getElementById("ENPO_Subnetmask_2").value;			     
		var ENPO_Gateway= document.getElementById("ENPO_Gateway").value;		     
		var ENPO_LanName= document.getElementById("ENPO_LanName").value;	    		
		//.bat file computer name and ATM IPs Changes // text area and .bat file contents
		const ENPO_PCname = document.getElementById('ENPO_PCname');
			ENPO_PCname.value = 'REM --add the following to the top of your bat file--\r\n @echo off \r\n :: BatchGotAdmin \r\n:------------------------------------- \r\n REM  --> Check for permissions \r\n >nul 2>&1 "%SYSTEMROOT%\\system32\\cacls.exe" "%SYSTEMROOT%\\system32\\config\\system" \r\n REM --> If error flag set, we do not have admin. \r\n' +"if '%errorlevel%' NEQ '0' ("+'\r\n' +"    echo Requesting administrative privileges..."+'\r\n' +"    goto UACPrompt"+'\r\n' +") else ( goto gotAdmin )"
			+'\r\n' +":UACPrompt"+'\r\n' +'    echo Set UAC = CreateObject^("Shell.Application"^) > "%temp%\\getadmin.vbs"'+'\r\n' +'    set params = %*:"=""'+'\r\n' +'    echo UAC.ShellExecute "cmd.exe", "/c %~s0 %params%", "", "runas", 1 >> "%temp%\\getadmin.vbs"'+'\r\n' +'    "%temp%\\getadmin.vbs"'+'\r\n' +'    del "%temp%\\getadmin.vbs"'+'\r\n' +'    exit /B'+'\r\n' +':gotAdmin'+'\r\n' +'    pushd "%CD%"'+'\r\n' +'    CD /D "%~dp0"'
			+'\r\n:--------------------------------------\r\n'
			+'WMIC ComputerSystem where Name="%ComputerName%" call Rename Name="'+ENPO_TID2+'"'+'\r\n'
			+'netsh interface ip set address name="'+ENPO_LanName+'"'+' source=static ^ address='+ENPO_IP+' mask='+ENPO_Subnetmask_1+'.'+ENPO_Subnetmask_2+' gate='+ENPO_Gateway
			+'\r\n'+':--------------------------------------' +'\r\n'
			+Terminal+ENPO_TID2+'\r\n'
			+Camera+ENPO_TID1+'\r\n'
			+PortNum+ENPO_PN+'\r\n'
			+Peer+ENPO_RPeer+'\r\n'
			+LocalPort+ENPO_LP+'\r\n'
			+lyn1+ENPO_Val1+'\r\n'+lyn2+ENPO_Val2+'\r\n'+lyn3+ENPO_Val3+'\r\n'+lyn4+ENPO_Val4
			+'\r\n'+':--------------------------------------' +'\r\n'
			+'\r\n'+ENPO_Shutdown;
		console.log(ENPO_PCname.value);
		// download file .bat 
		var textcontent = document.getElementById("ENPO_PCname").value;
		var downloadableLink = document.createElement('a');
		downloadableLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textcontent));
		downloadableLink.download ='ENPO[' +ENPO_TID2 + "].bat";
		document.body.appendChild(downloadableLink);
		downloadableLink.click();
		document.body.removeChild(downloadableLink);}

		// NI
		function NI(e){																											
		var NI_UNO= document.getElementById("NI_UNO").value;       					   
		var NI_TID= document.getElementById("NI_TID").value;  					   
		var NI_Shutdown= document.getElementById("NI_Shutdown").value;   																															
		var NI_PN= document.getElementById("NI_PN").value;		
		var NI_LP	= document.getElementById("NI_LP").value;
		var NI_RPeer= document.getElementById("NI_RPeer").value;
		
		var NI_Val1= document.getElementById("NI_Val1").value;	   			
		var NI_Val2= document.getElementById("NI_Val2").value;	  			
		var NI_Val3= document.getElementById("NI_Val3").value;	 			  
		var NI_Val4= document.getElementById("NI_Val4").value;	 			  
		var NI_ATM_IP= document.getElementById("NI_ATM_IP").value;	    				
		var NI_Subnetmask_1= document.getElementById("NI_Subnetmask_1").value;			    
		var NI_Subnetmask_2= document.getElementById("NI_Subnetmask_2").value;			    
		var NI_Gateway= document.getElementById("NI_Gateway").value;		      
		var NI_LANname= document.getElementById("NI_LANname").value;
		//.bat file computer name and ATM IPs Changes // text area and .bat file contents
		const NI_PCname = document.getElementById('NI_PCname');
			NI_PCname.value = 'REM --add the following to the top of your bat file--\r\n @echo off \r\n :: BatchGotAdmin \r\n:------------------------------------- \r\n REM  --> Check for permissions \r\n >nul 2>&1 "%SYSTEMROOT%\\system32\\cacls.exe" "%SYSTEMROOT%\\system32\\config\\system" \r\n REM --> If error flag set, we do not have admin. \r\n' +"if '%errorlevel%' NEQ '0' ("+'\r\n' +"    echo Requesting administrative privileges..."+'\r\n' +"    goto UACPrompt"+'\r\n' +") else ( goto gotAdmin )"
			+'\r\n' +":UACPrompt"+'\r\n' +'    echo Set UAC = CreateObject^("Shell.Application"^) > "%temp%\\getadmin.vbs"'+'\r\n' +'    set params = %*:"=""'+'\r\n' +'    echo UAC.ShellExecute "cmd.exe", "/c %~s0 %params%", "", "runas", 1 >> "%temp%\\getadmin.vbs"'+'\r\n' +'    "%temp%\\getadmin.vbs"'+'\r\n' +'    del "%temp%\\getadmin.vbs"'+'\r\n' +'    exit /B'+'\r\n' +':gotAdmin'+'\r\n' +'    pushd "%CD%"'+'\r\n' +'    CD /D "%~dp0"'
			+'\r\n:--------------------------------------\r\n'
			+'WMIC ComputerSystem where Name="%ComputerName%" call Rename Name="'+NI_UNO+NI_TID+'"'+'\r\n'
			+'netsh interface ip set address name="'+NI_LANname+'"'+' source=static ^ address='+NI_ATM_IP+' mask='+NI_Subnetmask_1+'.'+NI_Subnetmask_2+' gate='+NI_Gateway
			+'\r\n'+':--------------------------------------' +'\r\n'
			+Terminal+NI_UNO+NI_TID+'\r\n'
			+Camera+'000'+NI_TID+'\r\n'
			+PortNum+NI_PN+'\r\n'
			+Peer+NI_RPeer+'\r\n'
			+LocalPort+NI_LP+'\r\n'
			+lyn1+NI_Val1+'\r\n'+lyn2+NI_Val2+'\r\n'+lyn3+NI_Val3+'\r\n'+lyn4+NI_Val4
			+'\r\n:--------------------------------------\r\n'
			+'\r\n'+NI_Shutdown;
		console.log(NI_PCname.value);
		// download file .bat 
		var textcontent = document.getElementById("NI_PCname").value;
		var downloadableLink = document.createElement('a');
		downloadableLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textcontent));
		downloadableLink.download = 'NI['+NI_UNO+NI_TID + "].bat";
		document.body.appendChild(downloadableLink);
		downloadableLink.click();
		document.body.removeChild(downloadableLink);}

		// other accounts
		function OTHERS(e){
		var OTHERS_UNO= document.getElementById("OTHERS_UNO").value;       					  
		var OTHERS_TID= document.getElementById("OTHERS_TID").value;  					   
		var OTHERS_ComputerName= document.getElementById("OTHERS_ComputerName").value;  					  
		var OTHERS_Shutdown= document.getElementById("OTHERS_Shutdown").value;   					   																									// Camera machine num
		var OTHERS_PN= document.getElementById("OTHERS_PN").value;						 
		var OTHERS_LP	= document.getElementById("OTHERS_LP").value;
		var OTHERS_RPeer= document.getElementById("OTHERS_RPeer").value;   
		var OTHERS_AtmID= document.getElementById("OTHERS_AtmID").value;
		
		var OTHERS_Val1= document.getElementById("OTHERS_Val1").value;	   			  
		var OTHERS_Val2= document.getElementById("OTHERS_Val2").value;	  		
		var OTHERS_Val3= document.getElementById("OTHERS_Val3").value;	 			   
		var OTHERS_Val4= document.getElementById("OTHERS_Val4").value;	 			 
		var OTHERS_ATM_IP= document.getElementById("OTHERS_ATM_IP").value;	    				
		var OTHERS_Subnetmask_1= document.getElementById("OTHERS_Subnetmask_1").value;		
		var OTHERS_Subnetmask_2= document.getElementById("OTHERS_Subnetmask_2").value;					
		var OTHERS_Gateway= document.getElementById("OTHERS_Gateway").value;		      
		var OTHERS_LANname= document.getElementById("OTHERS_LANname").value;	    			
		//.bat file computer name and ATM IPs Changes// text area and .bat file contents
		const OTHERS_PCname = document.getElementById('OTHERS_PCname');
			OTHERS_PCname.value = 'REM --add the following to the top of your bat file--\r\n @echo off \r\n :: BatchGotAdmin \r\n:------------------------------------- \r\n REM  --> Check for permissions \r\n >nul 2>&1 "%SYSTEMROOT%\\system32\\cacls.exe" "%SYSTEMROOT%\\system32\\config\\system" \r\n REM --> If error flag set, we do not have admin. \r\n' +"if '%errorlevel%' NEQ '0' ("+'\r\n' +"    echo Requesting administrative privileges..."+'\r\n' +"    goto UACPrompt"+'\r\n' +") else ( goto gotAdmin )"
			+'\r\n' +":UACPrompt"+'\r\n' +'    echo Set UAC = CreateObject^("Shell.Application"^) > "%temp%\\getadmin.vbs"'+'\r\n' +'    set params = %*:"=""'+'\r\n' +'    echo UAC.ShellExecute "cmd.exe", "/c %~s0 %params%", "", "runas", 1 >> "%temp%\\getadmin.vbs"'+'\r\n' +'    "%temp%\\getadmin.vbs"'+'\r\n' +'    del "%temp%\\getadmin.vbs"'+'\r\n' +'    exit /B'+'\r\n' +':gotAdmin'+'\r\n' +'    pushd "%CD%"'+'\r\n' +'    CD /D "%~dp0"'
			+'\r\n:--------------------------------------\r\n'
			+'WMIC ComputerSystem where Name="%ComputerName%" call Rename Name="'+OTHERS_ComputerName+'"'+'\r\n'
			+'netsh interface ip set address name="'+OTHERS_LANname+'"'+' source=static ^ address='+OTHERS_ATM_IP+' mask='+OTHERS_Subnetmask_1+'.'+OTHERS_Subnetmask_2+' gate='+OTHERS_Gateway
			+'\r\n'+':--------------------------------------' +'\r\n'
			+Terminal+OTHERS_TID+'\r\n'
			+Camera+OTHERS_UNO+'\r\n'
			+PortNum+OTHERS_PN+'\r\n'
			+Peer+OTHERS_RPeer+'\r\n'
			+LocalPort+OTHERS_LP+'\r\n'
			+Wallet+OTHERS_AtmID+'\r\n'
			+lyn1+OTHERS_Val1+'\r\n'+lyn2+OTHERS_Val2+'\r\n'+lyn3+OTHERS_Val3+'\r\n'+lyn4+OTHERS_Val4
			+'\r\n:--------------------------------------\r\n'
			+'\r\n'+OTHERS_Shutdown;
		console.log(OTHERS_PCname.value);
		// download file .bat 
		var textcontent = document.getElementById("OTHERS_PCname").value;
		var downloadableLink = document.createElement('a');
		downloadableLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textcontent));
		downloadableLink.download = 'OTHERS ['+OTHERS_TID + "].bat";
		document.body.appendChild(downloadableLink);
		downloadableLink.click();
		document.body.removeChild(downloadableLink);}
		
		
		////////////////////////////////////////////////////////////////////////////////////
		
		
		
		// Whats app message  Creator
		function Whats_Msg(e){
		var project= document.getElementById("project").value;
		var Serial_Number= document.getElementById("Serial_Number").value;   
		var ATM_Account= document.getElementById("ATM_Account").value;  					   
		
		var ATM_Name= document.getElementById("ATM_Name").value;  					   
		var Model= document.getElementById("Model").value;  					  
		var Address= document.getElementById("Address").value;   					   																									// Camera machine num
		var Governate= document.getElementById("Governate").value;						 
		var installation_Project= document.getElementById("installation_Project").value;						 
			    			
		//.bat file computer name and ATM IPs Changes// text area and .bat file contents
		const Whats_Msg_PCname = document.getElementById('Whats_Msg_PCname');
			Whats_Msg_PCname.value =project+'\r\n'+'\r\n' +'SN: '+Serial_Number+'\r\n'+'\r\n'
			+'ATM Name: '+ATM_Account+'-'+ATM_Name+'\r\n'+'\r\n'
			+'Model: '+Model+'\r\n'+'\r\n'
			+'Address: '+Address+'\r\n'+'\r\n'
			+'Governate: '+Governate+'\r\n'+'\r\n'
			+'Installation Project: '+installation_Project
		console.log(Whats_Msg_PCname.value);
		// download file .bat 
		var textcontent = document.getElementById("Whats_Msg_PCname").value;
		var downloadableLink = document.createElement('a');
		downloadableLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textcontent));
	//	downloadableLink.download = +Serial_Number+".txt";
		document.body.appendChild(downloadableLink);
		downloadableLink.click();
		document.body.removeChild(downloadableLink);}
		
		
		
		
		function copy() {
		let Whats_Msg_PCname = document.getElementById("Whats_Msg_PCname");
		Whats_Msg_PCname.select();
		document.execCommand("copy");
						}
		
		///////////////////////////////////////////////////////////////////////////////////
		
		// ATM DATA Exporter
		function ATM(e){
		//.bat file computer name and ATM IPs Changes// text area and .bat file contents
		const ATM_PCname = document.getElementById('ATM_PCname');
			ATM_PCname.value = 'REM --add the following to the top of your bat file--\r\n @echo off \r\n@echo off\r\ncolor 2\r\n :: BatchGotAdmin \r\n:------------------------------------- \r\n REM  --> Check for permissions \r\n >nul 2>&1 "%SYSTEMROOT%\\system32\\cacls.exe" "%SYSTEMROOT%\\system32\\config\\system" \r\n REM --> If error flag set, we do not have admin. \r\n' +"if '%errorlevel%' NEQ '0' ("+'\r\n' +"    echo Requesting administrative privileges..."+'\r\n' +"    goto UACPrompt"+'\r\n' +") else ( goto gotAdmin )"
			+'\r\n' +":UACPrompt"+'\r\n' +'    echo Set UAC = CreateObject^("Shell.Application"^) > "%temp%\\getadmin.vbs"'+'\r\n' +'    set params = %*:"=""'+'\r\n' +'    echo UAC.ShellExecute "cmd.exe", "/c %~s0 %params%", "", "runas", 1 >> "%temp%\\getadmin.vbs"'+'\r\n' +'    "%temp%\\getadmin.vbs"'+'\r\n' +'    del "%temp%\\getadmin.vbs"'+'\r\n' +'    exit /B'+'\r\n' +':gotAdmin'+'\r\n' +'    pushd "%CD%"'+'\r\n' +'    CD /D "%~dp0"'
			+'\r\n:--------------------------------------\r\n'
			+'\r\n @echo A | xcopy /s /i "C:\\JOURNAL" "%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\JOURNAL"'
			+'\r\n @echo A | xcopy /s /i "C:\\CUSTOMER" "%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\CUSTOMER"'
			+'\r\n @echo A | xcopy /s /i "C:\\Raya\\JOURNAL" "%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\Raya\\JOURNAL"'
			+'\r\n @echo A | xcopy /s /i "C:\\ProBase\\KEYSTORE" "%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\KEYSTORE"'

			+'\r\n @echo A | xcopy /s /i "C:\\ProBase\\LOG\\*.xml" "%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\LOGS\\Cenio" /y'
			+'\r\n @echo A | xcopy /s /i "C:\\ProBase\\CONF\\RM4H_0\\deviceTrace" "%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\LOGS\\DN-RM4H" /y'
			+'\r\n @echo A | xcopy /s /i "C:\\ProBase\\CONF\\RM4V_0\\deviceTrace" "%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\LOGS\\DN-RM4V" /y'
			+'\r\n @echo A | xcopy /s /i "C:\\ProBase\\CONF\\CMDV6_0\\deviceTrace" "%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\LOGS\\DN-CMDV6" /y'
			
			
			
			+'\r\n @echo ______________________________________________Computer name_____________________________ >>"%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\[%ComputerName%]Data.txt"'
			+'\r\n @echo y | systeminfo | findstr/c:"Host Name">>"%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\[%ComputerName%]Data.txt"'
			+'\r\n @echo ______________________________________________Terminal ID_______________________________ >>"%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\[%ComputerName%]Data.txt"'
			+'\r\n @echo y | reg export "HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Wincor Nixdorf\\ProAgent\\CurrentVersion\\SSTP" test.txt && type test.txt | findstr /i "TerminalId" >>"%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\[%ComputerName%]Data.txt"'
			+'\r\n @echo ______________________________________________Port Number_______________________________ >>"%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\[%ComputerName%]Data.txt"'
			+'\r\n @echo y | reg export "HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Wincor Nixdorf\\ProTopas\\CurrentVersion\\CCOPEN\\COMMUNICATION\\TCPIP\\PROJECT" test.txt && type test.txt | findstr /i "PORTNUMBER" >>"%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\[%ComputerName%]Data.txt"'
			+'\r\n @echo y | reg export "HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Wincor Nixdorf\\ProTopas\\CurrentVersion\\CCOPEN\\COMMUNICATION\\TCPIP\\PROJECT" test.txt && type test.txt | findstr /i "LOCALPORT" >>"%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\[%ComputerName%]Data.txt"'
			+'\r\n @echo ______________________________________________Machine Number____________________________ >>"%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\[%ComputerName%]Data.txt"'
			+'\r\n @echo y | reg export "HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Wincor Nixdorf\\ProTopas\\CurrentVersion\\CCOPEN\\PROTOCOL\\PARAMETER" test.txt && type test.txt | findstr /i "CAMERA_MACHINE_NO" >>"%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\[%ComputerName%]Data.txt"'
			+'\r\n @echo ______________________________________________ATM ID for wallet_________________________ >>"%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\[%ComputerName%]Data.txt"'
			+'\r\n @echo y | reg export "HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\RAYA\\BMMOBWLT" test.txt && type test.txt | findstr /i "ATMID" >>"%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\[%ComputerName%]Data.txt"'
			+'\r\n @echo ______________________________________________Remote Peer_______________________________ >>"%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\[%ComputerName%]Data.txt"'
			+'\r\n @echo y | reg export "HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Wincor Nixdorf\\ProTopas\\CurrentVersion\\CCOPEN\\COMMUNICATION\\TCPIP\\PROJECT" test.txt && type test.txt | findstr /i "REMOTEPEER" >>"%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\[%ComputerName%]Data.txt"'
			+'\r\n @echo ______________________________________________Lynxpar values____________________________ >>"%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\[%ComputerName%]Data.txt"'
			+'\r\n @echo y | reg export "HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Wincor Nixdorf\\ProTopas\\CurrentVersion\\LYNXPAR\\CASH_DISPENSER" test.txt && type test.txt | findstr /i "Value_1" >>"%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\[%ComputerName%]Data.txt"'
			+'\r\n @echo y | reg export "HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Wincor Nixdorf\\ProTopas\\CurrentVersion\\LYNXPAR\\CASH_DISPENSER" test.txt && type test.txt | findstr /i "Value_2" >>"%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\[%ComputerName%]Data.txt"'
			+'\r\n @echo y | reg export "HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Wincor Nixdorf\\ProTopas\\CurrentVersion\\LYNXPAR\\CASH_DISPENSER" test.txt && type test.txt | findstr /i "Value_3" >>"%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\[%ComputerName%]Data.txt"'
			+'\r\n @echo y | reg export "HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Wincor Nixdorf\\ProTopas\\CurrentVersion\\LYNXPAR\\CASH_DISPENSER" test.txt && type test.txt | findstr /i "Value_4" >>"%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\[%ComputerName%]Data.txt"'
			+'\r\n @echo y | reg export "HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Wincor Nixdorf\\ProTopas\\CurrentVersion\\LYNXPAR\\CASH_DISPENSER" test.txt && type test.txt | findstr /i "Value_5" >>"%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\[%ComputerName%]Data.txt"'
			+'\r\n @echo y | reg export "HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Wincor Nixdorf\\ProTopas\\CurrentVersion\\LYNXPAR\\CASH_DISPENSER" test.txt && type test.txt | findstr /i "Value_6" >>"%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\[%ComputerName%]Data.txt"'
			+'\r\n @echo y | reg export "HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Wincor Nixdorf\\ProTopas\\CurrentVersion\\LYNXPAR\\CASH_DISPENSER" test.txt && type test.txt | findstr /i "Value_7" >>"%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\[%ComputerName%]Data.txt"'
			+'\r\n @echo y | reg export "HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Wincor Nixdorf\\ProTopas\\CurrentVersion\\LYNXPAR\\CASH_DISPENSER" test.txt && type test.txt | findstr /i "Value_8" >>"%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\[%ComputerName%]Data.txt"'
			+'\r\n @echo y | del "test.txt"'
			+'\r\n @echo _____________________________________________ATM IP - SubnetMask - Gate way ____________ >>"%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\[%ComputerName%]Data.txt"'
			+'\r\n @echo y |ipconfig /all | findstr/C:"IPv4 Address" >>"%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\[%ComputerName%]Data.txt"'
			+'\r\n @echo y |ipconfig /all | findstr/C:"Subnet Mask" >>"%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\[%ComputerName%]Data.txt"'
			+'\r\n @echo y |ipconfig /all | findstr/C:"Default Gateway" >>"%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\[%ComputerName%]Data.txt"'
			+'\r\n @echo _____________________________________________Software installation Date And Bios________ >>"%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\[%ComputerName%]Data.txt"'
			+'\r\n @echo y | systeminfo | findstr/c:"Original Install Date" >>"%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\[%ComputerName%]Data.txt"'
			+'\r\n @echo y | systeminfo | findstr/c:"BIOS Version">>"%CD%\\%date:~-4,4%-%date:~-10,2%-%date:~7,2%\\[%ComputerName%]Data.txt"'
			+'\r\n @echo By Mahmoud Abdelazeem';
		console.log(ATM_PCname.value);
		// download file .bat 
		var textcontent = document.getElementById("ATM_PCname").value;
		var downloadableLink = document.createElement('a');
		downloadableLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textcontent));
		downloadableLink.download = "ATM DATA EXPORTER.bat";
		document.body.appendChild(downloadableLink);
		downloadableLink.click();
		document.body.removeChild(downloadableLink);}
		
		
		
		//////////////////////////////////////////////////search fn
		
		
		function search(string){
			window.find(string);
								}
								
								
								
								
								

	
	
	
	function message(msg,duration)
{
     var el = document.createElement("div");
     el.setAttribute("style","position:fixed;top:100px;left:0px;background-color:red;color:white;font-weight: bold; padding: 5px 0px 5px 0px;opacity: 0.7;width:100%; text-align: center;border-style: 3px solid red;");
     el.innerHTML = msg;
     setTimeout(function(){
      el.parentNode.removeChild(el);
     },duration);
     document.body.appendChild(el);
}

var d = document.getElementById('d');
d.onclick = function(){ message("close",500); };



		
/////////////// alerts for all pages		
								
function alrt_ATMPart(duration)
{
     var el = document.createElement("div");
     el.setAttribute("style","position:fixed;top:150px;left:0px;background-color:green;color:white;font-weight: bold; padding: 20px 0px 20px 0px;opacity: 1;width:100%; text-align: center;border-style: 3px solid red;");
     el.innerHTML = 'Double Click On Part Name For Copying';
     setTimeout(function(){
      el.parentNode.removeChild(el);
     },duration);
     document.body.appendChild(el);
}

var d = document.getElementById('d');
d.onclick = function(){ message("close",500); };




function CopyToClipboard(id){
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    try {
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        console.log('Successfully copy text: hello world ' + r);
    } catch (err) {
        console.log('Unable to copy!');
    }
}
