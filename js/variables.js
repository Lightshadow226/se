/*

All Variables used in the Sweet Elite game
Written by Olivier Jalbert
a.k.a. "Lightshadow"

Copyright Dulcet Games 2016-2017.

All rights reserved.

July 23, 2017
*/

//Chapter locations
var chapter0Location = 24;
var chapter1Location = 130;

//Constant Colors
    const se_bottom_border_bc = "#D1D1D1";//"bc" for background color
    const grey = "#EFEEEA";
    const se_highlight_bc = "#f7b334";
    const se_pink = "#ef4c5e";

    const pink = "#ff4956";
    const purple = "#682666";
    const yellow = "#F7B334";

    const pink_light = "#ffe2e4";
    const purple_light = "#f3def2";
    const yellow_light = "#fdeac7";

    const pink_dark = "#c0000e";
    const purple_dark = "#4f1d4e";
    const yellow_dark = "#de9409";

    const fun_pink = "#e42371"//for the progress bar


//variable temporaire (ne pas inclure dans la base de données)
var choice = "null";//Un choix pour les liens. Ex.: pour link = -3, "choice" va contenir le nom du département choisi
                    //cette variable va contenir tous les choix particuliers, c'est une variable globale temporaire qui sert à passer de l'information en paramètres
                    
var CharaX_username = "Serena";//TODO: changer ça dans le fichier Excel pour que ce soit les bons noms
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

var genders = ["She/Her", "He/Him", "They/Them"];

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

