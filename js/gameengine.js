/*
Engine of the Sweet Elite game
Written by Olivier Jalbert
a.k.a. "Lightshadow"

Copyright Dulcet Games 2016-2017.

All rights reserved.

September 02, 2017

ENLEVER TOUS LES GUILLEMETS POUR LES CHIFFRES DE LA BASE DE DONNÉES -> dans les chapitres.js et variables.js
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

function initializeInterface()//CREATES the entire interface
{
    Container.innerHTML = "";

    var gameContainer = document.createElement('div');
        gameContainer.id = "gameContainer";
            
        Container.appendChild(gameContainer);

    var objectiveContainer = document.createElement('div');
        objectiveContainer.id = "objectiveContainer";

        objectiveContainer.innerHTML = "You have no objectives for now.";

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

    //initializeVariables();//we initialize the variables only one in the game
    refreshInterface();//Start the first instance of the game
    refreshTestContainer();//Refresh the test container for the first time
    refreshScholar();
}

function refreshInterface()//REFRESHES the interface
{
    gameContainer.innerHTML = "";//on détruit tout en premier
    
    refreshTestContainer();
    refreshObjectiveContainer();

    if(storyLocation >= story[main_text].length)//si le chapitre ("story") est terminé
    {
        storyLocation = 0;//TODO: get the variable from the DATABASE with PHP
        // alert("The story is over! Come back another time!");
        
        refreshInterface();
    }
    else//sinon, on continue l'histoire
    {
        //CREATE all elements for the background (with overlays and shit)

            // -----TODO: don't create them on every slide -----
            
            var background = document.createElement("div");//Creates the background
                
                background.id = "game_frame";
                // background.style.backgroundImage = 'url(' + story[5][storyLocation] + ')';//l'image de background du jeu

            var overlay = document.createElement("div");//Creates the background
                
                overlay.id = "game_overlay";

            var overlay_affinity_choice = document.createElement("div");//Creates the background
            
                overlay_affinity_choice.className = "game_overlay";

            var background_img = document.createElement('img');

                background_img.className = "background_img";
                background_img.src = story[5][storyLocation];//l'image de background du jeu
                
            gameContainer.appendChild(background);//Appends the background
                if(story[special_option][storyLocation] != -3)//we can't append the overlay if we need to click on something
                {
                    background.appendChild(overlay);
                }
                if(story[special_option][storyLocation] == -4)//we're only going to append this overlay if we have the affinity selector ON
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

                if(story[4][storyLocation] != "null")//if there is a character 1 in this slide
                {
                    left_content.style.backgroundImage = 'url(' + story[4][storyLocation] + ')';
                }
                        
            var middle_content = document.createElement('div');//bubble container
                middle_content.className = "middle_content";
                
                var text_gap = document.createElement('div')
                    text_gap.style.flex = "10";

                var bubble1 = document.createElement('div');//bubble 1

                    bubble1.className = "bubble";
                    bubble1.style.backgroundColor = se_bubble_bc;

                    //s'il y a un personnage à gauche, il doit avoir un petit triangle qui pointe vers la gauche (pour fair comme un vrai phylactère)

                    if(story[1][storyLocation] != "null")//if there is something in bubble 1
                    {
                        bubble1.innerHTML = story[1][storyLocation];//we display it in bubble 1
                        bubble1.style.padding = "20px"; // on met le padding ici plutôt que dans le CSS parce qu'on veut que le bubble disparaisse quand elle n'est pas utilisée
                    }
                    else
                    {
                        bubble1.innerHTML = "";
                    }
                    
                var bubble2 = document.createElement('div');//bubble 2
                    
                    bubble2.className = "bubble";
                    bubble2.style.backgroundColor = se_bubble_bc;

                    if(story[3][storyLocation] != "null")//if there is something in bubble 2
                    {
                        bubble2.innerHTML = story[3][storyLocation];//we display it in bubble 2
                        bubble2.style.padding = "20px"; // on met le padding ici plutôt que dans le CSS parce qu'on veut que le bubble disparaisse quand elle n'est pas utilisée
                    }
                    else
                    {
                        bubble2.innerHTML = "";
                    }
            
            var right_content = document.createElement('div');//Contains Character 1
                right_content.className = "right_content";
                    
                if(story[2][storyLocation] != "null")//if there is a character 1 in this slide
                {
                    right_content.style.backgroundImage = 'url(' + story[2][storyLocation] + ')';
                }
            
            //Text Container: la bande de texte en bas du canvas, où on raconte l'histoire. (on peut cliquer dessus pour faire avancer l'histoire)

            var textContainer = document.createElement('div');
                
                textContainer.id = "textContainer";
                textContainer.innerHTML = story[main_text][storyLocation]//L'histoire à ce point-ci
                
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

            //Find out who's the main character on screen, and only display that character's bar

                // var relevant_char = "0";

                // if((story[4][storyLocation] != "null") && (story[2][storyLocation] != "null"))//if there are two characters on the slide
                // {
                //     //on peut optimiser les lignes ci-dessous, puisque 2 outcomes out of 3 sont les mêmes
                //     if (story[1][storyLocation] != "null")
                //     {
                //         relevant_char = getPersonnage(story[2][storyLocation]);
                //     }
                //     else if (story[3][storyLocation] != "null")
                //     {
                //         relevant_char = getPersonnage(story[4][storyLocation]);
                //     }
                //     else
                //     {
                //         relevant_char = getPersonnage(story[2][storyLocation]);
                //     }
                //     //alert("two characters!");
                // }
                // else if (story[4][storyLocation] != "null")//if there is a character in the left container
                // {
                //     relevant_char = getPersonnage(story[4][storyLocation]);
                //     // alert("left character!");
                // }
                // else if (story[2][storyLocation] != "null")//if there is a character in the right container
                // {
                //     // alert(relevant_char);
                //     relevant_char = getPersonnage(story[2][storyLocation]);
                // }
                // else
                // {
                //     //When there are no characters, we do not need to create the affinity meter
                //     // alert("no character!");
                // }

                // alert(getPersonnage(story[2][storyLocation]).affinity);
                
        //APPEND all the things to the overlay

            //Left infinity meter
            if(story[4][storyLocation] != "null")//if there is a character 1 in this slide, we append the infinity meter to the left
            {
                var relevant_char = getPersonnage(story[4][storyLocation]);

                relevant_char.affinity += story[16][storyLocation];

                if(relevant_char.affinity < 0)
                {
                    relevant_char.affinity = 0;
                }

                affinity_meter2.src = browseAffinity(relevant_char.affinity);//character 2 (left)

                overlay.appendChild(affinity_meter_content2);
                affinity_meter_content2.appendChild(affinity_meter2);
            }
            
            overlay.appendChild(left_content);

            // if(story[1][storyLocation] != "null")//if there is something is bubble 1
            // {
            //     overlay.appendChild(text_gap);
            // }

            overlay.appendChild(middle_content);
                
            // if(story[3][storyLocation] != "null")//if there is something is bubble 2
            // {
            //     overlay.appendChild(text_gap);
            // }

            if(story[special_option][storyLocation] != -2)//we don't want to append the bubble is there is no need for it
            {
                middle_content.appendChild(bubble1);
                middle_content.appendChild(bubble2);
            }
            
            overlay.appendChild(right_content);

            //Right infinity meter
            if(story[2][storyLocation] != "null")//if there is a character 1 in this slide, we append the infinity meter to the right
            {
                var relevant_char = getPersonnage(story[2][storyLocation]);

                relevant_char.affinity += Number(story[16][storyLocation]);//on doit s'assurer que la valeur est un nombre, parce que sinon, parfois, ça fait juste carrément rajouter un zéro

                if(relevant_char.affinity < 0)
                {
                    relevant_char.affinity = 0;
                }

                affinity_meter1.src = browseAffinity(relevant_char.affinity);//character 1 (right)

                overlay.appendChild(affinity_meter_content1);
                affinity_meter_content1.appendChild(affinity_meter1);
            }

            //Text Container (at the bottom)
            if(story[main_text][storyLocation] != "null")//only append if there is there is text to display
            {
                background.appendChild(textContainer);
            }

        // ----- Special Option: Specific state of this slide -----

        if(story[special_option][storyLocation] == -2)// -2 === unlimited navigation is enabled
        {
            physicalLocation = story[5][storyLocation];

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
                    button1.onclick = function(){browseLink(story[special_option][storyLocation], button1)};

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
                    button2.onclick = function(){browseLink(story[special_option][storyLocation], button2)};

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
                    button3.onclick = function(){browseLink(story[special_option][storyLocation], button3)};

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
                    button4.onclick = function(){browseLink(story[special_option][storyLocation], button4)};


            var tooltip1 = document.createElement('span');//span, div, who cares
                tooltip1.className = "tooltiptext";

            var tooltip2 = document.createElement('span');
                tooltip2.className = "tooltiptext";

            var tooltip3 = document.createElement('span');
                tooltip3.className = "tooltiptext";

            var tooltip4 = document.createElement('span');
                tooltip4.className = "tooltiptext";
                        
            // -----physical location tests-----
            if(physicalLocation == locations.entrance)//if we are in the SCHOOL ENTRANCE
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
            else if(physicalLocation == locations.hall1)//If we are in the MAIN HALLWAY
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
            else if(physicalLocation == locations.class1)//If we are in the CLASSROOM 1
            {
                //One possibility
                //1: Main Hallway
                button1.id = locations.hall1;//where the button LEADS
                    tooltip1.innerHTML = "Main Hallway";//where the button LEADS
                
                button1.classList = button1.className + " x-center-y-bottom";

                middle_content.appendChild(button1);
                    button1.appendChild(tooltip1);
            }
            else if(physicalLocation == locations.class2)//If we are in the CLASSROOM 2
            {
                //One possibility
                //1: Main Hallway
                button1.id = locations.hall1;//where the button LEADS
                    tooltip1.innerHTML = "Main Hallway";//where the button LEADS

                button1.classList = button1.className + " x-center-y-bottom";

                middle_content.appendChild(button1);
                    button1.appendChild(tooltip1);
            }
            else if(physicalLocation == locations.hall2)//If we are in the SECOND HALLWAY
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
            else if(physicalLocation == locations.cafeteria)//If we are in the CAFETERIA
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
            else if(physicalLocation == locations.cafeteriaLounge)//If we are in the CAFETERIA LOUNGE
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
            else if(physicalLocation == locations.cafeteriaOutside)//If we are in the Outside Cafeteria
            {
                //One possibility
                //1: Cafeteria Lounge
                button1.id = locations.cafeteriaLounge;
                    tooltip1.innerHTML = "Cafeteria Lounge";

                button1.classList = button1.className + " x-center-y-bottom";

                middle_content.appendChild(button1);
                    button1.appendChild(tooltip1);
            }
            else if(physicalLocation == locations.garden)//If we are in the GARDEN
            {
                //One possibility
                //1: School Entrance
                button1.id = locations.entrance;
                    tooltip1.innerHTML = "School Entrance";

                button1.classList = button1.className + " x-center-y-bottom";

                middle_content.appendChild(button1);
                    button1.appendChild(tooltip1);
            }
            else if(physicalLocation == locations.gym)//If we are in the GYM
            {
                //One possibility
                //1: School Entrance
                button1.id = locations.entrance;
                    tooltip1.innerHTML = "School Entrance";

                button1.classList = button1.className + " x-center-y-bottom";

                middle_content.appendChild(button1);
                    button1.appendChild(tooltip1);
            }
            else if(physicalLocation == locations.dormHall)//If we are in the DORM HALLWAY
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
            else if(physicalLocation == locations.dorm)//If we are in OUR DORM
            {
                //One possibility
                //1: Dorm Hallway
                button1.id = locations.dormHall;
                    tooltip1.innerHTML = "Dorm Hallway";

                button1.classList = button1.className + " x-center-y-bottom";

                middle_content.appendChild(button1);
                    button1.appendChild(tooltip1);
            }
            else if(physicalLocation == locations.dormBathroom)//If we are in the DORM BATHROOM
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
        else if(story[special_option][storyLocation] == -3)// -3 === Form to choose the department
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
                    img.src = "images/game_images/badges/" + ++index + ".png";
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
                                            choice = form_names[index-1];
                                            
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
        else if(story[special_option][storyLocation] == -4)// -4 === Choice of romance or friendship
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
                                                        browseLink(story[special_option][storyLocation], friendship_button);
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
                                                        browseLink(story[special_option][storyLocation], romance_button);
                                                        refreshInterface();
                                                    },
                                                    true);
        }
        else if(story[special_option][storyLocation] == -5)// -5 === multiple choices (la variable links = -5 veut dire qu'on va afficher plusieurs liens -> MAX 4)
        {
            var choiceA = document.createElement('div');
            
                choiceA.id = "choiceA";
                choiceA.innerHTML = story[choiceA_text][storyLocation]//Le choix A
            
                //style
                choiceA.className = "text_container";
                choiceA.style.backgroundColor = se_bottom_border_bc;
            
                //events
                choiceA.onmouseover = function(){highlight(choiceA, se_highlight_bc)};
                choiceA.onmouseout = function(){dehighlight(choiceA, se_bottom_border_bc)};

                choiceA.addEventListener( "click",
                                        function (e)
                                        {
                                            browseLink(story[special_option][storyLocation], choiceA);

                                            //storyLocation++;//goto link story[special_option] -> "-1" prochaine slide, autrement, c'est un link vers la slide numéro "x"
                                            refreshInterface();
                                            // refreshTestContainer();
                                        },
                                        true);

            var choiceB = document.createElement('div');
            
                choiceB.id = "choiceB";
                choiceB.innerHTML = story[choiceB_text][storyLocation]//Le choix B
            
                //style
                choiceB.className = "text_container";
                choiceB.style.backgroundColor = se_bottom_border_bc;
            
                //events
                choiceB.onmouseover = function(){highlight(choiceB, se_highlight_bc)};
                choiceB.onmouseout = function(){dehighlight(choiceB, se_bottom_border_bc)};

                choiceB.addEventListener( "click",
                                        function (e)
                                        {
                                            browseLink(story[special_option][storyLocation], choiceB);

                                            //storyLocation++;//goto link story[special_option] -> "-1" prochaine slide, autrement, c'est un link vers la slide numéro "x"
                                            refreshInterface();
                                            // refreshTestContainer();
                                        },
                                        true);

            var choiceC = document.createElement('div');
            
                choiceC.id = "choiceC";
                choiceC.innerHTML = story[choiceC_text][storyLocation]//Le choix C
            
                //style
                choiceC.className = "text_container";
                choiceC.style.backgroundColor = se_bottom_border_bc;
            
                //events
                choiceC.onmouseover = function(){highlight(choiceC, se_highlight_bc)};
                choiceC.onmouseout = function(){dehighlight(choiceC, se_bottom_border_bc)};

                choiceC.addEventListener( "click",
                                        function (e)
                                        {
                                            browseLink(story[special_option][storyLocation], choiceC);

                                            //storyLocation++;//goto link story[special_option] -> "-1" prochaine slide, autrement, c'est un link vers la slide numéro "x"
                                            refreshInterface();
                                            // refreshTestContainer();
                                        },
                                        true);

            
            if(story[choiceC_text][storyLocation] != "null")
            {
                background.appendChild(choiceC);
            }
            
            background.appendChild(choiceB);
                choiceB.style.transform = "translateY(-" + choiceC.clientHeight + "px)";//choice B needs to be above choice C
            background.appendChild(choiceA);
                choiceA.style.transform = "translateY(-" + (choiceB.clientHeight + choiceC.clientHeight) + "px)";//choice A needs to be above both choice B anc C
        }
        else if(story[special_option][storyLocation] == -6)
        {
            browseLink(story[special_option][storyLocation], textContainer);

            refreshInterface();
        }
        else if(story[special_option][storyLocation] == -7)
        {
            // alert("asdf");

            var customize_character_container = document.createElement('div');

                customize_character_container.id = "customize_character_container";
                // customize_character_container.innerHTML = "asdf";

            var img1 = document.createElement('img');

                img1.src = "images/game_images/sprites/scholar/male/body m.png";
                img1.style.height = "100%";
                img1.className = "customize_character_img";

            var img2 = document.createElement('img');
            
                img2.src = "images/game_images/sprites/scholar/male/eyes m.png";
                img2.style.height = "100%";
                img2.className = "customize_character_img";
                
            var img3 = document.createElement('img');

                img3.src = "images/game_images/sprites/scholar/male/face m.png";
                img3.style.height = "100%";
                img3.className = "customize_character_img";

            var img4 = document.createElement('img');

                img4.src = "images/game_images/sprites/scholar/male/hair 1 m.png";
                img4.style.height = "100%";
                img4.className = "customize_character_img";

            var img5 = document.createElement('img');

                img5.src = "images/game_images/sprites/scholar/male/lips m.png";
                img5.style.height = "100%";
                img5.className = "customize_character_img";

            var img6 = document.createElement('img');
            
                img6.src = "images/game_images/sprites/scholar/male/underwear base 1 m.png";
                img6.style.height = "100%";
                img6.className = "customize_character_img";

            background.appendChild(customize_character_container);
            
            // var canvas = document.getElementById("customize_character_container");
            // var canvas = customize_character_container;
            // var context = canvas.getContext("2d");
        
            // context.drawImage(img1, 0, 0);
        
            // context.fillStyle = "#FF0000";
            // context.fillRect(0,0,150,75);
            
            // imageObj.className = "";
            // imageObj.src = "images/game_images/sprites/scholar/male/body m.png";
            /*
                https://www.w3schools.com/graphics/tryit.asp?filename=trycanvas_image

                https://www.w3schools.com/graphics/canvas_reference.asp

                https://stackoverflow.com/questions/6268856/image-png-color-css-or-html-or-javascript

                https://stackoverflow.com/questions/15504370/html5-canvas-drawimage-not-always-drawing-the-image
            */


                // customize_character_container.appendChild(imageObj);
                customize_character_container.appendChild(img1);
                customize_character_container.appendChild(img3);
                customize_character_container.appendChild(img2);
                customize_character_container.appendChild(img4);
                customize_character_container.appendChild(img5);
                customize_character_container.appendChild(img6);
        }
        else//if location or anything else is not enabled
        {
            //nothing for now
        }

        //EVENT LISTENER for the Text Container
            textContainer.addEventListener( "click",
            function (e)
            {
                browseLink(story[special_option][storyLocation], textContainer);

                refreshInterface();
                // refreshTestContainer();//no need for this, it was only for debugging purposes
            },
            true);
    }
}

