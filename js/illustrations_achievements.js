/*

Create the Character Scroll for the Characterpage

*/

var lines_container = document.getElementById("achievements");

const locked_achievement_path = "_new_images_folder/game/achievements/locked/";
const unlocked_achievement_path = "_new_images_folder/game/achievements/unlocked/";

var unlocked_achievements_list = 
[
    "Unlocked - Alignment: True Neutral",
    "Unlocked - Bookworm - Unocked",
    "Unlocked - Newbie Attitude",
    "Unlocked - Party Animal",
];

var unlocked_achievements_list_description = 
[
    "Unlocked - Alignment: True Neutral",
    "Unlocked - Bookworm - Unocked",
    "Unlocked - Newbie Attitude",
    "Unlocked - Party Animal",
];

var locked_achievements_list = 
[
    "Locked - Alignment: True Neutral",
    "Locked - Bookworm",
    "Locked - Newbie Attitude",
    "Locked - Party Animal",
];

var locked_achievements_list_description = 
[
    "???",
    "???",
    "???",
    "???",
];

function createAchievements()
{
    var lines_to_create = locked_achievements_list.length;
    
    for(var i = 0; i < lines_to_create; i++)
    {
        create_achievement_line(i);
    }

    refresh_lines(1);
}

function refresh_lines(type)//refresh the lines that are displayed on screen
{
    if(type == 0)//if we're making illustrations
    {
        document.getElementById("illustrations").style.display = "block";
        document.getElementById("illustrations-button").style.backgroundColor = yellow_dark;
        
        document.getElementById("achievements").style.display = "none";
        document.getElementById("achievements-button").style.backgroundColor = yellow;
    }
    else if(type == 1)//if we're making achivements
    {
        document.getElementById("achievements").style.display = "block";
        document.getElementById("achievements-button").style.backgroundColor = yellow_dark;
        
        document.getElementById("illustrations").style.display = "none";
        document.getElementById("illustrations-button").style.backgroundColor = yellow;
    }
}

function create_achievement_line(index)
{
    var desc_header = '<h4 class="" style="text-transform: uppercase; color: #EE4C5E">' + locked_achievements_list[index] + '</h4>';
    var desc_description = '<p class="chara_long_desc">' + locked_achievements_list_description[index] + '</p>';

    var line = document.createElement('div');
        line.className = "line_achievement";
        
    var achievement_img = document.createElement('img');
        achievement_img.src = locked_achievement_path + "achievement" + index + ".png";
        achievement_img.className = "achievement_img";

    var line_description = document.createElement('div');
        line_description.className = "flex-panel";
        line_description.style.padding = "10px";

        var achievement_description = document.createElement('div');

        achievement_description.innerHTML = desc_header + desc_description;// + /*desc_fullname + */desc_birthday + desc_likes + desc_dislikes + desc_description;

    lines_container.appendChild(line);
        line.appendChild(achievement_img);
        line.appendChild(line_description);
            line_description.appendChild(achievement_description);
}

createAchievements();