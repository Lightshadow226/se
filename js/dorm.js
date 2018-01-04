/*

Create the Dorm Change appearance on Dorm.php

Created on December 29, 2017

*/

var container = document.getElementById('dorm');

function raz()//remise à zéro
{
    container.innerHTML = "";

    var base = document.createElement('div');
    
        base.className = "dorm_base_right_container";

    var img = document.createElement('img');
        
        img.className = "img";
        img.src = "images/game_images/dorm/dorm.jpg";
        
    container.appendChild(base);
        base.appendChild(img);

    /*
    mettre des higlights sur le wardrobe, le laptop, le sac, et les livres

    idées:
    http://www.netzgesta.de/mapper/#
    http://www.netzgesta.de/mapper/world_map.svg#
    https://en.wikipedia.org/wiki/Scalable_Vector_Graphics    
    https://www.sitepoint.com/highlight-image-map-area-hotspots-jquery/

    */

}

function pushVariablesToIMGCreator()
{
    var Character_handle = document.getElementById("Character_handle");

        Character_handle.innerHTML = '';//empty the db handler first, to create all the elements only once
        
    var character_handle_sex = document.createElement('input');
        character_handle_sex.id = "Character_handle_sex";
        character_handle_sex.type = "text";
        character_handle_sex.value = "1";
        character_handle_sex.innerHTML = character_handle_sex.value;

    var character_handle_skincolor = document.createElement('input');
        character_handle_skincolor.id = "Character_handle_skincolor";
        character_handle_skincolor.type = "text";
        character_handle_skincolor.value = "1";
        character_handle_skincolor.innerHTML = character_handle_skincolor.value;

    Character_handle.appendChild(character_handle_sex);
    Character_handle.appendChild(character_handle_skincolor);
    
    // alert($('#character_handle_sex').val());
    // alert($('#character_handle_skincolor').val());
    // alert(document.getElementById("character_handle_sex").innerHTML);

    var sex = $('#Character_handle_sex').val();
    var skincolor = $('#Character_handle_skincolor').val();
    
    $(function()
    {
        $.post('characterGenerator.php', {
            'sex': sex,
            'skincolor': skincolor
        }, function(data, result, xhr)
        {
            // alert(result);
            document.getElementById('right_container').innerHTML = data; 
            // $.get('characterGenerator.php');
            // document.getElementById('img_character').src = 'characterGenerator.php'; 
        });
    });
}

function cleardiv()
{
    //document.getElementById('img_character').src = "images/game_images/sprites/main10/tadashi/happy.png"; 
    document.getElementById('right_container').innerHTML = "";
    //$.get('characterGenerator.php');
    //$('#a_div').load('characterGenerator.php');
    // document.getElementById('img_character').src = 'characterGenerator.php';
}

