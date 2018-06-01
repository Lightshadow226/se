/*
Engine of the Sweet Elite game
Written by Olivier Jalbert
a.k.a. "Lightshadow"

Copyright Dulcet Games 2016-2018.

All rights reserved.

September 02, 2017
*/

loadIsVisited(user.last_chapter_played);

$(function initializeInterface()//CREATES the entire interface once the document is $(document).READY()
{
    refreshInterface();//Start the first instance of the game
})

function refreshBackgroundImage()
{
    document.getElementById('background_img').src = story[5][user.storyLocation];//l'image de background du jeu
}

function refreshLeftCharacter()
{
    var left_content = document.getElementById('left_content');//character 2

    if(story[4][user.storyLocation] != "null")//if there is a character 2 in this slide
    {
        // left_content.style.backgroundImage = 'url(' + story[4][user.storyLocation] + ')';
        left_content.src = story[4][user.storyLocation];
        left_content.style.visibility = "visible";
    }
    else
    {
        left_content.src = '';
        left_content.style.visibility = "hidden";
    }

    refreshBubble("left");//if there is something in bubble 2
    refreshAffinity("left");
}

function refreshRightCharacter()
{
    var right_content = document.getElementById('right_content');//Contains Character 1
    if(story[2][user.storyLocation] != "null")//if there is a character 1 in this slide
    {
        // right_content.style.backgroundImage = 'url(' + story[2][user.storyLocation] + ')';
        right_content.src = story[2][user.storyLocation];
        right_content.style.visibility = "visible";
    }
    else
    {
        right_content.src = '';
        right_content.style.visibility = "hidden";
    }
    
    refreshBubble("right");//if there is something in bubble 1
    refreshAffinity("right");
}

function refreshBubble(side)
{
    var bubble;
    
    if(side ==  "right")//Right infinity meter
    {
        bubble = document.getElementById('bubble1');//bubble 1
        pointer = 1;
    }
    else//Left infinity meter
    {
        bubble = document.getElementById('bubble2');//bubble 2
        pointer = 3;
    }

    if(story[pointer][user.storyLocation] != "null")
    {
        bubble.innerHTML = story[pointer][user.storyLocation];//we display it in the correct bubble
        bubble.style.visibility = "visible";
    }
    else
    {
        bubble.style.visibility = "hidden";
        bubble.innerHTML = "";
    }
}

function refreshAffinity(side)
{
    var affinity_meter;
    var pointer = 0;
    
    if(side ==  "right")//Right infinity meter
    {
        affinity_meter = document.getElementById('infinity-meter-1');
        pointer = 2;
        infinityConsequencePointer = infinityConsequence1;
    }
    else//Left infinity meter
    {
        affinity_meter = document.getElementById('infinity-meter-2');
        pointer = 4;
        infinityConsequencePointer = infinityConsequence2;
    }
    
    if(story[pointer][user.storyLocation] != "null")//if there is a character 1 in this slide, we append the infinity meter to the right
    {
        var relevant_char = getPersonnage(story[pointer][user.storyLocation]);
            relevant_char.affinity = Number(relevant_char.affinity);
            
            if(!story[isVisited][user.storyLocation])
            {
                relevant_char.affinity += Number(story[infinityConsequencePointer][user.storyLocation]);
                // console.log(relevant_char.name + "'s Affinity: " + relevant_char.affinity);
            }
            else
            {
                // console.log("You've already visited this slide!");
            }
        
        // if(Number(relevant_char.affinity) < 0)
        // {
        //     relevant_char.affinity = 0;
        // }
        
        affinity_meter.src = browseAffinity(relevant_char.affinity);//character 1 (right)

        if(affinity_meter.style.visibility != "visible") affinity_meter.style.visibility = "visible";
    }
    else
    {
        affinity_meter.style.visibility = "hidden";
    }
}

function refreshTextContainer()
{
    //Text Container: la bande de texte en bas du canvas, où on raconte l'histoire. (on peut cliquer dessus pour faire avancer l'histoire)
    var textContainer = document.getElementById('textContainer');
        textContainer.innerHTML = story[main_text][user.storyLocation]//on affiche le texte
    
    if(story[main_text][user.storyLocation] == "null")//if there is there is text to be displayed
    {
        textContainer.style.visibility = "hidden";
    }
    else
    {
        textContainer.style.visibility = "visible";
    }

}

