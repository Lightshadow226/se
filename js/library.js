/*
Contains fonctions that are used on multiple pages
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

Element.prototype.remove = function()//get element by id
{
    this.parentElement.removeChild(this);
}

NodeList.prototype.remove = HTMLCollection.prototype.remove = function()//get element by class name
{
    for(var i = this.length - 1; i >= 0; i--)
    {
        if(this[i] && this[i].parentElement)
        {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

//"prefix" is the the prefix of the id: say "category3", the prefix would be "category" and the function would return 3
function getNumber(element, prefix)
{
    var id = element.id;

    return(id.substr(id.length - (id.length - (prefix).length)));
}

//*****PURPLE GAME BAR*****
function updateGameBar()
{
    // pullVariablesFromDB();

    document.getElementById('barEpisode').innerHTML = getCurrentChapter().title;
	
	//TODO: ASYNC PROBLEM AGAIN: solution found at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
	document.getElementById('barAffinity').innerHTML = getHighestAffinity().name;
	
	document.getElementById('barMoney').innerHTML = "∞";
	
	document.getElementById('barEnergy').innerHTML = "∞";
    
    document.getElementById('barReplays').innerHTML = "∞";
}

//*****CHAPTERS*****
function getCurrentChapter()//returns the current chapter as an object
{
    var index = user.lastChapterPlayed;//current chapter == index
    const character_portraits_path = "images/general/chapter_images/";

    //declared in variables.js
    var chapterTitle = chapters[index];
    var chapterDescription = chapter_description[index];
    var chapterImage = character_portraits_path + chapter_images[index] + ".png";

    var currentChapter =
    {
        title: chapterTitle,
        description: chapterDescription,
        image: chapterImage,
        number: index,
    }

    return currentChapter;
}

function chapterSize(chapter)//returns the size of a chapter (HAS TO BE MANUALLY CORRECTED)
{
    try
    {
        return story[0].length;//if the story is appended (like in most cases)
    }
    catch(e)//if this is the game.php file (where individual chapters are not appended)
    {
        if(chapter == 0)
        {
            return 109;
        }
        else if (chapter == 1)
        {
            return 285;
        }
        else if (chapter == 2)
        {
            return 837;
        }
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
            char_pointer = serena;
        }
        if(char == personnages.charaY[i])
        {
            char_pointer = cecile;
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
        }
        else if(char == personnages.teacher[i])
        {
            char_pointer = teacher;
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
    else if(name == "serena")
    {
        return serena;
    }
    else if(name == "ca")
    {
        return cecile;
    }
    else if(name == "Mrs. Rodriguez")
    {
        return teacher;
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
        var new_char = getPersonnageFromName(charList[i]);
        var new_affinity = new_char.affinity;
        
        // alert(new_char.name + ": " + new_affinity);
        
        if(parseInt(new_affinity) > parseInt(highestAffinity))
        {
            char = new_char;
            highestAffinity = new_affinity;
            
            // alert("highest affinity: " + highestAffinity + " (" + char.name + ")");
        }
    }

    if(highestAffinity == 0)
    {
        char = empty;
    }

    return char;//char est le plus grand affinity
}

//*****OBJECTIVES*****
function refreshBottomGameContainer()
{
    hideBottomGameContainer(false);

    refreshObjectiveContainer();

    refreshProgressBar();

    //We need to show all characters as a round image
    refreshCharacters();
}

function hideBottomGameContainer(hide)
{
    if(hide)//if we want it hidden
    {
        document.getElementById('opcContainer').style.display = "none";
    }
    else//if we want it visble
    {
        document.getElementById('opcContainer').style.display = "block";
    }
}

/* à améliorer en fonction de l'histoire parcourue (seulement s'il est possible de faire 1-2-3-4-5-12-6-7-30-15-16-17) */
/* idéalement, on devrait regarder toutes les slides qui on été déjà visitées*/
function refreshObjectiveContainer()
{
    var objective_container = document.getElementById('objectiveContainer');

    var newObjectives = new Array();
    var completedObjectives = new Array();
    
    //1. cycle through all slides
    for(var i = 0; i < story[0].length; i++)
    {
        // console.log("Slide " + i + " is visited: " + story[isVisited][i] + "\n");

        if(story[isVisited][i])
        {
            //2. if slide was visited, did it have a new objective?
            
            if(story[special_option][i] == -8)//if there's a new objective
            {
                // console.log("(Slide " + i + ") New Objective: " + story[new_objective_pointer][i]);
                newObjectives.push(story[new_objective_pointer][i]);
            }
        
            //3. if slide was visited, did it have a completed objective?
            
            else if(story[special_option][i] == -9)//if there's a completed objective
            {
                var relevant_slide = story[completed_objective_pointer][i];
                // console.log("(Slide " + i + ") Objective Completed: " + story[new_objective_pointer][relevant_slide] + " \n -> Points to slide " + relevant_slide);

                completedObjectives.push(story[new_objective_pointer][relevant_slide]);
            }
        }
    }

    var netObjectives = new Array();

    for(var i = 0; i < newObjectives.length; i++)
    {
        var isNew = true;

        // console.log("testing for: \"" + newObjectives[i] + "\"")
        
        for(var j = 0; j < completedObjectives.length; j++)
        {
            if(newObjectives[i] == completedObjectives[j])
            {
                isNew = false;
            }
        }

        if(isNew)
        {
            netObjectives.push(newObjectives[i]);
        }
    }

    //4. display the sum of all net new objectives
    // console.log(netObjectives.length +" Final Results: \n");

    if(netObjectives.length == 0)//if there are no objectives
    {
        objective_container.innerHTML = "You have no objectives for now.";
        // console.log("You have no objectives for now.");
    }
    else
    {
        objective_container.innerHTML = "";

        for(var i = 0; i < netObjectives.length; i++)
        {
            // console.log(netObjectives[i] + "\n");
            objective_container.innerHTML += (netObjectives[i] + "<br>");
        }
    }
}

