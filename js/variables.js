/*

All Variables used in the Sweet Elite game
Written by Olivier Jalbert
a.k.a. "Lightshadow"

Copyright Dulcet Games 2016-2017.

All rights reserved.

July 23, 2017
*/

pullVariablesFromDB();

//General Variables
var currentChapter = 0;
var storyLocation = 0;//la location dans le jeu, qui va être passée en parametre dans le array du chapitre

//Chapter locations
var chapter0Location = 23;
var chapter1Location = 130;

//Constant Colors
const se_bottom_border_bc = "#D1D1D1";//"bc" for background color
const se_bubble_bc = "#efeeea";
const se_highlight_bc = "#f7b334";
const se_pink = "#ef4c5e";

//variable temporaire (ne pas inclure dans la base de données)
var choice = "null";//Un choix pour les liens. Ex.: pour link = -3, "choice" va contenir le nom du département choisi
                    //cette variable va contenir tous les choix particuliers, c'est une variable temporaire qui sert à passer de l'information en paramètres

var user = 
{
    username: "None",
    energy: 0,
    money: 0,
    storyLocation: 10,
    last_chapter_played: 0
};

var CharaX_username = "Serena";
var CharaY_username = "Cecile";

const backgrounds_path = "images/game_images/backgrounds/";

var locations = 
{
    blackScreen: backgrounds_path + "blackscreen.jpg",
    
    entrance: backgrounds_path + "entrance.jpg",
        hall1: backgrounds_path + "hall1.jpg",
            class1: backgrounds_path + "class1.jpg",
            class2: backgrounds_path + "class2.jpg",
            hall2: backgrounds_path + "hall2.jpg",
                cafeteria: backgrounds_path + "cafeteria.jpg",
                    cafeteriaLounge: backgrounds_path + "cafeterialounge.jpg",
                        cafeteriaOutside: backgrounds_path + "cafeteriaoutside.jpg",
        garden: backgrounds_path + "garden.jpg",
        gym: backgrounds_path + "gym.jpg",
        dormHall: backgrounds_path + "dormhall.jpg",
            dorm: backgrounds_path + "dorm.jpg",
            dormBathroom: backgrounds_path + "dormbathroom.jpg",
};

//on va devoir écrire un code pour GET ces variables de la base de données. ces variables vont être propres à chaque utilisateur.

//Info on Characters

    var charList = 
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