//Characters (RELATIONSHIPS.PHP)
    //est utilisé pour repérer le path des images
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
        "tyler",
        "serena",
        "ca",
        "ladya",
        //"Coach Davis",
        "Teacher",
    ];

    //first name is displayed
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
        "Tyler",
        "Serena",
        "C & A",
        "Lady Arlington"
        //Coach Davis"
    ];

    //full name is unused
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
        "Tyler Williams",
        "Serena",
        "C & A",
        "Lady Amelia Arlington"
        //"Coach Murdoc Davis",
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
        "August 21st",
        "June 30th",
        "???",
        "July 1st"
        //"",//davis
    ];

    var likes = 
    [
        "Sports, protein shakes and his family",
        "Rock music, skipping classes and his guitar",
        "Helping people, reading scientific papers and pretty notebooks",
        "Mechanics, talking to people and dyeing her hair",
        "Shopping, clothes, modelling and getting what she wants",
        "Colourful fabrics, innovative designs, The colour gold",
        "Soccer, winning and fast Food",
        "Leading people, finance and relaxing",
        "Video games, computers and taking Naps",
        "Drawing, being the center of attention, going to the crafts store",
        "Video game development, Writing, Interacting with her fans",
        "Pretty art, funny memes",
        "Students who follow rules, Classical Music, Money"
    ];

    var dislikes = 
    [
        "Arrogance, laziness, coldness",
        "Tadashi, country music, hypocrisy",
        "Rudeness, being made fun of, suffering" ,
        "Bullying, not being taken seriously, everything boring",
        "Being bothered, ugly clothes, being told what to do",
        "Fashion disasters, being forced to be social, science class",
        "Homework, classical music, party poopers",
        "Axel, inefficiency, dishonesty",
        "Aggressiveness, loud parties, when his computer lags",
        "Structure, school, close-mindedness",
        "When fans do not read the FAQ before contacting her",
        "When you pick the wrong dialog choice",
        "Having her authority challenged, Tardiness"
    ];

    var fulldescription = 
    [
        "The most promising athlete of the school, he’s on a scholarship just like your Scholar! Alistair specializes in martial arts in general, but his favorite sport is boxing, in which he dreams of making a career out of it and competing in the Olympic Games one day. Unlike most of his classmates, Alistair comes from a middle-class family that struggles with money, and he’s determined to change that. Despite the difference in social classes, he and Tadashi have been best friends for a long time.",
        "The rock star of the Academy. Literally. Axel is an internationally known teenage superstar and is usually seen touring for his new album. Cocky, sarcastic, and oh-so-charming, Axel only comes to Arlington because the law requires him to get his high school diploma and he makes sure everybody is aware of his nonchalance…But this musician constantly covers up who he is. In fact, is Axel even his real name?",
        "Claire is an aspiring neurosurgeon that volunteers part-time at the local hospital. Deeply caring and protective of the people she loves, she’s the student everybody loves and respects, despite her spending most of her time studying and doing medical research alone. Claire will do anything to make her classmates happy, and she’ll do so with a smile. After all, the last thing she wants it to lose yet another person she cares about.",
        "Inventor, mechanic and engineer to be, Ellie, nicknamed as “Tinker” by students is the famous president of Arlington’s robotics club! Despite being in a male-dominated field, Ellie is not afraid to shine. She loves maining new people and has a cute, cheerful exterior that charms her potential clients. But as time passes, Ellie realizes that there are several obstacles that might put not only her career at risk…but her identity as well.",
        "Considered by many to be the prettiest girl in school, Karolina specializes in modelling. She’s gorgeous and fully aware of her charm. In fact, she makes sure that everybody knows that she’s the hottest, coolest, most amazing girl in this whole establishment, okay?! She is ruthless and will do anything to get what she wants. However, despite her overachieving ways and her promising future, Karolina finds herself struggling with her image…so much that it loadVariabless affecting her mental state and health. Her best friend and “second in command” is Neha.",
        "An aspiring fashion designer, Neha loves making her own clothes and other’s clothes. She spends countless hours designing seasonal collections and actually sells them to the students of Arlington (at a very high price!) Her success in the school is huge and she’s almost always sold out…but she’s using that success to hide her secret…a secret she believes will destroy her. She uses Karolina as her main model and is Axel’s official stylist for his concerts and photoshoots. Rather reserved and cold, Neha can, however, be surprisingly nice…whenever Karolina isn’t around.",
        "Raquel is passionate, borderline obsessed about soccer! A promising athlete in the Athletics department, she’s energetic, ambitious and has no time for any crap. Despite being the most direct and honest student in Arlington, she can’t help but have a secret too…a secret she tries really hard to hide from her family. Raquel is always in it for the win, and that’s because she simply cannot afford to lose.",
        "Tadashi is the current Student Body President of Arlington Academy. Having the highest GPA of the school, an estimated IQ of 160, being a star student and a jack of all trades, Tadashi doesn’t have time for any crap…and that means it will be very hard for your Scholar to get to know him. You’ll have to be sharp, organized and future-oriented…because the future is exactly what troubles this guy.",
        "A European foreign student, Tegan specializes in Computer Science. He loves to program and spends the majority of his time in front of the computer. He also loves robotics and any kind of engineering. He has the second highest GPA of the school, beaten only by Tadashi. But despite his adorkableness and his intelligence, Tegan faces a lot of pressure from people…people who won’t believe in him and his dreams. His roommate and best friend is Tyler and he has a twin sister: Karolina.",
        "A graphic designer in the Fine Arts department and highly skilled in anything involving visuals, thanks to his photographic memory, Tyler loves to be the center of attention! He is an artist from head to toe: charming, sensitive, creative…and highly critical of himself. It’s hard to constantly feel like your work isn’t good enough, especially when rejection is everywhere you look. Despite being very different, Tyler and Tegan make an incredible team, and being their friend comes with a lot of advantages!",
        "Serena is the senior student that helped you understand how things work at Arlington Academy on your first day of school. She is weirdly knowledgeable in many things regarding the school’s rules, to the point where you wonder if she is really a student...Serena and her friends are always there to assist you if you need any help!",
        "Friends of Serena and senior students you have met on your first day at Arlington. Proven by the fact that they, like most seniors, hardly abide by the school rules, C & A are somewhat bizarre in their own ways. Don't worry, though, they're actually quite friendly! Nobody knows why A wears a radioactive suit and it is best to not ask any questions.",
        "Lady Arlington is the President and Dean of Arlington Academy. She is very strict, powerful and rich. If you are a good student, you have nothing to fear."
    ];

//CHAPTERS & DESCRIPTION
    const availableChapters = 3;

    var chapters = 
    [
        "Introduction",
        "Chapter 1",
        "Chapter 2",
        "Chapter 3",
        "Chapter 4"
    ];
    
    var chapter_images = 
    [
        "chapter0",
        "chapter1",
        "chapter2",
        "chapter3",
        "chapter4",
        "chapter5",
        "chapter6",
        "chapter7",
        "chapter8",
        "chapter9"
    ];

    var chapter_description = 
    [
        "You just arrived at Arlington Academy, but everything is so new and big! You're going to need help from a few senior students who will lay down the basics on how things work around here.",
        "Classes tomorrow, so today is the time to try to make some new friends...but why is everybody so stressed today? Turns out even the simplest things back at home are much more complicated here at Arlington.",
        "Oh no! You're running late to class on your first day! As if this wasn't bad enough, the whole school seems to be revolving around a certain teenage celebrity and an exclusive homecoming party. But things aren't exactly as great as they look on the surface... ",
        "Description",
        "Description",
        "Description",
        "Description",
        "Description",
        "Description",
        "Description"
    ];

