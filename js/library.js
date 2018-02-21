/*
Contains fonctions that are used on many different pages
Written by Lightshadow

Copyright Dulcet Games 2018.

All rights reserved.

January 28, 2018
*/

Object.size = function(object)//returns the size of an object
{
    var size = 0, key;
    for (key in object)
    {
        if (object.hasOwnProperty(key)) size++;
    }
    return size;
};

//*****CHAPTERS*****
function getCurrentChapter()//returns the current chapter as an object
{
    var index = user.last_chapter_played;//current chapter == index
    const character_portraits_path = "images/general/chapter_images/";

    var chapterImage = character_portraits_path + chapter_images[index] + ".png";
    var chapterTitle = chapters[index];
    var chapterDescription = chapter_description[index];

    var currentChapter =
    {
        title: chapterTitle,
        description: chapterDescription,
        number: index,
        image: chapterImage,
    }

    return currentChapter;
}

function chapterSize(chapter)//returns the size of a chapter (HAS TO BE MANUALLY CORRECTED)
{
    if(chapter == 0)
    {
        return 88;
    }
    else if (chapter == 1)
    {
        return 230;
    }
    else if (chapter == 2)
    {
        return 300;
    }
}

//*****CHARACTERS*****
function getPersonnage(char)//returns the character from a sprite "char"
{
    var char_pointer;
    const total_sprites = 6;

    for(var i = 0; i < total_sprites; i++)
    {
        if(char == personnages.charaX[i])
        {
            char_pointer = tadashi;
            // alert("tadashi");
        }
        else if(char == personnages.karolina[i])
        {
            char_pointer = karolina;
            // alert("karolina");
        }
        else if(char == personnages.raquel[i])
        {
            char_pointer = raquel;
        }
        else if(char == personnages.alistair[i])
        {
            char_pointer = alistair;
        }
        else if(char == personnages.axel[i])
        {
            char_pointer = axel;
        }
        else if(char == personnages.tegan[i])
        {
            char_pointer = tegan;
        }
        else if(char == personnages.tyler[i])
        {
            char_pointer = tyler;
        }
        else if(char == personnages.neha[i])
        {
            char_pointer = neha;
        }
        else if(char == personnages.ellie[i])
        {
            char_pointer = ellie;
        }
        else if(char == personnages.claire[i])
        {
            char_pointer = claire;
        }
        else if(char == personnages.tadashi[i])
        {
            char_pointer = tadashi;
        }
        else if(char == personnages.l_arlington[i])
        {
            char_pointer = lady_arlington;
            // alert("karolina");
        }
        else
        {
            //char_pointer = tadashi;
        }
    }

    return char_pointer;
}

function getPersonnageFromName(name)//returns a character from a string "name"
{
    if(name == "alistair")
    {
        return alistair;
    }
    else if(name == "axel")
    {
        return axel;
    }
    else if(name == "claire")
    {
        return claire;
    }
    else if(name == "ellie")
    {
        return ellie;
    }
    else if(name == "karolina")
    {
        return karolina;
    }
    else if(name == "neha")
    {
        return neha;
    }
    else if(name == "raquel")
    {
        return raquel;
    }
    else if(name == "tadashi")
    {
        return tadashi;
    }
    else if(name == "tegan")
    {
        return tegan;
    }
    else if(name == "tyler")
    {
        return tyler;
    }
    else if(name == "ladya")
    {
        return lady_arlington;
    }
    else if(name == "Coach Davis")
    {
        return coach_davis;
    }
    else if(name == "Serena")
    {
        return serena;
    }
    else if(name == "ca")
    {
        return cecile;
    }
    else if(name == "Teacher 2")
    {
        return teacher_chapter_2;
    }
}