function refreshProgressBar()
{
    var progressBarContainer = document.getElementById('progressBarContainer');

    var logo = document.getElementById('progress_bar_logo');
        logo.src = "images/favicon_outline.png";

    var progressBar = document.getElementById('progress_bar');
    
    var progress = user.storyLocation/chapterSize(user.lastChapterPlayed)*100;
    // console.log(progress);

    if(progress > 10 && progress < 100)
    {
        progressBar.innerHTML = Math.round(progress) + "% <br>";
        progressBar.style.color = "white";
    }
    else
    {
        progressBar.innerHTML = "<br>";
    }
    // progressBar.innerHTML = /*"Chapter progress: " +*/ Math.round(progress * 10) / 10 + "% <br>";//pour avoir 1 décimale

    if(progress > 100)
    {
        progressBar.innerHTML = "100% Complete <br>";
        progressBar.style.color = "white";
        progressBar.style.width = "calc(100% - 10px)";
    }
    else
    {
        progressBar.style.width = "calc(" + progress + "% - 10px)";
    }
}

function refreshCharacters()
{
    var round_img_path = "images/game_images/sprites/round_portraits/";
    
    var char_container = document.getElementById('char_container');//contains all 10 portraits
        char_container.innerHTML = "";

    for(var i = 0; i < charList.length; i++)//on affiche tous les characters, et on mets un Event Listener pour quand on hover dessus
    {
        var character = document.createElement('span');
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

            char_container.appendChild(character);
            character.appendChild(img);
            character.appendChild(char_info_container);

        img.onmouseover = function (){document.getElementById("char" + this.id).className = "char_info_container"};
        img.onmouseout = function(){document.getElementById("char" + this.id).className = "char_info_container char_info_container_invisible"};
    }
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
}

