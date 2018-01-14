/*

Create the Character Scroll for the Characterpage

*/

var horizontal_scroll = document.getElementById("horizontal_scroll");

    horizontal_scroll.innerHTML = "";
    horizontal_scroll.className = "center_div";
    
var index = 7;

/**********Variables**********/
/*Index Value
1:Alistair
2:Axel
3:Claire
4:Ellie
5:Karolina
6:Neha
7:Raquel
8:Tadashi
9:Tegan
10:Tyler
*/

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
    "Inventor, mechanic and engineer to be, Ellie, nicknamed as “Tinker” by students is the famous president of Arlington’s robotics club! Despite being in a male-dominated field, Ellie is not afraid to shine. She loves meeting new people and has a cute, cheerful exterior that charms her potential clients. But as time passes, Ellie realizes that there are several obstacles that might put not only her career at risk…but her identity as well.",
    "Considered by many to be the prettiest girl in school, Karolina specializes in modelling. She’s gorgeous and fully aware of her charm. In fact, she makes sure that everybody knows that she’s the hottest, coolest, most amazing girl in this whole establishment, okay?! She is ruthless and will do anything to get what she wants. However, despite her overachieving ways and her promising future, Karolina finds herself struggling with her image…so much that it starts affecting her mental state and health. Her best friend and “second in command” is Neha.",
    "An aspiring fashion designer, Neha loves making her own clothes and other’s clothes. She spends countless hours designing seasonal collections and actually sells them to the students of Arlington (at a very high price!) Her success in the school is huge and she’s almost always sold out…but she’s using that success to hide her secret…a secret she believes will destroy her. She uses Karolina as her main model and is Axel’s official stylist for his concerts and photoshoots. Rather reserved and cold, Neha can, however, be surprisingly nice…whenever Karolina isn’t around.",
    "Raquel is passionate, borderline obsessed about soccer! A promising athlete in the athletics department, she’s energetic, ambitious and has no time for any crap. Despite being the most direct and honest student in Arlington, she can’t help but have a secret too…a secret she tries really hard to hide from her family. Raquel is always in it for the win, and that’s because she simply cannot afford to lose.",
    "Tadashi is the current Student Body President of Arlington Academy. Having the highest GPA of the school, an estimated IQ of 160, being a star student and a jack of all trades, Tadashi doesn’t have time for any crap…and that means it will be very hard for your Scholar to get to know him. You’ll have to be sharp, organized and future-oriented…because the future is exactly what troubles this guy.",
    "A European foreign student, Tegan specializes in Computer Science. He loves to program and spends the majority of his time in front of the computer. He also loves robotics and any kind of engineering. He has the second highest GPA of the school, beaten only by Tadashi. But despite his adorkableness and his intelligence, Tegan faces a lot of pressure from people…people who won’t believe in him and his dreams. His roommate and best friend is Tyler and he has a twin sister: Karolina.",
    "A graphic designer in the Fine Arts department and highly skilled in anything involving visuals, thanks to his photographic memory, Tyler loves to be the center of attention! He is an artist from head to toe: charming, sensitive, creative…and highly critical of himself. It’s hard to constantly feel like your work isn’t good enough, especially when rejection is everywhere you look. Despite being very different, Tyler and Tegan make an incredible team, and being their friend comes with a lot of advantages!"
];

function indexpp()//increments the variable and returns it
{
    index = index + 1;

    if(index == 10)
    {
        index = 0;
    }

    return index;
}

function indexmm()//decrements the variable and returns it
{
    index = index - 1;

    if(index == -1)
    {
        index = 9;
    }

    return index;
}

function getindexpp(ind)//returns the variable plusplus (++)
{
    i = ind + 1;

    if(i == 10)
    {
        return 0;
    }

    return i;
}

function getindexmm(ind)//returns the variable minusminus (--)
{
    i = ind - 1;

    if(i == -1)
    {
        return 9;
    }

    return i;
}

