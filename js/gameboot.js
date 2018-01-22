/*

Create the Game Booter

Il va falloir renomer les variables...

Created on August 19, 2017

*/

var currentEpisode_lines_container = document.getElementById("currentEpisode");
var finishedChapters_lines_container = document.getElementById("finishedChapters");

const character_portraits_path = "images/general/chapter_images/";

$(function create_interface()
{
    //TODO: Mettre des constantes
    refresh_lines(0, availableChapters - 1);//on affiche tous les chapitres
})

function refresh_lines(beg, end)
{
    create_line(user.last_chapter_played, "current");

    for(var i = beg; i <= end; i++)
    {
        create_line(i, "noncurrent");
    }

    refreshProgressBar();
}

function create_line(index, type)
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
        var desc_description = '<p class="chara_list chara_long_desc""><b>Teaser: </b>' + chapter_description[index] + '</p>';
            chara_desc.innerHTML = desc_header + desc_description;

    var play_episode_button = document.createElement('div');
        play_episode_button.id = index;
        play_episode_button.className = "button play_episode_button";
        
    var objectiveContainer = document.createElement('div');

    if(type == "current")//if we're doing the unique "current chapter" div
    {
        objectiveContainer.id = "objectiveContainer";//used to display the progress bar
        play_episode_button.id = user.last_chapter_played;
        line.className += " line-big";
        char_img.style.maxHeight = "350px";
        play_episode_button.innerHTML = "Continue Playing";
        chara_desc.innerHTML += "</br> <b>Progress: </b>"

        play_episode_button.addEventListener( "click",
                            function (e)
                            {
                                window.open(get_button_ID(play_episode_button.id), "_self");
                            },
                            true);

        currentEpisode_lines_container.appendChild(line);
    }
    else if(type == "noncurrent")
    {
        line.className += " line-small";
        line_left_content.className += " line-small";
        char_img.className += " line-small";
        play_episode_button.innerHTML = "Play the episode!";
        //play_episode_button.className += " play_episode_button-small";
        
        if(index == 1)
        {
            line.style.margin = "0px;";
        }
        
        play_episode_button.addEventListener( "click",
        function (e)
        {
            window.open(get_button_ID(play_episode_button.id), "_self");
        },
        true);

        finishedChapters_lines_container.appendChild(line);
    }

    line.appendChild(line_left_content);
        line_left_content.appendChild(char_img);
    line.appendChild(line_middle_content);
        line_middle_content.appendChild(chara_desc);
        line_middle_content.appendChild(objectiveContainer);
        line_middle_content.appendChild(play_episode_button);
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
}
// initializeInterface();
pullVariablesFromDB();