//REFRESHES the entire interface
function refreshInterface()
{
    if(user.storyLocation >= story[main_text].length)//si le chapitre ("story") est terminé
    {
        endOfChapter();
    }
    else//sinon, on continue l'histoire
    {
        //TODO: s'il y a un personnage à gauche, il doit avoir un petit triangle qui pointe vers la gauche (pour faire comme un vrai phylactère)

        //Game frame
        var game_frame = document.getElementById('game_frame');

        //Background image
        refreshBackgroundImage();
        
        //Left character (character, affinity, bubble)
        refreshLeftCharacter();

        //Right Content (character, affinity, bubble)
        refreshRightCharacter();
        
        //Text Container
        refreshTextContainer();
        
        story[isVisited][user.storyLocation] = true;

        refreshBottomGameContainer();
        
        //TODO: on doit seulement ajouter le affinity si on n'a jamais visité la page

        document.getElementById('romance_button').style.visibility = "hidden";
        document.getElementById('friendship_button').style.visibility = "hidden";

        var choiceA = document.getElementById('choiceA');
        var choiceB = document.getElementById('choiceB');
        var choiceC = document.getElementById('choiceC');
            choiceA.style.visibility = "hidden";
            choiceB.style.visibility = "hidden";
            choiceC.style.visibility = "hidden";
        
        document.getElementById('navigation-container').innerHTML = "";//clear the navigation buttons
        
        // ----- Special Option: Specific state of this slide -----

        if(story[special_option][user.storyLocation] == -2)// -2 === unlimited navigation is enabled
        {
            // user.physicalLocation = story[5][user.storyLocation];
            // alert(user.physicalLocationInt);
            background_img.src = getLocationString(user.physicalLocationInt);
            user.physicalLocation = getLocationString(user.physicalLocationInt);
            var navigation_container = document.getElementById('navigation-container');
            // alert(getLocationString(user.physicalLocationInt));

            // refreshObjectiveContainer();

            //BUTTON 1
                var button1 = document.createElement('div');//placed at the bottom center

                //general attributes
                    //style
                    button1.className = "directional_button";
                    
                    //events
                    button1.onclick = function(){browseLink(story[special_option][user.storyLocation], button1)};

            //BUTTON 2
                var button2 = document.createElement('div');

                //general attributes
                    //style
                    button2.style.backgroundColor = se_pink;
                    button2.className = "directional_button";
                    
                //specific attributes
                    //events
                    button2.onmouseover = function(){highlight(button2, se_highlight_bc)};
                    button2.onmouseout = function(){dehighlight(button2, se_pink)};
                    button2.onclick = function(){browseLink(story[special_option][user.storyLocation], button2)};

            //BUTTON 3
                var button3 = document.createElement('div');

                //general attributes
                    //style
                    button3.style.backgroundColor = se_pink;
                    button3.className = "directional_button";
                    
                //specific attributes
                    //events
                    button3.onmouseover = function(){highlight(button3, se_highlight_bc)};
                    button3.onmouseout = function(){dehighlight(button3, se_pink)};
                    button3.onclick = function(){browseLink(story[special_option][user.storyLocation], button3)};

            //BUTTON 4
                var button4 = document.createElement('div');

                //general attributes
                    //style
                    button4.style.backgroundColor = se_pink;
                    button4.className = "directional_button";
                    
                //specific attributes
                    //events
                    button4.onmouseover = function(){highlight(button4, se_highlight_bc)};
                    button4.onmouseout = function(){dehighlight(button4, se_pink)};
                    button4.onclick = function(){browseLink(story[special_option][user.storyLocation], button4)};


            var tooltip1 = document.createElement('span');//span, div, who cares
                tooltip1.className = "tooltiptext";

            var tooltip2 = document.createElement('span');
                tooltip2.className = "tooltiptext";

            var tooltip3 = document.createElement('span');
                tooltip3.className = "tooltiptext";

            var tooltip4 = document.createElement('span');
                tooltip4.className = "tooltiptext";
                        
            // -----physical location tests-----
            if(user.physicalLocation == locations.entrance)//if we are in the SCHOOL ENTRANCE
            {
                //Four possibilities
                //1: Main Hallway
                button1.id = locations.hall1;
                    tooltip1.innerHTML = "Main Hallway";

                button1.classList = button1.className + " entrance_hallway1";

                navigation_container.appendChild(button1);
                    button1.appendChild(tooltip1);
                
                //2: Garden
                button2.id = locations.garden;
                    tooltip2.innerHTML = "Garden";

                button2.classList = button2.className + " entrance_garden";

                navigation_container.appendChild(button2);
                    button2.appendChild(tooltip2);

                //3: Gym
                button3.id = locations.gym;
                    tooltip3.innerHTML = "Gym";

                button3.classList = button3.className + " entrance_gym";

                navigation_container.appendChild(button3);
                    button3.appendChild(tooltip3);

                //4: Dorm Hallway
                button4.id = locations.dormHall;
                    tooltip4.innerHTML = "Dorm Hallway";

                button4.classList = button4.className + " x-center-y-bottom";

                navigation_container.appendChild(button4);
                    button4.appendChild(tooltip4);
            }
            else if(user.physicalLocation == locations.hall1)//If we are in the MAIN HALLWAY
            {
                //Four possibilities
                //1: Classroom 1
                button1.id = locations.class1;//where the button LEADS
                    tooltip1.innerHTML = "Classroom 1";//where the button LEADS

                button1.classList = button1.className + " hallway1_class1";

                navigation_container.appendChild(button1);
                    button1.appendChild(tooltip1);

                //2: Classroom 2

                button2.id = locations.class2;//where the button LEADS
                    tooltip2.innerHTML = "Classroom 2";//where the button LEADS
                
                button2.classList = button2.className + " hallway1_class2";

                navigation_container.appendChild(button2);
                    button2.appendChild(tooltip2);
                
                //3: Second hallway

                button3.id = locations.hall2;//where the button LEADS
                    tooltip3.innerHTML = "Second Hallway";//where the button LEADS
                
                button3.classList = button3.className + " x-center-y-center";

                navigation_container.appendChild(button3);
                    button3.appendChild(tooltip3);

                //4: School entrance

                button4.id = locations.entrance;//where the button LEADS
                    tooltip4.innerHTML = "School Entrance";//where the button LEADS

                button4.classList = button4.className + " x-center-y-bottom";
                
                navigation_container.appendChild(button4);
                    button4.appendChild(tooltip4);
            }            
            else if(user.physicalLocation == locations.class1)//If we are in the CLASSROOM 1
            {
                //One possibility
                //1: Main Hallway
                button1.id = locations.hall1;//where the button LEADS
                    tooltip1.innerHTML = "Main Hallway";//where the button LEADS
                
                button1.classList = button1.className + " x-center-y-bottom";

                navigation_container.appendChild(button1);
                    button1.appendChild(tooltip1);
            }
            else if(user.physicalLocation == locations.class2)//If we are in the CLASSROOM 2
            {
                //One possibility
                //1: Main Hallway
                button1.id = locations.hall1;//where the button LEADS
                    tooltip1.innerHTML = "Main Hallway";//where the button LEADS

                button1.classList = button1.className + " x-center-y-bottom";

                navigation_container.appendChild(button1);
                    button1.appendChild(tooltip1);
            }
            else if(user.physicalLocation == locations.hall2)//If we are in the SECOND HALLWAY
            {
                //Two possibilities
                //1: Cafeteria
                button1.id = locations.cafeteria;
                 tooltip1.innerHTML = "Cafeteria";

                button1.classList = button1.className + " x-center-y-center";

                navigation_container.appendChild(button1);
                    button1.appendChild(tooltip1);

                //2: Main Hallway
                button2.id = locations.hall1;
                    tooltip2.innerHTML = "Main Hallway";

                button2.classList = button2.className + " x-left-y-center";

                navigation_container.appendChild(button2);
                    button2.appendChild(tooltip2);
            }
            else if(user.physicalLocation == locations.cafeteria)//If we are in the CAFETERIA
            {
                //Two possibilities
                //1: Cafeteria Lounge
                button1.id = locations.cafeteriaLounge;
                    tooltip1.innerHTML = "Cafeteria Lounge";

                button1.classList = button1.className + " x-left-y-center";

                navigation_container.appendChild(button1);
                    button1.appendChild(tooltip1);
                
                //2: Second Hallway
                button2.id = locations.hall2;
                    tooltip2.innerHTML = "Second Hallway";

                button2.classList = button2.className + " x-center-y-bottom";

                navigation_container.appendChild(button2);
                    button2.appendChild(tooltip2);
            }
            else if(user.physicalLocation == locations.cafeteriaLounge)//If we are in the CAFETERIA LOUNGE
            {
                //Two possibilities
                //1: Cafeteria
                button1.id = locations.cafeteria;
                    tooltip1.innerHTML = "Cafeteria";

                button1.classList = button1.className + " x-center-y-bottom";

                navigation_container.appendChild(button1);
                    button1.appendChild(tooltip1);
                
                //2: Outside Cafeteria
                button2.id = locations.cafeteriaOutside;
                    tooltip2.innerHTML = "Outside Cafeteria";

                button2.classList = button2.className + " cafeterialounge_outsidecafetaria";

                navigation_container.appendChild(button2);
                    button2.appendChild(tooltip2);

            }
            else if(user.physicalLocation == locations.cafeteriaOutside)//If we are in the Outside Cafeteria
            {
                //One possibility
                //1: Cafeteria Lounge
                button1.id = locations.cafeteriaLounge;
                    tooltip1.innerHTML = "Cafeteria Lounge";

                button1.classList = button1.className + " x-center-y-bottom";

                navigation_container.appendChild(button1);
                    button1.appendChild(tooltip1);
            }
            else if(user.physicalLocation == locations.garden)//If we are in the GARDEN
            {
                //One possibility
                //1: School Entrance
                button1.id = locations.entrance;
                    tooltip1.innerHTML = "School Entrance";

                button1.classList = button1.className + " x-center-y-bottom";

                navigation_container.appendChild(button1);
                    button1.appendChild(tooltip1);
            }
            else if(user.physicalLocation == locations.gym)//If we are in the GYM
            {
                //One possibility
                //1: School Entrance
                button1.id = locations.entrance;
                    tooltip1.innerHTML = "School Entrance";

                button1.classList = button1.className + " x-center-y-bottom";

                navigation_container.appendChild(button1);
                    button1.appendChild(tooltip1);
            }
            else if(user.physicalLocation == locations.dormHall)//If we are in the DORM HALLWAY
            {
                //Three possibilities
                //1: School Entrance
                button1.id = locations.entrance;
                    tooltip1.innerHTML = "School Entrance";

                button1.classList = button1.className + " x-center-y-bottom";

                navigation_container.appendChild(button1);

                //2: My Dorm
                button2.id = locations.dorm;
                    tooltip2.innerHTML = "My Dorm";

                button2.classList = button2.className + " dormhallway_mydorm";

                navigation_container.appendChild(button2);

                //3: Dorm Bathroom
                button3.id = locations.dormBathroom;
                    tooltip3.innerHTML = "Dorm Bathroom";

                button3.classList = button3.className + " dormhallway_dormbathroom";

                navigation_container.appendChild(button3);
                    button1.appendChild(tooltip1);
                    button2.appendChild(tooltip2);
                    button3.appendChild(tooltip3);
            }
            else if(user.physicalLocation == locations.dorm)//If we are in OUR DORM
            {
                //One possibility
                //1: Dorm Hallway
                button1.id = locations.dormHall;
                    tooltip1.innerHTML = "Dorm Hallway";

                button1.classList = button1.className + " x-center-y-bottom";

                navigation_container.appendChild(button1);
                    button1.appendChild(tooltip1);
            }
            else if(user.physicalLocation == locations.dormBathroom)//If we are in the DORM BATHROOM
            {
                //One possibility
                //1: Dorm Hallway
                button1.id = locations.dormHall;
                    tooltip1.innerHTML = "Dorm Hallway";

                button1.classList = button1.className + " x-center-y-bottom";

                navigation_container.appendChild(button1);
                    button1.appendChild(tooltip1);
            }
        }
        else if(story[special_option][user.storyLocation] == -3)// -3 === Form to choose the department
        {
            var form_names = [  "Department of Business, Commerce, and Politics",
                                "Department of Perfoming Arts",
                                "Department of Pure and Applied Sciences",
                                "Department of Health Sciences", 
                                "Department of Athletics",
                                "Department of Fine Arts",
                                "Department of Fashion"];

            var form_container = document.createElement('div');
                form_container.id = "form_container";
                form_container.className = "form_container";

            var formHeader = document.createElement('h6');
                formHeader.innerHTML = "Choose your Department";

            var formSubHeader = document.createElement('h5');
                formSubHeader.innerHTML = "Choose wisely, you will <em>not</em> be able to change your department later!";

            game_frame.appendChild(form_container);
                form_container.appendChild(formHeader);
                form_container.appendChild(formSubHeader);

            var selected = new Array(7);//array qui va déterminer si la ligne est sélectionnée ou non

            function createFormLine (index, parent)
            {
                choice = "null";//just in case
            
                var line = document.createElement('div');
                    line.id = "line_" + index;
                    line.className = "form_line";
            
                var text_container = document.createElement('div');
                    text_container.className = "form_text_container";

                    var div1 = document.createElement('div');
                        div1.className = "padding_div";

                    var div2 = document.createElement('div');
                        div2.className = "padding_div";
                        div2.innerHTML = form_names[index];

                    var div3 = document.createElement('div');
                        div3.className = "padding_div";
            
                var img_container = document.createElement('div');
                    img_container.className = "form_img_container";
                
                var img = document.createElement('img');
                    img.src = "images/game_images/badges/raw/" + ++index + ".png";
                    img.className = "form_img";
            
                line.appendChild(img_container);
                    img_container.appendChild(img);
                line.appendChild(text_container);
                    text_container.appendChild(div1);
                    text_container.appendChild(div2);
                    text_container.appendChild(div3);
            
                line.onclick = function click()
                {
                    choice = index - 1;//form_names[index-1];
                    
                    for(var id_index = 0; id_index < 7; id_index++)//unselect all form lines
                    {
                        var lineID = "line_" + id_index;

                        document.getElementById(lineID).className = "form_line_unselected form_line";
                        selected[id_index] = false;
                    }

                    line.className = "form_line_selected form_line";//we select the line that we clicked on
                    selected[index] = true;
                };
            
                parent.appendChild(line);
            }

            for (var index = 0; index < 7; index++)
            {
                createFormLine(index, form_container);
            }
        }
        else if(story[special_option][user.storyLocation] == -31)// -31 === Form to choose gender, skin color, hairstyle, etc.
        {
            var form_container = document.createElement('div');
                form_container.id = "form_container";
                form_container.className = "form_container form_container-small";

            var formHeader = document.createElement('h6');
                formHeader.innerHTML = "Name Your Character";

            var formSubHeader = document.createElement('h5');
                formSubHeader.innerHTML = "<br>Give a name to your Character! CHOOSE WISELY, you will <em>not</em> be able to change it later.<br><br>";

            var nameContainer = document.createElement('div');
                nameContainer.className = "flex-container";

            var name = document.createElement('input');
                name.id = "new_name";
                name.className = "flex-panel2 login-signup-textfields";
                name.type = "text";
                name.placeholder = "Scholar Name";
                // name.name = "new_name";// is this even necessary?

                name.onkeyup = function(e)
                {
                    console.log("Temp Username: " + name.value);
                };

            var formSubHeader2 = document.createElement('h5');
                formSubHeader2.innerHTML = "<br>How will the other Characters refer to your scholar? <br> Pronouns can be changed later.";
            
            var gender_container = document.createElement('div');
                gender_container.className = "flex-panel";

                var sheher = document.createElement('div');
                    sheher.id = "0";
                    sheher.className = "button pink_button";    
                    sheher.style.margin = "10px";
                    sheher.innerHTML = genders[0];
                var hehim = document.createElement('div');
                    hehim.id = "1";
                    hehim.className = "button pink_button";
                    hehim.style.margin = "10px";
                    hehim.innerHTML = genders[1];
                var theythem = document.createElement('div');
                    theythem.id = "2";
                    theythem.className = "button pink_button";
                    theythem.style.margin = "10px";
                    theythem.innerHTML = genders[2];

            hehim.onclick = function(e){choice = toggle_pronouns(this, sheher, theythem)};
            sheher.onclick = function(e){choice = toggle_pronouns(this, hehim, theythem)};
            theythem.onclick = function(e){choice = toggle_pronouns(this, hehim, sheher)};

            game_frame.appendChild(form_container);
                form_container.appendChild(formHeader);
                form_container.appendChild(formSubHeader);
                form_container.appendChild(nameContainer);
                    nameContainer.appendChild(name);
                form_container.appendChild(formSubHeader2);
                form_container.appendChild(gender_container);
                    gender_container.appendChild(sheher);
                    gender_container.appendChild(hehim);
                    gender_container.appendChild(theythem);
        }
        else if(story[special_option][user.storyLocation] == -4)// -4 === Choice of romance or friendship
        {
            //Friendship button
            var friendship_button = document.getElementById('friendship_button');
                friendship_button.style.visibility = "visible";
                friendship_button.onclick = function()
                {
                    browseLink(story[special_option][user.storyLocation], friendship_button);
                };
            
            //Romance button
            var romance_button = document.getElementById('romance_button');
                romance_button.style.visibility = "visible";
                romance_button.onclick = function()
                {
                    browseLink(story[special_option][user.storyLocation], romance_button);
                };
        }
        else if(story[special_option][user.storyLocation] == -5)// -5 === multiple choices (la variable links = -5 veut dire qu'on va afficher plusieurs liens -> MAX 4)
        {
            choiceA.innerHTML = story[choiceA_text][user.storyLocation]//Le choix A
            choiceA.onclick = function (e)
            {
                browseLink(story[special_option][user.storyLocation], choiceA);
            };
            
            choiceB.innerHTML = story[choiceB_text][user.storyLocation]//Le choix B
            choiceB.onclick = function (e)
            {
                browseLink(story[special_option][user.storyLocation], choiceB);
            };
            
            choiceC.innerHTML = story[choiceC_text][user.storyLocation]//Le choix C
            choiceC.onclick = function (e)
            {
                browseLink(story[special_option][user.storyLocation], choiceC);
            };
            
            $(choiceA).removeClass("bottomChoice");
            $(choiceB).removeClass("bottomChoice");
            $(choiceC).removeClass("bottomChoice");

            choiceA.style.visibility = "visible";
            choiceB.style.visibility = "visible";
            choiceC.style.visibility = "visible";

            if(story[choiceC_text][user.storyLocation] == "null")//2 choix
            {
                choiceC.style.display = "none";
                choiceB.style.transform = "translateY(-" + 0 + "px)";//choice B needs to be at the bottom
                $(choiceB).addClass("bottomChoice");
                choiceA.style.transform = "translateY(-" + (choiceB.clientHeight) + "px)";//choice A needs to be above choice B only
            }
            else//3 choix
            {
                choiceC.style.display = "block";
                $(choiceC).addClass("bottomChoice");
                choiceB.style.transform = "translateY(-" + choiceC.clientHeight + "px)";//choice B needs to be above choice C
                choiceA.style.transform = "translateY(-" + (choiceB.clientHeight + choiceC.clientHeight) + "px)";//choice A needs to be above both choice B and C
            }
            
        }
        else if(story[special_option][user.storyLocation] == -6)// -6 === checks if we visited a slide in the past, then go to another one if yes ***** GHOST SLIDE
        {
            browseLink(story[special_option][user.storyLocation], textContainer);
        }
        else if(story[special_option][user.storyLocation] == -7)// -7 === is the character of POI the one with the highest affinity? yes -> goto LP; no -> goto next slide ***** GHOST SLIDE
        {
            //if the highest affinity is with character # [point of interest]
            var character_nbr = story[POI][user.storyLocation];//get the point of interest, which is the negative # of the character
                character_nbr = -character_nbr - 11;// -11 becomes 0, -15 becomes 4.
                character_name = charList[character_nbr];

                /*
                11: "alistair", -> becomes [0]
                12: "axel",
                13: "claire",
                14: "ellie",
                15: "karolina", -> becomes [4]
                16: "neha",
                17: "raquel",
                18: "tadashi",
                19: "tegan",
                20: "tyler"
                */
            
                // alert("highest character at slide # " + user.storyLocation + " is " + getHighestAffinity().name + " VS " + character_name);

            if(getPersonnageFromName(character_name) == getHighestAffinity())//if the character that we're looking at is the one with the highest affinity
            {
                user.storyLocation = story[LP][user.storyLocation];//go to Landing Slide
            }
            else//if it is not the one with the highest affinity
            {
                user.storyLocation++;//go to the next slide
            }

            refreshInterface();
        }
        else if(story[special_option][user.storyLocation] == -8)// -8 === NEW OBJECTIVE ***** GHOST SLIDE
        {
            //Show a new objective
            //1. get the objective

            //2. display it (Make a popup)
            refreshObjectiveContainer();

            //3. goto next slide
            user.storyLocation++;//go to the next slide
            refreshInterface();
        }
        else if(story[special_option][user.storyLocation] == -9)// -9 === OBJECTIVE COMPLETE ***** GHOST SLIDE
        {
            //Marks an objective as complete
            //1. get the slide where the objective was created
            var relevant_slide = story[completed_objective_pointer][user.storyLocation];
            console.log("Objective Completed: " + story[new_objective_pointer][relevant_slide]);

            //2. TODO: write that the objective is complete somewhere on the screen (Make a popup)

            //3. remove the said objective from the objective section
            refreshObjectiveContainer();

            //4. goto next slide
            user.storyLocation++;//go to the next slide
            refreshInterface();
        }
        else if(story[special_option][user.storyLocation] == -10)// -10 === the end of the chapter ***** GHOST SLIDE
        {
            user.storyLocation = story[main_text].length;//the story is over
            refreshInterface();
        }
        else if(story[special_option][user.storyLocation] == -11)// -11 === same as -6, but look at a slide from a previous chapter and then go to current chapter slide ***** GHOST SLIDE
        {
            browseLink(story[special_option][user.storyLocation], textContainer);
        }
        else if(story[special_option][user.storyLocation] == -12)// -12 === affect the affinity of a character without displaying it -> then goto next slide ***** GHOST SLIDE
        {

        }
        else if(story[special_option][user.storyLocation] == -13)// -13 === directly goto landing slide ***** GHOST SLIDE
        {
            user.storyLocation = story[LP][user.storyLocation];
            refreshInterface();
        }
        else if(story[special_option][user.storyLocation] == -14)// -14 === Put on your uniform form
        {
            var sexFolder = ["female", "male"];
            var outfitsToDisplay = 0;
            
            if(story[choiceA_link][user.storyLocation] != -1) outfitsToDisplay++;
            if(story[choiceB_link][user.storyLocation] != -1) outfitsToDisplay++;
            if(story[choiceC_link][user.storyLocation] != -1) outfitsToDisplay++;
            
            var positionClasses;

            switch(outfitsToDisplay)
            {
                case 1:
                    positionClasses = ["game-outfits-middle"];
                    break;
                case 2:
                    positionClasses = ["game-outfits-left", "game-outfits-right"];
                    break;
                case 3:
                    positionClasses = ["game-outfits-left", "game-outfits-middle", "game-outfits-right"];
                    break;
            }

            var formContainer = document.getElementById("formContainer");
                formContainer.innerHTML = "";

            for(var i = 0; i < outfitsToDisplay; i++)
            {
                //Uniform button
                var outfitButton = document.createElement('div');
                    outfitButton.id = "outfitButton" + i;
                    outfitButton.className = "game-outfits " + positionClasses[i] + " game-outfits-" + sexFolder[user.sex];
                    outfitButton.onclick = function (e)
                    {
                        browseLink(story[special_option][user.storyLocation], this);
                    }
    
                var outfitButtonImg = document.createElement('img');
                    outfitButtonImg.className = "friendship_romance_buttons_img";
                    outfitButtonImg.src = "_new_images_folder/outfits/" + story[choiceA_link + i][user.storyLocation] + "/" + sexFolder[user.sex] + ".png";
                    
                formContainer.appendChild(outfitButton);
                    outfitButton.appendChild(outfitButtonImg);
            }
        }
        else if(story[special_option][user.storyLocation] == -15)// -15 === Popups ("Congratulations")
        {
            var popup = document.createElement('div');
                popup.className = "popup";
                popup.innerHTML = story[choiceA_text][user.storyLocation];

            var formContainer = document.getElementById("formContainer");
                formContainer.innerHTML = "";
                formContainer.appendChild(popup);
        }
        else//if location or anything else is not enabled
        {
            //TODO: nothing for now
        }

        //EVENT LISTENER for the Text Container
            textContainer.onclick = function()
            {
                browseLink(story[special_option][user.storyLocation], textContainer);
            };
    }

    story[isVisited][user.storyLocation] = true;
    
    refreshTestContainer();

    verifyIllustration();//Test for Illustrations
    verifyAchievement();//Test for Achievements

    saveIsVisited();//TODO: Optimize this
    pushVariablesToDB();
    updateGameBar();
}

