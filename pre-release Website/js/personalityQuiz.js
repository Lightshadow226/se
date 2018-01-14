//create quiz variables
	var answers = new Array();
	departments_results = new Array();//the result for each department, is incremented with the questions answered
	const c = 7;//7 answers for every question
	var selected_answers = new Array(8);//an array that points to the index of the selected answer for all questions

	for (var i = 0; i < c; i++)
    {
		answers[i]= new Array();//il faut créer des arrays pour chaque array. Donc pour x[0], il faut créer des arrays, mais pour x[1] aussi, les deux sont indépendents. Il peut y avoir x[0][1][1][10] et x[1][2] qui coexistent
		departments_results[i] = 0;
    }

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

	var departments = [
		 	"Business, Commerce and Politics",
			"Health Sciences",
			"Pure and Applied Sciences",
			"Performing Arts",
			"Fine Arts",
			"Athletics",
			"Fashion"
	];

	var department_description = [
			"You belong in the Business, Commerce & Politics Department! You are a natural-born leader with a tendency to love working a little too much. You keep organized and get things done. You’re ambitious and never back down until you have reached your goal. You may come off as a little cold, but you care deeply about your classmates and only want everybody to succeed.",
	   		"You belong in the Health Sciences Department! You are very compassionate and love helping people. You care very deeply about your classmates and use your intelligence to move people forward. While you may be a little sensitive due to your empathetic nature, and your shyness has played agains you in the past, you are the person everybody can rely on.",
			"You belong in the Pure and Applied Sciences Department! You are intelligent, curious and love to solve problems. You’re straightforward, objective and very reliable! You have a wild imagination and keep an open mind. While you tend to be introverted and somewhat private, once your classmates get to know you, it becomes easy for you to win them over!",
			"You belong in the Performing Arts Department! You are outgoing, bold and love to be the center of attention. Very few can keep up with your daring nature, but one thing’s for sure: there is never a boring day around you! While you tend to be overbearing and self-centred sometimes, you make an excellent friend and are able to shine in nearly any situation.",
			"You belong in the Fine Arts Department! You are creative, fun and love to be free. You have a strong interest in beauty and nothing makes you happier than people appreciating your work! People can always count on you for inspiring them. You may be insecure at times, but your passion and sensibility makes you a great friend!",
			"You belong in the Athletics Department! You are headstrong, outgoing, passionate and very hardworking. You have a strong competitive streak and like to keep active and on the run! People can always count on you for motivating and inspiring them. You may be stubborn at times, but overall, your determination knows no limit!",
			"You belong in the Fashion Department! You are sharp, assertive and a visionary. You love to express yourself through your clothes and place a lot of importance in looking good. You are focused and absolutely love getting things done. You may be a little too obsessed with your image and judgemental at times, but you lift off your friends and support them to no end."
	];

	var departments_colors = [
			"#27468a",
			"#1e793b",
			"#575e5e",
			"#ecb624",
			"#a5539a",
			"#a51c13",
			"#000000"
	];

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

initialize();

//STEP 1: initialize the quiz interface
function initialize()
{
	document.getElementById('quiz').innerHTML = "";

	//create the interface
	var form_container = document.createElement('div');
		form_container.className = "form_container";

	//header
	var formHeader = document.createElement('h6');
		formHeader.innerHTML = "Welcome to Arlington Academy";
		formHeader.style.marginTop = "10px";

	//paragraph
	var formSubHeader = document.createElement('p');//formerly h5
		formSubHeader.innerHTML = "Which one of the seven departments do you belong to? <em>Take this quiz to find out!</em>";

	//image
	var department_img_container = document.createElement('div');
		//department_img_container.className = "";

		var department_img = document.createElement('img');
			department_img.src = "images/depts.png"
	
	//button
	var button_container = document.createElement('div');
		button_container.className = "flex-container";
	
	var left_wing = document.createElement('div');
		left_wing.className = "flex-panel";

	var begin_button = document.createElement('div');
		begin_button.className = "button pink_button";
		begin_button.style.margin = "10px";
		begin_button.style.minWidth = "100px"
		begin_button.innerHTML = "Begin!";

	var right_wing = document.createElement('div');
		right_wing.className = "flex-panel";

	document.getElementById('quiz').appendChild(form_container);
		form_container.appendChild(formHeader);
		form_container.appendChild(formSubHeader);
		form_container.appendChild(department_img_container);
			department_img_container.appendChild(department_img);
		form_container.appendChild(button_container);
			button_container.appendChild(left_wing);
			button_container.appendChild(begin_button);
			button_container.appendChild(right_wing);

	//add the button event listener -> call initialize_quiz()

	begin_button.addEventListener("click", function(e){initialize_quiz(0)}, true);
}

