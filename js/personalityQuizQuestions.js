/*
Questions for the Personality Quiz

Coded by Lightshadow

January 13, 2018
*/

const c = 7;//7 answers for every question

//QUESTIONS
var questions = [
    "When it comes to homework, how do you get to work?",
    "You’ve been feeling very stressed out lately. How do you unwind?",
    "Among the following, what makes you the happiest?",
    "If there is one thing you couldn’t live without, it would be…",
    "How do you dress in your daily life?",
    "Which of the following annoys you the most?",
    "If your friends could describe you in one word, which one would it be?",
    "What is your idea of a perfect date?",
    "What is your favorite book genre?",
    "What is the current state of your room?",
    "What do you usually post on your social media?",
    "How do you behave at a party?",
    "Do you find it easy to make friends?",
    "How easily do you get attached to fictional characters?",
    "How do you approach controversy or drama?",
    "How much do you worry about what other people think of you?",
    "What animal would you want to have as a pet?",
    "Okay, we're going to consider all of your answers. But if you could choose which department to go to, which one would it be?"

];

const questions_quantity = questions.length;

//ANSWERS
var answers = new Array();
var selected_answers = new Array(questions_quantity);//points to the index of the selected answer (for all questions)
var departments_results = new Array();//the result for each department, is incremented with the questions answered

for (var i = 0; i < c; i++)
{
    answers[i]= new Array();//il faut créer des arrays pour chaque array. Donc pour x[0], il faut créer des arrays, mais pour x[1] aussi, les deux sont indépendents. Il peut y avoir x[0][1][1][10] et x[1][2] qui coexistent
    departments_results[i] = 0;
}

//question 1 answers
answers[0] = [
     "Right away. I like to get things done and do not like to procrastinate.",//(Business, Commerce and Politics)
    "I find a quiet, productive spot and I take my time to get all of the answers right.",//(Health Sciences)
    "I experiment with the questions given to me and try to come up with smart answers to them.",//(Pure and Applied Sciences)
    "I procrastinate like crazy, but somehow still manage to pull off something half-reasonable.",//(Performing Arts)
    "I often forget to do my homework, oops!",//(Fine Arts)
    "Unless it’s something I am passionate about, it’s going to have to wait.",//(Athletics)
    "Homework? Sorry, I’m not doing that."//(Fashion)
];

//question 2 answers
answers[1] = [
    "I don’t. Stress is an integral part of me.",//(Business, Commerce and Politics)
    "I cuddle up with a good book.",//(Health Sciences)
    "I take long and satisfying naps.",//(Pure and Applied Sciences)
    "I call up some friends and hang out!",//(Performing Arts)
    "I catch up on my social media and on my favorite TV shows.",//(Fine Arts)
    "I make myself a good, healthy meal.",//(Athletics)
    "I go shopping!"//(Fashion)
];

//question 3 answers
answers[2] = [
    "Leading people towards a common goal or ideology.",//(Business, Commerce and Politics)
    "Helping people in need and connecting with others.",//(Health Sciences)
    "Constantly exploring and trying to improve the future.",//(Pure and Applied Sciences)
    "Touching the hearts of people with my performances.",//(Performing Arts)
    "Creating something beautiful and inspiring others.",//(Fine Arts)
    "Pushing myself to my limit and winning.",//(Athletics)
    "Discovering new trends and being an influencer."//(Fashion)
];

//question 4 answers
answers[3] = [
    "A planner or notebook",//(Business, Commerce and Politics)
    "Food, water, shelter and sleep to live. I am a human being.",//(Health Sciences)
    "An Internet Connection",//(Pure and Applied Sciences)
    "A cellphone",//(Performing Arts)
    "A sketchbook",//(Fine Arts)
    "I am strong enough to adapt to any situation, really.",//(Athletics)
    "A functional wardrobe"//(Fashion)
];

//question 5 answers
answers[4] = [
    "A good mix between classy and casual.",//(Business, Commerce and Politics)
    "Something simple and practical, yet still super cute.",//(Health Sciences)
    "Honestly? I just want to be comfortable.",//(Pure and Applied Sciences)
    "Bring on the edge. I don’t follow fashion rules.",//(Performing Arts)
    "Every single piece of my clothing needs to reflect my aesthetic and is carefully picked.",//(Fine Arts)
    "Something aerodynamic, preferably. I like to have space to move.",//(Athletics)
    "Something completely avant-garde and new!"//(Fashion)
];