//This function is to affect what happens when we click on the text container depending on the link
function browseLink(link, element)//link is the link of the story (story[special_option][storyLocation]), element is the ID of the button on which the user clicked (which should be the location where the button is going)
{
    user.physicalLocation = story[5][user.storyLocation];
    user.physicalLocationInt = getLocationIndex(user.physicalLocation);

    if(link == -1)//si on va à la prochaine slide
    {
        user.storyLocation++;
    }
    else if(link == -2)//activate navigation
    {
        var changelocation = true;

        //TODO: on peut tout simplifier si on fait:

        /*
        if = textcontainer
        {

        }
        else
        {
            conditions d'en bas

            if
            else if
            else if
        }
        */
       
        if(element.id == "textContainer")//si on a cliqué sur le text container
        {
            if(story[7][user.storyLocation] == 0)//si l'objectif est null, on peut poursuivre l'histoire
            {
                user.storyLocation++;//we continue the story once we are done
            }
            else//sinon, ça veut dire que l'objectif est d'aller dans un endroit particulier de l'école, donc on ne peut pas cliquer sur le text container pour y arriver
            {
                changelocation = false;
            }
        }
        else if(element.id == locations.entrance)//si on est dans le entrance
        {
            if(story[7][user.storyLocation] == 1)//objectif = aller dans entrance
            {
                user.storyLocation++;//we continue the story once we are done
            }
        }
        else if(element.id == locations.hall1)//si on est dans le hall 1
        {
            if(story[7][user.storyLocation] == 2)//objectif = aller dans hall 1
            {
                // alert("Objective completed! You are in hall 1!");
                // story[5][storyLocation] = element.id;
                user.storyLocation++;//we continue the story once we are done
            }
        }
        else if(element.id == locations.class1)//si on est dans la classe 1
        {
            if(story[7][user.storyLocation] == 3)//objectif = aller dans classroom 1
            {
                // alert("Objective completed! You are in classroom 1!");
                
                // story[5][storyLocation] = element.id;
                user.storyLocation++;//we continue the story once we are done
                // alert(story[choiceA_text][user.storyLocation]);
                // document.getElementById('objectiveContainer').innerHTML = story[choiceA_text][user.storyLocation];
                //Mettre un message pour dire bravo "Objective complete!"
            }
        }
        else if(element.id == locations.class2)//si on est dans le entrance
        {
            if(story[7][user.storyLocation] == 4)//objectif = aller dans entrance
            {
                user.storyLocation++;//we continue the story once we are done
            }
        }
        else if(element.id == locations.hall2)//si on est dans le entrance
        {
            if(story[7][user.storyLocation] == 5)//objectif = aller dans entrance
            {
                user.storyLocation++;//we continue the story once we are done
            }
        }
        else if(element.id == locations.cafeteria)//si on est dans le entrance
        {
            if(story[7][user.storyLocation] == 6)//objectif = aller dans entrance
            {
                user.storyLocation++;//we continue the story once we are done
            }
        }
        else if(element.id == locations.cafeteriaLounge)//si on est dans le entrance
        {
            if(story[7][user.storyLocation] == 7)//objectif = aller dans entrance
            {
                user.storyLocation++;//we continue the story once we are done
            }
        }
        else if(element.id == locations.cafeteriaOutside)//si on est dans le entrance
        {
            if(story[7][user.storyLocation] == 8)//objectif = aller dans entrance
            {
                user.storyLocation++;//we continue the story once we are done
            }
        }
        else if(element.id == locations.garden)//si on est dans le entrance
        {
            if(story[7][user.storyLocation] == 9)//objectif = aller dans entrance
            {
                user.storyLocation++;//we continue the story once we are done
            }
        }
        else if(element.id == locations.gym)//si on est dans le entrance
        {
            if(story[7][user.storyLocation] == 10)//objectif = aller dans entrance
            {
                user.storyLocation++;//we continue the story once we are done
            }
        }
        else if(element.id == locations.dormHall)//si on est dans le entrance
        {
            if(story[7][user.storyLocation] == 11)//objectif = aller dans entrance
            {
                user.storyLocation++;//we continue the story once we are done
            }
        }
        else if(element.id == locations.dorm)//si on est dans le entrance
        {
            if(story[7][user.storyLocation] == 12)//objectif = aller dans entrance
            {
                user.storyLocation++;//we continue the story once we are done
            }
        }
        else if(element.id == locations.dormBathroom)//si on est dans le entrance
        {
            if(story[7][user.storyLocation] == 13)//objectif = aller dans entrance
            {
                user.storyLocation++;//we continue the story once we are done
            }
        }
        else
        {
            // story[5][storyLocation] = element.id;
        }
        
        if(element.id != "textContainer")
        {
            if(changelocation){story[5][user.storyLocation] = element.id;}
            
            user.physicalLocation = element.id;//element.id est le physical location où on s'en va
            user.physicalLocationInt = getLocationIndex(user.physicalLocation);
            // alert(user.physicalLocationInt);
            // pushVariablesToDB();//for saving the current physical location
        }

        document.getElementById('navigation-container').innerHTML = "";//clear the navigation buttons
    }
    else if(link == -3)//Acts like a submit button for the form
    {
        if(choice == "null")
        {
            console.log("Please choose a department!"); //Mouna TODO: make a cute popup
        }
        else
        {
            // alert('Your form was successfully sumbitted!');
            // alert(choice);
            user.department = choice;
            user.storyLocation++;//we continue the story once we are done
            saveVariables('department', 'storylocation');
            // pushVariablesToDB();
            HideForms();
        }
    }
    else if(link == -31)//Acts like a submit button for the form
    {
        var value = document.getElementById('new_name').value;
        
        if(value == "")
        {
            console.log("Please choose a username!");
        }
        else if(choice == "null")
        {
            console.log("Please choose a pronoun!");
        }
        else
        {
            var chosen_gender;
            
            for(var i = 0; i < genders.length; i++)
            {
                if(choice == genders[i]){chosen_gender = i}
            }

            user.gender = chosen_gender;
            user.scholarname = value;
            user.storyLocation++;//we continue the story once we are done
            pushVariablesToDB();
            HideForms();
        }
    }
    else if(link == -4)//friendship/romance buttons are enabled
    {
        if(element.id == "friendship_button")
        {
            // alert("friendship -> " + story[8][user.storyLocation]);
            user.storyLocation = story[8][user.storyLocation];//on fait que la location devienne le numéro du link
        }
        else if(element.id == "romance_button")
        {
            // alert("romance -> " + story[9][user.storyLocation]);
            user.storyLocation = story[9][user.storyLocation];//on fait que la location devienne le numéro du link
        }
        else
        {
            //rien ne se passe si on appuie sur le text container
        }
    }
    else if(link == -5)//Multiple choices
    {
        // alert(story[choiceA_link][storyLocation]);
        
        if(element.id == "choiceA")
        {
            user.storyLocation = story[choiceA_link][user.storyLocation];//on fait que la location devienne le numéro du link
        }
        else if(element.id == "choiceB")
        {
            user.storyLocation = story[choiceB_link][user.storyLocation];//on fait que la location devienne le numéro du link
        }
        else if(element.id == "choiceC")
        {
            user.storyLocation = story[choiceC_link][user.storyLocation];//on fait que la location devienne le numéro du link
        }
    }
    else if(link == -6)//Looks at links in the past to dermine where to go next
    {
        var pointofinterest = story[POI][user.storyLocation];
        var landingpoint = story[LP][user.storyLocation];

        // console.log("slide: " + pointofinterest + " = " + story[isVisited][pointofinterest]);
        
        //TODO: make a switch case
        if(story[isVisited][pointofinterest]) // if we visited the slide that is the "point of interest".
        {
            console.log("you have visited " + pointofinterest);
            console.log("therefore, you are going to " + landingpoint);
            //alert("storylocation was " + storyLocation);
            user.storyLocation = landingpoint;
            //alert("storylocation is now " + storyLocation);
        }
        else if(pointofinterest == -1)
        {
            console.log(user.storyLocation + " going to : " + pointofinterest);
            user.storyLocation = landingpoint;
            refreshInterface();
        }
        else//if not, we go to the next slide
        {
            user.storyLocation++;
        }
    }
    else if(link == -11)//Looks at links in past CHAPTERS to dermine where to go next
    {
        var relevantChapter = story[choiceA_link][user.storyLocation];
        var pointofinterest = story[POI][user.storyLocation];
        var landingpoint = story[LP][user.storyLocation];

        console.log("Looking at slide: " + pointofinterest + " of chapter " + relevantChapter + " = " + alternateIsVisited[pointofinterest]);
        
        loadIsVisited(relevantChapter);
        // isVisitedChapterX
        
        if(alternateIsVisited[pointofinterest]) // if we visited the slide that is the "point of interest".
        {
            console.log("you have visited " + pointofinterest);
            console.log("therefore, you are going to " + landingpoint);
            //alert("storylocation was " + storyLocation);
            user.storyLocation = landingpoint;
            //alert("storylocation is now " + storyLocation);
        }
        else//if not, we go to the next slide
        {
            user.storyLocation++;
        }
    }
    else if(link == -14)//Put on your uniform form
    {
        var index = getNumber(element, "outfitButton");
        var outfitNumber = story[parseInt(choiceA_link) + parseInt(index)][user.storyLocation];

        outfitToEquip = outfitsPointer[outfitNumber];

        user.shirtID = outfitToEquip[0];
        user.pantsID = outfitToEquip[1];
        user.shoesID = outfitToEquip[2];

        pushVariablesToDB();

        user.storyLocation++;
        HideForms();
    }
    else if(link >= 0)
    {
        user.storyLocation = story[special_option][user.storyLocation];//on fait que la location devienne le numéro du link
    }
    else//otherwise, it's just a direct link to somewhere else in the story
    {
        user.storyLocation++;
    }

    HideForms();
    refreshInterface();
}