//All Characters

    var alistair = 
    {
        isDatable: true,//const
        affinity: 0,
        isCrush: false,
        name: "Alistair",//const
        fullName: "Alistair Drew",//const
        path: "alistair",//const, no caps
        birthday: "March 1st",//const
        likes: "Sports, protein shakes and his family",//const
        dislikes: "Arrogance, laziness, coldness",//const
        description: "The most promising athlete of the school, he’s on a scholarship just like your Scholar! Alistair specializes in martial arts in general, but his favorite sport is boxing, in which he dreams of making a career out of it and competing in the Olympic Games one day. Unlike most of his classmates, Alistair comes from a middle-class family that struggles with money, and he’s determined to change that. Despite the difference in social classes, he and Tadashi have been best friends for a long time.",//const
    };

    var axel = 
    {
        isDatable: true,//const
        affinity: 0,
        isCrush: false,
        name: "Axel",//const
        fullName: "Classified",//const
        path: "axel",//const, no caps
        birthday: "November 20th",//const
        likes: "Rock music, skipping classes and his guitar",//const
        dislikes: "Tadashi, country music, hypocrisy",//const
        description: "The rock star of the Academy. Literally. Axel is an internationally known teenage superstar and is usually seen touring for his new album. Cocky, sarcastic, and oh-so-charming, Axel only comes to Arlington because the law requires him to get his high school diploma and he makes sure everybody is aware of his nonchalance…But this musician constantly covers up who he is. In fact, is Axel even his real name?",//const
    };

    var claire = 
    {
        isDatable: true,//const
        affinity: 0,
        isCrush: false,
        name: "Claire",//const
        fullName: "Claire Durand",//const
        path: "claire",//const, no caps
        birthday: "October 5th",//const
        likes: "Helping People, reading scientific papers and pretty notebooks",//const
        dislikes: "rudeness, being made fun of, suffering",//const
        description: "Claire is an aspiring neurosurgeon that volunteers part-time at the local hospital. Deeply caring and protective of the people she loves, she’s the student everybody loves and respects, despite her spending most of her time studying and doing medical research alone. Claire will do anything to make her classmates happy, and she’ll do so with a smile. After all, the last thing she wants it to lose yet another person she cares about.",//const
    };

    var ellie = 
    {
        isDatable: true,//const
        affinity: 0,
        isCrush: false,
        name: "Ellie",//const
        fullName: "Ellie Collins",//const
        path: "ellie",//const, no caps
        birthday: "June 19",//const
        likes: "Mechanics, talking to people and dyeing her hair",//const
        dislikes: "Bullying, not being taken seriously, everything boring",//const
        description: "Inventor, mechanic and engineer to be, Ellie, nicknamed as “Tinker” by students is the famous president of Arlington’s robotics club! Despite being in a male-dominated field, Ellie is not afraid to shine. She loves meeting new people and has a cute, cheerful exterior that charms her potential clients. But as time passes, Ellie realizes that there are several obstacles that might put not only her career at risk…but her identity as well.",//const
    };

    var karolina = 
    {
        isDatable: true,//const
        affinity: 0,
        isCrush: false,
        name: "Karolina",//const
        fullName: "Karolina Novakova",//const
        path: "karolina",//const, no caps
        birthday: "April 25th",//const
        likes: "Shopping, clothes, modelling and getting what she wants",//const
        dislikes: "Being bothered, ugly clothes, being told what to do",//const
        description: "Considered by many to be the prettiest girl in school, Karolina specializes in modelling. She’s gorgeous and fully aware of her charm. In fact, she makes sure that everybody knows that she’s the hottest, coolest, most amazing girl in this whole establishment, okay?! She is ruthless and will do anything to get what she wants. However, despite her overachieving ways and her promising future, Karolina finds herself struggling with her image…so much that it loadVariabless affecting her mental state and health. Her best friend and “second in command” is Neha.",//const
    };
    
    var neha = 
    {
        isDatable: true,//const
        affinity: 0,
        isCrush: false,
        name: "Neha",//const
        fullName: "Neha Rao",//const
        path: "neha",//const, no caps
        birthday: "July 7th",//const
        likes: "Colourful fabrics, innovative designs, The colour gold",//const
        dislikes: "Fashion disasters, being forced to be social, science class",//const
        description: "An aspiring fashion designer, Neha loves making her own clothes and other’s clothes. She spends countless hours designing seasonal collections and actually sells them to the students of Arlington (at a very high price!) Her success in the school is huge and she’s almost always sold out…but she’s using that success to hide her secret…a secret she believes will destroy her. She uses Karolina as her main model and is Axel’s official stylist for his concerts and photoshoots. Rather reserved and cold, Neha can, however, be surprisingly nice…whenever Karolina isn’t around.",//const
    };

    var raquel = 
    {
        isDatable: true,//const
        affinity: 0,
        isCrush: false,
        name: "Raquel",//const
        fullName: "Raquel Perriera",//const
        path: "raquel",//const, no caps
        birthday: "December 3rd",//const
        likes: "Soccer, winning and fast Food",//const
        dislikes: "Homework, classical music, party Poopers",//const
        description: "Raquel is passionate, borderline obsessed about soccer! A promising athlete in the Athletics department, she’s energetic, ambitious and has no time for any crap. Despite being the most direct and honest student in Arlington, she can’t help but have a secret too…a secret she tries really hard to hide from her family. Raquel is always in it for the win, and that’s because she simply cannot afford to lose.",//const
    };

    var tadashi = 
    {
        isDatable: true,//const
        affinity: 0,
        isCrush: false,
        name: "Tadashi",//const
        fullName: "Tadashi Nakano",//const
        path: "tadashi",//const, no caps
        birthday: "September 17th",//const
        likes: "Leading people, finance and relaxing",//const
        dislikes: "Axel, inefficiency, dishonesty",//const
        description: "Tadashi is the current Student Body President of Arlington Academy. Having the highest GPA of the school, an estimated IQ of 160, being a star student and a jack of all trades, Tadashi doesn’t have time for any crap…and that means it will be very hard for your Scholar to get to know him. You’ll have to be sharp, organized and future-oriented…because the future is exactly what troubles this guy.",//const
    };
    
    var tegan = 
    {
        isDatable: true,//const
        affinity: 0,
        isCrush: false,
        name: "Tegan",//const
        fullName: "Tegan Novak",//const
        path: "tegan",//const, no caps
        birthday: "April 25th",//const
        likes: "Video games, computers and taking Naps",//const
        dislikes: "Aggressiveness, loud parties, when his computer lags",//const
        description: "A European foreign student, Tegan specializes in Computer Science. He loves to program and spends the majority of his time in front of the computer. He also loves robotics and any kind of engineering. He has the second highest GPA of the school, beaten only by Tadashi. But despite his adorkableness and his intelligence, Tegan faces a lot of pressure from people…people who won’t believe in him and his dreams. His roommate and best friend is Tyler and he has a twin sister: Karolina.",//const
    };

    var tyler = 
    {
        isDatable: true,//const
        affinity: 0,
        isCrush: false,
        name: "Tyler",//const
        fullName: "Tyler Williams",//const
        path: "tyler",//const, no caps
        birthday: "August 21st",//const
        likes: "Drawing, being the center of attention, going to the crafts store",//const
        dislikes: "Structure, school, close-mindedness",//const
        description: "A graphic designer in the Fine Arts department and highly skilled in anything involving visuals, thanks to his photographic memory, Tyler loves to be the center of attention! He is an artist from head to toe: charming, sensitive, creative…and highly critical of himself. It’s hard to constantly feel like your work isn’t good enough, especially when rejection is everywhere you look. Despite being very different, Tyler and Tegan make an incredible team, and being their friend comes with a lot of advantages!",//const
    };

    var lady_arlington = 
    {
        isDatable: false,//const
        affinity: 0,
        isCrush: false,
        name: "Lady Arlington",//const
        fullName: "Lady Arlington",//const
        path: "undefinedddddd",//const, no caps
        birthday: "unknown",//const
        likes: "unknown",//const
        dislikes: "unknown",//const
        description: "unknown",//const
    };

    var coach_davis = 
    {
        isDatable: false,//const
        affinity: 0,
        isCrush: false,
        name: "Coach Davis",//const
        fullName: "Coach Davis",//const
        path: "",//const, no caps
        birthday: "",//const
        likes: "",//const
        dislikes: "",//const
        description: "",//const
    };
    
    var serena = 
    {
        isDatable: false,//const
        affinity: 0,
        isCrush: false,
        name: "Serena",//const
        fullName: "Serena",//const
        path: "",//const, no caps
        birthday: "",//const
        likes: "",//const
        dislikes: "",//const
        description: "",//const
    };

    var cecile = 
    {
        isDatable: false,//const
        affinity: 0,
        isCrush: false,
        name: "Cecile",//const
        fullName: "Cecile",//const
        path: "",//const, no caps
        birthday: "",//const
        likes: "",//const
        dislikes: "",//const
        description: "",//const
    };

    var teacher = 
    {
        isDatable: false,//const
        affinity: 0,
        isCrush: false,
        name: "Mrs. Rodriguez",//const
        fullName: "Mrs. Rodriguez",//const
        path: "",//const, no caps
        birthday: "",//const
        likes: "",//const
        dislikes: "",//const
        description: "",//const
    };

    var empty = 
    {
        isDatable: false,//const
        affinity: 0,
        isCrush: false,
        name: "None",//const
        fullName: "None",//const
        path: "tadashi",//const, no caps
        birthday: "",//const
        likes: "",//const
        dislikes: "",//const
        description: "You have 0% Infinity with all your friends. <br> Well... <br>You're at zero, so I guess <em><b>you have no friends</b></em>. <br><br> In any case, come back when you make some.<br> Don't neglect your homework for it, though. <br><br> Sincerely, <br><b>Tadashi Nakano <br>Student Body President</b>",//const
    };

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