//*****AFFINITY*****
function browseAffinity(affinity)//returns the image for the affinity specified
{
    const base_path = "images/game_images/infinity_meter/states/";
    
    new_path = "";

    if(affinity <= 3)
    {
        new_path = "se-infinity-00-03.png";
    }
    else if(affinity <= 7)
    {
        new_path = "se-infinity-04-07.png";
    }
    else if(affinity <= 11)
    {
        new_path = "se-infinity-08-11.png";
    }
    else if(affinity <= 15)
    {
        new_path = "se-infinity-12-15.png";
    }
    else if(affinity <= 19)
    {
        new_path = "se-infinity-16-19.png";
    }
    else if(affinity <= 23)
    {
        new_path = "se-infinity-20-23.png";
    }
    else if(affinity <= 27)
    {
        new_path = "se-infinity-24-27.png";
    }
    else if(affinity <= 31)
    {
        new_path = "se-infinity-28-31.png";
    }
    else if(affinity <= 35)
    {
        new_path = "se-infinity-32-35.png";
    }
    else if(affinity <= 39)
    {
        new_path = "se-infinity-36-39.png";
    }
    else if(affinity <= 43)
    {
        new_path = "se-infinity-40-43.png";
    }
    else if(affinity <= 47)
    {
        new_path = "se-infinity-44-47.png";
    }
    else if(affinity <= 51)
    {
        new_path = "se-infinity-48-51.png";
    }
    else if(affinity <= 55)
    {
        new_path = "se-infinity-52-55.png";
    }
    else if(affinity <= 59)
    {
        new_path = "se-infinity-56-59.png";
    }
    else if(affinity <= 63)
    {
        new_path = "se-infinity-60-63.png";
    }
    else if(affinity <= 67)
    {
        new_path = "se-infinity-64-67.png";
    }
    else if(affinity <= 71)
    {
        new_path = "se-infinity-68-71.png";
    }
    else if(affinity <= 75)
    {
        new_path = "se-infinity-72-75.png";
    }
    else if(affinity <= 79)
    {
        new_path = "se-infinity-76-79.png";
    }
    else if(affinity <= 83)
    {
        new_path = "se-infinity-80-83.png";
    }
    else if(affinity <= 87)
    {
        new_path = "se-infinity-84-87.png";
    }
    else if(affinity <= 91)
    {
        new_path = "se-infinity-88-91.png";
    }
    else if(affinity <= 95)
    {
        new_path = "se-infinity-92-95.png";
    }
    else if(affinity <= 100)
    {
        new_path = "se-infinity-96-100.png";
    }
    else
    {
        new_path = "se-infinity-96-100.png";1
        //there's a problem if it's more than 100
    }

    return base_path + new_path;
}

function getHighestAffinity()//returns the character with the highest affinity
{
    var char = alistair;
    var highestAffinity = 0;

    for(var i = 0; i < charList.length; i++)
    {
        var new_affinity = getPersonnageFromName(charList[i]).affinity;
        
        if(new_affinity > highestAffinity)
        {
            char = getPersonnageFromName(charList[i]);
            highestAffinity = new_affinity;
        }
    }

    if(highestAffinity == 0)
    {
        char = empty;
    }

    // alert(char.name + " @ " + new_affinity);

    return char;//char est le plus grand affinity
}

//*****OBJECTIVES*****
function findLatestObjective(objective_container)//returns the last time there was a new objective
{
    var x = -1;

    for(var i = 0; i < user.storyLocation; i++)
    {
        if(story[6][i] == -2)
        {
            x = i;
        }
    }

    if(story[13][x] != "null")//if there is a new objective in choice A
    {
        objective_container.innerHTML = story[13][x];
    }
    else
    {
        x = -1;
    }

    if(story[14][x] != "null")//if there is a new objective in choice B
    {
        objective_container.innerHTML += "<br>" + story[14][x];
    }

    if(story[15][x] != "null")//if there is a new objective in choice C
    {
        objective_container.innerHTML += "<br>" + story[15][x];
    }

    if(x == -1)
    {
        objective_container.innerHTML = "You have no objectives for now.";   
    }
}

