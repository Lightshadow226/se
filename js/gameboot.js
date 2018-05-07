/*

Create the Game Booter

Il va falloir renomer les variables...

Created on August 19, 2017

*/

var currentEpisode_lines_container = document.getElementById("currentEpisode");
var finishedChapters_lines_container = document.getElementById("finishedChapters");
var nextChapters_lines_container = document.getElementById("nextChapters");

const character_portraits_path = "images/general/chapter_images/";

var current_chapter = parseInt(user.last_chapter_played);
var next_chapter = current_chapter + 1;

$(function create_interface()
{
    //TODO: Mettre des constantes
    refresh_lines(0, availableChapters - 1);//on affiche tous les chapitres
})

function refresh_lines(beg, end)
{

    //current chapter
    create_line(current_chapter, "current");

    //next chapters (current to end, excluding current)
    for(var i = next_chapter; i <= end; i++)
    {
        create_line(i, "next");
    }

    //finished chapters (beginning to current, including current, so that we can replay it)
    for(var i = beg; i <= current_chapter; i++)
    {
        create_line(i, "finished");
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

    var replay_episode_button = document.createElement('div');
        replay_episode_button.id = index;
        replay_episode_button.className = "button replay_episode_button";
        
    var objectiveContainer = document.createElement('div');

    if(type == "current")//if we're doing the unique "current chapter" div
    {
        objectiveContainer.id = "objectiveContainer";//used to display the progress bar
        play_episode_button.id = user.last_chapter_played;
        line.className += " line-big";
        char_img.style.maxHeight = "350px";
        play_episode_button.innerHTML = "Continue Playing";
        chara_desc.innerHTML += "</br> <b>Progress: </b>"

        play_episode_button.onclick = function (e){window.open(get_button_ID(play_episode_button.id), "_self")};

        currentEpisode_lines_container.appendChild(line);
    }
    else if(type == "next")
    {
        line.className += " line-small";
        line_left_content.className += " line-small";
        char_img.className += " line-small";
        play_episode_button.innerHTML = "Start the episode!";//replay the story (replay type #1)
        //play_episode_button.className += " play_episode_button-small";
        
        if(index == 1)
        {
            line.style.margin = "0px;";
        }
        
        play_episode_button.onclick = function (){window.open(get_button_ID(play_episode_button.id), "_self")};

        nextChapters_lines_container.appendChild(line);
    }
    else if(type == "finished")
    {
        line.className += " line-small";
        line_left_content.className += " line-small";
        char_img.className += " line-small";
        play_episode_button.innerHTML = "Restart story!";//replay the story (replay type #1)
        replay_episode_button.innerHTML = "Replay for achievements!";//replay for achievements (replay type #2)
        //play_episode_button.className += " play_episode_button-small";
        
        if(index == 1)
        {
            line.style.margin = "0px;";
        }
        
        play_episode_button.onclick = function (){window.open(get_button_ID(play_episode_button.id, 1), "_self")};
        replay_episode_button.onclick = function (){window.open(get_button_ID(play_episode_button.id, 2), "_self")};

        finishedChapters_lines_container.appendChild(line);
    }

    line.appendChild(line_left_content);
        line_left_content.appendChild(char_img);
    line.appendChild(line_middle_content);
        line_middle_content.appendChild(chara_desc);
        line_middle_content.appendChild(objectiveContainer);
        line_middle_content.appendChild(play_episode_button);
        if(type == "finished"){line_middle_content.appendChild(replay_episode_button);}
}
        
/*
    A) Open a chapter through game.php
        1. if we click the current chapter, resume where it is
        2. if we click one before, there are 2 choices:
            a) reset progress (replay story) -> ex.: if we replay chapter 13, all subsequent chapters must be replayed (memory is wiped out as well)
                1. destroy all progress for *this chapter* and *subsequent chapters* 
                    - isVisited
                    - infinity consequences
                2. undo all the infinity consequences of visited slides on 
            b) achievement reset (replay for achievements)
                1. nothing is wiped out
                2. infinity is disabled throughout the replay (andit )doesn't affect previous infinity consequences)
                3. we need to register isVisited in a second table (for achievement purposes)
                    -> we need to save the # of replays per chapter
            -> FINAL TERMINAL CONCLUSION: WE NEED 2 TABLES isVisited
                |-> one official replay: mode "OFFICIAL"
                |-> all subsequent replays: mode "ACHIEVEMENTS"
        3. if we click on a next chapter, we have to play the previous ones before
*/

function get_button_ID(index, replayType = 1)//replayType is optional, default is 1
{
    console.log("index: " + index + ", replay type: " + replayType);


    if(index < current_chapter)//if we selected a past chapter
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
    else if(index == current_chapter)//if we selected the current chapter
    {

    }
    else//if we selected future chapters
    {
        alert("Finish previous chapters first!")
    }


    
}
// initializeInterface();