//les sprites pour chaque character
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
                        characters_path + "neha/base.png",          // 0: base
                        characters_path + "neha/happy.png",         // 1: happy
                        characters_path + "neha/blush.png",         // 2: blush
                        characters_path + "neha/annoyed.png",       // 3: annoyed
                        characters_path + "neha/angry.png",         // 4: angry
                        characters_path + "neha/surprise.png",      // 5: surprise
                    ],
    tadashi:        [
                        characters_path + "tadashi/base.png",       // 0: base
                        characters_path + "tadashi/happy.png",      // 1: happy
                        characters_path + "tadashi/blush.png",      // 2: blush
                        characters_path + "tadashi/annoyed.png",    // 3: annoyed
                        characters_path + "tadashi/angry.png",      // 4: angry
                        characters_path + "tadashi/surprise.png",   // 5: surprise
                    ],
    axel:           [
                        characters_path + "axel/base.png",          // 0: base
                        characters_path + "axel/happy.png",         // 1: happy
                        characters_path + "axel/blush.png",         // 2: blush
                        characters_path + "axel/annoyed.png",       // 3: annoyed
                        characters_path + "axel/angry.png",         // 4: angry
                        characters_path + "axel/surprise.png",      // 5: surprise
                    ],    
    raquel:         [
                        characters_path + "raquel/base.png",        // 0: base
                        characters_path + "raquel/happy.png",       // 1: happy
                        characters_path + "raquel/blush.png",       // 2: blush
                        characters_path + "raquel/annoyed.png",     // 3: annoyed
                        characters_path + "raquel/angry.png",       // 4: angry
                        characters_path + "raquel/surprise.png",    // 5: surprise
                    ],
    claire:         [
                        characters_path + "claire/base.png",        // 0: base
                        characters_path + "claire/happy.png",       // 1: happy
                        characters_path + "claire/blush.png",       // 2: blush
                        characters_path + "claire/annoyed.png",     // 3: annoyed
                        characters_path + "claire/angry.png",       // 4: angry
                        characters_path + "claire/surprise.png",    // 5: surprise
                    ],
    ellie:          [
                        characters_path + "ellie/base.png",         // 0: base
                        characters_path + "ellie/happy.png",        // 1: happy
                        characters_path + "ellie/blush.png",        // 2: blush
                        characters_path + "ellie/annoyed.png",      // 3: annoyed
                        characters_path + "ellie/angry.png",        // 4: angry
                        characters_path + "ellie/surprise.png",     // 5: surprise
                    ],
    tegan:          [
                        characters_path + "tegan/base.png",         // 0: base
                        characters_path + "tegan/happy.png",        // 1: happy
                        characters_path + "tegan/blush.png",        // 2: blush
                        characters_path + "tegan/annoyed.png",      // 3: annoyed
                        characters_path + "tegan/angry.png",        // 4: angry
                        characters_path + "tegan/surprise.png",     // 5: surprise
                    ],
    tyler:          [
                        characters_path + "tyler/base.png",         // 0: base
                        characters_path + "tyler/happy.png",        // 1: happy
                        characters_path + "tyler/blush.png",        // 2: blush
                        characters_path + "tyler/annoyed.png",      // 3: annoyed
                        characters_path + "tyler/angry.png",        // 4: angry
                        characters_path + "tyler/surprise.png",     // 5: surprise
                    ],

    charaX:         [
                        characters_path + "../other/serena/base.png",       // 0: base
                        characters_path + "../other/serena/happy.png",      // 1: happy
                        characters_path + "../other/serena/blush.png",      // 2: blush
                        characters_path + "../other/serena/annoyed.png",    // 3: annoyed
                        characters_path + "../other/serena/angry.png",      // 4: angry
                        characters_path + "../other/serena/surprise.png",   // 5: surprise
                    ],
    charaY:         [
        characters_path + "../other/cecile/base.png",       // 0: base
        characters_path + "../other/cecile/happy.png",      // 1: happy
        characters_path + "../other/cecile/blush.png",      // 2: blush
        characters_path + "../other/cecile/annoyed.png",    // 3: annoyed
        characters_path + "../other/cecile/angry.png",      // 4: angry
        characters_path + "../other/cecile/surprise.png",   // 5: surprise
                    ],
    l_arlington:    [
                        characters_path + "../teachers/LadyArlington/base.png",    // 0 : Neutral expresion
                        characters_path + "../teachers/LadyArlington/happy.png",   // 1 : Neutral expresion
                        characters_path + "../teachers/LadyArlington/blush.png",   // 2 : Neutral expresion
                        characters_path + "../teachers/LadyArlington/annoyed.png", // 3 : Neutral expresion
                        characters_path + "../teachers/LadyArlington/angry.png",   // 4 : Neutral expresion
                        characters_path + "../teachers/LadyArlington/surprise.png",// 5 : Neutral expresion
                    ],
    teacher:    [
                        characters_path + "../teachers/math/base.png",    // 0 : Neutral expresion
                        characters_path + "../teachers/math/happy.png",   // 1 : Neutral expresion
                        characters_path + "../teachers/math/blush.png",   // 2 : Neutral expresion
                        characters_path + "../teachers/math/annoyed.png", // 3 : Neutral expresion
                        characters_path + "../teachers/math/angry.png",   // 4 : Neutral expresion
                        characters_path + "../teachers/math/surprise.png",// 5 : Neutral expresion
                    ]
};

