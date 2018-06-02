/*

Create the Game Booter

Il va falloir renomer les variables...

Created on August 19, 2017

*/

var currentEpisode_lines_container = document.getElementById("currentEpisode");
var finishedChapters_lines_container = document.getElementById("finishedChapters");
var nextChapters_lines_container = document.getElementById("nextChapters");

const chapterImagesPath = "_new_images_folder/game/chapter_images/";

var current_chapter = parseInt(user.lastChapterPlayed);
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

    //next chapters (current to end, including current, so that we can replay it)
    for(var i = current_chapter; i <= end; i++)
    {
        create_line(i, "next");
    }

    //finished chapters (beginning to current, excluding current)
    for(var i = beg; i < current_chapter; i++)
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
            char_img.src = chapterImagesPath + chapter_images[index] + ".jpg";
            char_img.className = "character_img";
    
    var line_middle_content = document.createElement('div');
        line_middle_content.className = "line_middle_content";
    
        var chara_desc = document.createElement('div');
        var desc_header = '<h4 class="center" style="text-transform: uppercase; color: #EE4C5E; font-weight: 300;">' + chapters[index] + '</h4>';
        var desc_description = '<p class="chara_list chara_long_desc""><b>Teaser: </b>' + chapter_description[index] + '</p>';
            chara_desc.innerHTML = desc_header + desc_description;

    var play_episode_button = document.createElement('a');
        play_episode_button.id = index;
        play_episode_button.className = "button play_episode_button";

    var replay_episode_button = document.createElement('a');
        replay_episode_button.id = index;
        replay_episode_button.className = "button replay_episode_button";
        
    var objectiveContainer = document.createElement('div');

    if(type == "current")//if we're doing the unique "current chapter" div
    {
        objectiveContainer.id = "objectiveContainer";//used to display the progress bar
        play_episode_button.id = user.lastChapterPlayed;
        line.className += " line-big";
        chara_desc.innerHTML += "</br> <b>Progress: </b>";
        char_img.className += " line-big";
        
        play_episode_button.innerHTML = "Continue Playing";
        play_episode_button.href = get_button_href(index);// play_episode_button.id);
        // play_episode_button.onclick = function (e){window.open(get_button_href(play_episode_button.id), "_self")};
        play_episode_button.onclick = function (e){console.log("Continue story")};

        currentEpisode_lines_container.appendChild(line);
        // refreshProgressBar();
    }
    else if(type == "next")//continue playing
    {
        line.className += " line-small";
        line_left_content.className += " line-small";
        char_img.className += " line-small";
        
        if(current_chapter == index)
        {
            play_episode_button.innerHTML = "Continue Playing";//continue the story (replay type #1)
        }
        else
        {
            play_episode_button.innerHTML = "Start the episode";//play the story (replay type #1)
            play_episode_button.className = "play_episode_button_disabled";//we can't play the story
        }

        play_episode_button.href = get_button_href(index);// play_episode_button.id);
        play_episode_button.onclick = function (){get_button_consequence(index, 1)};
        // get_button_consequence(0, 1);
        
        // play_episode_button.onclick = function (){window.open(get_button_href(play_episode_button.id), "_self")};

        nextChapters_lines_container.appendChild(line);
    }
    else if(type == "finished")
    {
        line.className += " line-small";
        line_left_content.className += " line-small";
        char_img.className += " line-small";
        
        play_episode_button.innerHTML = "Restart story";//replay the story (replay type #1)
        replay_episode_button.innerHTML = "Replay for achievements";//replay for achievements (replay type #2)
        
        // play_episode_button.href = get_button_href(index);//play_episode_button.id, 1);
        play_episode_button.onclick = function (){get_button_consequence(index, 1)};
        
        replay_episode_button.href = get_button_href(index);//play_episode_button.id, 2);
        replay_episode_button.onclick = function (){get_button_consequence(index, 2)};

        finishedChapters_lines_container.appendChild(line);
    }

    line.appendChild(line_left_content);
        line_left_content.appendChild(char_img);
    line.appendChild(line_middle_content);
        line_middle_content.appendChild(chara_desc);
        line_middle_content.appendChild(objectiveContainer);
        line_middle_content.appendChild(play_episode_button);
        if(type == "current"){line_middle_content.innerHTML += '<div id = "progressBarContainer"><img id="progress_bar_logo"/><div id="progress_bar"></div></div>';}//TODO: very bad code
        // if(type == "finished"){line_middle_content.appendChild(replay_episode_button);}
}
        