$(function wardrobe()
{
    raz();
    
    //BASIC OVERLAY

    var overlay = document.createElement('div');
    
        overlay.id = "dorm_overlay";

    var img = document.createElement('img');
        
        img.className = "img";
        img.src = "images/game_images/dorm/dorm_ward.png";
        
    var overlay_form = document.createElement('div');

        overlay_form.id = "overlay_form";
        overlay_form.className = "flex-container";    

    container.appendChild(overlay);
        overlay.appendChild(img);//the image of the "highlight"
        overlay.appendChild(overlay_form);//the "customize your appearance" form

    //DETAILS

    //1. title

    var title = document.createElement('h1');
    
        title.innerHTML = "Customize Your Appearance";

    //2. thumbnails (t-shirt, pants, shoes, etc.)

    var left_container = document.createElement('div');//left
    
        left_container.className = "flex-panel2";
        left_container.style.height = "100%";
        left_container.style.position = "relative";

        var selector_line = document.createElement('div');//the selector to the left, where we choose the clothes, etc.

            selector_line.className = "flex-container"

            var category1 = document.createElement('div')

                category1.innerHTML = "1";

            var category2 = document.createElement('div')

                category2.innerHTML = "2";

            var category3 = document.createElement('div')

                category3.innerHTML = "3";

            var category4 = document.createElement('div')

                category4.innerHTML = "4";

        var selector_choices_line1 = document.createElement('div');//the selector to the left, where we choose the clothes, etc.

            selector_choices_line1.className = "flex-container selector_choices";

            var choiceA = document.createElement('div')

                choiceA.innerHTML = "POST";
                choiceA.className = "button pink_button";
                choiceA.style.webkitUserSelect = "none";
                choiceA.style.cursor = "pointer";

            var choiceB = document.createElement('div')

                choiceB.innerHTML = "Clear IMG";
                choiceB.className = "button pink_button";
                choiceB.style.webkitUserSelect = "none";
                choiceB.style.cursor = "pointer";

            var choiceC = document.createElement('div')

                choiceC.innerHTML = "CHOICE C";

            var choiceD = document.createElement('div')

                choiceD.innerHTML = "CHOICE D";

        var selector_choices_line2 = document.createElement('div');//the selector to the left, where we choose the clothes, etc.

            selector_choices_line2.className = "flex-container selector_choices";

            var choiceE = document.createElement('div')

                choiceE.innerHTML = "CHOICE E";

            var choiceF = document.createElement('div')

                choiceF.innerHTML = "CHOICE F";

            var choiceG = document.createElement('div')

                choiceG.innerHTML = "CHOICE G";

            var choiceH = document.createElement('div')

                choiceH.innerHTML = "CHOICE H";
                //choiceH.id = "CHOICEH";//TODO: REMOVE THIS LINE

        var button_container = document.createElement('div');

            button_container.style.position = "absolute";
            button_container.className = "x-right-y-bottom-real";

            var button_reset = document.createElement('div');
            
                button_reset.className = "button pink_button";//style="margin:20px;"
                button_reset.style.margin = "10px";
                button_reset.innerHTML = "Reset";
            
            var button_save = document.createElement('div');
            
                button_save.className = "button pink_button";
                button_save.style.margin = "10px";
                button_save.innerHTML = "Save";
            
        var right_container = document.createElement('div');//the character image container

            right_container.id = "right_container";
            right_container.className = "flex-panel";
            right_container.style.height = "100%";//initially 346

        var img_character = document.createElement('img');

            img_character.id = "img_character";
            // img_character.src = 'characterGenerator.php';
            img_character.style.height = "100%";//initially 346

    overlay_form.appendChild(left_container);
        left_container.appendChild(title);
        left_container.appendChild(selector_line);
            selector_line.appendChild(category1);
            selector_line.appendChild(category2);
            selector_line.appendChild(category3);
            selector_line.appendChild(category4);

        left_container.appendChild(selector_choices_line1);
            selector_choices_line1.appendChild(choiceA);
            selector_choices_line1.appendChild(choiceB);
            selector_choices_line1.appendChild(choiceC);
            selector_choices_line1.appendChild(choiceD);
        
        left_container.appendChild(selector_choices_line2);
            selector_choices_line2.appendChild(choiceE);
            selector_choices_line2.appendChild(choiceF);
            selector_choices_line2.appendChild(choiceG);
            selector_choices_line2.appendChild(choiceH);

        left_container.appendChild(button_container);
            button_container.appendChild(button_reset);
            button_container.appendChild(button_save);
    
    overlay_form.appendChild(right_container);
        right_container.appendChild(img_character);

    //3. once we click on the thumbnail, we see all shirts, all pants, etc.

    
    choiceA.addEventListener("click", 
    function(e)
    {
        pushVariablesToIMGCreator();
    });

    choiceB.addEventListener("click", 
    function(e)
    {
        cleardiv();
    });

    //4. clicking on one of the shirt should automatically update the image on the right/left of the field

    //5. we need to be able to save the presets

});