//contains the php nomenclature (DO NOT MODIFY. EVER. Unless database names change, of course)
var x = 
{
    //USERINFO table
    username: 'username',
    energy: 'energy',
    money: 'money',
    nbreplays: 'nbreplays',

    //SCHOLARINFO table
    scholarName: 'scholar_name',
    gender: 'scholar_gender',
    // sex: 'scholar_sex',
    department: 'scholar_department',
    // haircolor: 'scholar_haircolor',
    // hairstyle: 'scholar_hairstyle',
    // skincolor: 'scholar_skincolor',
    // eyecolor: 'scholar_eyecolor',
    // wigID: 'wig_id',
    // shirtId: 'shirt_id',
    // pantsID: 'pants_id',
    // socksID: 'socks_id',
    // shoesID: 'shoes_id',
    // accessoryID: 'accessory_id',
    
    //STORY table
    storyLocation: 'storylocation',
    lastChapterPlayed: 'lastchapterplayed',
    physicalLocationInt: 'physicallocationint',

    //AFFINITY table (Main 10)
    karolina: 'karolina',
    ellie: 'ellie',
    neha: 'neha',
    raquel: 'raquel',
    claire: 'claire',
    alistair: 'alistair',
    tadashi: 'tadashi',
    tegan: 'tegan',
    tyler: 'tyler',
    axel: 'axel',

    //AFFINITY table (Other)
    ladyArlington: 'ladyarlington',
    coach_davis: 'coachdavis',
    serena: 'serena',
    cecile: 'cecile',
    teacherChapter2: 'teacherchapter2'
}