// -----START DEBUGGING TOOLS-----
    function refreshTestContainer()// affiche des données par rapport à la prev/current/next slide
    {
        var container1 = document.getElementById('testContainer1');
        
        var text = "";
        
        container1.innerHTML = "";
        /*
        //Previous location(
        text += "<b>Previous location (" + (storyLocation - 1) + ")</b><br>";
        //alert(story[main_text][storyLocation-1]);
        text += "Story Text: " + story[main_text][storyLocation-1] + "<br>";
        text += "Visited: " + story[17][storyLocation - 1] + "<br>";
        // text += "Bubble 1: " + story[1][storyLocation-1] + "<br>";
        // text += "Character 1: " + story[2][storyLocation-1] + "<br>";
        // text += "Bubble 2: " + story[3][storyLocation-1] + "<br>";
        // text += "Character 2: " + story[4][storyLocation-1] + "<br>";
        text += "Location: " + story[5][storyLocation-1] + "<br>";
        text += "Link: " + story[special_option][storyLocation-1] + "<br>";11
        text += "<br>";
        */
        /*
        //Current Location
        text += "<b>Current location (" + storyLocation + ")</b><br>";
        text += "Story Text: " + story[main_text][storyLocation] + "<br>";
        text += "Visited: " + story[17][storyLocation] + "<br>";
        //alert(story[main_text][storyLocation] + "<br>");
        // text += "Bubble 1: " + story[1][storyLocation] + "<br>";
        // text += "Character 1: " + story[2][storyLocation] + "<br>";
        // text += "Bubble 2: " + story[3][storyLocation] + "<br>";
        // text += "Character 2: " + story[4][storyLocation] + "<br>";
        text += "Location: " + story[5][storyLocation] + "<br>";
        text += "Link: " + story[special_option][storyLocation] + "<br>";
        text += "Choice A: " + story[choiceA_text][storyLocation] + "<br>";
        text += "Choice B: " + story[choiceB_text][storyLocation] + "<br>";
        text += "Choice C: " + story[choiceC_text][storyLocation] + "<br>";
        text += "<br>";
        */
        /*
        //Next Location
        text += "<b>Next location (" + (storyLocation + 1) + ")</b><br>";
        text += "Story Text: " + story[main_text][storyLocation+1] + "<br>";
        // text +=  "Bubble 1: " + story[1][storyLocation+1] + "<br>";
        // text +=  "Character 1: " + story[2][storyLocation+1] + "<br>";
        // text +=  "Bubble 2: " + story[3][storyLocation+1] + "<br>";
        // text +=  "Character 2: " + story[4][storyLocation+1] + "<br>";
        text +=  "Location: " + story[5][storyLocation+1] + "<br>";
        text +=  "Link: " + story[special_option][storyLocation+1] + "<br>";
        text += "<br>";
        */

        container1.innerHTML = text;

        var container2 = document.getElementById('testContainer2');

        var index = 0;

        text = "";

        // for (var i = 0; i < story[index].length; i++)
        // {
        //     if(storyLocation == i)
        //     {
        //         //alert(story[index][i]);
        //         text += '<b>' + i + " - " + story[index][i] + "</b><br>";
        //     }
        //     else
        //     {
        //         text += i + " - " + story[index][i] + "<br>";
        //     }
        // }

        container2.innerHTML = text;
    }
