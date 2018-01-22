/*

Create the Character Scroll for the Characterpage

*****NE PAS METTRE LES ARRAYS DANS VARIABLES.JS*****

*/

var relationship_enabled = true;

var lines_container = document.getElementById("character_lines_container");

var button_container = document.getElementById("button_container_horizontal");

const character_portraits_path = "images/general/characters/characters_portraits/";

/**********Variables**********/
    /*Index Value
    0: Alistair
    1: Axel
    2: Claire
    3: Ellie
    4: Karolina
    5: Neha
    6: Raquel
    7: Tadashi
    8: Tegan
    9: Tyler
    */

/*****NE PAS METTRE LES ARRAYS DANS VARIABLES.JS*****/

    

$(function create_interface()
{
    const qty_main_10 = 10;//de 0 à 9 
    const qty_classmates = 2;//de 9 à 9 (parce qu'il n'y en a pas encore)
    const qty_others = 1;//de 9 à 9 (parce qu'il n'y en a pas encore)

    var main_10_button = document.createElement('div');//de 0 à 9

        main_10_button.className = "button yellow_button";
        main_10_button.style.margin = "10px";
        main_10_button.innerHTML = "Main 10";

        main_10_button.addEventListener("click", function(e){refresh_lines(0, qty_main_10); activate(main_10_button, classmates_button, others_button);})

    var classmates_button = document.createElement('div');

        classmates_button.className = "button yellow_button";
        classmates_button.style.margin = "10px";
        classmates_button.innerHTML = "Classmates";
        
        classmates_button.addEventListener("click", function(e){refresh_lines(qty_main_10, qty_main_10 + qty_classmates); activate(classmates_button, main_10_button, others_button);})

    var others_button = document.createElement('div');

        others_button.className = "button yellow_button";
        others_button.style.margin = "10px";
        others_button.innerHTML = "Others";

        others_button.addEventListener("click", function(e){refresh_lines(qty_main_10 + qty_classmates, qty_main_10 + qty_classmates + qty_others); activate(others_button, main_10_button, classmates_button);})

    button_container.appendChild(createFlexPanel());
    button_container.appendChild(main_10_button);
    button_container.appendChild(classmates_button);
    button_container.appendChild(others_button);
    button_container.appendChild(createFlexPanel());

    main_10_button.click();
    //refresh_lines(0, qty_main_10);//on affiche les 10 originaux initialement
});

function activate(activatedButton, button2, button3)//highlights the "activatedButton" in pink and dehighlights the other buttons in yellow
{
    activatedButton.className = "button yellow_button yellow_button_activated";
    button2.className = "button yellow_button";
    button3.className = "button yellow_button";
}

function refresh_lines(beg, end)
{
    lines_container.innerHTML = "";

    for(var i = beg; i < end; i++)
    {
        create_line(i);
    }
}

function create_line(index)
{
    var line = document.createElement('div');

        line.className = "line line-big";
        
    var line_left_content = document.createElement('div');

        line_left_content.className = "line_left_content";

        var char_img = document.createElement('img');

            char_img.src = character_portraits_path + characters[index] + ".png";
            char_img.className = "character_img";
            char_img.style.maxHeight = "350px";

    var line_middle_content = document.createElement('div');

        line_middle_content.className = "line_middle_content";

        var chara_desc = document.createElement('div');

            var desc_header = '<h4 class="center" style="text-transform: uppercase; color: #EE4C5E">' + first_name[index] + '</h4>';
            //var desc_fullname = '<p class="chara_list"><b>Full name: </b>' + fullname[index] + '</p>';
            var desc_birthday = '<p class="chara_list"><b>Birthday: </b>' + birthday[index] + '</p>';
            var desc_likes = '<p class="chara_list"><b>Likes: </b>' + likes[index] + '</p>';
            var desc_dislikes = '<p class="chara_list"><b>Dislikes: </b>' + dislikes[index] + '</p><br>';
            var desc_description = '<p class="chara_long_desc">' + fulldescription[index] + '</p>';

        chara_desc.innerHTML = desc_header + /*desc_fullname + */desc_birthday + desc_likes + desc_dislikes + desc_description;

        var school_files_button = document.createElement('div');

            school_files_button.className = "button school_files_button x-left-y-bottom";
            school_files_button.innerHTML = "School File";

    var line_right_content = document.createElement('div');

        line_right_content.className = "line_right_content";

        var inf_meter = document.createElement('img');

            var percentage = getPersonnageFromName(characters[index]).affinity;
            inf_meter.src = browseAffinity(percentage); //"images/game_images/infinity_meter/states/se-infinity-40-43.png";
            inf_meter.className = "inf_meter";

        var percentage_number = document.createElement('div');

            percentage_number.innerHTML = percentage + "%";
            percentage_number.className = "percentage_number";

    lines_container.appendChild(line);
        line.appendChild(line_left_content);
            line_left_content.appendChild(char_img);
        line.appendChild(line_middle_content);
            line_middle_content.appendChild(chara_desc);
            line_middle_content.appendChild(school_files_button);
        line.appendChild(line_right_content);
            line_right_content.appendChild(inf_meter);
            line_right_content.appendChild(percentage_number);
    
    // alert(line.clientHeight);
}

pullVariablesFromDB();