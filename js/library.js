/*
    Contains fonctions that are used on many different pages
*/

//this function will return the right image for the infinity meter depending on the inputted affinity
function browseAffinity(affinity)
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

function getPersonnage(char)
{
    var char_pointer;

    for(var i = 0; i<6; i++)
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

function getPersonnageFromName(name)
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

function loadAllImages()
{
    var loader = document.createElement('div')
        loader.style.display = "none";

    var parent = document.getElementById('footer');

        parent.appendChild(loader);
    
    //Il va falloir loader toutes les images une après l'autre
}

function createFlexPanel()
{
    var flexPanel = document.createElement('div');
        flexPanel.className = "flex-panel";

    return flexPanel;
}

function createCurrentChapterPreview()
{
    var preview = document.createElement('div');

    return preview;
}

function chapterSize(chapter)
{
    if(chapter == 0)
    {
        return 88;
    }
    else if (chapter == 1)
    {
        return 221;
    }
    else if (chapter == 2)
    {
        return 300;
    }
}

function refreshProgressBar()
{
    var obj_cont = document.getElementById('objectiveContainer');

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

    obj_cont.appendChild(progressBarContainer);
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

Object.size = function(object)
{
    var size = 0, key;
    for (key in object)
    {
        if (object.hasOwnProperty(key)) size++;
    }
    return size;
};

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


function getHighestAffinity()
{
    var char = alistair;
    var highestAffinity = 0;

    for(var i = 0; i < charList.length; i++)
    {
        var new_affinity = getPersonnageFromName(charList[i]).affinity;

        if(new_affinity > highestAffinity)
        {
            char = getPersonnageFromName(charList[i]);
        }
    }

    if(highestAffinity == 0)
    {
        char = empty;
    }

    return char;//char est le plus grand affinity
}

function createLoader()
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

function getCurrentChapter()
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
// function getLocationIndex()//returns the physical location (string) of the user, given an index (int)
// {

// }