// -----END DEBUGGING TOOLS-----

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

    obj_cont.appendChild(progressBarContainer);
        progressBarContainer.appendChild(logo);
        progressBarContainer.appendChild(progressBar);
    
    var progress = storyLocation/story[0].length*100;
    
    // progressBar.innerHTML = "";
    progressBar.innerHTML = Math.round(progress) + "% <br>";
    // progressBar.innerHTML = /*"Chapter progress: " +*/ Math.round(progress * 10) / 10 + "% <br>";//pour avoir 1 décimale

    progressBar.style.width = progress + "%";
}

/* à améliorer en fonction de l'histoire parcourue (seulement s'il est possible de faire 1-2-3-4-5-12-6-7-30-15-16-17) */
function findLatestObjective(obj_cont)//returns the last time there was a new objective
{
    var POI = -1;

    for(var i = 0; i < storyLocation; i++)
    {
        if(story[6][i] == -2)
        {
            POI = i;
        }
    }

    if(story[13][POI] != "null")//if there is a new objective in choice A
    {
        obj_cont.innerHTML = story[13][POI];
    }
    else
    {
        POI = -1;
    }

    if(story[14][POI] != "null")//if there is a new objective in choice B
    {
        obj_cont.innerHTML += "<br>" + story[14][POI];
    }

    if(story[15][POI] != "null")//if there is a new objective in choice C
    {
        obj_cont.innerHTML += "<br>" + story[15][POI];
    }

    if(POI == -1)
    {
        obj_cont.innerHTML = "You have no objectives for now.";   
    }
}