//All Characters

    var lady_arlington = 
    {
        isDatable: false,//const
        affinity: 20,
        isCrush: false,
        name: "Lady Arlington",//const
        fullName: "Lady Arlington",//const
        path: "undefinedddddd",//const, no caps
        birthday: "unknown",//const
        likes: "unknown",//const
        dislikes: "unknown",//const
        description: "unknown",//const
    }

    var alistair = 
    {
        isDatable: true,//const
        affinity: 10,
        isCrush: false,
        name: "Alistair",//const
        fullName: "Alistair Drew",//const
        path: "alistair",//const, no caps
        birthday: "March 1st",//const
        likes: "Sports, protein shakes and his family",//const
        dislikes: "Arrogance, laziness, coldness",//const
        description: "The most promising athlete of the school, he’s on a scholarship just like your Scholar! Alistair specializes in martial arts in general, but his favorite sport is boxing, in which he dreams of making a career out of it and competing in the Olympic Games one day. Unlike most of his classmates, Alistair comes from a middle-class family that struggles with money, and he’s determined to change that. Despite the difference in social classes, he and Tadashi have been best friends for a long time.",//const
    }

    var axel = 
    {
        isDatable: true,//const
        affinity: 11,
        isCrush: false,
        name: "Axel",//const
        fullName: "Classified",//const
        path: "axel",//const, no caps
        birthday: "November 20th",//const
        likes: "Rock music, skipping classes and his guitar",//const
        dislikes: "Tadashi, country music, hypocrisy",//const
        description: "The rock star of the Academy. Literally. Axel is an internationally known teenage superstar and is usually seen touring for his new album. Cocky, sarcastic, and oh-so-charming, Axel only comes to Arlington because the law requires him to get his high school diploma and he makes sure everybody is aware of his nonchalance…But this musician constantly covers up who he is. In fact, is Axel even his real name?",//const
    }

    var claire = 
    {
        isDatable: true,//const
        affinity: 20,
        isCrush: false,
        name: "Claire",//const
        fullName: "Claire Durand",//const
        path: "claire",//const, no caps
        birthday: "October 5th",//const
        likes: "Helping People, reading scientific papers and pretty notebooks",//const
        dislikes: "rudeness, being made fun of, suffering",//const
        description: "Claire is an aspiring neurosurgeon that volunteers part-time at the local hospital. Deeply caring and protective of the people she loves, she’s the student everybody loves and respects, despite her spending most of her time studying and doing medical research alone. Claire will do anything to make her classmates happy, and she’ll do so with a smile. After all, the last thing she wants it to lose yet another person she cares about.",//const
    }

    var ellie = 
    {
        isDatable: true,//const
        affinity: 31,
        isCrush: false,
        name: "Ellie",//const
        fullName: "Ellie Collins",//const
        path: "ellie",//const, no caps
        birthday: "June 19",//const
        likes: "Mechanics, talking to people and dyeing her hair",//const
        dislikes: "Bullying, not being taken seriously, everything boring",//const
        description: "Inventor, mechanic and engineer to be, Ellie, nicknamed as “Tinker” by students is the famous president of Arlington’s robotics club! Despite being in a male-dominated field, Ellie is not afraid to shine. She loves meeting new people and has a cute, cheerful exterior that charms her potential clients. But as time passes, Ellie realizes that there are several obstacles that might put not only her career at risk…but her identity as well.",//const
    }

    var karolina = 
    {
        isDatable: true,//const
        affinity: 30,
        isCrush: false,
        name: "Karolina",//const
        fullName: "Karolina Novakova",//const
        path: "karolina",//const, no caps
        birthday: "April 25th",//const
        likes: "Shopping, clothes, modelling and getting what she wants",//const
        dislikes: "Being bothered, ugly clothes, being told what to do",//const
        description: "Considered by many to be the prettiest girl in school, Karolina specializes in modelling. She’s gorgeous and fully aware of her charm. In fact, she makes sure that everybody knows that she’s the hottest, coolest, most amazing girl in this whole establishment, okay?! She is ruthless and will do anything to get what she wants. However, despite her overachieving ways and her promising future, Karolina finds herself struggling with her image…so much that it starts affecting her mental state and health. Her best friend and “second in command” is Neha.",//const
    }
    
    var neha = 
    {
        isDatable: true,//const
        affinity: 14,
        isCrush: false,
        name: "Neha",//const
        fullName: "Neha Rao",//const
        path: "neha",//const, no caps
        birthday: "July 7th",//const
        likes: "Colourful fabrics, innovative designs, The colour gold",//const
        dislikes: "Fashion disasters, being forced to be social, science class",//const
        description: "An aspiring fashion designer, Neha loves making her own clothes and other’s clothes. She spends countless hours designing seasonal collections and actually sells them to the students of Arlington (at a very high price!) Her success in the school is huge and she’s almost always sold out…but she’s using that success to hide her secret…a secret she believes will destroy her. She uses Karolina as her main model and is Axel’s official stylist for his concerts and photoshoots. Rather reserved and cold, Neha can, however, be surprisingly nice…whenever Karolina isn’t around.",//const
    }

    var raquel = 
    {
        isDatable: true,//const
        affinity: 21,
        isCrush: false,
        name: "Raquel",//const
        fullName: "Raquel Perriera",//const
        path: "raquel",//const, no caps
        birthday: "December 3rd",//const
        likes: "Soccer, winning and fast Food",//const
        dislikes: "Homework, classical music, party Poopers",//const
        description: "Raquel is passionate, borderline obsessed about soccer! A promising athlete in the athletics department, she’s energetic, ambitious and has no time for any crap. Despite being the most direct and honest student in Arlington, she can’t help but have a secret too…a secret she tries really hard to hide from her family. Raquel is always in it for the win, and that’s because she simply cannot afford to lose.",//const
    }

    var tadashi = 
    {
        isDatable: true,//const
        affinity: 99,
        isCrush: false,
        name: "Tadashi",//const
        fullName: "Tadashi Nakano",//const
        path: "tadashi",//const, no caps
        birthday: "September 17th",//const
        likes: "Leading people, finance and relaxing",//const
        dislikes: "Axel, inefficiency, dishonesty",//const
        description: "Tadashi is the current Student Body President of Arlington Academy. Having the highest GPA of the school, an estimated IQ of 160, being a star student and a jack of all trades, Tadashi doesn’t have time for any crap…and that means it will be very hard for your Scholar to get to know him. You’ll have to be sharp, organized and future-oriented…because the future is exactly what troubles this guy.",//const
    }
    
    var tegan = 
    {
        isDatable: true,//const
        affinity: 16,
        isCrush: false,
        name: "Tegan",//const
        fullName: "Tegan Novak",//const
        path: "tegan",//const, no caps
        birthday: "April 25th",//const
        likes: "Video games, computers and taking Naps",//const
        dislikes: "Aggressiveness, loud parties, when his computer lags",//const
        description: "A European foreign student, Tegan specializes in Computer Science. He loves to program and spends the majority of his time in front of the computer. He also loves robotics and any kind of engineering. He has the second highest GPA of the school, beaten only by Tadashi. But despite his adorkableness and his intelligence, Tegan faces a lot of pressure from people…people who won’t believe in him and his dreams. His roommate and best friend is Tyler and he has a twin sister: Karolina.",//const
    }

    var tyler = 
    {
        isDatable: true,//const
        affinity: 18,
        isCrush: false,
        name: "Tyler",//const
        fullName: "Tyler Williams",//const
        path: "tyler",//const, no caps
        birthday: "August 21st",//const
        likes: "Drawing, being the center of attention, going to the crafts store",//const
        dislikes: "Structure, school, close-mindedness",//const
        description: "A graphic designer in the Fine Arts department and highly skilled in anything involving visuals, thanks to his photographic memory, Tyler loves to be the center of attention! He is an artist from head to toe: charming, sensitive, creative…and highly critical of himself. It’s hard to constantly feel like your work isn’t good enough, especially when rejection is everywhere you look. Despite being very different, Tyler and Tegan make an incredible team, and being their friend comes with a lot of advantages!",//const
    }

    /* Template *
    
        var empty = 
        {
            isDatable: false,//const
            affinity: 0,
            isCrush: false,
            name: "",//const
            fullName: "",//const
            path: "",//const, no caps
            birthday: "",//const
            likes: "",//const
            dislikes: "",//const
            description: "",//const
        }
    
    */

    // var charList = 
    // {
    //     Alistair: alistair,
    //     Axel: axel,
    //     Claire: claire,
    //     Ellie: ellie,
    //     Karolina: karolina,
    //     Neha: neha,
    //     Raquel: raquel,
    //     Tadashi: tadashi,
    //     Tegan: tegan,
    //     Tyler: tyler,
    // }
    
