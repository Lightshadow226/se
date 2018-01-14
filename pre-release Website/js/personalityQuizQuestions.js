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
    "What is your idea of a perfect date?"
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
    "I experiment with the answers given to me and try to come up with smart answers to them.",//(Pure and Applied Sciences)
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
    "When people don’t understand, judge or put down my vision."//(Fashion)
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
    "I’d love to go jog with them and then go back home and cook some yummy good together!",//(Athletics)
    "Spending a day at the mall with my crush."//(Fashion)
];