/* à améliorer en fonction de l'histoire parcourue (seulement s'il est possible de faire 1-2-3-4-5-12-6-7-30-15-16-17) */
/* idéalement, on devrait regarder toutes les slides qui on été déjà visitées*/
function refreshObjectiveContainer()
{
    var objective_container = document.getElementById('objectiveContainer');
        objective_container.style.borderRadius = "10px";
        objective_container.style.marginBottom = "300px";
        objective_container.innerHTML = "";
    
    if(story[6][user.storyLocation] == -2)
    {
        if(story[13][user.storyLocation] != "null")//if there is a new objective in choice A
        {
            objective_container.innerHTML = story[13][user.storyLocation];
        }
        else
        {
            findLatestObjective(objective_container);//if there's nothing in choice A, then there is no new objective
        }
    
        if(story[14][user.storyLocation] != "null")//if there is a new objective in choice B
        {
            objective_container.innerHTML += "<br>" + story[14][user.storyLocation];
        }
    
        if(story[15][user.storyLocation] != "null")//if there is a new objective in choice C
        {
            objective_container.innerHTML += "<br>" + story[15][user.storyLocation];
        }
    }
    else
    {
        findLatestObjective(objective_container);
    }

    refreshProgressBar();

    //We need to show all characters as a round image
    objective_container.innerHTML += "<br>";
    
    var round_img_path = "images/game_images/sprites/round_portraits/";
    
    var char_container = document.createElement('div');//contains all 10 portraits
        char_container.id = "char_container";

    objective_container.appendChild(char_container);
    
    for(var i = 0; i < charList.length; i++)//on affiche tous les characters, et on mets un Event Listener pour quand on hover dessus
    {
        var character = document.createElement('div');
            character.className = "char-container";

        var char = getPersonnageFromName(charList[i]);
        var char_info_container = document.createElement('div');
            char_info_container.id = "char" + charList[i];
            char_info_container.className = "char_info_container char_info_container_invisible";
            char_info_container.innerHTML = "<b>My affinity with " + char.name + ": </b>" + char.affinity;
            char_info_container.innerHTML += "<br><br><b> Likes: </b>" + char.likes;
            char_info_container.innerHTML += "<br><br><b> Dislikes: </b>" + char.dislikes;

        var img = document.createElement('img');
            img.id = charList[i];
            img.className = "game_char_portraits";
            img.src = round_img_path + charList[i] + ".jpg";

            char_container.appendChild(character)
            character.appendChild(img);
            character.appendChild(char_info_container);

        img.onmouseover = function (){document.getElementById("char" + this.id).className = "char_info_container"};
        img.onmouseout = function(){document.getElementById("char" + this.id).className = "char_info_container char_info_container_invisible"};

        /*
        img.addEventListener("mouseout",
        function (e)
        {
            var char = getPersonnageFromName(x);
            
            // alert(char.name + "'s Affinity: " + char.affinity);

            char_info_container.innerHTML = "";

            char_info_container.className = "char_info_container_invisible";
        },
        true);*/
    }

    /*  pour pouvoir afficher le character qui est à l'écran
        var char_1 = getPersonnage(story[2][storyLocation]);
        var char_2 = getPersonnage(story[4][storyLocation]);


        if(char_1 + "" == "undefined")//if it is undefined, do nothing
        {
        }
        else
        {
            objective_container.innerHTML += "<br>Character on page: " + char_1.name;
        }
    */

}

function refreshProgressBar()
{
    var objective_container = document.getElementById('objectiveContainer');

    var logo = document.createElement('img');

        logo.id= "progress_bar_logo";
        logo.src = "images/favicon_outline.png";
        logo.style.width = "80px";
        logo.style.height = "80px";
        logo.style.marginTop = "-32px";
        logo.style.marginLeft = "-15px";

    var progressBarContainer = document.createElement('div');
        progressBarContainer.id = "progress_bar_container";

        var progressBar = document.createElement('div');
            progressBar.id = "progress_bar";
            progressBar.style.color = "white";

    objective_container.appendChild(progressBarContainer);
        progressBarContainer.appendChild(logo);
        progressBarContainer.appendChild(progressBar);
    
    var progress = user.storyLocation/chapterSize(user.last_chapter_played)*100;
    
    // progressBar.innerHTML = "";
    if(progress > 10)
    {
        progressBar.innerHTML = Math.round(progress) + "% <br>";
    }
    else
    {
        progressBar.innerHTML = "<br>";
    }
    // progressBar.innerHTML = /*"Chapter progress: " +*/ Math.round(progress * 10) / 10 + "% <br>";//pour avoir 1 décimale

    progressBar.style.width = progress + "%";
}

