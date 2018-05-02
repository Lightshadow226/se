/*

Created on January 14, 2017

*/

var currentEpisodeIndex_lines_container = document.getElementById("currentEpisodeIndex");

const character_portraits_path = "images/general/chapter_images/";
var container = document.getElementById('random_character_panel');

$(function create_interface()
{
    //logged int
    update_highest_affinity();
    update_current_chapter(user.last_chapter_played, "currentIndex");
});

//LOGGED OUT
function initialize()
{
    var left_wing = document.createElement('img');
        left_wing.src = "images/general/characters_page/chevrons/pink/leftchevron.png";
        left_wing.className = "chevron-img";
        left_wing.onmouseenter = function f()
        {
            left_wing.src = "images/general/characters_page/chevrons/purple/leftchevron.png";
        }
        left_wing.onmouseleave = function f()
        {
            left_wing.src = "images/general/characters_page/chevrons/pink/leftchevron.png";
        }
        left_wing.onclick = function f()
        {
            randomImg();
        }

    var right_wing = document.createElement('img');
        right_wing.src = "images/general/characters_page/chevrons/pink/rightchevron.png";
        right_wing.className = "chevron-img";
        right_wing.onmouseenter = function f()
        {
            right_wing.src = "images/general/characters_page/chevrons/purple/rightchevron.png";
        }
        right_wing.onmouseleave = function f()
        {
            right_wing.src = "images/general/characters_page/chevrons/pink/rightchevron.png";
        }
        right_wing.onclick = function f()
        {
            randomImg();
        }

    document.getElementById('left_wing').appendChild(left_wing);
    document.getElementById('right_wing').appendChild(right_wing);

    randomImg();
}

function clearImg()
{
    container.innerHTML = "";
}

function randomImg()
{
    clearImg();

    // $('#IMG_handle').load('randomizer.php');//amazingly slow
    $.get('profile/randomizer.php');//amazingly faster

    var img = document.createElement('img');
        img.className = "true-center";
        img.src = 'profile/randomizer.php';
        img.style.height = "100%";//initially 346

    var loading = createLoader();

    container.appendChild(img);
    container.appendChild(loading);
    container.style.position = "relative";

    img.onload = function()
    {
        document.getElementById('small-loader-wrapper').className = "small-loaded";    
    };
}

//LOGGED IN
function update_profile_img()
{
    $.get('profile/character_small_portrait.php');//amazingly faster
    document.getElementById('index-profile-img').src = "profile/character_small_portrait.php";
}

function update_highest_affinity()
{
    var char = getHighestAffinity();
    var path = "images/game_images/sprites/square_portraits/";
    var extension = ".jpg";

    document.getElementById('highestAffinityIMG').src = path + char.path.toLowerCase() + extension;
    document.getElementById('highestAffinityTITLE').innerHTML = char.name;
    document.getElementById('highestAffinityDESCRIPTION').innerHTML = char.description;
    if(char.affinity != 0)
    {
        document.getElementById('highestAffinityPERCENTAGE').innerHTML = char.affinity + "%";
    }
}

function update_current_chapter(index, type)
{
    if(type == "currentIndex")//if we're on the index.php page
    {
        currentChapter = getCurrentChapter();

        var title = document.getElementById('title');
            title.innerHTML = currentChapter.title;//chapters[index];

        //current chapter image
        var chap_img = document.getElementById('chap_img');
            chap_img.src = currentChapter.image;//character_portraits_path + chapter_images[index] + ".png";
            
        //description
        var description = document.getElementById('description');
            description.innerHTML = currentChapter.description;//chapter_description[index];

        //button
        var button_container = document.getElementById('button_container_index');

            var left_wing = document.createElement('div');
                left_wing.className = "flex-panel";

            var play_episode_button = document.createElement('div');
                play_episode_button.id = currentChapter.number;//user.last_chapter_played;
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

pullVariablesFromDB();