function documentCreateLoader(id, loadingElement)//returns a loader as an HTMLElement
{
    var loaderWrapper = document.createElement('div');
        loaderWrapper.id = "small-loader-wrapper" + id;
    
    var loader = document.createElement('div');
        loader.id = "small-loader";
    
    var img_loader = document.createElement('img');
        img_loader.id = "small-img_loader";
        img_loader.src="logo.png";
    
    loaderWrapper.appendChild(loader);
    loaderWrapper.appendChild(img_loader);

    loadingElement.addEventListener('load', function()
    {
        var ID = this.id;
        var loaderID = 'small-loader-wrapper' + ID;
        // loadingElement.style.visibility = "visible";
        loadingElement.style.display = "block";
        // var containerID = "imageDiv" + ID;

        document.getElementById(loaderID).remove();
        // document.getElementById(loaderID).className = "small-loaded";
        // document.getElementById(containerID).removeChild(document.getElementById(loaderID));
    }, false);

    return loaderWrapper;
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
        popup_container.appendChild(documentCreateLoader("popup-img", imgElement));

    document.getElementById("top-right-x").onclick = function(){clearPopup()};

    //https://www.w3schools.com/howto/howto_css_modal_images.asp
}

function makePopup(message)
{
    var parent = document.getElementById('popupHandler');
        parent.style.display = "block";

    var popupContainer = document.createElement('div');
        popupContainer.id = "popupContainer";

        var popup = document.createElement('div');
            popup.id = "popup";
            popup.innerHTML = message;

        var okButton = document.createElement('div');
            okButton.id = "okButton";
            okButton.innerHTML = "OK";
            okButton.className = "button pink_button";
            okButton.onclick = function(){deletePopup()};

    parent.appendChild(popupContainer)
        popupContainer.appendChild(popup);
        popupContainer.appendChild(okButton);
}

function deletePopup()
{
    document.getElementById('popupHandler').style.display= "none";
}

//this function should be move to chapter0.php or.js
function toggle_pronouns(clicked, one, two)
{
    clicked.classList.toggle("pronoun-button-selected");
        one.classList.remove("pronoun-button-selected");
        two.classList.remove("pronoun-button-selected")

    if(clicked.className.includes("pronoun-button-selected"))
    {
        // alert (clicked.className);
        return clicked.innerHTML;
    }
    else
    {
        return "null";
    }
}

function wipeCurrentChapter()
{
    loadIsVisited(user.lastChapterPlayed);

    var chapterSize = story[0].length;

    for(var j = 0; j < chapterSize; j++)//for every slide
    {
        if(story[isVisited][j])//if the slide was visited
        {
            //Right infinity meter
            if(story[CHARACTER1][j] != "null" && story[infinityConsequence1][j] != 0)//if there is a character 1 in this slide and there is an infinity consequence
            {
                var relevant_char = getPersonnage(story[CHARACTER1][j]);
                    relevant_char.affinity = Number(relevant_char.affinity);
                    relevant_char.affinity -= Number(story[infinityConsequence1][j]);
                
                console.log("Chapter " + user.lastChapterPlayed + ", Slide " + j + ": " + relevant_char.name + " was reverted to " + relevant_char.affinity + "\n");
            }

            //Left infinity meter
            if(story[CHARACTER2][j] != "null" && story[infinityConsequence2][j] != 0)//if there is a character 2 in this slide
            {
                
                var relevant_char = getPersonnage(story[CHARACTER2][j]);
                    relevant_char.affinity = Number(relevant_char.affinity);
                    relevant_char.affinity -= Number(story[infinityConsequence2][j]);//on doit s'assurer que la valeur est un nombre, parce que sinon, parfois, ça fait juste carrément rajouter un zéro
                
                console.log("Chapter " + user.lastChapterPlayed + ", Slide " + j + ": " + relevant_char.name + " was reverted to " + relevant_char.affinity + "\n");
            }
        }

        // STEP 5: then, wipe isVisited
        story[isVisited][j] = false;
    }

    // STEP 6: start the chapter fresh, at slide 0
    user.storyLocation = 0;

    // STEP 7: save all the variables to the database
    saveIsVisited();
    pushVariablesToDB();

    console.log("Successfully wiped the memory for chapter " + user.lastChapterPlayed);
}