//question 6 answers
answers[5] = [
    "When people try to hold me back from success.",//(Business, Commerce and Politics)
    "When people lack empathy for others.",//(Health Sciences)
    "When people argue against proven facts.",//(Pure and Applied Sciences)
    "When someone tries to get too much attention out of others.",//(Performing Arts)
    "When people try to put me in a box or slap a label on me.",//(Fine Arts)
    "When people give up without trying.",//(Athletics)
    "When people judge, suppress, or don't understand my vision."//(Fashion)
];

//question 7 answers
answers[6] = [
    "Ambitious",//(Business, Commerce and Politics)
    "Caring",//(Health Sciences)
    "Rational",//(Pure and Applied Sciences)
    "Passionate",//(Performing Arts)
    "Creative",//(Fine Arts)
    "Fearless",//(Athletics)
    "Sharp"//(Fashion)
];

//question 8 answers
answers[7] = [
    "A classic restaurant and movie date.",//(Business, Commerce and Politics)
    "Something casual, like a lovely walk in the park.",//(Health Sciences)
    "I hate going out, I’d be very happy if we’d just stay indoors and play video games.",//(Pure and Applied Sciences)
    "Going to a concert with my crush!",//(Performing Arts)
    "A nice coffee shop and museum date.",//(Fine Arts)
    "I’d love to go jog with them and then go back home and cook some yummy food together!",//(Athletics)
    "Spending a day at the mall with my crush."//(Fashion)
];

answers[8] = [
    "I enjoy non-fiction books that I can learn from.",//(Business, Commerce and Politics)
    "I have to admit…I have a soft spot for romance novels.",//(Health Sciences)
    "I’m really into mystery, fantasy and science-fiction stories!",//(Pure and Applied Sciences)
    "I’m not that much of a reader, to be honest. I prefer movies.",//(Performing Arts)
    "Anything that has a lot of visuals in it! I like to link what I read with what I see.",//(Fine Arts)
    "I like books with a lot of action scenes!",//(Athletics)
    "I’d read anything that was recommended to me by a source I trust."//(Fashion)
];

answers[9] = [
    "Everything is organized in a precise order and if anything is out of place, I lose my mind.",//(Business, Commerce and Politics)
    "I try to keep things organized and tidy, though I do not mind a little mess sometimes.",//(Health Sciences)
    "Everything is a mess, but for some reason, I manage to organize it properly in my head and always know where things are.",//(Pure and Applied Sciences)
    "Let’s just say…my roommates hate me. It’s horrible.",//(Performing Arts)
    "It’s not too tidy nor too messy, but I have way too many posters on my wall.",//(Fine Arts)
    "I’m never home so my room never gets the chance to get messy except for all of the clothes I forget on the floor.",//(Athletics)
    "My room is generally organized, but my closet is always overflowing."//(Fashion)
];

answers[10] = [
    "I monitor my social media to the last detail in case my future employer finds something compromising. So nothing too extra.",//(Business, Commerce and Politics)
    "Pretty pictures of nature, and of my family and I!",//(Health Sciences)
    "The dankest memes.",//(Pure and Applied Sciences)
    "Selfies, videos, and literally the best pictures of my friends and I. Call me narcissistic, I don’t care.",//(Performing Arts)
    "Mostly my own art. I also run an art blog on the side.",//(Fine Arts)
    "Inspirational quotes and yummy recipes.",//(Athletics)
    "Anything related to the latest trends."//(Fashion)
];

answers[11] = [
    "I tend to avoid parties that do not offer me an opportunity to network with millionaires. I don’t have time to waste.",//(Business, Commerce and Politics)
    "I try to enjoy myself and meet new people, but the loud music often tires me out.",//(Health Sciences)
    "I avoid loud parties at all costs! I like staying home.",//(Pure and Applied Sciences)
    "I will stop at nothing until I become the life of the party and make a hundred new friends in the process.",//(Performing Arts)
    "I stick with my friends. We end up ditching early and finding a more quiet place to talk.",//(Fine Arts)
    "I dance a lot and socialize with people but I go home early because I value my sleep.",//(Athletics)
    "I spend hours trying to pick out the perfect outfit. Once I get to the party, all eyes are on me."//(Fashion)
];