/*
    A) Open a chapter through game.php
        1. if we click the current chapter, resume where it is
        2. if we click a prior chapter, there are 2 choices:
            a) reset progress (replay story) -> ex.: if we replay chapter 13, all subsequent chapters must be replayed (memory is wiped out as well)
                1. destroy all progress for this chapter and subsequent chapters 
                    - isVisited
                    - infinity consequences
            b) achievement reset (replay for achievements)
                1. nothing is wiped out
                2. infinity is disabled throughout the replay (and it) doesn't affect previous infinity consequences)
                3. we need to register isVisited in a second table (for achievement purposes)
                    -> we need to save the # of replays per chapter
            -> FINAL TERMINAL CONCLUSION: WE NEED 2 TABLES isVisited
                |-> one official replay: mode "OFFICIAL" (boolean)
                |-> all subsequent replays: mode "ACHIEVEMENTS" (integer)
        3. if we click on a next chapter, we have to play the previous ones before
    B) open a chapter page not normally (type chapter1.php to access it "illegally")
        - redirect to game.php (write a script that reads the current chapter and compares it to the database)
        - must be included in every chapter -> we can't use the game engine because it's going to be too late (user.lastChapterPlayed will already be modified)
*/

async function get_button_consequence(index, replayType = 1)//replayType is optional, default is 1
{
    console.log("replay type: " + replayType);
    
    // A) Open a chapter through game.php
    // 1. if we click the current chapter, resume where it is (so basically don't do shit)
    if(index == current_chapter)
    {
        //leave it empty
        window.open('chapter' + index + '.php', '_self')
    }
    // 2. if we click a prior chapter, there are 2 choices:
    else if(index < current_chapter)
    {
        // a) reset progress (replay story) -> ex.: if we replay chapter 13, all subsequent chapters must be replayed (memory is wiped out as well)
        if(replayType == 1)
        {
            // STEP 1: create a script to work with
            var head = document.getElementsByTagName('head')[0];

            for(var i = index; i < availableChapters; i++)//we delete every chapter from the one we selected until the current one (wipe selected chapter and subsequent chapters)
            {
                //STEP 2: change the script and append it to the HTML head
                var scriptURI = 'js/chapters/chapter' + i + '.js';
                
                // STEP 3: wipe the variables from the chapter
                var scriptLoaded = loadScriptAsync(scriptURI, i);
            }
        }
        // b) achievement reset (replay for achievements)
        else if(replayType == 2)
        {
            /*
                Consequences:
                 - nothing is wiped out
                 - infinity is disabled throughout the replay (and it) doesn't affect previous infinity consequences)
                 - we need to register isVisited in a second table (for achievement purposes)
                    -> we need to save the # of replays per chapter
            */
        }
        else
        {
            // this should never happen
        }

        window.open('chapter' + index + '.php', '_self')
    }
    // 3. if we click on a next chapter, we have to play the previous ones before
    else
    {
        //if we're clicking on a future chapter, we need to tell the user that he has to wait until being able to play it.
        // alert("You cannot play this chapter yet!");
        //var popup = document.createElement('div');
        //popup.id = "alert";
        //play_episode_button.className = "popup-container";
    }

    //TODO: il va avoir un bug, mais il va falloir détecter quand un chapitre est terminé, A.K.A. quand le isVisited pour la dernière slide d'un chapitre = true en mode story
    //TODO: once we finish a chapter, the current chapter is the next one (if there's no next one, the current one is the last one and the progress is at 100%... FUCK, this is annoying)
}

function loadScriptAsync(uri, id)
{
    return new Promise((resolve, reject) =>
    {
        var script = document.createElement('script');
            script.id = "script" + id;
            script.src = uri;
            script.async = true;
            script.onload = () =>
            {
                user.lastChapterPlayed = id;
                console.log("\n\nSTARTING WIPING OF CH. " + id + " (" + user.lastChapterPlayed + ")\n\n");
                wipeCurrentChapter();
                destroyScriptAsync(id)
                resolve();
            };
    
        var head = document.getElementsByTagName('head')[0];
            head.appendChild(script);
    });
}

function destroyScriptAsync(id)
{
    return new Promise((resolve, reject) =>
    {
        var script = document.getElementById("script" + id);
            script.onremove = () =>
            {
                console.log("Destroyed Ch. " + id + "/" + availableChapters);
                resolve();
            };
    });
}