//used to get the reference to a chapter
//ex.: the button on the index page uses get_button_href(current chapter) to get a link to the current chapter in the button
function get_button_href(index)
{
    if(index <= user.lastChapterPlayed)//if we create a link to a past or current chapter
    {
        return "chapter" + index + ".php";
    }
    else//if we selected future chapters
    {
        return "#";//alert("Finish previous chapters first!");
    }
}

//*****Illustrations & Achievements*****
function verifyIllustration()
{
    toSave = "none";

    switch(user.lastChapterPlayed)
    {
        case 0://chapter 0
            // break;

        case 1://chapter 1
            if(visiting(222, 1)) toSave = "c1i1";
            if(visiting(232, 1)) toSave = "c1i2";
            if(visiting(243, 1)) toSave = "c1i3";
            if(visiting(259, 1)) toSave = "c1i4";

        case 2://chapter 2
            if(visiting(772, 2)) toSave = "c2i1";
            if(visiting(785, 2)) toSave = "c2i2";

        default:
            break;
    }

    if(toSave != "none")
    {
        console.log("New illustrationL: (" + toSave + ")");
        saveIllustrationAchievement(toSave, "illustrations");
    };
}

function verifyAchievement()
{
    toSave = "none";

    switch(user.lastChapterPlayed)
    {
        case 0://chapter 0
        
        case 1:
            if(visiting(258, 1)) toSave = "a1";
            break;
        
        case 2:
            if(visiting(350, 2)) toSave = "a2";
            if(visiting(566, 2)) toSave = "a0";
            if(visiting(783, 2)) toSave = "a3";
            break;

        default:
            break;
    }

    if(toSave != "none")
    {
        console.log("New achievement: (" + toSave + ")");

        makePopup("You have unlocked a new achievement! <br> <br> Go to your dorm and click on the book to check it out.");

        saveIllustrationAchievement(toSave, "achievements");
    };
}

function visiting(slide, chapter)
{
    if(chapter == user.lastChapterPlayed)//if we're currently playing the chapter, let's verify it
    {
        if(slide == user.storyLocation) return true;
    }
}

function saveIllustrationAchievement(code, type)
{
    var jsonData = {};
        jsonData['type'] = type;
        jsonData['column'] = code;

    // console.log("Saving I&A\n");
    // console.log(jsonData);

    $.ajax('dbtransfers/saveachievements.php',
    {
        type: 'POST',
        async: false,
        data: jsonData
    }).done(function (response)
    {
        if(response != '')
        {
            console.log("\'" + response + "\'");
        }
    });
}

// *********************************
// Database Manipulations
// *********************************

