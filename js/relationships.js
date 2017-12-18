/*

Create the Character Scroll for the Characterpage

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

    //est utilisé pour le nom qui est affiché en gros, et pour repérer le path des images
    var characters = 
    [
        "alistair",
        "axel",
        "claire",
        "ellie",
        "karolina",
        "neha",
        "raquel",
        "tadashi",
        "tegan",
        "tyler"
    ];

    var first_name = 
    [
        "Alistair",
        "Axel",
        "Claire",
        "Ellie",
        "Karolina",
        "Neha",
        "Raquel",
        "Tadashi",
        "Tegan",
        "Tyler"
    ];

    var fullname = 
    [
        "Alistair Drew",
        "Classified",
        "Claire Durand",
        "Ellie Collins",
        "Karolina Novakova",
        "Neha Rao",
        "Raquel Pereira Camargo",
        "Tadashi Nakano",
        "Tegan Novakov",
        "Tyler Williams"
    ];

    var birthday = 
    [
        "March 1st",
        "November 20th",
        "October 5th",
        "June 19",
        "April 25th",
        "July 7th",
        "December 3rd",
        "September 17th",
        "April 25th",
        "August 21st"
    ];

    var likes = 
    [
        "Sports, protein shakes and his family",
        "Rock music, skipping classes and his guitar",
        "Helping People, reading scientific papers and pretty notebooks",
        "Mechanics, talking to people and dyeing her hair",
        "Shopping, clothes, modelling and getting what she wants",
        "Colourful fabrics, innovative designs, The colour gold",
        "Soccer, winning and fast Food",
        "Leading people, finance and relaxing",
        "Video games, computers and taking Naps",
        "Drawing, being the center of attention, going to the crafts store"
    ];

    var dislikes = 
    [
        "Arrogance, laziness, coldness",
        "Tadashi, country music, hypocrisy",
        "rudeness, being made fun of, suffering",
        "Bullying, not being taken seriously, everything boring",
        "Being bothered, ugly clothes, being told what to do",
        "Fashion disasters, being forced to be social, science class",
        "Homework, classical music, party Poopers",
        "Axel, inefficiency, dishonesty",
        "Aggressiveness, loud parties, when his computer lags",
        "Structure, school, close-mindedness"
    ];

    var fulldescription = 
    [
        "The most promising athlete of the school, he’s on a scholarship just like your Scholar! Alistair specializes in martial arts in general, but his favorite sport is boxing, in which he dreams of making a career out of it and competing in the Olympic Games one day. Unlike most of his classmates, Alistair comes from a middle-class family that struggles with money, and he’s determined to change that. Despite the difference in social classes, he and Tadashi have been best friends for a long time.",
        "The rock star of the Academy. Literally. Axel is an internationally known teenage superstar and is usually seen touring for his new album. Cocky, sarcastic, and oh-so-charming, Axel only comes to Arlington because the law requires him to get his high school diploma and he makes sure everybody is aware of his nonchalance…But this musician constantly covers up who he is. In fact, is Axel even his real name?",
        "Claire is an aspiring neurosurgeon that volunteers part-time at the local hospital. Deeply caring and protective of the people she loves, she’s the student everybody loves and respects, despite her spending most of her time studying and doing medical research alone. Claire will do anything to make her classmates happy, and she’ll do so with a smile. After all, the last thing she wants it to lose yet another person she cares about.",
        "Inventor, mechanic and engineer to be, Ellie, nicknamed as “Tinker” by students is the famous president of Arlington’s robotics club! Despite being in a male-dominated field, Ellie is not afraid to shine. She loves maining new people and has a cute, cheerful exterior that charms her potential clients. But as time passes, Ellie realizes that there are several obstacles that might put not only her career at risk…but her identity as well.",
        "Considered by many to be the prettiest girl in school, Karolina specializes in modelling. She’s gorgeous and fully aware of her charm. In fact, she makes sure that everybody knows that she’s the hottest, coolest, most amazing girl in this whole establishment, okay?! She is ruthless and will do anything to get what she wants. However, despite her overachieving ways and her promising future, Karolina finds herself struggling with her image…so much that it starts affecting her mental state and health. Her best friend and “second in command” is Neha.",
        "An aspiring fashion designer, Neha loves making her own clothes and other’s clothes. She spends countless hours designing seasonal collections and actually sells them to the students of Arlington (at a very high price!) Her success in the school is huge and she’s almost always sold out…but she’s using that success to hide her secret…a secret she believes will destroy her. She uses Karolina as her main model and is Axel’s official stylist for his concerts and photoshoots. Rather reserved and cold, Neha can, however, be surprisingly nice…whenever Karolina isn’t around.",
        "Raquel is passionate, borderline obsessed about soccer! A promising athlete in the athletics department, she’s energetic, ambitious and has no time for any crap. Despite being the most direct and honest student in Arlington, she can’t help but have a secret too…a secret she tries really hard to hide from her family. Raquel is always in it for the win, and that’s because she simply cannot afford to lose.",
        "Tadashi is the current Student Body President of Arlington Academy. Having the highest GPA of the school, an estimated IQ of 160, being a star student and a jack of all trades, Tadashi doesn’t have time for any crap…and that means it will be very hard for your Scholar to get to know him. You’ll have to be sharp, organized and future-oriented…because the future is exactly what troubles this guy.",
        "A European foreign student, Tegan specializes in Computer Science. He loves to program and spends the majority of his time in front of the computer. He also loves robotics and any kind of engineering. He has the second highest GPA of the school, beaten only by Tadashi. But despite his adorkableness and his intelligence, Tegan faces a lot of pressure from people…people who won’t believe in him and his dreams. His roommate and best friend is Tyler and he has a twin sister: Karolina.",
        "A graphic designer in the Fine Arts department and highly skilled in anything involving visuals, thanks to his photographic memory, Tyler loves to be the center of attention! He is an artist from head to toe: charming, sensitive, creative…and highly critical of himself. It’s hard to constantly feel like your work isn’t good enough, especially when rejection is everywhere you look. Despite being very different, Tyler and Tegan make an incredible team, and being their friend comes with a lot of advantages!"
    ];

$(function create_interface()
{
    const qty_main_10 = 10;//de 0 à 9 
    const qty_classmates = 0;//de 9 à 9 (parce qu'il n'y en a pas encore)
    const qty_others = 0;//de 9 à 9 (parce qu'il n'y en a pas encore)

    var main_10_button = document.createElement('div');//de 0 à 9

        main_10_button.className = "button yellow_button";
        main_10_button.innerHTML = "Main 10";

        main_10_button.addEventListener("click", function(e){refresh_lines(0, qty_main_10); activate(main_10_button, classmates_button, others_button);})

    var classmates_button = document.createElement('div');

        classmates_button.className = "button yellow_button";
        classmates_button.innerHTML = "Classmates";
        
        classmates_button.addEventListener("click", function(e){refresh_lines(qty_main_10, qty_main_10 + qty_classmates); activate(classmates_button, main_10_button, others_button);})

    var others_button = document.createElement('div');

        others_button.className = "button yellow_button";
        others_button.innerHTML = "Others";

        others_button.addEventListener("click", function(e){refresh_lines(qty_classmates, qty_classmates + qty_others); activate(others_button, main_10_button, classmates_button);})

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

            var desc_header = '<h4 class="center" style="text-transform: uppercase; color: #EE4C5E">' + characters[index] + '</h4>';
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