//End of All characters

//Nomenclature pour personnages[karolina][expressions]
    /*Example for Karolina:
        0: base
        1: happy
        2: blush
        3: annoyed
        4: angry
        5: surprise
        6: smirk
    */

const characters_path = "images/game_images/sprites/main10/";

var personnages = 
{
    karolina:       [
                        characters_path + "karolina/base.png",      // 0: base
                        characters_path + "karolina/happy.png",     // 1: happy
                        characters_path + "karolina/blush.png",     // 2: blush
                        characters_path + "karolina/annoyed.png",   // 3: annoyed
                        characters_path + "karolina/angry.png",     // 4: angry
                        characters_path + "karolina/surprise.png",  // 5: surprise
                    ],
    alistair:       [
                        characters_path + "alistair/base.png",      // 0: base
                        characters_path + "alistair/happy.png",     // 1: happy
                        characters_path + "alistair/blush.png",     // 2: blush
                        characters_path + "alistair/annoyed.png",   // 3: annoyed
                        characters_path + "alistair/angry.png",     // 4: angry
                        characters_path + "alistair/surprise.png",  // 5: surprise
                    ],
    neha:           [
                        characters_path + "neha/base.png",      // 0: base
                        characters_path + "neha/happy.png",     // 1: happy
                        characters_path + "neha/blush.png",     // 2: blush
                        characters_path + "neha/annoyed.png",   // 3: annoyed
                        characters_path + "neha/angry.png",     // 4: angry
                        characters_path + "neha/surprise.png",  // 5: surprise
                    ],
    tadashi:        [
                        characters_path + "tadashi/base.png",      // 0: base
                        characters_path + "tadashi/happy.png",     // 1: happy
                        characters_path + "tadashi/blush.png",     // 2: blush
                        characters_path + "tadashi/annoyed.png",   // 3: annoyed
                        characters_path + "tadashi/angry.png",     // 4: angry
                        characters_path + "tadashi/surprise.png",  // 5: surprise
                    ],
    axel:           [
                        characters_path + "axel/base.png",      // 0: base
                        characters_path + "axel/happy.png",     // 1: happy
                        characters_path + "axel/blush.png",     // 2: blush
                        characters_path + "axel/annoyed.png",   // 3: annoyed
                        characters_path + "axel/angry.png",     // 4: angry
                        characters_path + "axel/surprise.png",  // 5: surprise
                    ],    
    raquel:         [
                        characters_path + "raquel/base.png",      // 0: base
                        characters_path + "raquel/happy.png",     // 1: happy
                        characters_path + "raquel/blush.png",     // 2: blush
                        characters_path + "raquel/annoyed.png",   // 3: annoyed
                        characters_path + "raquel/angry.png",     // 4: angry
                        characters_path + "raquel/surprise.png",  // 5: surprise
                    ],
    claire:         [
                        characters_path + "claire/base.png",      // 0: base
                        characters_path + "claire/happy.png",     // 1: happy
                        characters_path + "claire/blush.png",     // 2: blush
                        characters_path + "claire/annoyed.png",   // 3: annoyed
                        characters_path + "claire/angry.png",     // 4: angry
                        characters_path + "claire/surprise.png",  // 5: surprise
                    ],
    ellie:          [
                        characters_path + "ellie/base.png",      // 0: base
                        characters_path + "ellie/happy.png",     // 1: happy
                        characters_path + "ellie/blush.png",     // 2: blush
                        characters_path + "ellie/annoyed.png",   // 3: annoyed
                        characters_path + "ellie/angry.png",     // 4: angry
                        characters_path + "ellie/surprise.png",  // 5: surprise
                    ],
    tegan:          [
                        characters_path + "tegan/base.png",      // 0: base
                        characters_path + "tegan/happy.png",     // 1: happy
                        characters_path + "tegan/blush.png",     // 2: blush
                        characters_path + "tegan/annoyed.png",   // 3: annoyed
                        characters_path + "tegan/angry.png",     // 4: angry
                        characters_path + "tegan/surprise.png",  // 5: surprise
                    ],
    tyler:          [
                        characters_path + "tyler/base.png",      // 0: base
                        characters_path + "tyler/happy.png",     // 1: happy
                        characters_path + "tyler/blush.png",     // 2: blush
                        characters_path + "tyler/annoyed.png",   // 3: annoyed
                        characters_path + "tyler/angry.png",     // 4: angry
                        characters_path + "tyler/surprise.png",  // 5: surprise
                    ],

    charaX:         [
                        characters_path + "../other/serena/base.png",       // 0: base
                        characters_path + "../other/serena/happy.png",      // 1: happy
                        characters_path + "../other/serena/blush.png",      // 2: blush
                        characters_path + "../other/serena/annoyed.png",    // 3: annoyed
                        characters_path + "../other/serena/angry.png",      // 4: angry
                        characters_path + "../other/serena/surprise.png",   // 5: surprise
                    ],
    l_arlington:    [
                        characters_path + "l_arlington/larlingtonneutral.png",   // 0 : Neutral expresion
                        characters_path + "l_arlington/larlingtonneutral_2.png",   // 1 : reverse....wtf we need a nomenclature for left and right...Unless there is a way to reverse an image from left to right by code
                    ]
};

