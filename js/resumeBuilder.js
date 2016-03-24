var bio = {
	"name" : "Hudson Baker",
	"role" : "Web Developer",
	"age" : 19,
	"welcomeMessage" : "Always fighting for the team",
	"image" : "images/me.jpg",
	"contacts" : {
		"mobile" : "(719)-465-6656",
		"email" : "charlesprobaker@gmail.com",
		"github" : "CHBaker",
		"twitter" : "charles.baker96",
		"location" : "Colorado Springs, Colorado"
	},
	"skills" : [
		"awesomeness", "programming", "rock climbing", "agar.io"
	]
};

var work = {
	"jobs" : [
		{
			"title" : "Communications assistant",
			"employer" : "Captioncall",
			"dates" : "November 2014 - Present",
			"location" : "Colorado Springs",
			"description" : "Dictate one side of a conversation for the deaf and hard of hearing."
		},
		{
			"title" : "Climber",
			"employer" : "Tree Artisans",
			"dates" : "January 2013 - Present",
			"location" : "Colorado Springs",
			"description" : "Climb trees to prune or remove safely with out damage to surroundings, operate heavy machinery."	
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "Interactive Resume",
			"dates" : "Febuary 2016 - March 2016",
			"description" : "Build an interactive resume using JavaScript, JQuery, and JSON.",
			"images" : [
				"images/fry.jpg"
			]
		},
		{
			"title" : "MadLibs Game",
			"dates" : "November 2015 - December 2015",
			"description" : "Build a MadLibs game that prompts for user input using Python.",
			"images" : [
				"images/fry.jpg"
			]
		}
	]
};

var education = {
	"schools" : [
		{
			"school" : "The Classical Academy High School",
			"dates" : "Graduated in May 2015",
			"location" : "Colorado Springs",
			"major" : "Diploma"
		},
		{
			"school" : "Udacity",
			"dates" : "November 2015 - April 2016",
			"location" : "Online in Colorado Springs",
			"major" : "Intro to Programming Nanodegree"
		}],
	"onlineClasses" : [
		{
			"title" : "HTML5 Game Development",
			"school" : "Udacity",
			"dates" : "2016",
			"url" : "https://www.udacity.com/course/html5-game-development--cs255"
		}]
};

bio.display = function() {
	var formattedWorkMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedWorkEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedWorkGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedWorkTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedWorkLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedImage = HTMLbioPic.replace("%data%", bio.image);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedImage, formattedWelcomeMsg);
	$("#topContacts").append(formattedWorkMobile, formattedWorkEmail, formattedWorkGithub, formattedWorkTwitter, formattedWorkLocation);

	if(bio.skills.length > 0) {
		
		$("#header").append(HTMLskillsStart);

		for (skill in bio.skills) {
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkills);
		}
	}
}

function displayWork() {
	for (job in work.jobs) {
		//create new div for work experience
		$("#workExperience").append(HTMLworkStart);
		//concat employer and title
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedAll = formattedEmployer + formattedTitle + formattedLocation;

		$(".work-entry:last").append(formattedAll);
		$(".work-entry:last").append(formattedDates, formattedDescription);
	}
}

projects.display = function() {
	for(project in projects.projects) {

		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

education.display = function() {
	for(school in education.schools) {

		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].school);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

		$(".education-entry:last").append(formattedName, formattedLocation);
		$(".education-entry:last").append(formattedDates, formattedMajor);
	}
		$(".education-entry:last").append(HTMLonlineClasses);

	for (name in education.onlineClasses) {

		$("#education").append(HTMLschoolStart);

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[name].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[name].school);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineClasses[name].dates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineClasses[name].url);
		var formattedAll = formattedTitle + formattedSchool + formattedDates + formattedURL;
		
		$(".education-entry:last").append(formattedAll);
	}	
}

bio.display();
projects.display();
displayWork();
education.display();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);