function HideForms()
{
    var forms = document.getElementsByClassName('form_container');//created dynamically
    
    for (var i = 0; i < forms.length; i++)
    {
        forms[i].style.visibility = "hidden";
    }

    var formContainer = document.getElementById("formContainer");//in the DOM
        formContainer.innerHTML = "";
}

function endOfChapter()
{
    //hide the game and objectives
    document.getElementById('game_frame').style.display = "none";
    document.getElementById('objectiveContainer').style.display = "none";

    // $.get('partials/replay.php');
    $("#replay_handler").load("partials/replay.php", function (response, status, xhr)
    {
        // console.log(response);
        document.getElementById("current-chapter-img").src = "_new_images_folder/game/chapter_images/chapter" + user.last_chapter_played + ".jpg";

        var lastChapterAvailable = availableChapters - 1;

        if(user.last_chapter_played == lastChapterAvailable)//if we just finished playing the latest chapter
        {
            document.getElementById("next-chapter-button").remove();
        }

        //hide the bottom objective, progress and characters container
        hideBottomGameContainer(true);
    });

    
    // console.log(user.last_chapter_played);
}

function restartChapter()
{
    console.log("Restarting the chapter...");
    wipeCurrentChapter();

    //display the game and objective containers
    document.getElementById('game_frame').style.display = "block";
    document.getElementById('objectiveContainer').style.display = "block";

    //hide the replay handler
    document.getElementById('replay_handler').style.display = "none";

    refreshBottomGameContainer();
    refreshInterface();
}

function nextChapter()
{
    console.log("Opening next chapter...");
    var newChapter = parseInt(user.last_chapter_played);
        newChapter++;
    
    user.storyLocation = 0;//start the next chapter at slide 0

    pushVariablesToDB();

    var newChapterAddress = "chapter" + newChapter + ".php";
        window.open(newChapterAddress, "_self");
}