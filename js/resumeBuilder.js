var work = {
	"jobs" : [
	{
		"employer" : "Acer",
		"title" : "Software-developer",
		"location" : "Bangalore",
		"date" : "Jun '15- Mar '17"
	},
	{
		"employer" : "Amazon",
		"title" : "Software-developer",
		"location" : "Bangalore",
		"date" : "Apr '17- Dec '17"
	},
	{
		"employer" : "Google",
		"title" : "Software-developer",
		"location" : "Silicon-Valley",
		"date" : "Jan '18- Present"
	}
	]
}
for(job in work.jobs)
{
	$("#workExperience").append("HTMLworkStart");
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle= HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formemployertitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formemployertitle);
}

var project = {
	"projects" : [
	{
		"title" : "Library-book-management",
		"dates" : "Jun '12",
		"description" : "Developed a library book management website to help students issue and return books on time"	
	},
	{
		"title" : "Music-player-app",
		"dates" : "Jun '13",
		"description" : "Developed a music- playiing application for users to select songs based on their moods"
	}
	]
}

var bio={
	"name":"Angana",
	"age":23,
	"role" : "Software-developer",
	"contacts" : {
		"mobile" : "8638111577",
		"email" : "anganaborah9@gmail.com",
		"github" : "https://github.com/AnganaB",
		"instagram" : "https://www.instagram.com/sleepnindwoods/",
		"location" : "Silicon-Valley, California"
	},
	"welcomeMessage" : "Welcome to my page!",
    "skills" : ["awesomeness", "programming" , "javascript" , "sleeping" , "singing"],
    "biopic" : "hirist.jpg"
}
$("#main").prepend(bio.role);
$("#main").prepend(bio.name);
var education = {
	"schools" : [
	{
		"name" : "VKV-Umrongso",
		"degree" :"AISSE",
		"date" : "March 2009",
		"majors" : ["Science"],
		"location" : "Umrongso"
	},
	{
		"name" : "NPS International School",
		"degree" : "AISSCE",
		"date" : "April 2011",
		"majors" : ["Science"],
		"location" : "Guwahati"
	},
	{
		"name" : "NIT Silchar",
		"degree" : "BTech",
		"date" : "Jun 2015",
		"majors" : ["CS"],
		"location" : "Silchar"
	}
	],
	"onlinecourses" : [
	{
		"title" : "Javascript Essential Training",
		"school" : "Udacity",
		"Date" : " Dec '13"
	}
	]
}

 if(bio.skills.length>0)
    {
      $("#header").append(HTMLskillsStart);
      var formattedName  = HTMLskillsStart.replace("%data%",bio.skills[0]);
      $("#skills").append(formattedName);
      formattedName  = HTMLskillsStart.replace("%data%",bio.skills[1]);
      $("#skills").append(formattedName);
      var formattedName  = HTMLskillsStart.replace("%data%",bio.skills[2]);
      $("#skills").append(formattedName);
      var formattedName  = HTMLskillsStart.replace("%data%",bio.skills[3]);
      $("#skills").append(formattedName);
      var formattedName  = HTMLskillsStart.replace("%data%",bio.skills[4]);
      $("#skills").append(formattedName);
    }

 var Cameron  = {};
 var courses = 0;
 Cameron.job = "Course-developer";

 var makeCourse =  function() {
 	console.log("Made course");
 }
 while(Cameron.job === "Course-developer")
 {
 	makeCourse();
 	courses = courses+1;
 	if(courses===10){
 		Cameron.job="Learning-specialist";
 	}
 }

 console.log("Cameron.job");