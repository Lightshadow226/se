/*

Create the Game Booter

Il va falloir renomer les variables...

Created on August 19, 2017

*/

var lines_container = document.getElementById("Container");

lines_container.style.backgroundColor = "white";

const character_portraits_path = "images/general/chapter_images/";

var chapters = 
[
    "Introduction",
    "Chapter 1",
    "Chapter 2",
    "Chapter 3",
    "Chapter 4"
];

var chapter_images = 
[
    "chapter0",
    "chapter1",
    "chapter2",
    "chapter3",
    "chapter4",
    "chapter5",
    "chapter6",
    "chapter7",
    "chapter8",
    "chapter9"
];

var chapter_description = 
[
    "You just arrived at Arlington Academy, but everything is so new and big! You're going to need help from a few senior students who will lay down the basics on how things work around here.",
    "Classes start tomorrow, so today is the time to try to make some new friends...but why is everybody so stressed today? Turns out even the simplest things back at home are much more complicated here at Arlington.",
    "Oh no! You're running late to class on your first day! As if this wasn't bad enough, the whole school seems to be revolving around a certain teenage celebrity and an exclusive homecoming party. But things aren't exactly as great as they look on the surface...",
    "Description",
    "Description",
    "Description",
    "Description",
    "Description",
    "Description",
    "Description",
];

function create_interface()
{
    refresh_lines(0, 5);//on affiche tous les chapitres
}

function refresh_lines(beg, end)
{
    lines_container.innerHTML = "";

    for(var i = beg; i < end; i++)
    {
        create_line(i);
    }
}

function create_line(index)
{
    var line = document.createElement('div');

        line.className = "line";
        
    var line_left_content = document.createElement('div');

        line_left_content.className = "line_left_content";

    var char_img = document.createElement('img');

        char_img.src = character_portraits_path + chapter_images[index] + ".png";
        char_img.className = "character_img";

    var line_middle_content = document.createElement('div');

        line_middle_content.className = "line_middle_content";

        var chara_desc = document.createElement('div');

            var desc_header = '<h4 class="center" style="text-transform: uppercase; color: #EE4C5E; font-weight: 300;">' + chapters[index] + '</h4>';
            
            var desc_description = '<p class="chara_list chara_long_desc"><b>Teaser: </b>' + chapter_description[index] + '</p>';

        chara_desc.innerHTML = desc_header + desc_description;

    var play_episode_button = document.createElement('div');

        play_episode_button.id = index;
        play_episode_button.className = "button play_episode_button x-right-y-bottom-v2";
        play_episode_button.innerHTML = "Play the episode!";

        play_episode_button.addEventListener( "click",
                                        function (e)
                                        {
                                            window.open(get_button_ID(play_episode_button.id), "_self");
                                        },
                                        true);

    var line_right_content = document.createElement('div');

        line_right_content.className = "line_right_content";

    lines_container.appendChild(line);
        line.appendChild(line_left_content);
            line_left_content.appendChild(char_img);
        line.appendChild(line_middle_content);
            line_middle_content.appendChild(chara_desc);
            line_middle_content.appendChild(play_episode_button);
        line.appendChild(line_right_content);
}

create_interface();

function get_button_ID(index)
{
    if(index == 0)
    {
        return "chapter0.php";
    }
    else if(index == 1)
    {
        return "chapter1.php";
    }
}
// initializeInterface();