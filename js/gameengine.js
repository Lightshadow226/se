/*
Engine of the Sweet Elite game
Written by Olivier Jalbert
a.k.a. "Lightshadow"

Copyright Dulcet Games 2016-2017.

All rights reserved.

September 02, 2017
*/

var Container = document.getElementById("Container");

//a few pointers to constant references in the chapter variables files
    const main_text = 0;

    const special_option = 6;

    const choiceA_link = 10;
    const choiceB_link = 11;
    const choiceC_link = 12;

    const choiceA_text = 13;
    const choiceB_text = 14;
    const choiceC_text = 15;

    const infinityConsequence1 = 16;
    const infinityConsequence2 = 17;

    const POI = 19;
    const LP = 20;

$(function initializeInterface()//CREATES the entire interface once the document is $(document).READY()
{
    pullVariablesFromDB();

    var gameContainer = document.createElement('div');
        gameContainer.id = "gameContainer";
            
    var objectiveContainer = document.createElement('div');
        objectiveContainer.id = "objectiveContainer";
        objectiveContainer.innerHTML = "You have no objectives for now.";
        
    Container.innerHTML = "";
    Container.appendChild(gameContainer);
    Container.appendChild(objectiveContainer);

    var testContainer = document.createElement('div');
        testContainer.id = "testContainer";

        var testContainer1 = document.createElement('div');
            testContainer1.id = "testContainer1";

        var testContainer2 = document.createElement('div');
            testContainer2.id = "testContainer2";
            
        Container.appendChild(testContainer);
            testContainer.appendChild(testContainer1);
            testContainer.appendChild(testContainer2);

    user.last_chapter_played = current_Chapter;
    // user.storyLocation = user.storyLocation //TODO: régler le problème de la priorité quand on LOAD vs SAVE
    // pushVariablesToDB();//make sure the database reflects the fact that the current chapter is the one currently being played
    refreshInterface();//Start the first instance of the game
})