function refreshObjectiveContainer()
{
    var obj_cont = document.getElementById('objectiveContainer');

    obj_cont.innerHTML = "";
    
    if(story[6][storyLocation] == -2)
    {
        if(story[13][storyLocation] != "null")//if there is a new objective in choice A
        {
            obj_cont.innerHTML = story[13][storyLocation];
        }
        else
        {
            findLatestObjective(obj_cont);//if there's nothing in choice A, then there is no new objective
        }
    
        if(story[14][storyLocation] != "null")//if there is a new objective in choice B
        {
            obj_cont.innerHTML += "<br>" + story[14][storyLocation];
        }
    
        if(story[15][storyLocation] != "null")//if there is a new objective in choice C
        {
            obj_cont.innerHTML += "<br>" + story[15][storyLocation];
        }
    }
    else
    {
        findLatestObjective(obj_cont);
    }

    refreshProgressBar();

    /*  pour pouvoir afficher le character qui est à l'écran
        var char_1 = getPersonnage(story[2][storyLocation]);
        var char_2 = getPersonnage(story[4][storyLocation]);


        if(char_1 + "" == "undefined")//if it is undefined, do nothing
        {
        }
        else
        {
            obj_cont.innerHTML += "<br>Character on page: " + char_1.name;
        }
    */

    //We need to show all characters as a round image
    obj_cont.innerHTML += "<br>";
    
    var round_img_path = "images/game_images/sprites/round_portraits/";
    
    var char_container = document.createElement('div');
    
        char_container.id = "char_container";

    var char_info_container = document.createElement('div');

        char_info_container.id = "char_info_container";
        char_info_container.className = "char_info_container_invisible";
    
        // char_info_container.id = "char_container";
    
    obj_cont.appendChild(char_container);
    obj_cont.appendChild(char_info_container);
    
    for(var i = 0; i < charList.length; i++)//on affiche tous les characters, et on mets un Event Listener pour quand on hover dessus
    {
        var img = document.createElement('img');
        
        img.id = charList[i];
        img.className = "game_char_portraits";
        img.src = round_img_path + charList[i] + ".jpg";

        char_container.appendChild(img);

        // alert(tadashi.affinity);
        // il y a un bug avec l'affinité de Tadashi

        img.addEventListener("mouseover",
        function (e)
        {
            var x = this.id;
            var char = getPersonnageFromName(x);
            
            charName = (char.name + "").toLowerCase();

            // alert(charName);
            // alert(char.name + "'s Affinity: " + char.affinity);

            char_info_container.innerHTML = "<b>My affinity with " + char.name + ": </b>" + char.affinity;
            char_info_container.innerHTML += "<br><br><b> Likes: </b>" + char.likes;
            char_info_container.innerHTML += "<br><br><b> Dislikes: </b>" + char.dislikes;
            // char_info_container.style.left = document.getElementById(charName).style.left + "";

            // alert(document.getElementById(charName).top);

            char_info_container.className = "";
        },
        true);
        /*
        img.addEventListener("mouseout",
        function (e)
        {
            var x = this.id;
            var char = getPersonnageFromName(x);
            
            // alert(char.name + "'s Affinity: " + char.affinity);

            char_info_container.innerHTML = "";

            char_info_container.className = "char_info_container_invisible";
        },
        true);*/
    }
}

