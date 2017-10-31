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
		<a href="index.html"><img class="logo add_border" src="images/general/se-logo.png"></a>\
\
\
	<div id="nav_menu_container">\
\
		<div class="pink_logo_bar add_border">\
			<!--This div has no other purpose than to take space while not complicating lives with margins and padding-->\
		</div>\
\
		<div id="pink_menu" class="add_border">\
			<a class="menu_item add_border" href="profile.php">My Profile</a> \
			<a class="menu_item add_border" href="map">City Map</a>\
			<a class="menu_item add_border" href="game.php">My Episodes</a>\
			<a class="menu_item add_border" href="dorm.php">My Dorm</a>\
			<a class="menu_item add_border" href="relationships.php">My Relationships</a>\
		</div>\
	</div>\
';