function navfunction(){
	var x = document.getElementById("mytopnav");
	if(x.className == "topnav"){
		x.className+=" responsive";
	}else{
		x.className="topnav";
	}
}


var links = $(".nav-link");
var home = $("#home-link");
var about = $("#about-link");
var service =$("#service-link");
var team =$("#team-link");
var clients =$("#client-link");
var contacts =$("#contact-link");
home.click(function(){
	links.removeClass("active");
	home.addClass("active");
});
about.click(function(){
	links.removeClass("active");
	about.addClass("active");
});
service.click(function(){
	links.removeClass("active");
	service.addClass("active");
});
team.click(function(){
	links.removeClass("active");
	team.addClass("active");
});
clients.click(function(){
	links.removeClass("active");
	clients.addClass("active");
});
contacts.click(function(){
	links.removeClass("active");
	contacts.addClass("active");
});