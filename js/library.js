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
}

function loadAllImages()
{
    //Il va falloir loader toutes les images une après l'autre
}

