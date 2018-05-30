/*

Create the Character Scroll for the Characterpage

*/

var lines_container = document.getElementById("achievements");

const locked_achievement_path = "_new_images_folder/game/achievements/locked/";
const unlocked_achievement_path = "_new_images_folder/game/achievements/unlocked/";

const lockImg = "_new_images_folder/game/achievements/lock.jpg";
const unlockImg = "_new_images_folder/game/achievements/unlock.jpg";

var unlocked_achievements_list = 
[
    "Alignment: True Neutral",
    "Bookworm",
    "Newbie Attitude",
    "Party Animal"
];

var unlocked_achievements_list_description = 
[
    "Do not take either Tadashi or Axel’s side during their fight in Chapter 2 (they were both obnoxious anyway.)",
    "End your first day at Arlington studying with Tadashi and Alistair instead of having fun with the other students.",
    "Stand up to Karolina in the dorm bathroom in Chapter 2 and have her comment on that fiery attitude of yours.",
    "Go dance with Axel and Raquel at the dorm party in Chapter 2!",
];

var locked_achievements_list = 
[
    "Alignment: True Neutral",
    "Bookworm",
    "Newbie Attitude",
    "Party Animal"
];

var locked_achievements_list_description = 
[
    "???",
    "???",
    "???",
    "???"
];

function createAchievements()
{
    var lines_to_create = locked_achievements_list.length;
    
    for(var i = 0; i < lines_to_create; i++)
    {
        create_achievement_line(i);
    }

    refresh_lines(0);
}

function refresh_lines(type)//refresh the lines that are displayed on screen
{
    if(type == 0)//if we're making illustrations
    {
        //activate illustrations
        document.getElementById("illustrations").style.display = "block";
        document.getElementById("illustrations-button").className = "button pink_button";
        
        //deactivate achievements
        document.getElementById("achievements").style.display = "none";
        document.getElementById("achievements-button").className = "button yellow_button";
    }
    else if(type == 1)//if we're making achivements
    {
        //deactivate illustrations
        document.getElementById("illustrations").style.display = "none";
        document.getElementById("illustrations-button").className = "button yellow_button";
        
        //activate achievements
        document.getElementById("achievements").style.display = "block";
        document.getElementById("achievements-button").className = "button pink_button";
    }
}

function create_achievement_line(index)
{
    var desc_header = document.createElement('h2');
    var desc_description = document.createElement('p');
    
    var line = document.createElement('div');
        line.className = "line_achievement";

    var achievement_img = document.createElement('img');
        achievement_img.className = "achievement_img";
        
    var line_description = document.createElement('div');
        line_description.className = "flex-panel";
        line_description.style.padding = "10px";

    var lock_img = document.createElement('img');
        lock_img.className = "lock_img";
    
    // console.log("\nStarting Line " + index + "\n");

    if(achievements[index])//if unlocked
    {
        // console.log(index + ": you have unlocked achievement \"" + unlocked_achievements_list[index] + "\"");
        
        desc_header.innerHTML = unlocked_achievements_list[index];
        desc_description.innerHTML = unlocked_achievements_list_description[index];

        achievement_img.src = unlocked_achievement_path + "achievement" + index + ".png";
        lock_img.src = unlockImg;
    }
    else//if locked
    {
        // console.log(index + ": you did not unlock achievement \"" + unlocked_achievements_list[index] + "\"");
        
        desc_header.innerHTML = locked_achievements_list[index];
        desc_description.innerHTML = locked_achievements_list_description[index];
        
        achievement_img.src = locked_achievement_path + "achievement" + index + ".png";
        lock_img.src = lockImg;
    }
    
    lines_container.appendChild(line);
        line.appendChild(achievement_img);
        line.appendChild(line_description);
            line_description.appendChild(desc_header);
            line_description.appendChild(desc_description);
        line.appendChild(lock_img);
}

var chapterIllustrations = 
[
    0,
    4,//chapter 1
    2,//chapter 2
]

var cardColors = ["yellow", "purple", "pink"];

function createIllustrations()
{
    var illustrationContainer = document.getElementById("illustrations");

    //create all chapter lines
    for(var i = 1; i < chapterIllustrations.length; i++)//start at chapter 1 (which is going to be purple)
    {
        var currentColor = cardColors[i % 3];

        var line = document.createElement('div');
            line.id = "chapter" + i;
            line.className = "x-card-" + currentColor;

            var headerContainer = document.createElement('div')
                headerContainer.className = "x-card-" + currentColor + "-header";

                var header = document.createElement('h4');
                    header.innerHTML = "Chapter " + i;

        var imageContainer = document.createElement('div');
        imageContainer.className = "x-card-content flex-container";

        illustrationContainer.appendChild(line);
            line.appendChild(headerContainer);
                headerContainer.appendChild(header);
            line.appendChild(imageContainer);

        //for every chapter, create all illustrations
        for(var j = 0; j < chapterIllustrations[i]; j++)
        {
            illustrationNumber = j + 1;
            var path = "_new_images_folder/game/illustrations/chapter" + i + "/illustration" + illustrationNumber + "/illustration" + illustrationNumber + ".php";
            var lockedPath = "_new_images_folder/game/illustrations/locked_horizontal.jpg";
            
            // console.log("illustration[" + i + "][" + j + "] = " + illustrations[i][j]);

            var imageDiv = document.createElement('div');
                imageDiv.id = "imageDiv" + i + "-" + j;
                imageDiv.className = "card-middle-content";
                imageDiv.style.position = "relative";
                imageDiv.style.minHeight= "150px";

                var image = document.createElement('img');
                    image.id = i + "-" + j;
                    image.className = "x-card-img-" + currentColor;
                    
                    if(illustrations[i][j])
                    {
                        image.src = path;
                    }
                    else
                    {
                        image.src = lockedPath;
                    }

                    image.addEventListener('click', function()
                    {
                        var ID = this.id;
                        showPopup(this.src);
                    }, false);

                var loader = documentCreateLoader(i + "-" + j, image);
                    
            imageContainer.appendChild(imageDiv);
                imageDiv.appendChild(image);
                imageDiv.appendChild(loader);
        }

        for(var j = chapterIllustrations[i]; j < 4; j++)
        {
            var imageDiv = document.createElement('div');
                imageDiv.className = "card-middle-content";
                imageDiv.style.position = "relative";
                imageDiv.style.minHeight= "150px";
                
            imageContainer.appendChild(imageDiv);
        }
    }
}

loadIllustrationsAchievements();

playingTheGame = false;

console.log("Creating Achievements...\n");
createAchievements();

console.log("Creating Illustrations...\n");
createIllustrations();