function pullVariablesFromDB()
{
    $(function()//once the page is loaded
    {
        $('#DB_handle').load('dbtransfers/get_variables.php', function()//pull variables from the DB
        {
            //*********************************************
            //USERINFO table
            //*********************************************

            user.username = document.getElementById("db_handle_username").innerHTML;
            
            user.energy = document.getElementById("db_handle_energy").innerHTML;
            
            user.money = document.getElementById("db_handle_money").innerHTML;
            
            //*****nb_replay is unused*****

            //*********************************************
            //STORY table
            //*********************************************

            user.storyLocation = document.getElementById("db_handle_story_location").innerHTML;
            
            user.last_chapter_played = document.getElementById("db_handle_last_chapter_played").innerHTML;

            //*********************************************
            //AFFINITY table
            //*********************************************

            karolina.affinity = document.getElementById("db_handle_a1").innerHTML;

            ellie.affinity = document.getElementById("db_handle_a2").innerHTML;
            
            neha.affinity = document.getElementById("db_handle_a3").innerHTML;
            
            raquel.affinity = document.getElementById("db_handle_a4").innerHTML;
            
            claire.affinity = document.getElementById("db_handle_a5").innerHTML;
            
            alistair.affinity = document.getElementById("db_handle_a6").innerHTML;
            
            tadashi.affinity = document.getElementById("db_handle_a7").innerHTML;
            
            tegan.affinity = document.getElementById("db_handle_a8").innerHTML;
            
            tyler.affinity = document.getElementById("db_handle_a9").innerHTML;
            
            axel.affinity = document.getElementById("db_handle_a10").innerHTML;
            
            lady_arlington.affinity = document.getElementById("db_handle_a11").innerHTML;
            
            // coach_davis.affinity = document.getElementById("db_handle_a12").innerHTML;
            
            // serena.affinity = document.getElementById("db_handle_a13").innerHTML;
            
            // cecile.affinity = document.getElementById("db_handle_a14").innerHTML;
            
            // teacher_chapter_2.affinity = document.getElementById("db_handle_a15").innerHTML;
            
            if(relationship_enabled)//if we're on the page RELATIONSHIP
            {
                create_interface();
            }
        });

    });
}

function pushVariablesToDB()
{
    
}

/**
     * https://openclassrooms.com/courses/simplifiez-vos-developpements-javascript-avec-jquery/premiers-pas-avec-ajax
     */
    