var user = 
{
    username: "None",
    scholarname: "None",
    energy: 0,
    money: 0,
    storyLocation: 0,//VARIABLE COMMUNE À TOUS LES CHAPITRES, LA SEULE CHOSE QUI PEU BLOQUER serait de mettre un IF(last_chapter_played == this)
    last_chapter_played: 0,
    physicalLocation: backgrounds_path + locations.blackScreen,
    physicalLocationInt: 0,
    department: 0,
    sex: 0, //0: female, 1: male
    gender: 0,//0: she, 1: he, 2: they
    haircolor: 0,//
    hairstyle: 0,//
    skincolor: 0,//
    eyecolor: 0,//
    wigID: 0,
    pronoun: 0,//0: she, 1: he, 3: they

    karolina: 0,
    ellie: 0,
    neha: 0,
    raquel: 0,
    claire: 0,
    alistair: 0,
    tadashi: 0,
    tegan: 0,
    tyler: 0,
    axel: 0,
  
    lady_arlington: 0,
    coach_davis: 0,
    serena: 0,
    cecile: 0,
    teacher: 0,
};

var oldUser = user;

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

    const isVisited = 18;
    const POI = 19;
    const LP = 20;

    //Objectives
    const new_objective_pointer = 13;
    const completed_objective_pointer = 19;
    