//used when saving specific variables to the database through saveVariables(1)
function getJSONPropertyValue(propertyName)
{
    // console.log("Received Property Name: " + propertyName);
    switch(propertyName)
    {
        //USERINFO table
        case x.username:    return user.username;
        case x.energy:      return user.energy;
        case x.money:       return user.money;

        //SCHOLARINFO table
        case x.scholarname: return user.scholarname;
        case x.dateofbirth: return user.dateofbirth;
        case x.gender:      return user.gender;
        case x.sex:         return user.sex;
        case x.department:  return user.department;
        case x.haircolor:   return user.haircolor;
        case x.hairstyle:   return user.hairstyle;
        case x.skincolor:   return user.skincolor;
        case x.eyecolor:    return user.eyecolor;
        case x.wigID:       return user.wigID;
        case x.shirtID:     return user.shirtID;
        case x.pantsID:     return user.pantsID;
        case x.socksID:     return user.socksID;
        case x.shoesID:     return user.shoesID;
        case x.accessoryID: return user.accessoryID;
        
        //STORY table
        case x.storyLocation: return user.storyLocation;
        case x.lastChapterPlayed: return user.lastChapterPlayed;
        case x.physicalLocationInt: return user.physicalLocationInt;

        //AFFINITY table (Main 10)
        case x.karolina:    return karolina.affinity;
        case x.ellie:       return ellie.affinity;
        case x.neha:        return neha.affinity;
        case x.raquel:      return raquel.affinity;
        case x.claire:      return claire.affinity;
        case x.alistair:    return alistair.affinity;
        case x.tadashi:     return tadashi.affinity;
        case x.tegan:       return tegan.affinity;
        case x.tyler:       return tyler.affinity;
        case x.axel:        return axel.affinity;

        //AFFINITY table (Other)
        case x.ladyArlington: return lady_arlington.affinity;
        case x.coachDavis:  return coach_davis.affinity;
        case x.serena:      return serena.affinity;
        case x.cecile:      return cecile.affinity;
        case x.teacher:     return teacher.affinity;

        default: return '2y10UZMJfJuMm4C5In91XP7uadWRn0ZP9so5oONeRoyVtIze1Psy';
    }
}

function pushVariablesToDB()
{
    //saving this way will only generate one query to the DB
    saveVariables(
        //USERINFO table
        x.username, x.energy, x.money,

        //SCHOLARINFO table
        x.department, x.scholarname, x.gender, x.sex, x.haircolor, x.hairstyle, x.skincolor, x.eyecolor, x.wigID, x.shirtID, x.pantsID, x.socksID, x.shoesID, x.accessoryID,

        //STORY table
        x.storyLocation, x.lastChapterPlayed, x.physicalLocationInt,

        //AFFINITY table (Main 10)
        x.karolina, x.ellie, x.neha, x.raquel, x.claire, x. alistair, x.tadashi, x.tegan, x.tyler, x.axel,

        //AFFINITY table (Other)
        x.ladyArlington, x.coachDavis, x.serena, x.cecile, x.teacherChapter2
    );

    resetOldUserValues();//the most recent copy of the DB is the most recently saved one
}

function saveVariables()
{
    var jsonData = {};
    var dataSize = arguments.length;
    var variablesSaved = 0;

    for(var i = 0; i < dataSize; i++)
    {
        // console.log("arguments[" + i + "] = " + arguments[i] + " \n-> yields " + getJSONPropertyName(arguments[i]))
        // console.log("parsing " + arguments[i]);
        var JSONpropertyName = arguments[i];
        var JSONpropertyValue = getJSONPropertyValue(arguments[i]);
        
        var toSave = hasToBeSaved(arguments[i]);
        
        if(toSave)//if the variable has to be saved
        {
            if(!JSONpropertyValue != '2y10UZMJfJuMm4C5In91XP7uadWRn0ZP9so5oONeRoyVtIze1Psy')//if the variable was found
            {
                jsonData[JSONpropertyName] = JSONpropertyValue;
                variablesSaved ++;
            }
            else
            {
                console.log("Something went wrong while trying to save \'" + arguments[i]) + "\'";
            }
        }
        else
        {
            // console.log("\'" + arguments[i] + "\' doesn't have to be saved");
        }
    }

    if(variablesSaved > 0)
    {
        var variablesString = "Variables";
        if(variablesSaved == 1) variablesString = "Variable";

        // console.log("Saving " + variablesSaved + " " + variablesString + ": ");

        $.ajax('dbtransfers/push_variables.php',
        {
            type: 'POST',
            async: false,
            data: jsonData,
        }).done(function (response)
        {
            console.log("\nSaved " + variablesString + ":");
            console.log(jsonData);
            console.log("\n");

            resetOldUserValues();
        });

        // .fail(function (response)
        // {
        //     if (data.responseCode) console.log(data.responseCode);

        //     saveVariables(arguments);
        // })
    }
}