function highlight(element, highlightedColor)
{
    element.style.backgroundColor = highlightedColor;
}

function dehighlight(element, baseColor)//we should call this function lowlight to make it a thing
{
    element.style.backgroundColor = baseColor;
}

//This function is to affect what happens when we click on the text container depending on the link
function browseLink(link, element)//link is the link of the story (story[special_option][storyLocation]), element is the ID of the button on which the user clicked (which should be the location where the button is going)
{
    story[17][storyLocation] = true;

    var physicalLocation = story[5][storyLocation];

    if(link == -1)//si on va à la prochaine slide
    {
        storyLocation++;
    }
    else if(link == -2)//activate navigation
    {
        var changelocation = true;

        if(element.id == "textContainer")//si on a cliqué sur le text container
        {
            if(story[7][storyLocation] == 0)//si l'objectif est null, on peut poursuivre l'histoire
            {
                storyLocation++;//we continue the story once we are done
            }
            else//sinon, ça veut dire que l'objectif est d'aller dans un endroit particulier de l'école, donc on ne peut pas cliquer sur le text container pour y arriver
            {
                changelocation = false;
            }
        }
        else if(element.id == locations.entrance)//si on est dans le entrance
        {
            if(story[7][storyLocation] == 1)//objectif = aller dans entrance
            {
                storyLocation++;//we continue the story once we are done
            }
        }
        else if(element.id == locations.hall1)//si on est dans le hall 1
        {
            if(story[7][storyLocation] == 2)//objectif = aller dans hall 1
            {
                // alert("Objective completed! You are in hall 1!");
                // story[5][storyLocation] = element.id;
                storyLocation++;//we continue the story once we are done
            }
        }
        else if(element.id == locations.class1)//si on est dans la classe 1
        {
            if(story[7][storyLocation] == 3)//objectif = aller dans classroom 1
            {
                // alert("Objective completed! You are in classroom 1!");
                
                // story[5][storyLocation] = element.id;
                storyLocation++;//we continue the story once we are done

                //Mettre un message pour dire bravo "Objective complete!"
            }
        }
        else if(element.id == locations.class2)//si on est dans le entrance
        {
            if(story[7][storyLocation] == 4)//objectif = aller dans entrance
            {
                storyLocation++;//we continue the story once we are done
            }
        }
        else if(element.id == locations.hall2)//si on est dans le entrance
        {
            if(story[7][storyLocation] == 5)//objectif = aller dans entrance
            {
                storyLocation++;//we continue the story once we are done
            }
        }
        else if(element.id == locations.cafeteria)//si on est dans le entrance
        {
            if(story[7][storyLocation] == 6)//objectif = aller dans entrance
            {
                storyLocation++;//we continue the story once we are done
            }
        }
        else if(element.id == locations.cafeteriaLounge)//si on est dans le entrance
        {
            if(story[7][storyLocation] == 7)//objectif = aller dans entrance
            {
                storyLocation++;//we continue the story once we are done
            }
        }
        else if(element.id == locations.cafeteriaOutside)//si on est dans le entrance
        {
            if(story[7][storyLocation] == 8)//objectif = aller dans entrance
            {
                storyLocation++;//we continue the story once we are done
            }
        }
        else if(element.id == locations.garden)//si on est dans le entrance
        {
            if(story[7][storyLocation] == 9)//objectif = aller dans entrance
            {
                storyLocation++;//we continue the story once we are done
            }
        }
        else if(element.id == locations.gym)//si on est dans le entrance
        {
            if(story[7][storyLocation] == 10)//objectif = aller dans entrance
            {
                storyLocation++;//we continue the story once we are done
            }
        }
        else if(element.id == locations.dormHall)//si on est dans le entrance
        {
            if(story[7][storyLocation] == 11)//objectif = aller dans entrance
            {
                storyLocation++;//we continue the story once we are done
            }
        }
        else if(element.id == locations.dorm)//si on est dans le entrance
        {
            if(story[7][storyLocation] == 12)//objectif = aller dans entrance
            {
                storyLocation++;//we continue the story once we are done
            }
        }
        else if(element.id == locations.dormBathroom)//si on est dans le entrance
        {
            if(story[7][storyLocation] == 13)//objectif = aller dans entrance
            {
                storyLocation++;//we continue the story once we are done
            }
        }
        else
        {
            // story[5][storyLocation] = element.id;
        }
        
        if(element.id != "textContainer")
        {
            if(changelocation){story[5][storyLocation] = element.id;}
        }
        
        refreshInterface();
    }
    else if(link == -3)//Acts like a submit button
    {
        if(choice == "null")
        {
            //alert("Please choose a department!");
        }
        else
        {
            // alert('Your form was successfully sumbitted!');
            // alert(choice);
            storyLocation++;//we continue the story once we are done
        }
    }
    else if(link == -4)//friendship/romance buttons are enabled
    {
        if(element.id == "friendship_button")
        {
            // alert("friendship -> " + story[8][storyLocation]);
            storyLocation = story[8][storyLocation];//on fait que la location devienne le numéro du link
        }
        else if(element.id == "romance_button")
        {
            // alert("romance -> " + story[9][storyLocation]);
            storyLocation = story[9][storyLocation];//on fait que la location devienne le numéro du link
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
            storyLocation = story[choiceA_link][storyLocation];//on fait que la location devienne le numéro du link
        }
        else if(element.id == "choiceB")
        {
            storyLocation = story[choiceB_link][storyLocation];//on fait que la location devienne le numéro du link
        }
        else if(element.id == "choiceC")
        {
            storyLocation = story[choiceC_link][storyLocation];//on fait que la location devienne le numéro du link
        }
    }
    else if(link == -6)//Looks at links in the past to dermine where to go next
    {
        var pointofinterest = story[18][storyLocation];
        var landingpoint = story[19][storyLocation];

        //alert(pointofinterest);
        //alert(landingpoint);
        
        if(story[17][pointofinterest]) // if we visited the slide that is the "point of interest".
        {
            // alert("you have visited " + pointofinterest);
            // alert("therefore, you are going to " + landingpoint);
            //alert("storylocation was " + storyLocation);
            storyLocation = landingpoint;
            //alert("storylocation is now " + storyLocation);
        }
        else//if not, we go to the next slide
        {
            storyLocation++
        }
    }
    else//otherwise, it's just a direct link to somewhere else in the story
    {
        storyLocation = story[special_option][storyLocation];//on fait que la location devienne le numéro du link
    }
}

