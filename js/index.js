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
    update_current_chapter(user.last_chapter_played, "currentIndex");
})

function update_current_chapter(index, type)
{
    if(type == "currentIndex")//if we're on the index.php page
    {
        var title = document.getElementById('title');
            title.innerHTML = chapters[index];

        //current chapter image
        var chap_img = document.getElementById('chap_img');
            chap_img.src = character_portraits_path + chapter_images[index] + ".png";
            
        //description
        var description = document.getElementById('description');
            description.innerHTML = chapter_description[index];

        //button
        var button_container = document.getElementById('button_container_index');

            var left_wing = document.createElement('div');
                left_wing.className = "flex-panel";

            var play_episode_button = document.createElement('div');
                play_episode_button.id = user.last_chapter_played;
                play_episode_button.className = "button yellow_button";
                play_episode_button.innerHTML = "Continue Playing";
                play_episode_button.addEventListener( "click", function (e)
                {
                    window.open(get_button_ID(play_episode_button.id), "_self");
                }, true);

            var right_wing = document.createElement('div');
                right_wing.className = "flex-panel";

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