function hasToBeSaved(propertyName)//returns either true or false (has to be saved or not)
{
    // console.log("To be saved? Property Name: " + propertyName);
    
    switch(propertyName)
    {
        //USERINFO table
        case x.username:
            if (user.username != oldUser.username) return true;
            break;

        case x.energy:
            if (user.energy != oldUser.energy) return true;
            break;

        case x.money:
            if (user.money != oldUser.money) return true;
            break;

        //SCHOLARINFO table
        case x.scholarname:
            if (user.scholarname != oldUser.scholarname) return true;
            break;

        case x.dateofbirth:
            if (user.dateofbirth != oldUser.dateofbirth) return true;
            break;
        
        case x.gender:
            if (user.gender != oldUser.gender) return true;
            break;

        case x.sex:
            if (user.sex != oldUser.sex) return true;
            break;

        case x.department:
            if (user.department != oldUser.department) return true;
            break;

        case x.haircolor:
            if (user.haircolor != oldUser.haircolor) return true;
            break;

        case x.hairstyle:
            if (user.hairstyle != oldUser.hairstyle) return true;
            break;

        case x.skincolor:
            if (user.skincolor != oldUser.skincolor) return true;
            break;

        case x.eyecolor:
            if (user.eyecolor != oldUser.eyecolor) return true;
            break;

        case x.wigID:
            if (user.wigID != oldUser.wigID) return true;
            break;
            
        case x.shirtID:
            if (user.shirtID != oldUser.shirtID) return true;
            break;

        case x.pantsID:
            if (user.pantsID != oldUser.pantsID) return true;
            break;

        case x.socksID:
            if (user.socksID != oldUser.socksID) return true;
            break;

        case x.shoesID:
            if (user.shoesID != oldUser.shoesID) return true;
            break;

        case x.accessoryID:
            if (user.accessoryID != oldUser.accessoryID) return true;
            break;

        //STORY table
        case x.storyLocation:
            if (user.storyLocation != oldUser.storyLocation) return true;
            break;

        case x.lastChapterPlayed:
            if (user.lastChapterPlayed != oldUser.lastChapterPlayed) return true;
            break;

        case x.physicalLocationInt:
            if (user.physicalLocationInt != oldUser.physicalLocationInt) return true;
            break;

        //AFFINITY table (Main 10)
        case x.karolina:
            if (karolina.affinity != oldUser.karolina) return true;
            break;

        case x.ellie:
            if (ellie.affinity != oldUser.ellie) return true;
            break;

        case x.neha:
            if (neha.affinity != oldUser.neha) return true;
            break;

        case x.raquel:
            if (raquel.affinity != oldUser.raquel) return true;
            break;

        case x.claire:
            if (claire.affinity != oldUser.claire) return true;
            break;

        case x.alistair:
            if (alistair.affinity != oldUser.alistair) return true;
            break;

        case x.tadashi:
            if (tadashi.affinity != oldUser.tadashi) return true;
            break;

        case x.tegan:
            if (tegan.affinity != oldUser.tegan) return true;
            break;

        case x.tyler:
            if (tyler.affinity != oldUser.tyler) return true;
            break;

        case x.axel:
            if (axel.affinity != oldUser.axel) return true;
            break;

        //AFFINITY table (Other)
        case x.ladyArlington:
            if (lady_arlington.affinity != oldUser.lady_arlington) return true;
            break;

        case x.coachDavis:
            if (coach_davis.affinity != oldUser.coach_davis) return true;
            break;

        case x.serena:
            if (serena.affinity != oldUser.serena) return true;
            break;

        case x.cecile:
            // console.log("oldUser: " + oldUser.cecile);
            // console.log("User: " + user.cecile);
            // console.log("Cecile: " + cecile.affinity);
            if (cecile.affinity != oldUser.cecile) return true;
            break;
        
        case x.teacherChapter2:
            if (teacher.affinity != oldUser.teacher) return true;
            break;

        default:
            return false;
            break;
    }

    return false;
}