function refresh_img()//Refresh the image of the main container
{
    var chara_pic = document.getElementById("chara_pic");

        chara_pic.src = "images/characters/"+ characters[index] + ".png";
        chara_pic.style.width = "100%";
        chara_pic.style.height = "auto";
        //chara_pic.style.height = "400px";
}

function refresh_desc()
{
    var chara_desc = document.getElementById("chara_desc");

        var desc_header = '<h4 class="center" style="text-transform: uppercase; color: #EE4C5E">' + characters[index] + '</h4>';
        var desc_fullname = '<p class="chara_list"><b>Full name: </b>' + fullname[index] + '</p>';
        var desc_birthday = '<p class="chara_list"><b>Birthday: </b>' + birthday[index] + '</p>';
        var desc_likes = '<p class="chara_list"><b>Likes: </b>' + likes[index] + '</p>';
        var desc_dislikes = '<p class="chara_list"><b>Dislikes: </b>' + dislikes[index] + '</p><br>';
        var desc_description = '<p class="chara_long_desc">' + fulldescription[index] + '</p>';

        chara_desc.innerHTML = desc_header + desc_fullname + desc_birthday + desc_likes + desc_dislikes + desc_description;
        chara_desc.className = "chara_des_subitem";
}


function refresh_container(i)
{
    horizontal_scroll.innerHTML = "";
    
    var left_wing_container = document.createElement('div');

        left_wing_container.classList = "center_div scroll_img_container";

    var left_wing = document.createElement('img');

        //left_wing.style.height = "auto";
        left_wing.src = "images/chevrons/pink/leftchevron.png";
        left_wing.className = "chevron";
        left_wing.onmouseenter =    function f()
                                    {
                                        left_wing.src = "images/chevrons/purple/leftchevron.png";
                                    }
        left_wing.onmouseleave =    function f()
                                    {
                                        left_wing.src = "images/chevrons/pink/leftchevron.png";
                                    }
        left_wing.onclick =         function f()
                                    {
                                        indexmm();

                                        refresh_container(index);
                                    }
    
    var char_container1_container = document.createElement('div');

        char_container1_container.className = "scroll_img_container";

    var char_container1 = document.createElement('img');
        
        char_container1.src = "images/characters/"+ characters[getindexmm(getindexmm(index))] + ".png";
        
        char_container1.className = "special_card scroll_img";

        char_container1.onclick =   function c()
                                    {
                                        indexmm();
                                        indexmm();

                                        refresh_img(index);
                                        refresh_desc(index);
                                        refresh_container();
                                    }

    var char_container2_container = document.createElement('div');


        char_container2_container.className = "scroll_img_container";

/*
        char_container2_container.style.flex = "auto";
        char_container2_container.style.width = "100%";*/

    var char_container2 = document.createElement('img');

        char_container2.src = "images/characters/"+ characters[getindexmm(index)] + ".png";
        
        char_container2.className = "special_card scroll_img";

        char_container2.onclick =   function c()
                                    {
                                        indexmm();

                                        refresh_img(index);
                                        refresh_desc(index);
                                        refresh_container();
                                    }
    var char_container3_container = document.createElement('div');

        char_container3_container.className = "scroll_img_container";
/*
        char_container3_container.style.flex = "auto";
        char_container3_container.style.width = "100%";*/

    var char_container3 = document.createElement('img');

        char_container3.src = "images/characters/"+ characters[index] + ".png";

        char_container3.className = "special_card scroll_img";

        char_container3.onclick =   function c()
                                    {
                                        
                                        
                                        refresh_img(index);
                                        refresh_desc(index);
                                        refresh_container();
                                    }

    var char_container4_container = document.createElement('div');

        char_container4_container.className = "scroll_img_container";

/*
        char_container4_container.style.flex = "auto";
        char_container4_container.style.width = "100%";
*/
    var char_container4 = document.createElement('img');

        char_container4.src = "images/characters/"+ characters[getindexpp(index)] + ".png";

        char_container4.className = "special_card scroll_img";

        char_container4.onclick =   function c()
                                    {
                                        indexpp();
                                        
                                        refresh_img(index);
                                        refresh_desc(index);
                                        refresh_container();
                                    }

    var char_container5_container = document.createElement('div');

        char_container5_container.className = "scroll_img_container";

/*
        char_container5_container.style.flex = "auto";
        char_container5_container.style.width = "100%";*/

    var char_container5 = document.createElement('img');

        char_container5.src = "images/characters/"+ characters[getindexpp(getindexpp(index))] + ".png";

        char_container5.className = "special_card scroll_img";

        char_container5.onclick =   function c()
                                    {
                                        indexpp();
                                        indexpp();
                                        
                                        refresh_img(index);
                                        refresh_desc(index);
                                        refresh_container();
                                    }
        
    var right_wing_container = document.createElement('div');

        right_wing_container.className = "center_div scroll_img_container";

    var right_wing = document.createElement('img');
        
        right_wing.src = "images/chevrons/pink/rightchevron.png";
        right_wing.className = "chevron";
        right_wing.onmouseenter =    function f()
                                    {
                                        right_wing.src = "images/chevrons/purple/rightchevron.png";
                                    }
        right_wing.onmouseleave =    function f()
                                    {
                                        right_wing.src = "images/chevrons/pink/rightchevron.png";
                                    }
        right_wing.onclick =        function f()
                                    {
                                        indexpp();

                                        refresh_container(index);
                                    }

    horizontal_scroll.appendChild(left_wing_container);
        left_wing_container.appendChild(left_wing);

    horizontal_scroll.appendChild(char_container1_container);
        char_container1_container.appendChild(char_container1);

    horizontal_scroll.appendChild(char_container2_container);
        char_container2_container.appendChild(char_container2);
    
    horizontal_scroll.appendChild(char_container3_container);
        char_container3_container.appendChild(char_container3);
    
    horizontal_scroll.appendChild(char_container4_container);
        char_container4_container.appendChild(char_container4);
    
    horizontal_scroll.appendChild(char_container5_container);
        char_container5_container.appendChild(char_container5);
    
    horizontal_scroll.appendChild(right_wing_container);
        right_wing_container.appendChild(right_wing);

    //alert(index);
}
/*
function refresh_container_test(i)
{
    horizontal_scroll.innerHTML = "";

    var x = document.createElement('div');

        x.className = "scroll_img_container";

        var i = document.createElement('img');

            i.className = "scroll_img";
            i.src = "images/chevrons/pink/leftchevron.png";
            
            i.onmouseenter =    function f()
                                {
                                    i.src = "images/chevrons/purple/leftchevron.png";
                                }
            i.onmouseleave =    function f()
                                {
                                    i.src = "images/chevrons/pink/leftchevron.png";
                                }
            i.onclick =         function f()
                                {
                                    indexmm();

                                    refresh_container_test(index);
                                }


            //i.style.width = "auto";
            
    var y = document.createElement('div');

        y.className = "scroll_img_container";

        var j = document.createElement('img');

            j.className = "scroll_img";
            j.src = "images/characters/"+ characters[getindexmm(getindexmm(index))] + ".png";

    var z = document.createElement('div');

        z.style.width = "100%";

        var k = document.createElement('img');

            k.className = "scroll_img";
            k.src = "images/chevrons/pink/leftchevron.png";
            
/*
    var v = document.createElement('div');

        v.style.flex = "1";

        var l = document.createElement('img');

            l.src = "images/chevrons/pink/leftchevron.png";*

    horizontal_scroll.appendChild(x);
    horizontal_scroll.appendChild(y);
    horizontal_scroll.appendChild(z);
    //horizontal_scroll.appendChild(v);
        x.appendChild(i);
        y.appendChild(j);
        z.appendChild(k);
        //v.appendChild(l);

}
*/

refresh_container(index);
//refresh_container_test(index);
refresh_desc(index);
refresh_img(index);