function loadIsVisited(chapter)
{
    $.ajax('dbtransfers/load_is_visited.php',
    {
        type: 'GET',
        async: false,
        dataType: 'html',
    }).done(function (response)//when the request is done, we execute the following code:
    {
        // TODO: encode the response in JSON directly in the php file
        // that way, there is no need to append to the DOM
        // console.log(response);
        
        //we print the response in #DB_handle:
        $('#DB_handle').html(response);
        
        var chapter_size = parseInt(document.getElementById("chapter_size").value);
        console.log("Loaded isVisited for " + chapter_size + " slides.");
        
        //chapter_size is actually one more (+1)

        //then we save them as JS variables:
        for(var i = 0; i < chapter_size; i++)
        {
            var new_variable = "c" + i;
            // console.log(new_variable);
            var isVisitedValue = document.getElementById(new_variable).value;

            //convert from int to boolean 1 -> true
            var actualValue = false;
            if(isVisitedValue == 1) actualValue = true;

            story[isVisited][i] = actualValue;
        }
    });
}

function saveIsVisited(chapter)
{
    // solution: https://stackoverflow.com/questions/1184123/is-it-possible-to-add-dynamically-named-properties-to-javascript-object
    var jsonData = {};
    
    var chapter_size = story[0].length;
    
    //convert the data into JSON (true -> 1)
    for(var i = 0; i < chapter_size; i++)
    {
        // console.log("(saving) " + i + ": " + story[isVisited][i]);
        
        var JSONpropertyName = "c" + i;
        var value = 0;

        if(story[isVisited][i])
        {
            value = 1;
        }

        jsonData[JSONpropertyName] = value;
    }

    console.log("Saving isVisited: ");
    console.log(jsonData);
    
    //send the JSON data to the server
    $.ajax('dbtransfers/save_is_visited.php',
        {
            type: 'POST',
            async: false,
            dataType: "json",
            data: jsonData
    }).done(function (response)
    {
        console.log(response);
        console.log("Saved isVisited for " + chapter_size + " slides.");
    });
}

function pullVariablesFromDB()//we load the data from the database, and put it in the div with the ID = "#DB_handle" -> thus why we use $('#DB_handle')
{
    // console.log("Pulling data from the database...");
    
    // $('#DB_handle').load('dbtransfers/get_variables.php', function()//pull variables from the DB
    $.ajax('dbtransfers/get_variables.php',
    {
        type: 'GET',
        async: false,
        dataType: 'html',
    }).done(function (response)//when the request is done, we execute the following code:
    {
        //we print the response in #DB_handle:

        $('#DB_handle').html(response);

        //then we save them as JS variables:

        /********************
        USERINFO table
        *********************/
        user.username = document.getElementById("db_handle_username").innerHTML;
        user.energy = document.getElementById("db_handle_energy").innerHTML;
        user.money = document.getElementById("db_handle_money").innerHTML;

        /********************
        SCHOLARINFO table
        *********************/
        user.scholarname = document.getElementById("db_handle_scholarname").value;
        user.department = document.getElementById("db_handle_department").value;
        user.sex = parseInt(document.getElementById("db_handle_sex").value);
        user.gender = parseInt(document.getElementById("db_handle_gender").value);
        user.haircolor = parseInt(document.getElementById("db_handle_haircolor").value);
        user.hairstyle = parseInt(document.getElementById("db_handle_hairstyle").value);
        user.skincolor = parseInt(document.getElementById("db_handle_skincolor").value);
        user.eyecolor = parseInt(document.getElementById("db_handle_eyecolor").value);
        user.wigID = parseInt(document.getElementById("db_handle_wigID").value);
        
        /********************
        STORY table
        *********************/
        user.storyLocation = document.getElementById("db_handle_story_location").value;//we should use an input and .value
        user.last_chapter_played = document.getElementById("db_handle_last_chapter_played").value;//we should use an input and .value
        user.physicalLocationInt = parseInt(document.getElementById("db_handle_physicallocationint").value);
        // console.log("Chapter " + user.last_chapter_played + " (Inside loop)");
        
        /********************
        AFFINITY table
        *********************/
        karolina.affinity = document.getElementById("db_handle_a1").value;
        ellie.affinity = document.getElementById("db_handle_a2").value;
        neha.affinity = document.getElementById("db_handle_a3").value;
        raquel.affinity = document.getElementById("db_handle_a4").value;
        claire.affinity = document.getElementById("db_handle_a5").value;
        alistair.affinity = document.getElementById("db_handle_a6").value;
        tadashi.affinity = document.getElementById("db_handle_a7").value;
        tegan.affinity = document.getElementById("db_handle_a8").value;
        tyler.affinity = document.getElementById("db_handle_a9").value;
        axel.affinity = document.getElementById("db_handle_a10").value;
        lady_arlington.affinity = document.getElementById("db_handle_a11").value;
        coach_davis.affinity = document.getElementById("db_handle_a12").value;
        serena.affinity = document.getElementById("db_handle_a13").value;
        cecile.affinity = document.getElementById("db_handle_a14").value;
        teacher.affinity = document.getElementById("db_handle_a15").value;

        // $(document).ready(function(){try{refreshInterface();}catch(e){}});
        $(document).ready(function(){try{update_highest_affinity(); update_current_chapter();}catch(e){}});
        
        console.log("Loaded data from database.")

        oldUser = Object.create(user);
        resetOldUserValues();
    });
}