// -----START DEBUGGING TOOLS-----
function refreshTestContainer()// affiche des données par rapport à la prev/current/next slide
{
    // var daInput = document.getElementById('daInput');
    
    // daInput.onkeypress = function(e)
    // {
    //     if(e.keyCode == 13)//when we press "enter"
    //     {
    //         if(daInput.value) {user.storyLocation = daInput.value}
    //         daInput.value = "";
    //         saveIsVisited();
    //         pushVariablesToDB();
    //         HideForms();
    //         refreshInterface();
    //     }
    // };

    // $('#daInput').focus();
    // daInput.placeholder = user.storyLocation;
    
    var slideCounter = document.getElementById('slideCounter');
        slideCounter.innerHTML = user.storyLocation;

    var text = "";
    
    //Previous location(
    /*text += "<b>Previous location (" + (user.storyLocation - 1) + ")</b>\n";
    text += "Story Text: " + story[main_text][user.storyLocation - 1] + "\n";
    text += "Visited: " + story[17][user.storyLocation - 1] + "\n";
    text += "Affinity Increase: " + story[16][user.storyLocation - 1] + "\n";
    text += "Bubble 1: " + story[1][user.storyLocation - 1] + "\n";
    text += "Character 1: " + story[2][user.storyLocation - 1] + "\n";
    text += "Bubble 2: " + story[3][user.storyLocation - 1] + "\n";
    text += "Character 2: " + story[4][user.storyLocation - 1] + "\n";
    text += "Location: " + story[5][user.storyLocation - 1] + "\n";
    text += "Link: " + story[special_option][user.storyLocation - 1] + "\n";11
    text += "\n";*/
    
    
    //Current Location
    text += "Current location (" + user.storyLocation + ")\t";
    // text += "Story Text: " + story[main_text][user.storyLocation] + "\t";
    // text += "Point of Interest: " + story[POI][user.storyLocation] + "\t";
    // text += "Affinity Increase: " + story[16][user.storyLocation] + "\t";
    // text += "Bubble 1: " + story[1][user.storyLocation] + "\t";
    // text += "Character 1: " + story[2][user.storyLocation] + "\t";
    // text += "Bubble 2: " + story[3][user.storyLocation] + "\t";
    // text += "Character 2: " + story[4][user.storyLocation] + "\t";
    // text += "Location: " + story[5][user.storyLocation] + "\t";
    text += "Link: " + story[special_option][user.storyLocation] + "\t";
    // text += "Choice A: " + story[choiceA_text][user.storyLocation] + "\t";
    // text += "Choice B: " + story[choiceB_text][user.storyLocation] + "\t";
    // text += "Choice C: " + story[choiceC_text][user.storyLocation] + "\t";
    text += "\n";
    
    
    //Next Location
    // text += "Next location (" + (parseInt(user.storyLocation) + 1) + ")\n";
    // text += "Story Text: " + story[main_text][parseInt(user.storyLocation) + 1] + "\n";
    // text += "Affinity Increase: " + story[16][parseInt(user.storyLocation) + 1] + "\n";
    // text += "Bubble 1: " + story[1][user.storyLocation + 1] + "\n";
    // text += "Character 1: " + story[2][user.storyLocation + 1] + "\n";
    // text += "Bubble 2: " + story[3][user.storyLocation + 1] + "\n";
    // text += "Character 2: " + story[4][user.storyLocation + 1] + "\n";
    // text += "Location: " + story[5][parseInt(user.storyLocation) + 1] + "\n";
    // text += "Link: " + story[special_option][parseInt(user.storyLocation) + 1] + "\n";
    // text += "\n";

    // console.log(text);
    // container1.innerHTML = text;

        // input.onkeypress = function(e){}
        // input.onkeydown = function(e){alert("a")};

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

updateGameBar();