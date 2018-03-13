
//document.append(funThoughts);
//var email = "anganab@yahoo.com";
//var newEmail = email.replace("yahoo","gmail");
//console.log(email);
//console.log(newEmail);

//var awesomeThoughts = "I am Angana and I know I am awesome!";

//var funThoughts = awesomeThoughts.replace("awesome", "fun");


//$("#main").append(funThoughts);

var formattedName  = HTMLheaderName.replace("%data%","Angana");
var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["awesomeness", "programming", "teaching", "js"];
$("#main").append(skills);



$("#main").append(bio.name);

var edu={
	"last_school" :"VKV Umrongso",
	"present_college":"NIT Silchar"
};

var work={
	"curretnworkstatus" :"student",
	"city": "Silchar"
};
