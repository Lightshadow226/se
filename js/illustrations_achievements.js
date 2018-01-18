/*

Create the Character Scroll for the Characterpage

*/

var lines_container = document.getElementById("lines_container");

var button_container = document.getElementById("button_container_horizontal");

    button_container.style.display = "flex";
    button_container.style.marginBottom= "20px";

const illustration_path = "images/game_images/illustrations/";
const achievement_path = "images/game_images/achievements/";

const existing_chapters = 4;
const existing_achievements = 10;

//le type, 0 = illustrations, 1 = achievements
const illustrations = 0;
const achievements = 1;    

//est utilisé pour le nom qui est affiché en gros, et pour repérer le path des images
var illustrations_list = 
[
    "chapter0/illustration1.jpg", // chapter 0
    "chapter0/illustration2.jpg",
    "chapter0/illustration3.jpg",
    "chapter0/illustration4.jpg",

    "chapter1/illustration1.jpg", // chapter 1
    "chapter1/illustration2.jpg",
    "chapter1/illustration3.jpg",
    "chapter1/illustration4.jpg",
    
    "chapter2/illustration1.jpg", // chapter 2
    "chapter2/illustration2.jpg",
    "chapter2/illustration3.jpg",
    "chapter2/illustration4.jpg",
    
    "chapter3/illustration1.jpg", // chapter 3
    "chapter3/illustration2.jpg",
    "chapter3/illustration3.jpg",
    "chapter3/illustration4.jpg",
    
    "chapter4/illustration1.jpg", // chapter 4
    "chapter4/illustration2.jpg",
    "chapter4/illustration3.jpg",
    "chapter4/illustration4.jpg",
];

var achievements_list = 
[
    "Alignment: True Neutral - Locked",
    "Alignment: True Neutral - Unlocked",
    "Bookworm - Locked",
    "Bookworm - Unocked",
    "Newbie Attitude - Locked",//5
    "Newbie Attitude - Unlocked",
    "Party Animal - Locked",
    "Party Animal - Unlocked",
    "Testing",
    "Testing #2",//10
];

var line_class_name = "";

function create_interface()
{
    var left_wing = document.createElement('div');

        left_wing.className = "wing";

    var illustrations_button = document.createElement('div');

        illustrations_button.className = "button yellow_button";
        illustrations_button.style.margin = "10px";
        illustrations_button.innerHTML = "Illustrations";

        illustrations_button.addEventListener("click", function(e){refresh_lines(illustrations);})

    var middle_wing = document.createElement('div');
        
        middle_wing.className = "middle_wing";

    var achievement_button = document.createElement('div');

        achievement_button.className = "button yellow_button";
        achievement_button.style.margin = "10px";
        achievement_button.innerHTML = "Achievements";
        
        achievement_button.addEventListener("click", function(e){refresh_lines(achievements);})

    var right_wing = document.createElement('div');
    
        right_wing.className = "wing";

    button_container.appendChild(left_wing);
    button_container.appendChild(illustrations_button);
    button_container.appendChild(middle_wing);
    button_container.appendChild(achievement_button);
    button_container.appendChild(right_wing);

    refresh_lines(illustrations);//on affiche les illustrations par défaut
}

function refresh_lines(type)//refresh the lines that are displayed on screen
{
    lines_container.innerHTML = "";//clear it first
    
    var lines_to_create;//number

    if(type == 0)//if we're making illustrations
    {
        line_class_name = "illustrations";
        lines_to_create = existing_chapters;
        document.getElementById("illu_achiev_id").innerHTML = "Illustrations";
    }
    else if(type == 1)//if we're making achivements
    {
        line_class_name = "achievements";
        lines_to_create = existing_achievements;
        document.getElementById("illu_achiev_id").innerHTML = "Achievements";
    }

    for(var i = 0; i < lines_to_create; i++)
    {
        if(type == 0)//illustrations
        {
            create_illustration_line(i);
        }
        else//achievements
        {
            create_achievement_line(i);
        }
    }
}

function create_illustration_line(index)
{
    var line = document.createElement('div');

        line.className = "line_illustrations";

    var chapterID = document.createElement('h5');

        chapterID.innerHTML = "CHAPTER " + index;
        chapterID.style.padding = "10px";
        chapterID.style.backgroundColor = "#F69D99";
        chapterID.style.color = "white";
        chapterID.style.fontWeight = "300";

    var illustrations_container = document.createElement('div');

        illustrations_container.id = "illustrations_container";

    for(var i = 4*index; i < index*4 + 4; i++)//we create 4 images for each line
    {
        var illustration_div = document.createElement('div');
        
            illustration_div.className = "illustration_div";

        var illustration = document.createElement('img');
        
            illustration.id = "illustration" + i;
            illustration.src = "" + illustration_path + illustrations_list[i];
            illustration.className = "illustration";

        illustrations_container.appendChild(illustration_div);
            illustration_div.appendChild(illustration);
    }

    lines_container.appendChild(line);
        line.appendChild(chapterID);
        line.appendChild(illustrations_container);
}

function create_achievement_line(index)
{
    var line = document.createElement('div');

        line.className = "line_achievement";
        
    var line_left_content = document.createElement('div');

        line_left_content.className = "line_left_content";

    var achievement_img = document.createElement('img');

        // achievement_img.src = character_portraits_path + characters[index] + ".png";
        achievement_img.src = achievement_path + "achievement" + index + ".png";
        achievement_img.className = "achievement_img";

    var line_middle_content = document.createElement('div');

        line_middle_content.className = "line_illustration_middle_content";

        var achievement_desc = document.createElement('div');

            var desc_header = '<h4 class="" style="text-transform: uppercase; color: #EE4C5E">' + achievements_list[index] + '</h4>';
        //     //var desc_fullname = '<p class="chara_list"><b>Full name: </b>' + fullname[index] + '</p>';
        //     var desc_birthday = '<p class="chara_list"><b>Birthday: </b>' + birthday[index] + '</p>';
        //     var desc_likes = '<p class="chara_list"><b>Likes: </b>' + likes[index] + '</p>';
        //     var desc_dislikes = '<p class="chara_list"><b>Dislikes: </b>' + dislikes[index] + '</p><br>';
        //     var desc_description = '<p class="chara_long_desc">' + fulldescription[index] + '</p>';

        achievement_desc.innerHTML = desc_header;// + /*desc_fullname + */desc_birthday + desc_likes + desc_dislikes + desc_description;

    lines_container.appendChild(line);
        line.appendChild(line_left_content);
            line_left_content.appendChild(achievement_img);
        line.appendChild(line_middle_content);
            line_middle_content.appendChild(achievement_desc);
    
    // alert(line.clientHeight);
}

create_interface();