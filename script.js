var vicQuantity = prompt("How many victims will you be inputting?")
function Person(name, phone, street){
	this.name = name
	this.phone = phone
	this.street = street

}
var victims = ""
var vicArr = []
for (var i = 0; i < vicQuantity; i++) {
	
	var name = prompt("Victim #"+(parseInt(i)+1)+"'s name:")
	var phone = prompt("Victim #"+(parseInt(i)+1)+"'s phone number:")
	var street = prompt("Victim #"+(parseInt(i)+1)+"'s street:")
	
	vicArr[i] = new Person(name, phone, street)
	// console.log(vicArr[i].name)
	victims = victims+" "+vicArr[i].name+"\n"
}
var volunteers = ""
var volArr = []
var volQuantity = prompt("How many volunteers will you be inputting?")
for (var i = 0; i < volQuantity; i++) {
	var name = prompt("Volunteer #"+(parseInt(i)+1)+"'s name:")
	var phone = prompt("Volunteer #"+(parseInt(i)+1)+"'s phone number:")
	var street = prompt("Volunteer #"+(parseInt(i)+1)+"'s street:")
	
	volArr[i] = new Person(name, phone, street)
	volunteers = volunteers+" "+volArr[i].name+"\n"
}

alert("There are "+vicArr.length+" victims in need and "+volArr.length+" volunteers.\nPersons in need:\n"+victims+"\n"+"Volunteers available:\n"+volunteers)