function resetOldUserValues()
{
     /********************
    USERINFO table
    *********************/
    oldUser.username = user.username;
    oldUser.energy = user.energy; 
    oldUser.money = user.money;

    /********************
     SCHOLARINFO table
    *********************/
    oldUser.scholarname = user.scholarname;
    oldUser.department = user.department
    oldUser.sex = user.sex
    oldUser.gender = user.gender
    oldUser.haircolor = user.haircolor
    oldUser.hairstyle = user.hairstyle
    oldUser.skincolor = user.skincolor
    oldUser.eyecolor = user.eyecolor
    oldUser.wigID = user.wigID
    
    /********************
     STORY table
    *********************/
    oldUser.storyLocation = user.storyLocation
    oldUser.last_chapter_played = user.last_chapter_played
    oldUser.physicalLocationInt = user.physicalLocationInt
    
    /********************
     AFFINITY table
    *********************/
    oldUser.karolina = user.karolina
    oldUser.ellie = user.ellie
    oldUser.neha = user.neha
    oldUser.raquel = user.raquel
    oldUser.claire = user.claire
    oldUser.alistair = user.alistair
    oldUser.tadashi = user.tadashi
    oldUser.tegan = user.tegan
    oldUser.tyler = user.tyler
    oldUser.axel = user.axel

    oldUser.lady_arlington = user.lady_arlington
    oldUser.coach_davis = user.coach_davis
    oldUser.serena = user.serena
    oldUser.cecile = user.cecile
    oldUser.teacherChapter2 = user.teacherChapter2

    oldUser.karolina = karolina.affinity;
    oldUser.ellie = ellie.affinity;
    oldUser.neha = neha.affinity;
    oldUser.raquel = raquel.affinity;
    oldUser.claire = claire.affinity;
    oldUser.alistair = alistair.affinity;
    oldUser.tadashi = tadashi.affinity;
    oldUser.tegan = tegan.affinity;
    oldUser.tyler = tyler.affinity;
    oldUser.axel = axel.affinity;

    oldUser.lady_arlington = lady_arlington.affinity;
    oldUser.coach_davis = coach_davis.affinity;
    oldUser.serena = serena.affinity;
    oldUser.cecile = cecile.affinity;
    oldUser.teacher = teacher.affinity;
}

pullVariablesFromDB();

/*Solution to ASYNC problem:
    - await function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
    - use $.ajax instead of $().load(): https://stackoverflow.com/questions/29200720/what-is-the-ajax-equivalent-of-load
    - $.ajax documentation ("async: false" tag): http://api.jquery.com/jquery.ajax/
    - idea to use "async: false":   https://stackoverflow.com/questions/133310/how-can-i-get-jquery-to-perform-a-synchronous-rather-than-asynchronous-ajax-re
                                    https://stackoverflow.com/questions/755885/how-do-i-make-jquery-wait-for-an-ajax-call-to-finish-before-it-returns

    - $().load documentation (useless for the solution): http://api.jquery.com/load/
*/

// function loadVariables()
// {
    // do
    // {
        // console.log("before: " + user.last_chapter_played);
        // await buffer();
        // pullVariablesFromDB();
        // console.log("after: " + user.last_chapter_played);// + ", xhr = " + xhr);
    // }while(!buffer);

    // xhr = "0";
// }

/**
     * https://openclassrooms.com/courses/simplifiez-vos-developpements-javascript-avec-jquery/premiers-pas-avec-ajax
     */


 