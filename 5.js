/*
CRUD DATABASE Simulation application
const database = {
	studentsList: {
		'xamidullo': {
			name: "xamidullo",
			age: 33,
			id: 123,
			tolov: false
		}
	},
	create(user) {
		//yangi userni studentsList ga qo'shsin va  studentsList ni qaytarib yuborsin
	},
	read(name) {
		//userni studentsList dan topib qaytarib bersin!.
	},
	update(name, user) {
		// studentsList dagi userni ichidagi ma'lumotlarini o'zgartiring va qaytaring!
	},
	delete(name) {
		// studentsList dan faqat bitta userni o'chiring! qaytarish ihtihoriy message qaytarish ihtiyoriy
		delete this.studentsList["xamidullo"]
	}
}
database.create({
	name: "xamidullo",
	age: 33,
	id: 123,
	tolov: false // yoki true
})
database.update("xamidullo", {
	name: "azizbek",
	age: 21,
	tolov: true
})
database.delete("xamidullo")
console.log(database.studentsList)
*/
const database = {
	StudentList: {
		'xamidullo': {
			name: "xamidullo",
			age: 33,
			id: 123,
			payment: false
		}
	},
	create(user) {
		//yangi userni studentsList ga qo'shsin va  studentsList ni qaytarib yuborsin
		database.StudentList[user.name] = user
		return database.StudentList
	},
	read(name, StudentList) {
		//userni studentsList dan topib qaytarib bersin!.
		for (let key in database.StudentList){
			if(database.StudentList[key].name === name){
				return database.StudentList[key]
			}
			else{
				return "BUNDAY NOMLI O'QUVCHI BAZADA MAVJUD EMAS"
			}
		}
	},
	update(name, user) {
		// studentsList dagi userni ichidagi ma'lumotlarini o'zgartiring va qaytaring!
		for (let key in database.StudentList){
			if(database.StudentList[key].name === name){
				database.StudentList[key] = user
				return database.StudentList[key]
			}
		}
		return "BUNDAY NOMLI O'QUVCHI BAZADA MAVJUD EMAS"

	},
	deleteUser(name) {
		// studentsList dan faqat bitta userni o'chiring! qaytarish ixtihoriy message qaytarish ixtiyoriy
		// delete this.StudentList["xamidullo"]
		for (let user in database.StudentList){
			if (database.StudentList[user].name === name){
					delete database.StudentList[name]
					return `${name} ismli o'quvchi bazadan o'chirildi`
			}
			
		}
		return `${name} ismli o'quvchi bazada mavjud emas`
			
	}}
database.create({
	name: "xamidullo",
	age: 33,
	id: 123,
	tolov: false // yoki true
})
database.update("xamidullo", {
	name: "azizbek",
	age: 21,
	tolov: true
})
database.deleteUser("xamidullo")
database.deleteUser("MK")
console.log(database.StudentList)