answers[12] = [
    "I make friends easily, but I don’t make CLOSE friends easily. It takes time for me to trust.",//(Business, Commerce and Politics)
    "I am very shy at first, but people usually warm up to me fast!",//(Health Sciences)
    "More or less; I tend to make friends only if we have similar interests.",//(Pure and Applied Sciences)
    "It’s ridiculously easy for me to make friends, I’m very popular!",//(Performing Arts)
    "I tend to attract many people to me then let things flow and see where it takes us.",//(Fine Arts)
    "I’m pretty friendly in general! All I want is mutual respect.",//(Athletics)
    "I am extremely selective when it comes to my friends, therefore I rarely make new ones."//(Fashion)
];

answers[13] = [
    "I…don’t? They’re not real? Why would anybody get attached to fictional characters?",//(Business, Commerce and Politics)
    "I try not to, but I have a soft spot for fictional characters with gentle and soft personalities.",//(Health Sciences)
    "I don’t get attached right away, but I usually give in to the most intellectual character in the end. They’re so cool!",//(Pure and Applied Sciences)
    "I relate to so many characters. It's hard for me to NOT get attached.",//(Performing Arts)
    "It is so ridiculously easy for me to get attached that I can’t help myself from drawing fan art of them.",//(Fine Arts)
    "It’s rare, but I get attached to some! Especially the ones that are courageous and strong.",//(Athletics)
    "I would deny it if people asked me…but I get attached to a few characters and stay loyal to them forever."//(Fashion)
];

answers[14] = [
    "I tend to avoid it but, if I can't, I usually have at least five back up arguments that would completely obliterate my haters if they try me.",//(Business, Commerce and Politics)
    "I avoid it because I do not want to hurt anybody’s feelings.",//(Health Sciences)
    "I avoid it because I can’t be bothered by stupid arguments.",//(Pure and Applied Sciences)
    "Are you kidding me? I LOVE adding flames to existing drama!",//(Performing Arts)
    "I sit peacefully on the sidelines and watch the drama unfold. There’s no way I’m getting involved, but at least I can be entertained by it!",//(Fine Arts)
    "I try to put an end to it!",//(Athletics)
    "I am usually the cause of controversy and I absolutely love it."//(Fashion)
];

answers[15] = [
    "Will it hurt my future career? If not, then I really do not give a shit what others think of me.",//(Business, Commerce and Politics)
    "I don’t want to admit it, but it really hurts when somebody doesn’t like me…",//(Health Sciences)
    "I don’t care except when it comes to the people I care about.",//(Pure and Applied Sciences)
    "I crave other people’s attention and I am not afraid to admit it.",//(Performing Arts)
    "I crave other people’s attention and I am VERY afraid to admit it.",//(Fine Arts)
    "I worry to some degree but in the end of the day, I’m happy with who I am.",//(Athletics)
    "I could not care less. I get validation from my own decisions and nobody can take that away from me."//(Fashion)
];

answers[16] = [
    "Unfortunately, I have no time to take care of a pet.",//(Business, Commerce and Politics)
    "A small hamster would be cute!",//(Health Sciences)
    "Ideally, I’d want a dragon, but the world doesn’t work that way.",//(Pure and Applied Sciences)
    "Something exotic and dangerous! Like a tiger or a lion.",//(Performing Arts)
    "I like reptiles. A snake or a lizard would be nice.",//(Fine Arts)
    "Something energetic, like a big, fluffy dog!",//(Athletics)
    "A slender and agile cat."//(Fashion)
];

answers[17] = [
    "Department of Business, Commerce and Politics",//(Business, Commerce and Politics)
    "Department of Health Sciences",//(Health Sciences)
    "Department of Pure and Applied Sciences",//(Pure and Applied Sciences)
    "Department of Performing Arts",//(Performing Arts)
    "Department of Fine Arts",//(Fine Arts)
    "Department of Athletics",//(Athletics)
    "Department of Fashion"//(Fashion)
];