function refreshScholar()
{
    var scholar_container = document.createElement('div');
        scholar_container.id = "scholar_sprite";

        scholar_container.style.position = "fixed"; 
        scholar_container.style.width =  "11%";
        scholar_container.style.right = "0px";
        // scholar_container.style.transform = "transform: translateX(100%);"

    var scholar_img = document.createElement('img');
        scholar_img.style.width = "100%";

        scholar_img.src = "images/game_images/sprites/scholar/male/body m TEMP.png"

    document.getElementById("body").appendChild(scholar_container);
        scholar_container.appendChild(scholar_img);
}

function drawImage(imageObj)
{
    // var canvas = document.getElementById("customize_character_container");
    // var context = canvas.getContext("2d");

    // // context.fillStyle = "#FF0000";
    // // context.fillRect(0,0,150,75);

    // var imgX = document.createElement('img');
    //     imgX.className = "customize_character_img";
    //     imgX.src = "images/game_images/sprites/scholar/male/body m.png";

    // context.drawImage(imgX, 0, 0);


    // var destX = 0; //update these to set the image position
    // var destY = 0;

    // context.drawImage(imageObj, destX, destY);

    // var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    // var data = imageData.data;

    // for (var i = 0, n = data.length; i < n; i += 4)
    // {
    //     if(data[i] == 0 && data[i+1] == 0 && data[i+2] ==0)//if black, ie. red, green, and blue are all 0
    //     { 
    //         //switch to white
    //         data[i] = 255; //red
    //         data[i+1] = 255; //green
    //         data[i+2] = 255; //blue
    //     }
    //     // i+3 is alpha (the fourth element)
    // }

    // // overwrite original image
    // context.putImageData(imageData, 0, 0);
}

initializeInterface();

/*

    http://stackoverflow.com/questions/8865458/how-to-align-text-vertically-center-in-div-with-css

    Useful Shortcuts:
        Move Code:                  Alt+Up/Down
        Comment Code Block:         Ctrl+K+C/Ctrl+K+U
        Peek Definition:            Alt+F12
        Change TAB Function:         Ctrl+M
        
        http://www.dofactory.com/reference/visual-studio-shortcuts

    function Arraytest(id)
    {
        var i;
        var j;

        var text = "";
        var test = [];

        const c = 5; 
        
        for (i = 0; i < c; i++)
        {
            test[i]= new Array();
            //test[i][i] = "works " + i;
            //text += test[i][i] + "<br>";
            text += "<br>";
            
            for (j = 0; j < c; j++)
            {
                test[i][j] = "yes " + j;
                text += test[i][j] + "<br>";
            }
        }

        document.getElementById(id).innerHTML = text;
    }
*/