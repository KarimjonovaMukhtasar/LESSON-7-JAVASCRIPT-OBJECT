userName = prompt("O'quvchi ismini kiriting")
		if(userName === null|| userName.length === 0 || !isNaN(userName)){
			alert("Ismni to'g'ri kiriting>>> ")
			userName = prompt("O'quvchi ismini kiriting")
		}
		else{
			user.name = userName
		}
		userage = Number(prompt("O'quvchi yoshini kiriting"))
		if(userage === null|| userage.length === 0 || isNaN(userage)){
			alert("Yoshni to'g'ri kiriting>>> ")
			userage = Number(prompt("O'quvchi ismini kiriting"))
		}
		else{
			user.age = userage
		}
		userid = Number(prompt("O'quvchi ID sini kiriting"))
		if(userid === null|| userid.length === 0 || isNaN(userid)){
			alert("ID ni to'g'ri kiriting>>> ")
			userid = Number(prompt("O'quvchi ismini kiriting"))
		}
		else{
			user.id = userid
		}
		
		confirmation = confirm("O'quvchi to'lov qilganmi?")
		if(confirmation){
			user.payment = true
		}
		else{
			user.payment = false
		}