/*

Create the Dorm Change appearance on Dorm.php

Created on December 29, 2017

*/

var container = document.getElementById('dorm');

//var sex = [0, 1];
//var sex_img = ["../profile/customization/female.png", "../profile/customization/male.png"];

//THE CATEGORY TYPES
var iconsPATH = "_new_images_folder/game/dorm/dollmaker/icons/";
var extension = ".png";

//LES CHOIX (sex, yeux, hair, etc.)
var screens =
[
    iconsPATH + "sex" + extension,
    iconsPATH + "eyes" + extension,
    iconsPATH + "haircolor" + extension,
    iconsPATH + "hairstyle" + extension,
    iconsPATH + "shoes" + extension,
    iconsPATH + "skin" + extension
];

//LES CHOIX (HOVER)
var screens_hover =
[
    iconsPATH + "sex_hover" + extension,
    iconsPATH + "eyes_hover" + extension,
    iconsPATH + "haircolor_hover" + extension,
    iconsPATH + "hairstyle_hover" + extension,
    iconsPATH + "shoes_hover" + extension,
    iconsPATH + "skin_hover" + extension
];

//LES CHOIX (DB)
var screens_DB = ["Sex", "Eyes", "Hair Color", "Hair Style", "Shoes", "Skin Color"];
var currentScreen = screens[0];//est === à l'adresse (avec .png and shit)

//THE IMAGES THAT APPEAR FOR EVERY ITEM
var itemsPATH = "_new_images_folder/game/dorm/dollmaker/";

var sex_img =
[
    itemsPATH + "sex/female" + extension,
    itemsPATH + "sex/male" + extension
];

var eyes_img =
[
    itemsPATH + "eyes/blue" + extension,
    itemsPATH + "eyes/green" + extension,
    itemsPATH + "eyes/grey" + extension,
    itemsPATH + "eyes/brown" + extension
];

var skin_color =
[
    itemsPATH + "skin/white" + extension,
    itemsPATH + "skin/olive" + extension,
    itemsPATH + "skin/asian" + extension,
    itemsPATH + "skin/brown" + extension,
    itemsPATH + "skin/black" + extension
];

var hair_color =
[
    itemsPATH + "haircolor/blonde" + extension,
    itemsPATH + "haircolor/brown" + extension,
    itemsPATH + "haircolor/black" + extension,
    itemsPATH + "haircolor/red" + extension
];

var hair_style_male =
[
    itemsPATH + "hairstyles/m1" + extension,
    itemsPATH + "hairstyles/m2" + extension,
    itemsPATH + "hairstyles/m3" + extension,
    itemsPATH + "hairstyles/m4" + extension
];

var hair_style_female =
[
    itemsPATH + "hairstyles/f1" + extension,
    itemsPATH + "hairstyles/f2" + extension,
    itemsPATH + "hairstyles/f3" + extension,
    itemsPATH + "hairstyles/f4" + extension
];

var shoes_img =
[
    itemsPATH + "shoes/shoes1" + extension,
];

//DATABASE PUSH FORMAT
// var sex_values = [0, 1];
// var eyes_values = [];

//

function raz()//remise à zéro
{
    pullVariablesFromDB();

    var wardrobe = document.getElementById('dorm-wardrobe');
    var bag = document.getElementById('dorm-bag');
    var laptop = document.getElementById('dorm-laptop');
    var book = document.getElementById('dorm-book');

    var wardrobeIMG = "images/game_images/dorm/tinted_ward.png";
    var bagIMG = "images/game_images/dorm/tinted_bag.png";
    var laptopIMG = "images/game_images/dorm/tinted_pc.png";
    var bookIMG = "images/game_images/dorm/tinted_book.png";

    container.innerHTML = "";

    var base = document.createElement('div');
    
        base.className = "dorm_base_right_container";

    var img = document.createElement('img');
        
        img.className = "img";
        img.src = "images/game_images/dorm/dorm.jpg";

    var overlay = document.createElement('div');
        overlay.id = "dorm_overlay";

    container.appendChild(base);
        base.appendChild(img);
        base.appendChild(bag);
        base.appendChild(book);
        base.appendChild(wardrobe);
        base.appendChild(laptop);
    container.appendChild(overlay);

    //WARDROBE
        wardrobe.onmouseover = function(){fillOverlay(container, overlay, wardrobeIMG, "Wardrobe", wardrobe)};
        wardrobe.onmouseout = function(e){clearOverlay(overlay, wardrobe)};

    //BAG
        bag.onmouseover = function(){fillOverlay(container, overlay, bagIMG, "City Map", bag)};
        bag.onmouseout = function(e){clearOverlay(overlay, bag)};

    //LAPTOP
        laptop.onmouseover = function(){fillOverlay(container, overlay, laptopIMG, "Game", laptop)};
        laptop.onmouseout = function(e){clearOverlay(overlay, laptop)};

    //BOOK
        book.onmouseover = function(){fillOverlay(container, overlay, bookIMG, "Illustrations", book)};
        book.onmouseout = function(e){clearOverlay(overlay, book)};
}