function refreshInterface()//REFRESHES the interface
{
    gameContainer.innerHTML = "";//on détruit tout en premier
    
    refreshTestContainer();
    refreshObjectiveContainer();

    if(user.storyLocation >= story[main_text].length)//si le chapitre ("story") est terminé
    {
        user.storyLocation = 0;//TODO: get the variable from the DATABASE with PHP
        // alert("The story is over! Come back another time!");
        
        refreshInterface();
    }
    else//sinon, on continue l'histoire
    {
        //CREATE all elements for the background (with overlays and shit)
        
            // -----TODO: don't create them on every slide -----
            
            var background = document.createElement("div");//Creates the background
                background.id = "game_frame";
                // background.style.borderBottomLeftRadius = "10px";
                // background.style.borderBottomRightRadius = "10px";
                // background.style.backgroundImage = 'url(' + story[5][storyLocation] + ')';//l'image de background du jeu

            var overlay = document.createElement("div");//Creates the background
                overlay.id = "game_overlay";

            var overlay_affinity_choice = document.createElement("div");//Creates the background
                overlay_affinity_choice.className = "game_overlay";

            var background_img = document.createElement('img');
                background_img.id = "background_img";
                background_img.className = "background_img";
                background_img.style.borderBottomLeftRadius = "10px";
                background_img.style.borderBottomRightRadius = "10px";
                // loadAllImages(background_img);
                background_img.src = story[5][user.storyLocation];//l'image de background du jeu
                // background_img.src = getLocationString(user.physicalLocationInt);
                // alert(user.physicalLocationInt);
                
            gameContainer.appendChild(background);//Appends the background
                if(story[special_option][user.storyLocation] != -3)//we can't append the overlay if we need to click on something
                {
                    background.appendChild(overlay);
                }
                if(story[special_option][user.storyLocation] == -4)//we're only going to append this overlay if we have the affinity selector ON
                {
                    background.appendChild(overlay_affinity_choice);
                }

                background.appendChild(background_img);

            /*
            There are three divisions OVER the background
            1-Left content: contains the character on the left ("character 2")
            2-Middle content: contains the bubbles 1 and 2
            3-Right content: contains the character on the right ("character 1")
            */

        //CREATE Contents for the elements

            var left_content = document.createElement('div');//character 2
                left_content.className = "left_content";

                if(story[4][user.storyLocation] != "null")//if there is a character 1 in this slide
                {
                    left_content.style.backgroundImage = 'url(' + story[4][user.storyLocation] + ')';
                }
                        
            var middle_content = document.createElement('div');//bubble container
                middle_content.className = "middle_content";
                
                var text_gap = document.createElement('div')
                    text_gap.style.flex = "10";

                var bubble1 = document.createElement('div');//bubble 1

                    bubble1.className = "bubble";
                    bubble1.style.backgroundColor = grey;

                    //s'il y a un personnage à gauche, il doit avoir un petit triangle qui pointe vers la gauche (pour fair comme un vrai phylactère)

                    if(story[1][user.storyLocation] != "null")//if there is something in bubble 1
                    {
                        bubble1.innerHTML = story[1][user.storyLocation];//we display it in bubble 1
                        bubble1.style.padding = "20px"; // on met le padding ici plutôt que dans le CSS parce qu'on veut que le bubble disparaisse quand elle n'est pas utilisée
                    }
                    else
                    {
                        bubble1.innerHTML = "";
                    }
                    
                var bubble2 = document.createElement('div');//bubble 2
                    
                    bubble2.className = "bubble";
                    bubble2.style.backgroundColor = grey;

                    if(story[3][user.storyLocation] != "null")//if there is something in bubble 2
                    {
                        bubble2.innerHTML = story[3][user.storyLocation];//we display it in bubble 2
                        bubble2.style.padding = "20px"; // on met le padding ici plutôt que dans le CSS parce qu'on veut que le bubble disparaisse quand elle n'est pas utilisée
                    }
                    else
                    {
                        bubble2.innerHTML = "";
                    }
            
            var right_content = document.createElement('div');//Contains Character 1
                right_content.className = "right_content";
                    
                if(story[2][user.storyLocation] != "null")//if there is a character 1 in this slide
                {
                    right_content.style.backgroundImage = 'url(' + story[2][user.storyLocation] + ')';
                }
            
            //Text Container: la bande de texte en bas du canvas, où on raconte l'histoire. (on peut cliquer dessus pour faire avancer l'histoire)

            var textContainer = document.createElement('div');
                
                textContainer.id = "textContainer";
                textContainer.innerHTML = story[main_text][user.storyLocation]//L'histoire à ce point-ci
                textContainer.style.borderBottomLeftRadius = "10px";
                textContainer.style.borderBottomRightRadius = "10px";
                
                //style
                    textContainer.className = "text_container";
                    textContainer.style.backgroundColor = se_bottom_border_bc;
                
                //events
                    textContainer.onmouseover = function(){highlight(textContainer, se_highlight_bc)};
                    textContainer.onmouseout = function(){dehighlight(textContainer, se_bottom_border_bc)};
            
            //Infinity Meter
            
            //The one on the right (character 1)
            var affinity_meter_content1 = document.createElement('div');
                affinity_meter_content1.style.flex = "10";

            var affinity_meter1 = document.createElement('img');
                // affinity_meter.style.position = "absolute";//ça pourrait être fort intéressant de ramener cette feature
                affinity_meter1.style.width = "100%";
                affinity_meter1.className = "y-center";

            //The one on the left (character 2)
            var affinity_meter_content2 = document.createElement('div');
                affinity_meter_content2.style.flex = "10";

            var affinity_meter2 = document.createElement('img');
                // affinity_meter.style.position = "absolute";//ça pourrait être fort intéressant de ramener cette feature
                affinity_meter2.style.width = "100%";
                affinity_meter2.className = "y-center";

        //APPEND all the things to the overlay

            //Left infinity meter
            if(story[4][user.storyLocation] != "null")//if there is a character 2 in this slide, we append the infinity meter to the left
            {
                var relevant_char = getPersonnage(story[4][user.storyLocation]);

                relevant_char.affinity = Number(relevant_char.affinity);
                relevant_char.affinity += Number(story[infinityConsequence2][user.storyLocation]);//on doit s'assurer que la valeur est un nombre, parce que sinon, parfois, ça fait juste carrément rajouter un zéro

                if(Number(relevant_char.affinity) < 0)
                {
                    relevant_char.affinity = 0;
                }

                affinity_meter2.src = browseAffinity(relevant_char.affinity);//character 2 (left)

                overlay.appendChild(affinity_meter_content2);
                affinity_meter_content2.appendChild(affinity_meter2);
            }
            
            overlay.appendChild(left_content);
            overlay.appendChild(middle_content);
            overlay.appendChild(right_content);

            //Right infinity meter
            if(story[2][user.storyLocation] != "null")//if there is a character 1 in this slide, we append the infinity meter to the right
            {
                var relevant_char = getPersonnage(story[2][user.storyLocation]);
                
                //TODO: on doit seulement ajouter le affinity si on n'a jamais visité la page

                relevant_char.affinity = Number(relevant_char.affinity);
                relevant_char.affinity += Number(story[infinityConsequence1][user.storyLocation]);
                
                if(Number(relevant_char.affinity) < 0)
                {
                    relevant_char.affinity = 0;
                }
                
                affinity_meter1.src = browseAffinity(relevant_char.affinity);//character 1 (right)

                overlay.appendChild(affinity_meter_content1);
                affinity_meter_content1.appendChild(affinity_meter1);
            }

            if(story[special_option][user.storyLocation] != -2)//we don't want to append the bubble is there is no need for it
            {
                middle_content.appendChild(bubble1);
                middle_content.appendChild(bubble2);
            }

            //Text Container (at the bottom)
            if(story[main_text][user.storyLocation] != "null")//only append if there is there is text to display
            {
                background.appendChild(textContainer);
            }

        // ----- Special Option: Specific state of this slide -----

        if(story[special_option][user.storyLocation] == -2)// -2 === unlimited navigation is enabled
        {
            // user.physicalLocation = story[5][user.storyLocation];
            // alert(user.physicalLocationInt);
            background_img.src = getLocationString(user.physicalLocationInt);
            user.physicalLocation = getLocationString(user.physicalLocationInt);
            // alert(getLocationString(user.physicalLocationInt));

            // refreshObjectiveContainer();

            //BUTTON 1
                var button1 = document.createElement('div');//placed at the bottom center

                //general attributes
                    //style
                    button1.style.backgroundColor = se_pink;
                    button1.className = "directional_button";
                    
                    //events
                    button1.onmouseover = function(){highlight(button1, se_highlight_bc)};
                    button1.onmouseout = function(){dehighlight(button1, se_pink)};
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

                middle_content.appendChild(button1);
                    button1.appendChild(tooltip1);
                
                //2: Garden
                button2.id = locations.garden;
                    tooltip2.innerHTML = "Garden";

                button2.classList = button2.className + " entrance_garden";

                middle_content.appendChild(button2);
                    button2.appendChild(tooltip2);

                //3: Gym
                button3.id = locations.gym;
                    tooltip3.innerHTML = "Gym";

                button3.classList = button3.className + " entrance_gym";

                middle_content.appendChild(button3);
                    button3.appendChild(tooltip3);

                //4: Dorm Hallway
                button4.id = locations.dormHall;
                    tooltip4.innerHTML = "Dorm Hallway";

                button4.classList = button4.className + " x-center-y-bottom";

                middle_content.appendChild(button4);
                    button4.appendChild(tooltip4);
            }
            else if(user.physicalLocation == locations.hall1)//If we are in the MAIN HALLWAY
            {
                //Four possibilities
                //1: Classroom 1
                button1.id = locations.class1;//where the button LEADS
                    tooltip1.innerHTML = "Classroom 1";//where the button LEADS

                button1.classList = button1.className + " hallway1_class1";

                left_content.appendChild(button1);
                    button1.appendChild(tooltip1);

                //2: Classroom 2

                button2.id = locations.class2;//where the button LEADS
                    tooltip2.innerHTML = "Classroom 2";//where the button LEADS
                
                button2.classList = button2.className + " hallway1_class2";

                right_content.appendChild(button2);
                    button2.appendChild(tooltip2);
                
                //3: Second hallway

                button3.id = locations.hall2;//where the button LEADS
                    tooltip3.innerHTML = "Second Hallway";//where the button LEADS
                
                button3.classList = button3.className + " x-center-y-center";

                middle_content.appendChild(button3);
                    button3.appendChild(tooltip3);

                //4: School entrance

                button4.id = locations.entrance;//where the button LEADS
                    tooltip4.innerHTML = "School Entrance";//where the button LEADS

                button4.classList = button4.className + " x-center-y-bottom";
                
                middle_content.appendChild(button4);
                    button4.appendChild(tooltip4);
            }            
            else if(user.physicalLocation == locations.class1)//If we are in the CLASSROOM 1
            {
                //One possibility
                //1: Main Hallway
                button1.id = locations.hall1;//where the button LEADS
                    tooltip1.innerHTML = "Main Hallway";//where the button LEADS
                
                button1.classList = button1.className + " x-center-y-bottom";

                middle_content.appendChild(button1);
                    button1.appendChild(tooltip1);
            }
            else if(user.physicalLocation == locations.class2)//If we are in the CLASSROOM 2
            {
                //One possibility
                //1: Main Hallway
                button1.id = locations.hall1;//where the button LEADS
                    tooltip1.innerHTML = "Main Hallway";//where the button LEADS

                button1.classList = button1.className + " x-center-y-bottom";

                middle_content.appendChild(button1);
                    button1.appendChild(tooltip1);
            }
            else if(user.physicalLocation == locations.hall2)//If we are in the SECOND HALLWAY
            {
                //Two possibilities
                //1: Cafeteria
                button1.id = locations.cafeteria;
                 tooltip1.innerHTML = "Cafeteria";

                button1.classList = button1.className + " x-center-y-center";

                middle_content.appendChild(button1);
                    button1.appendChild(tooltip1);

                //2: Main Hallway
                button2.id = locations.hall1;
                    tooltip2.innerHTML = "Main Hallway";

                button2.classList = button2.className + " x-left-y-center";

                left_content.appendChild(button2);
                    button2.appendChild(tooltip2);
            }
            else if(user.physicalLocation == locations.cafeteria)//If we are in the CAFETERIA
            {
                //Two possibilities
                //1: Cafeteria Lounge
                button1.id = locations.cafeteriaLounge;
                    tooltip1.innerHTML = "Cafeteria Lounge";

                button1.classList = button1.className + " x-left-y-center";

                middle_content.appendChild(button1);
                    button1.appendChild(tooltip1);
                
                //2: Second Hallway
                button2.id = locations.hall2;
                    tooltip2.innerHTML = "Second Hallway";

                button2.classList = button2.className + " x-center-y-bottom";

                middle_content.appendChild(button2);
                    button2.appendChild(tooltip2);
            }
            else if(user.physicalLocation == locations.cafeteriaLounge)//If we are in the CAFETERIA LOUNGE
            {
                //Two possibilities
                //1: Cafeteria
                button1.id = locations.cafeteria;
                    tooltip1.innerHTML = "Cafeteria";

                button1.classList = button1.className + " x-center-y-bottom";

                middle_content.appendChild(button1);
                    button1.appendChild(tooltip1);
                
                //2: Outside Cafeteria
                button2.id = locations.cafeteriaOutside;
                    tooltip2.innerHTML = "Outside Cafeteria";

                button2.classList = button2.className + " cafeterialounge_outsidecafetaria";

                middle_content.appendChild(button2);
                    button2.appendChild(tooltip2);

            }
            else if(user.physicalLocation == locations.cafeteriaOutside)//If we are in the Outside Cafeteria
            {
                //One possibility
                //1: Cafeteria Lounge
                button1.id = locations.cafeteriaLounge;
                    tooltip1.innerHTML = "Cafeteria Lounge";

                button1.classList = button1.className + " x-center-y-bottom";

                middle_content.appendChild(button1);
                    button1.appendChild(tooltip1);
            }
            else if(user.physicalLocation == locations.garden)//If we are in the GARDEN
            {
                //One possibility
                //1: School Entrance
                button1.id = locations.entrance;
                    tooltip1.innerHTML = "School Entrance";

                button1.classList = button1.className + " x-center-y-bottom";

                middle_content.appendChild(button1);
                    button1.appendChild(tooltip1);
            }
            else if(user.physicalLocation == locations.gym)//If we are in the GYM
            {
                //One possibility
                //1: School Entrance
                button1.id = locations.entrance;
                    tooltip1.innerHTML = "School Entrance";

                button1.classList = button1.className + " x-center-y-bottom";

                middle_content.appendChild(button1);
                    button1.appendChild(tooltip1);
            }
            else if(user.physicalLocation == locations.dormHall)//If we are in the DORM HALLWAY
            {
                //Three possibilities
                //1: School Entrance
                button1.id = locations.entrance;
                    tooltip1.innerHTML = "School Entrance";

                button1.classList = button1.className + " x-center-y-bottom";

                middle_content.appendChild(button1);

                //2: My Dorm
                button2.id = locations.dorm;
                    tooltip2.innerHTML = "My Dorm";

                button2.classList = button2.className + " dormhallway_mydorm";

                middle_content.appendChild(button2);

                //3: Dorm Bathroom
                button3.id = locations.dormBathroom;
                    tooltip3.innerHTML = "Dorm Bathroom";

                button3.classList = button3.className + " dormhallway_dormbathroom";

                middle_content.appendChild(button3);
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

                middle_content.appendChild(button1);
                    button1.appendChild(tooltip1);
            }
            else if(user.physicalLocation == locations.dormBathroom)//If we are in the DORM BATHROOM
            {
                //One possibility
                //1: Dorm Hallway
                button1.id = locations.dormHall;
                    tooltip1.innerHTML = "Dorm Hallway";

                button1.classList = button1.className + " x-center-y-bottom";

                middle_content.appendChild(button1);
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
                form_container.className = "form_container";

            var formHeader = document.createElement('h6');
                formHeader.innerHTML = "Choose your Department";

            var formSubHeader = document.createElement('h5');
                formSubHeader.innerHTML = "Choose wisely, you will <em>not</em> be able to change your department later!";

            background.appendChild(form_container);
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
            
                line.addEventListener( "click",
                                        function (e)
                                        {
                                            choice = index - 1;//form_names[index-1];
                                            
                                            for(var id_index = 0; id_index < 7; id_index++)
                                            {
                                                document.getElementById("line_" + id_index).className = "form_line_unselected form_line";
                                                selected[index] = false;
                                            }
            
                                            line.className = "form_line_selected form_line";//we select the line that we clicked on
                                        },
                                        true);
            
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
                form_container.className = "form_container-small";

            var padding_div = document.createElement('div');
                padding_div.className = "flex-panel";

            var formHeader = document.createElement('h6');
                formHeader.innerHTML = "Name Your Character";

            var formSubHeader = document.createElement('h5');
                formSubHeader.innerHTML = "<br>Give a name to your Character! CHOOSE WISELY, you will <em>not</em> be able to change it later.<br><br>";

            var name = '<div class = "flex-container">\
                            <input id="new_name" class = "flex-panel2 login-signup-textfields" type="text" placeholder = "Scholar Name" name="new_name"></input>\
                        </div>';

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

            background.appendChild(form_container);
                // form_container.appendChild(padding_div);
                form_container.appendChild(formHeader);
                form_container.appendChild(formSubHeader);
                form_container.innerHTML += name;
                form_container.appendChild(formSubHeader2);
                form_container.appendChild(gender_container);
                    gender_container.appendChild(sheher);
                    gender_container.appendChild(hehim);
                    gender_container.appendChild(theythem);
                // form_container.appendChild(padding_div);
        }
        else if(story[special_option][user.storyLocation] == -4)// -4 === Choice of romance or friendship
        {
            //Friendship button
                var friendship_button = document.createElement('div'); 

                    friendship_button.className = "friendship_romance_buttons y-center-p";
                    friendship_button.id = "friendship_button";

                var friendship_button_img = document.createElement('img');

                    friendship_button_img.className = "friendship_romance_buttons_img";
                    friendship_button_img.src = "images/game_images/friendship_option.jpg";

                var friendship_button_overlay = document.createElement('div');

                    friendship_button_overlay.className = "friendship_romance_buttons_overlay";

                overlay_affinity_choice.appendChild(friendship_button);
                    friendship_button.appendChild(friendship_button_img);
                    friendship_button.appendChild(friendship_button_overlay);

                friendship_button.addEventListener( "click",
                                                    function (e)
                                                    {
                                                        browseLink(story[special_option][user.storyLocation], friendship_button);
                                                        refreshInterface();
                                                    },
                                                    true);
            
            //Romance button
            
                var romance_button = document.createElement('div'); 

                    romance_button.className = "friendship_romance_buttons y-center-q";
                    romance_button.id = "romance_button";

                var romance_button_img = document.createElement('img');

                    romance_button_img.className = "friendship_romance_buttons_img";
                    romance_button_img.src = "images/game_images/romance_option.jpg";

                var romance_button_overlay = document.createElement('div');

                    romance_button_overlay.className = "friendship_romance_buttons_overlay";

                overlay_affinity_choice.appendChild(romance_button);
                        romance_button.appendChild(romance_button_img);
                        romance_button.appendChild(romance_button_overlay);

                romance_button.addEventListener(    "click",
                                                    function (e)
                                                    {
                                                        // alert("romance");
                                                        browseLink(story[special_option][user.storyLocation], romance_button);
                                                        refreshInterface();
                                                    },
                                                    true);
        }
        else if(story[special_option][user.storyLocation] == -5)// -5 === multiple choices (la variable links = -5 veut dire qu'on va afficher plusieurs liens -> MAX 4)
        {
            var choiceA = document.createElement('div');
            
                choiceA.id = "choiceA";
                choiceA.innerHTML = story[choiceA_text][user.storyLocation]//Le choix A
            
                //style
                choiceA.className = "text_container";
                choiceA.style.backgroundColor = se_bottom_border_bc;
            
                //events
                choiceA.onmouseover = function(){highlight(choiceA, se_highlight_bc)};
                choiceA.onmouseout = function(){dehighlight(choiceA, se_bottom_border_bc)};

                choiceA.addEventListener( "click",
                                        function (e)
                                        {
                                            browseLink(story[special_option][user.storyLocation], choiceA);

                                            //storyLocation++;//goto link story[special_option] -> "-1" prochaine slide, autrement, c'est un link vers la slide numéro "x"
                                            refreshInterface();
                                            // refreshTestContainer();
                                        },
                                        true);

            var choiceB = document.createElement('div');
            
                choiceB.id = "choiceB";
                choiceB.innerHTML = story[choiceB_text][user.storyLocation]//Le choix B
            
                //style
                choiceB.className = "text_container";
                choiceB.style.backgroundColor = se_bottom_border_bc;
            
                //events
                choiceB.onmouseover = function(){highlight(choiceB, se_highlight_bc)};
                choiceB.onmouseout = function(){dehighlight(choiceB, se_bottom_border_bc)};

                choiceB.addEventListener( "click",
                                        function (e)
                                        {
                                            browseLink(story[special_option][user.storyLocation], choiceB);

                                            //storyLocation++;//goto link story[special_option] -> "-1" prochaine slide, autrement, c'est un link vers la slide numéro "x"
                                            refreshInterface();
                                            // refreshTestContainer();
                                        },
                                        true);

            var choiceC = document.createElement('div');
            
                choiceC.id = "choiceC";
                choiceC.style.borderBottomLeftRadius = "10px";
                choiceC.style.borderBottomRightRadius = "10px";
                choiceC.innerHTML = story[choiceC_text][user.storyLocation]//Le choix C
            
                //style
                choiceC.className = "text_container";
                choiceC.style.backgroundColor = se_bottom_border_bc;
            
                //events
                choiceC.onmouseover = function(){highlight(choiceC, se_highlight_bc)};
                choiceC.onmouseout = function(){dehighlight(choiceC, se_bottom_border_bc)};

                choiceC.addEventListener( "click",
                                        function (e)
                                        {
                                            browseLink(story[special_option][user.storyLocation], choiceC);

                                            //storyLocation++;//goto link story[special_option] -> "-1" prochaine slide, autrement, c'est un link vers la slide numéro "x"
                                            refreshInterface();
                                            // refreshTestContainer();
                                        },
                                        true);

            
            if(story[choiceC_text][user.storyLocation] != "null")
            {
                background.appendChild(choiceC);
            }
            
            background.appendChild(choiceB);
                choiceB.style.transform = "translateY(-" + choiceC.clientHeight + "px)";//choice B needs to be above choice C
            background.appendChild(choiceA);
                choiceA.style.transform = "translateY(-" + (choiceB.clientHeight + choiceC.clientHeight) + "px)";//choice A needs to be above both choice B anc C
        }
        else if(story[special_option][user.storyLocation] == -6)// -6 === checks if we visited a slide in the past, then go to another one if yes ***** GHOST SLIDE
        {
            browseLink(story[special_option][user.storyLocation], textContainer);

            refreshInterface();
        }
        else if(story[special_option][user.storyLocation] == -7)// -7 === is the character of POI the one with the highest affinity? yes -> goto LP; no -> goto next slide ***** GHOST SLIDE
        {
            //if the highest affinity is with character # [point of interest]
            var character_nbr = story[POI][user.storyLocation];//get the point of interest, which is the negative # of the character
                character_nbr = -character_nbr - 11;// -11 becomes 0, -15 becomes 4.
                character_name = charList[character_nbr];
            
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
        else if(story[special_option][user.storyLocation] == -10)// -10 === the end of the chapter ***** GHOST SLIDE
        {
            user.storyLocation = story[main_text].length;//the story is over
            refreshInterface();
        }
        else//if location or anything else is not enabled
        {
            //TODO: nothing for now
        }

        //EVENT LISTENER for the Text Container
            textContainer.addEventListener( "click",
            function (e)
            {
                browseLink(story[special_option][user.storyLocation], textContainer);

                refreshInterface();
                // refreshTestContainer();//no need for this, it was only for debugging purposes
            },
            true);
    }

    user.last_chapter_played = current_Chapter;
    // pushVariablesToDB();
}

//This function is to affect what happens when we click on the text container depending on the link
function browseLink(link, element)//link is the link of the story (story[special_option][storyLocation]), element is the ID of the button on which the user clicked (which should be the location where the button is going)
{
    story[17][user.storyLocation] = true;

    user.physicalLocation = story[5][user.storyLocation];
    user.physicalLocationInt = getLocationIndex(user.physicalLocation);

    if(link == -1)//si on va à la prochaine slide
    {
        user.storyLocation++;
    }
    else if(link == -2)//activate navigation
    {
        var changelocation = true;

        //on peut tout simplifier si on fait:

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
            // pushVariablesToDB();
        }
        
        refreshInterface();
    }
    else if(link == -3)//Acts like a submit button for the form
    {
        if(choice == "null")
        {
            alert("Please choose a department!");
        }
        else
        {
            // alert('Your form was successfully sumbitted!');
            // alert(choice);
            user.department = choice;
            user.storyLocation++;//we continue the story once we are done
            pushVariablesToDB();
        }
    }
    else if(link == -31)//Acts like a submit button for the form
    {
        var value = document.getElementById('new_name').value;
        
        // alert(choice);

        if(value == "")
        {
            alert("Please choose a username!");
        }
        else if(choice == "null")
        {
            alert("Please choose a pronoun!");
        }
        else
        {
            var chosen_gender;
            
            for(var i = 0; i < genders.length; i++)
            {
                if(choice == genders[i]){chosen_gender = i}
            }

            user.gender = chosen_gender;
            user.scholarname = document.getElementById('new_name').value;
            user.storyLocation++;//we continue the story once we are done
            pushVariablesToDB();
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

        //alert(pointofinterest);
        //alert(landingpoint);
        
        if(story[POI][pointofinterest]) // if we visited the slide that is the "point of interest".
        {
            // alert("you have visited " + pointofinterest);
            // alert("therefore, you are going to " + landingpoint);
            //alert("storylocation was " + storyLocation);
            user.storyLocation = landingpoint;
            //alert("storylocation is now " + storyLocation);
        }
        else//if not, we go to the next slide
        {
            user.storyLocation++
        }
    }
    else//otherwise, it's just a direct link to somewhere else in the story
    {
        user.storyLocation = story[special_option][user.storyLocation];//on fait que la location devienne le numéro du link
    }

    pushVariablesToDB();
}