//*****DESIGN*****
function createFlexPanel()//returns a flex panel, to be used as a buffer
{
    var flexPanel = document.createElement('div');
        flexPanel.className = "flex-panel";

    return flexPanel;
}

function createLoader()//returns a loader as an HTMLElement
{
    var loaderWrapper = document.createElement('div');
        loaderWrapper.id = "small-loader-wrapper";
    
    var loader = document.createElement('div');
        loader.id = "small-loader";
    
    var img_loader = document.createElement('img');
        img_loader.id = "small-img_loader";
        img_loader.src="logo.png";
    
    loaderWrapper.appendChild(loader);
    loaderWrapper.appendChild(img_loader);

    return loaderWrapper;

    // <div id="loader-wrapper">
	// 	<div id="loader">
	// 	</div>

	// 	<img id="img_loader" src="logo.png"/>
		
	// 	<div class="loader-section section-left"></div>
	// 	<div class="loader-section section-right"></div>
    // </div>
}

//*****GAME ENGINE UTILITIES*****
function loadAllImages(loader)//unsuccessfully tries to load all the images prior to the start of the game
{
    // var loader = document.createElement('div')
    // loader.style.visibility = "hidden";
    // loader.style.display = "none";

    loader.src = locations.blackScreen;
    loader.src = locations.cafeteria;
    loader.src = locations.cafeteriaLounge;
    loader.src = locations.cafeteriaOutside;
    loader.src = locations.class1;
    loader.src = locations.class2;
    loader.src = locations.dorm;
    loader.src = locations.dormBathroom;
    loader.src = locations.dormHall;
    loader.src = locations.entrance;
    loader.src = locations.garden;
    loader.src = locations.gym;
    loader.src = locations.hall1;
    loader.src = locations.hall2;

    // var parent = document.getElementById('footer');
    //     parent.appendChild(loader);
    
    //Il va falloir loader toutes les images une après l'autre
}

function getLocationString(index)//returns the physical location (STRING) of the user, given an image(INT)
{
    switch(index)
    {
        case 0:
            return locations.blackScreen;
        case 1:
            return locations.entrance;
        case 2:
            return locations.hall1;
        case 3:
            return locations.class1;
        case 4:
            return locations.class2;
        case 5:
            return locations.hall2;
        case 6:
            return locations.cafeteria;
        case 7:
            return locations.cafeteriaLounge;
        case 8:
            return locations.cafeteriaOutside;
        case 9:
            return locations.garden;
        case 10:
            return locations.gym;
        case 11:
            return locations.dormHall;
        case 12:
            return locations.dorm;
        case 13:
            return locations.dormBathroom;
        default:
            return("error");
    }
}

function getLocationIndex(string)//returns the physical location (INT) of the user, given an image(STRING)
{
    var index = 0;
    
    // alert(Object.size(locations));
    
    for(var i = 0; i < Object.size(locations); i++)
    {
        // alert("string:" + string + " - calculated: " + getLocationString(i));
        if(string == getLocationString(i))
        {
            // alert("int:" + i + " - string: " + getLocationString(i));
            index = i;
        }
    }

    // alert(index);
    return index;
}

function highlight(element, highlightedColor)
{
    element.style.backgroundColor = highlightedColor;
}

function dehighlight(element, baseColor)//we should call this function lowlight to make it a thing
{
    element.style.backgroundColor = baseColor;
}

$(document).keyup(function(e)//when we press a key
{
    if(e.keyCode == 27)//escape key maps to keycode `27`
    {
        try
        {
            clearPopup();
        }
        catch(e)
        {

        }
    }
});

function clearPopup()
{
    var popup_container = document.getElementById("popup-container");
            popup_container.className = "invisible";
}

function showPopup(img_path)
{
    var imgElement = document.getElementById("popup-img");
        imgElement.src = img_path;
    
    var popup_container = document.getElementById("popup-container");
        popup_container.className = "visible fullscreen";

    document.getElementById("top-right-x").onclick = function(){clearPopup()};

    //https://www.w3schools.com/howto/howto_css_modal_images.asp
}