//STEP 2: start the quiz
function initialize_quiz(question_number)
{
	document.getElementById('quiz').innerHTML = "";	

	//create the interface
	var form_container = document.createElement('div');
		form_container.className = "form_container";

	//header
	var formHeader = document.createElement('h6');
		formHeader.innerHTML = "What Arlington Academy department is for you?";

	//quiz box

	var quiz_box = document.createElement('div');
		quiz_box.id = "quiz_box";

	//question
	var formSubHeader = document.createElement('h5');//formerly h5
		formSubHeader.id= "form_subheader";
		formSubHeader.innerHTML = /*"<strong>" + */questions[question_number]/* + "</strong>"*/;

	document.getElementById('quiz').appendChild(form_container);
		form_container.appendChild(formHeader);
		form_container.appendChild(quiz_box);
			quiz_box.appendChild(formSubHeader);

	//7 answers
	var selected = new Array(8);//array qui va déterminer si la ligne est sélectionnée ou non
	indexList = createRandomList(7);//create 7 pointers to questions

	for (var index = 0; index < 7; index++)//7 possible answers
	{
		createFormLine(index, quiz_box, question_number, selected, indexList[index]);
	}

	//button
	var button_container = document.createElement('div');
		button_container.className = "flex-container";
	
		var left_wing = document.createElement('div');
			left_wing.className = "flex-panel";

		var begin_button = document.createElement('div');
			begin_button.className = "button purple_button";
			begin_button.style.margin = "10px";
			begin_button.style.maxWidth = "100px"
			begin_button.innerHTML = "Next";

		var right_wing = document.createElement('div');
			right_wing.className = "flex-panel";

	quiz_box.appendChild(button_container);
		button_container.appendChild(left_wing);
		button_container.appendChild(begin_button);
		button_container.appendChild(right_wing);

	// alert(question_number);
	//add the event listener for the "next" button -> call next_question()
	begin_button.addEventListener("click", function(e){call_question(question_number + 1, selected)}, true);
}

//STEP 3: output the results of the quiz
function results_quiz()
{
	//TODO: mettre des constantes
	document.getElementById('quiz').innerHTML = "";	

	// var all_answers_string = "";

	//get the answer of all the 8 question and increment the right department
	for(var i = 0; i < 8; i++)
	{
		var department_number = selected_answers[i];
		departments_results[department_number]++;
		// all_answers_string += "Q" + i + ": " + departments[department_number] + "\n";
	}
	// alert(all_answers_string);
	
	// var dll_departments_string = "";
	var best_department_answers = 0;
	var best_department_name = 0;
	var best_department_index = 0;

	for(var i = 0; i < 7; i++)//7 departments to be outputed
	{
		if(departments_results[i] > best_department_answers)
		{
			best_department_name = departments[i];
			best_department_answers = departments_results[i];
			best_department_index = i;
		}
		// dll_departments_string += departments[i] + ": " + departments_results[i] + "\n";
	}
	// alert(dll_departments_string);

	//create the interface
	var stats_container = document.createElement('div');
		stats_container.className = "flex-container";

	//left stats (2/3)
	var left_stats = document.createElement('div');
		left_stats.style.flex = "2";
		left_stats.className = "flex-container";

		//image
		var stats_img = document.createElement('img');
			stats_img.style.maxHeight = "252px";
			best_department_index++;
			stats_img.src = "images/badges/" + best_department_index + ".png";
		
		//left container right information
		var left_stats_information_container = document.createElement('div');

			//department name (title, H1)
			var department_name = document.createElement('h3');
				department_name.innerHTML = "Department of " + best_department_name;
				// department_name.style.width = "50%";

			//paragraph of the results
			var results_paragraph_container = document.createElement('div');
				results_paragraph_container.innerHTML = department_description[best_department_index - 1];

			//button (start over)
			var button_container = document.createElement('div');
				button_container.className = "flex-container";
			
				var left_wing = document.createElement('div');
					left_wing.className = "flex-panel";

				var begin_button = document.createElement('div');
					begin_button.className = "button yellow_button";
					begin_button.style.marginTop = "20px";
					begin_button.style.maxWidth = "100px"
					begin_button.innerHTML = "Start Over";

				var right_wing = document.createElement('div');
					right_wing.className = "flex-panel";

			// alert(question_number);
			//add the event listener for the "next" button -> call next_question()
			begin_button.addEventListener("click", function(e){initialize()/*window.open("personalityquiz.html","_self")*/}, true);

	//right stats (1/3)
	var right_stats = document.createElement('div');
		right_stats.style.flex = "1";

		var your_results_text = document.createElement('h5');
			your_results_text.innerHTML = "Your Results";
			your_results_text.style.paddingTop = "10px";
			your_results_text.style.color = "#ff4956";
			your_results_text.style.fontWeight = "300";

	document.getElementById('quiz').appendChild(stats_container);
		stats_container.appendChild(left_stats);
			left_stats.appendChild(stats_img);
			left_stats.appendChild(left_stats_information_container);
				left_stats_information_container.appendChild(department_name);
				left_stats_information_container.appendChild(results_paragraph_container);
				left_stats_information_container.appendChild(button_container);
					button_container.appendChild(left_wing);
					button_container.appendChild(begin_button);
					button_container.appendChild(right_wing);
		stats_container.appendChild(right_stats);
			right_stats.appendChild(your_results_text);
		
	//7 answers
	for (var i = 0; i < 7; i++)//7 possible answers
	{
		createProgressLine(i, right_stats);
	}
}