function fillOverlay(container, overlay, newImage, linkName, tooltipParent)
{
    var img = document.createElement('img');
    img.id="hover";
    img.className = "img";
    img.src = newImage;

    container.appendChild(overlay);
        overlay.appendChild(img);//the image of the "highlight"

    var tooltip = document.createElement('span');//span, div, who cares
        tooltip.className = "dorm-tooltiptext";
        tooltip.innerHTML = linkName;

    tooltipParent.appendChild(tooltip);
}

function clearOverlay(overlay, item)
{
    overlay.innerHTML="";
    item.innerHTML="";
}

function refreshImg()
{
    $.ajax('profile/scholar_sprite.php');//amazingly faster
    $.get('profile/scholar_sprite.php');//amazingly faster

    document.getElementById('img_character').src = 'profile/scholar_sprite.php';
    document.getElementById('img_character').onload = function()
    {
        document.getElementById('small-loader-wrapper').className = "small-loaded";    
    };
}

function wardrobe()
{
    raz();//remise à zéro + PULL from DB
    var reset_params = user;//we save the user as it is before customization
    
    //BASIC OVERLAY
    var overlay = document.createElement('div');
        overlay.id = "dorm_overlay_wardrobe";

    var img = document.createElement('img');
        
        img.className = "img";
        img.src = "images/game_images/dorm/tinted_ward.png";
        
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
                selector_line.className = "flex-container";

                var category1FLEX = document.createElement('div');
                    category1FLEX.className = "flex-panel choices-button-container";
                var category1 = document.createElement('img')
                    category1.src = screens[0];
                    category1.className = "choices-button";

                var category2FLEX = document.createElement('div');
                    category2FLEX.className = "flex-panel choices-button-container";
                var category2 = document.createElement('img')
                    category2.src = screens[1];
                    category2.className = "choices-button";
                    
                var category3FLEX = document.createElement('div');
                    category3FLEX.className = "flex-panel choices-button-container";
                var category3 = document.createElement('img')
                    category3.src = screens[2];
                    category3.className = "choices-button";
                
                var category4FLEX = document.createElement('div');
                    category4FLEX.className = "flex-panel choices-button-container";
                var category4 = document.createElement('img')
                    category4.src = screens[3];
                    category4.className = "choices-button";
                
                var category5FLEX = document.createElement('div');
                    category5FLEX.className = "flex-panel choices-button-container";
                var category5 = document.createElement('img')
                    category5.src = screens[4];
                    category5.className = "choices-button";
                
                var category6FLEX = document.createElement('div');
                    category6FLEX.className = "flex-panel choices-button-container";
                var category6 = document.createElement('img')
                    category6.src = screens[5];
                    category6.className = "choices-button";

                var category7FLEX = document.createElement('div');
                    category7FLEX.className = "flex-panel choices-button-container";
                // var category7 = document.createElement('img')
                //     category7.src = screens[6];
                //     category7.className = "choices-button";

                var category8FLEX = document.createElement('div');
                    category8FLEX.className = "flex-panel choices-button-container";

                var category9FLEX = document.createElement('div');
                    category9FLEX.className = "flex-panel choices-button-container";

                var category10FLEX = document.createElement('div');
                    category10FLEX.className = "flex-panel choices-button-container";

            var selector_choices_line1 = document.createElement('div');//the selector to the left, where we choose the clothes, etc.
                selector_choices_line1.className = "flex-container selector_choices";

                var choiceAFLEX = document.createElement('div')
                    choiceAFLEX.className = "flex-panel choices-button-container";
                var choiceA = document.createElement('img')
                    choiceA.className = "choices";

                var choiceBFLEX = document.createElement('div')
                    choiceBFLEX.className = "flex-panel choices-button-container";
                var choiceB = document.createElement('img')
                    choiceB.className = "choices";

                var choiceCFLEX = document.createElement('div')
                    choiceCFLEX.className = "flex-panel choices-button-container";
                var choiceC = document.createElement('img')
                    choiceC.className = "choices";

                var choiceDFLEX = document.createElement('div')
                    choiceDFLEX.className = "flex-panel choices-button-container";
                var choiceD = document.createElement('img')
                    choiceD.className = "choices";

                var choiceEFLEX = document.createElement('div')
                    choiceEFLEX.className = "flex-panel choices-button-container";
                var choiceE = document.createElement('img')
                    choiceE.className = "choices";

                var choiceFFLEX = document.createElement('div')
                    choiceFFLEX.className = "flex-panel choices-button-container";
                var choiceF = document.createElement('img')
                    choiceF.className = "choices";

                var choiceGFLEX = document.createElement('div')
                    choiceGFLEX.className = "flex-panel choices-button-container";
                var choiceG = document.createElement('img')
                    choiceG.className = "choices";

                var choiceHFLEX = document.createElement('div')
                    choiceHFLEX.className = "flex-panel choices-button-container";
                var choiceH = document.createElement('img')
                    choiceH.className = "choices";

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

            var button_container2 = document.createElement('div');
                button_container2.style.position = "absolute";
                button_container2.className = "flex-container x-left-y-bottom-real";

                var button_back = document.createElement('div');
                    button_back.className = "button pink_button";//style="margin:20px;"
                    button_back.style.margin = "10px";
                    button_back.innerHTML = "Back";

                // var information_field = document.createElement('div');
                //     information_field.id = "information_field";
                //     information_field.innerHTML = "Nothing";

        var right_container = document.createElement('div');//the character image container
            right_container.id = "right_container";
            right_container.style.position = "relative";
            // right_container.className = "flex-panel";
            right_container.style.height = "100%";//initially 346

        var img_character = document.createElement('img');
            img_character.id = "img_character";
            img_character.style.height = "100%";//initially 346
            img_character.src = "scholar_sprite.php";

        overlay_form.appendChild(left_container);
            left_container.appendChild(title);
            left_container.appendChild(selector_line);
                selector_line.appendChild(category1FLEX);
                    category1FLEX.appendChild(category1);
                selector_line.appendChild(category2FLEX);
                    category2FLEX.appendChild(category2);
                selector_line.appendChild(category3FLEX);
                    category3FLEX.appendChild(category3);
                selector_line.appendChild(category4FLEX);
                    category4FLEX.appendChild(category4);
                selector_line.appendChild(category5FLEX);
                    category5FLEX.appendChild(category5);
                selector_line.appendChild(category6FLEX);
                    category6FLEX.appendChild(category6);
                selector_line.appendChild(category7FLEX);
                    // category6FLEX.appendChild(category6);
                selector_line.appendChild(category8FLEX);
                    // category6FLEX.appendChild(category6);
                // selector_line.appendChild(category9FLEX);
                    // category6FLEX.appendChild(category6);
                // selector_line.appendChild(category10FLEX);
                    // category6FLEX.appendChild(category6);

            left_container.appendChild(selector_choices_line1);
                selector_choices_line1.appendChild(choiceAFLEX);
                    choiceAFLEX.appendChild(choiceA);
                selector_choices_line1.appendChild(choiceBFLEX);
                    choiceBFLEX.appendChild(choiceB);
                selector_choices_line1.appendChild(choiceCFLEX);
                    choiceCFLEX.appendChild(choiceC);
                selector_choices_line1.appendChild(choiceDFLEX);
                    choiceDFLEX.appendChild(choiceD);
                selector_choices_line1.appendChild(choiceEFLEX);
                    choiceEFLEX.appendChild(choiceE);
                selector_choices_line1.appendChild(choiceFFLEX);
                    choiceFFLEX.appendChild(choiceF);
                selector_choices_line1.appendChild(choiceGFLEX);
                    choiceGFLEX.appendChild(choiceG);
                selector_choices_line1.appendChild(choiceHFLEX);
                    choiceHFLEX.appendChild(choiceH);
            // left_container.appendChild(selector_choices_line2);

            left_container.appendChild(button_container);
                // button_container.appendChild(button_reset);
                // button_container.appendChild(button_save);
            left_container.appendChild(button_container2);
                button_container2.appendChild(button_back);
                // button_container2.appendChild(information_field);
        
        overlay_form.appendChild(right_container);
            right_container.appendChild(img_character);

    //3. add a cute loader
        document.getElementById('right_container').appendChild(createLoader());

    //4. Once we click on the thumbnail, we see all shirts, all pants, etc.

        //clicking on "sex"
        category1.onclick = function(e){refreshItems(screens[0])};
        category1.onmouseenter = function(e){category1.src = screens_hover[0]};
        category1.onmouseleave = function(e){category1.src = screens[0]};

        //clicking on "Eyes"
        category2.onclick = function(e){refreshItems(screens[1])};
        category2.onmouseenter = function(e){category2.src = screens_hover[1]};
        category2.onmouseleave = function(e){category2.src = screens[1]};

        //clicking on "Hair Color"
        category3.onclick = function(e){refreshItems(screens[2])};
        category3.onmouseenter = function(e){category3.src = screens_hover[2]};
        category3.onmouseleave = function(e){category3.src = screens[2]};

        //clicking on "Hair Style"
        category4.onclick = function(e){refreshItems(screens[3])};
        category4.onmouseenter = function(e){category4.src = screens_hover[3]};
        category4.onmouseleave = function(e){category4.src = screens[3]};

        //clicking on "Shoes"
        category5.onclick = function(e){refreshItems(screens[4])};
        category5.onmouseenter = function(e){category5.src = screens_hover[4]};
        category5.onmouseleave = function(e){category5.src = screens[4]};

        //clicking on "Skin Color"
        category6.onclick = function(e){refreshItems(screens[5])};
        category6.onmouseenter = function(e){category6.src = screens_hover[5]};
        category6.onmouseleave = function(e){category6.src = screens[5]};

    //5. Clicking on one of the shirt should automatically update the image on the right/left of the field

        choiceA.onclick = function(){itemClick(choiceA.src, 0)};//choice A
        choiceB.onclick = function(){itemClick(choiceB.src, 1)};//choice B
        choiceC.onclick = function(){itemClick(choiceC.src, 2)};//choice C
        choiceD.onclick = function(){itemClick(choiceD.src, 3)};//choice D
        choiceE.onclick = function(){itemClick(choiceE.src, 4)};//choice E
        choiceF.onclick = function(){itemClick(choiceF.src, 5)};//choice F
        choiceG.onclick = function(){itemClick(choiceG.src, 6)};//choice G
        choiceH.onclick = function(){itemClick(choiceH.src, 7)};//choice H

    //6. Buttons event listeners

        button_back.onclick = function(e){raz()};

    //7. FUNCTIONS
    
    function refreshItems(newScreen)//refreshes the labels of the choices
    {
        document.getElementById('small-loader-wrapper').className = "";
        
        // alert(newScreen);
        if(newScreen == screens[0])//"SEX"
        {
            choiceA.src = sex_img[0];
            choiceB.src = sex_img[1];
            choiceC.src = "";
            choiceD.src = "";
            choiceE.src = "";
            choiceF.src = "";
            choiceG.src = "";
            choiceH.src = "";

            choiceA.style.visibility = "visible";
            choiceB.style.visibility = "visible";
            choiceC.style.visibility = "hidden";
            choiceD.style.visibility = "hidden";
            choiceE.style.visibility = "hidden";
            choiceF.style.visibility = "hidden";
            choiceG.style.visibility = "hidden";
            choiceH.style.visibility = "hidden";
        }
        else if(newScreen == screens[1])//"EYES"
        {
            choiceA.src = eyes_img[0];
            choiceB.src = eyes_img[1];
            choiceC.src = eyes_img[2];
            choiceD.src = eyes_img[3];
            choiceE.src = "";
            choiceF.src = "";
            choiceG.src = "";
            choiceH.src = "";

            choiceA.style.visibility = "visible";
            choiceB.style.visibility = "visible";
            choiceC.style.visibility = "visible";
            choiceD.style.visibility = "visible";
            choiceE.style.visibility = "hidden";
            choiceF.style.visibility = "hidden";
            choiceG.style.visibility = "hidden";
            choiceH.style.visibility = "hidden";
        }
        else if(newScreen == screens[2])//"HAIR COLOR"
        {
            choiceA.src = hair_color[0];
            choiceB.src = hair_color[1];
            choiceC.src = hair_color[2];
            choiceD.src = hair_color[3];
            choiceE.src = "";
            choiceF.src = "";
            choiceG.src = "";
            choiceH.src = "";

            choiceA.style.visibility = "visible";
            choiceB.style.visibility = "visible";
            choiceC.style.visibility = "visible";
            choiceD.style.visibility = "visible";
            choiceE.style.visibility = "hidden";
            choiceF.style.visibility = "hidden";
            choiceG.style.visibility = "hidden";
            choiceH.style.visibility = "hidden";
        }
        else if(newScreen == screens[3])//"HAIR STYLE"
        {
            var hair_style = hair_style_male;

            if(user.sex == 1)
            {
                // alert("New values:" + "\n"
                // + " - sex: " + user.sex + "\n"
                // + " - eyecolor: " + user.eyecolor + "\n"
                // + " - hair_color: " + user.haircolor + "\n"
                // + " - hair_style: " + user.hairstyle + "\n"
                // + " - shoes: " + user.shoes_id + "\n"
                // + " - skincolor: " + user.skincolor);

                hair_style = hair_style_male;
            }
            else
            {
                hair_style = hair_style_female;
            }

            choiceA.src = hair_style[0];
            choiceB.src = hair_style[1];
            choiceC.src = hair_style[2];
            choiceD.src = hair_style[3];
            choiceE.src = "";
            choiceF.src = "";
            choiceG.src = "";
            choiceH.src = "";
            
            choiceA.style.visibility = "visible";
            choiceB.style.visibility = "visible";
            choiceC.style.visibility = "visible";
            choiceD.style.visibility = "visible";
            choiceE.style.visibility = "hidden";
            choiceF.style.visibility = "hidden";
            choiceG.style.visibility = "hidden";
            choiceH.style.visibility = "hidden";
        }
        else if(newScreen == screens[4])//"SHOES"
        {
            choiceA.src = shoes_img[0];
            choiceB.src = "";
            choiceC.src = "";
            choiceD.src = "";
            choiceE.src = "";
            choiceF.src = "";
            choiceG.src = "";
            choiceH.src = "";

            choiceA.style.visibility = "visible";
            choiceB.style.visibility = "hidden";
            choiceC.style.visibility = "hidden";
            choiceD.style.visibility = "hidden";
            choiceE.style.visibility = "hidden";
            choiceF.style.visibility = "hidden";
            choiceG.style.visibility = "hidden";
            choiceH.style.visibility = "hidden";
        }
        else if(newScreen == screens[5])//"SKIN COLOR"
        {
            choiceA.src = skin_color[0];
            choiceB.src = skin_color[1];
            choiceC.src = skin_color[2];
            choiceD.src = skin_color[3];
            choiceE.src = skin_color[4];
            choiceF.src = "";
            choiceG.src = "";
            choiceH.src = "";

            choiceA.style.visibility = "visible";
            choiceB.style.visibility = "visible";
            choiceC.style.visibility = "visible";
            choiceD.style.visibility = "visible";
            choiceE.style.visibility = "visible";
            choiceF.style.visibility = "hidden";
            choiceG.style.visibility = "hidden";
            choiceH.style.visibility = "hidden";
        }

        currentScreen = newScreen;
        document.getElementById('small-loader-wrapper').className = "small-loaded";
    }

    function itemClick(newItem, position)//determines what screen we're on, and what we clicked4
    {
        document.getElementById('small-loader-wrapper').className = "";
        // document.getElementById('information_field').innerHTML = 'item selected!';
        
        // pullVariablesFromDB();

        // pushToDB('sex', user.sex);
        // pushToDB('eyes', user.eyecolor);
        // pushToDB('hair_color', user.haircolor);
        // pushToDB('hair_style', user.hairstyle);
        // pushToDB('shoes', user.shoes);
        // pushToDB('skin_color', user.skincolor);

        // alert(newItem + " - " + position);
        
        if(currentScreen == screens[0])//"SEX"
        {
            pushToDB('sex', position);
        }
        else if(currentScreen == screens[1])//"EYES"
        {
            pushToDB('eyes', position);
        }
        else if(currentScreen == screens[2])//"HAIR COLOR"
        {
            pushToDB('hair_color', position);
        }
        else if(currentScreen == screens[3])//"HAIR STYLE"
        {
            pushToDB('hair_style', position);
        }
        else if(currentScreen == screens[4])//"SHOES"
        {
            pushToDB('shoes', position);
        }
        else if(currentScreen == screens[5])//"SKIN COLOR"
        {
            pushToDB('skin_color', position);
        }

        // pullVariablesFromDB();
    }

    function pushToDB(SQLname, value)//saves to the database
    {
        pullVariablesFromDB();

        // alert("Current values:" + "\n"
        //     + " - sex: " + user.sex + "\n"
        //     + " - eyecolor: " + user.eyecolor + "\n"
        //     + " - hair_color: " + user.haircolor + "\n"
        //     + " - hair_style: " + user.hairstyle + "\n"
        //     + " - shoes: " + user.shoes_id + "\n"
        //     + " - skincolor: " + user.skincolor + "\n\n"
        //     + "new " + SQLname + " = " + value);

        if(SQLname == 'sex')
        {
            user.sex = value;
        }
        else if(SQLname == 'eyes')
        {
            user.eyecolor = value;
        }
        else if(SQLname == 'hair_color')
        {
            user.haircolor = value;
        }
        else if(SQLname == 'hair_style')
        {
            user.hairstyle = value;
        }
        else if(SQLname == 'shoes')
        {
            user.shoes_id = value;
        }
        else if(SQLname == 'skin_color')
        {
            user.skincolor = value;
        }

        $.post('profile/savePresets.php',
        {
            'sex': user.sex,
            'eyes': user.eyecolor,
            'hair_color': user.haircolor,
            'hair_style': user.hairstyle,
            //'shoes': user.shoes_id,
            'skin_color': user.skincolor,
        });

        verifyChange(SQLname, value);
        refreshImg();
    }

    function verifyChange(SQLname, value)//verify that the change has been made in the DB
    {
        pullVariablesFromDB();

        // alert("New values:" + "\n"
        // + " - sex: " + user.sex + "\n"
        // + " - eyecolor: " + user.eyecolor + "\n"
        // + " - hair_color: " + user.haircolor + "\n"
        // + " - hair_style: " + user.hairstyle + "\n"
        // + " - shoes: " + user.shoes_id + "\n"
        // + " - skincolor: " + user.skincolor + "\n\n"
        // + "new " + SQLname + " = " + value);

        if(SQLname == 'sex' && user.sex == value)//if we're changing the sex, and it has the right value, DO NOTHING
        {
        }
        else if(SQLname == 'eyes' && user.eyecolor == value)
        {
        }
        else if(SQLname == 'hair_color' && user.haircolor == value)
        {
        }
        else if(SQLname == 'hair_style' && user.hairstyle == value)
        {
        }
        else if(SQLname == 'shoes' && user.shoes_id == value)
        {
        }
        else if(SQLname == 'skin_color' && user.skincolor == value)
        {
        }
        else//if it's not the right value, do it again
        {
            pushToDB(SQLname, value);
        }
    }

    //8. start the wheel
    refreshItems(currentScreen);
    refreshImg();
}