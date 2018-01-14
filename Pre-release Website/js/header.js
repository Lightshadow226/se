var header = document.getElementById('header')

/*
var user_info_bar = document.createElement('div');

    user_info_bar.className = "user_info add_border";
    user_info_bar.innerHTML = "HELLO FUTURE SCHOLAR!";

var home_button = document.createElement('a');

    home_button.href = "index.html";
    
    var home_button_img = document.createElement('img');

        home_button_img.className = "logo add_border";
        home_button_img.src = "images/se-logo.png";



header.appendChild(user_info_bar);
header.appendChild(home_button);
    home_button.appendChild(home_button_img);*/

header.innerHTML = '\
<div id="user_info" class="add_border">\
			HELLO FUTURE SCHOLAR!\
		</div>\
		\
		<a href="index.html"><img class="logo add_border" src="images/se-logo.png"></a>\
\
\
	<div id="nav_menu_container">\
\
		<div class="pink_logo_bar add_border">\
			<!--This div has no other purpose than to take space while not complicating lives with margins and padding-->\
		</div>\
\
		<div id="pink_menu" class="add_border">\
			<a class="menu_item add_border" href="features.html">Features</a> \
			<a class="menu_item add_border" href="characters.html">Characters</a>\
			<a class="menu_item add_border" href="staff.html">The Staff</a>\
			<a class="menu_item add_border" href="joinus.html">Join Us</a>\
			<a class="menu_item add_border" href="http://www.sweetelite-staff.tumblr.com">Blog</a>\
			<a class="menu_item add_border" href="schoolgear.html">School Gear</a>\
			<a class="menu_item add_border" href="contact.html">Contact</a>\
			<a class="menu_item add_border" href="faq.html">FAQ</a>\
		</div>\
	</div>\
';