// -----START DEBUGGING TOOLS-----
function refreshTestContainer()// affiche des données par rapport à la prev/current/next slide
{
    var container1 = document.getElementById('testContainer1');
        container1.style.position = "absolute";
        container1.style.left = "0px";
        container1.style.bottom = "50%";
        container1.style.backgroundColor = "#efeeea";
    
    var text = "";
    
    container1.innerHTML = "";

    //Previous location(
    /*text += "<b>Previous location (" + (user.storyLocation - 1) + ")</b><br>";
    text += "Story Text: " + story[main_text][user.storyLocation - 1] + "<br>";
    text += "Visited: " + story[17][user.storyLocation - 1] + "<br>";
    text += "Affinity Increase: " + story[16][user.storyLocation - 1] + "<br>";
    text += "Bubble 1: " + story[1][user.storyLocation - 1] + "<br>";
    text += "Character 1: " + story[2][user.storyLocation - 1] + "<br>";
    text += "Bubble 2: " + story[3][user.storyLocation - 1] + "<br>";
    text += "Character 2: " + story[4][user.storyLocation - 1] + "<br>";
    text += "Location: " + story[5][user.storyLocation - 1] + "<br>";
    text += "Link: " + story[special_option][user.storyLocation - 1] + "<br>";11
    text += "<br>";*/
    
    /*
    //Current Location
    text += "<b>Current location (" + user.storyLocation + ")</b><br>";
    text += "Story Text: " + story[main_text][user.storyLocation] + "<br>";
    text += "Point of Interest: " + story[POI][user.storyLocation] + "<br>";
    text += "Affinity Increase: " + story[16][user.storyLocation] + "<br>";
    text += "Bubble 1: " + story[1][user.storyLocation] + "<br>";
    text += "Character 1: " + story[2][user.storyLocation] + "<br>";
    text += "Bubble 2: " + story[3][user.storyLocation] + "<br>";
    text += "Character 2: " + story[4][user.storyLocation] + "<br>";
    text += "Location: " + story[5][user.storyLocation] + "<br>";
    text += "Link: " + story[special_option][user.storyLocation] + "<br>";
    text += "Choice A: " + story[choiceA_text][user.storyLocation] + "<br>";
    text += "Choice B: " + story[choiceB_text][user.storyLocation] + "<br>";
    text += "Choice C: " + story[choiceC_text][user.storyLocation] + "<br>";
    text += "<br>";*/
    
    /*
    //Next Location
    text += "<b>Next location (" + (parseInt(user.storyLocation) + 1) + ")</b><br>";
    text += "Story Text: " + story[main_text][parseInt(user.storyLocation) + 1] + "<br>";
    text += "Affinity Increase: " + story[16][parseInt(user.storyLocation) + 1] + "<br>";
    text +=  "Bubble 1: " + story[1][user.storyLocation + 1] + "<br>";
    text +=  "Character 1: " + story[2][user.storyLocation + 1] + "<br>";
    text +=  "Bubble 2: " + story[3][user.storyLocation + 1] + "<br>";
    text +=  "Character 2: " + story[4][user.storyLocation + 1] + "<br>";
    text +=  "Location: " + story[5][parseInt(user.storyLocation) + 1] + "<br>";
    text +=  "Link: " + story[special_option][parseInt(user.storyLocation) + 1] + "<br>";
    text += "<br>";*/

    container1.innerHTML = text;

    var input = document.createElement('input');
        input.style.width = "100px";
        input.id = "daInput";
        // input.onkeypress = function(e){}
        // input.onkeydown = function(e){alert("a")};

    container1.appendChild(input);

    input.onkeypress = function(e)
    {
        if(e.keyCode == 13)
        {
            // alert(user.storyLocation);
            user.storyLocation = input.value;
            refreshInterface();
            // alert(user.storyLocation);
        }
    };

    $('#daInput').focus();

    /*var container2 = document.getElementById('testContainer2');

    var index = 0;

    text = "";

    for (var i = 0; i < story[index].length; i++)
    {
        if(storyLocation == i)
        {
            //alert(story[index][i]);
            text += '<b>' + i + " - " + story[index][i] + "</b><br>";
        }
        else
        {
            text += i + " - " + story[index][i] + "<br>";
        }
    }

    container2.innerHTML = text;*/
}
// -----END DEBUGGING TOOLS-----