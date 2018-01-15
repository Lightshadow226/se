/*

Created on January 14, 2017

*/

var currentEpisodeIndex_lines_container = document.getElementById("currentEpisodeIndex");

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

$(function create_interface()
{
    //TODO: Mettre des constantes
    refresh_lines(0, 2);//on affiche tous les chapitres
})

function refresh_lines(beg, end)
{
    create_line(user.last_chapter_played, "currentIndex");
}

function create_line(index, type)
{
    if(type == "currentIndex")//if we're on the index.php page
    {
        //title
        var currentChapter = document.createElement('h4');
            currentChapter.innerHTML = "Current Chapter:";
            currentChapter.style.textAlign = "center";
            currentChapter.style.fontSize = "1.5em";

        var title = document.createElement('h5');
            title.innerHTML = chapters[index];
            title.style.textTransform = "uppercase";
            title.style.color = "#EE4C5E";
            title.style.margin = "10px";
            title.style.fontWeight = "300";
            title.style.fontSize = "2em";

        //current chapter image
        var chap_img = document.createElement('img');
            chap_img.src = character_portraits_path + chapter_images[index] + ".png";
            chap_img.className = "character_img_index";
            chap_img.style.border = "1px solid #F7B334";
            chap_img.style.boxShadow = "0 0 10px #F7B334";

        //button
        var button_container = document.createElement('div');
            button_container.className = "flex-container";
            button_container.style.marginTop = "10px";

        var left_wing = document.createElement('div');
            left_wing.className = "flex-panel";

        var play_episode_button = document.createElement('div');
            play_episode_button.id = user.last_chapter_played;
            play_episode_button.className = "button play_episode_button_index";
            play_episode_button.innerHTML = "Continue Playing";
            play_episode_button.addEventListener( "click", function (e)
            {
                window.open(get_button_ID(play_episode_button.id), "_self");
            }, true);

        var right_wing = document.createElement('div');
            right_wing.className = "flex-panel";

        currentEpisodeIndex_lines_container.appendChild(currentChapter);
        currentEpisodeIndex_lines_container.appendChild(title);
        currentEpisodeIndex_lines_container.appendChild(chap_img);
        currentEpisodeIndex_lines_container.appendChild(button_container);
            button_container.appendChild(left_wing);
            button_container.appendChild(play_episode_button);
            button_container.appendChild(right_wing);
    }
}
        
function get_button_ID(index)
{
    if(index == -1)
    {
        get_button_ID(user.last_chapter_played);
    }
    else if(index == 0)
    {
        return "chapter0.php";
    }
    else if(index == 1)
    {
        return "chapter1.php";
    }
    // else if(index == 2)
    // {
    //     return "chapter2.php";
    // }
}
// initializeInterface();
pullVariablesFromDB();