//when we press on the "Next" button for the next question
function call_question(new_question_number, selected)
{
	var one_selected = false;

	for(var i = 0; i < selected.length; i++)//scan for selected answers
	{
		if(selected[i])
		{
			one_selected = true;//there is at least one that is un
		}
	}

	if(one_selected)//we have selected an answer
	{
		//call the next question
		if(new_question_number < selected.length)
		{
			initialize_quiz(new_question_number);
		}
		else
		{
			results_quiz();
		}
	}
	else//no answer was selected
	{
		alert("You must choose an answer!");
	}
}

//creates a random list for the multiple choices (STEP 2)
function createRandomList(size)
{
	list = new Array(size);
	
	for(var i = 0; i < size; i++)
	{
		list[i] = Math.round(Math.random() * (size - 1));

		var already_exists = false;

		do
		{
			already_exists = false;
			if(i > 0)//if we have data to compare it to
			{
				for(var j = i - 1; j >= 0; j--)
				{
					if(list[i] == list[j])//if the number chosen already exists
					{
						already_exists = true;
						list[i] = Math.round(Math.random() * (size - 1));
					}
				}
			}
		} while(already_exists);

		// alert("number (" + i + "): " + list[i]);
	}

	return list;
}

//creates one line of the multiple choices used in the quiz (STEP 2)
function createFormLine (index, parent, question_number, selected, question_pointer)
{
	choice = "null";//just in case

	var line = document.createElement('div');
		line.id = "line_" + index;
		line.className = "form_line";
		
		// if(index == 6)
		// {
		// 	line.className = "bottom-form_line";
		// }
		// else
		// {
		// 	line.className = "form_line";
		// }

	var text_container = document.createElement('div');
		text_container.className = "form_text_container";
		text_container.innerHTML = /*question_pointer + ". " + */answers[question_number][question_pointer];//TODO: remove the pointer to the question (we don't want the answer to be displayed on the quiz)

	line.appendChild(text_container);

	line.addEventListener( "click", function (e)
	{
		choice = answers[question_number][index];//index - 1
		
		for(var id_index = 0; id_index < 7; id_index++)
		{
			document.getElementById("line_" + id_index).className = "form_line_unselected form_line";
			selected[id_index] = false;
		}

		line.className = "form_line_selected form_line";//we select the line that we clicked on

		selected[index] = true;

		selected_answers[question_number] = question_pointer;

		// alert("You selected question #" + question_pointer);

	}, true);

	parent.appendChild(line);
}

//creates one line for the progress on the results page (STEP 3)
function createProgressLine(index, parent)
{
	var line = document.createElement('div');
		line.style.margin = "10px";
		line.className = "flex-container";

    var departmentColor = document.createElement('img');
		departmentColor.src = "images/badges/" + (index + 1) + ".png";
        // departmentColor.style.backgroundColor = departments_colors[index];
        departmentColor.className = "departmentColor";

	var progressBarContainer = document.createElement('div');
		progressBarContainer.className = "progressBarContainer";

		var flexpanel1 = document.createElement('div');
			flexpanel1.style.flex = "1";

		var progressBar = document.createElement('div');
			progressBar.className = "progressBar";
			
			var progress = document.createElement('div');//max value is 8
				progress.style.backgroundColor = departments_colors[index];// "#682666";
				progress.style.height = "1em";
				progress.style.borderBottomRightRadius = "10px";
				progress.style.borderTopRightRadius = "10px";
				// progress.style.borderRadius = "10px";
			
				if(departments_results[index] == 0)
				{
					progress.style.flex = 1;
				}
				else
				{
					progress.style.flex = departments_results[index];
				}

			var nonProgress = document.createElement('div');//max value is also 8
				nonProgress.style.height = "1em";

				if(departments_results[index] == 0)
				{
					nonProgress.style.flex = 99;
				}
				else
				{
					nonProgress.style.flex = 8 - departments_results[index];
				}

		var flexpanel2 = document.createElement('div');
			flexpanel2.style.flex = "1";

	parent.appendChild(line);
		line.appendChild(departmentColor);
		line.appendChild(progressBarContainer);
			progressBarContainer.appendChild(flexpanel1);
			progressBarContainer.appendChild(progressBar);
				progressBar.appendChild(progress);
				progressBar.appendChild(nonProgress);
			progressBarContainer.appendChild(flexpanel2);
}