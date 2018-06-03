//create quiz variables
	
	var departments = [
		 	"Business, Commerce and Politics",
			"Health Sciences",
			"Pure and Applied Sciences",
			"Perquiz_forming Arts",
			"Fine Arts",
			"Athletics",
			"Fashion"
	];

	var department_description = [
			"You belong in the Business, Commerce & Politics Department! You are a natural-born leader with a tendency to love working a little too much. You keep organized and get things done. You’re ambitious and never back down until you have reached your goal. You may come off as a little cold, but you care deeply about your classmates and only want everybody to succeed.",
	   		"You belong in the Health Sciences Department! You are very compassionate and love helping people. You care very deeply about your classmates and use your intelligence to move people forward. While you may be a little sensitive due to your empathetic nature and your shyness has played against you in the past, you are the person everybody can rely on.",
			"You belong in the Pure and Applied Sciences Department! You are intelligent, curious and love to solve problems. You’re straightforward, objective and very reliable! You have a wild imagination and keep an open mind. While you tend to be introverted and somewhat private, once your classmates get to know you, it becomes easy for you to win them over!",
			"You belong in the Perquiz_forming Arts Department! You are outgoing, bold and love to be the center of attention. Very few can keep up with your daring nature, but one thing’s for sure: there is never a boring day around you! While you tend to be overbearing and self-centered sometimes, you make an excellent friend and are able to shine in nearly any situation.",
			"You belong in the Fine Arts Department! You are creative, fun and love to be free. You have a strong interest in beauty and nothing makes you happier than people appreciating your work! People can always count on you to inspire them. You may be insecure at times, but your passion and sensibility makes you a great friend!",
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


initialize();

//STEP 1: initialize the quiz interface
function initialize()
{
	document.getElementById('quiz').innerHTML = "";
	document.getElementById('quizCard').innerHTML = "";

	//create the interface
	var quizContainer = document.createElement('div');
		quizContainer.className = "quizContainer";

	//header
	var quiz_formHeader = document.createElement('h6');
		quiz_formHeader.innerHTML = "Welcome to Arlington Academy";
		quiz_formHeader.style.marginTop = "10px";

	//paragraph
	var quiz_formSubHeader = document.createElement('p');//quiz_formerly h5
		quiz_formSubHeader.innerHTML = "Which one of the seven departments do you belong in? <em>Take this quiz to find out!</em>";

	//image
	var department_img_container = document.createElement('div');
		//department_img_container.className = "";

		var department_img = document.createElement('img');
			department_img.src = "_new_images_folder/departments/depts.png"
	
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

	document.getElementById('quiz').appendChild(quizContainer);
		quizContainer.appendChild(quiz_formHeader);
		quizContainer.appendChild(quiz_formSubHeader);
		quizContainer.appendChild(department_img_container);
			department_img_container.appendChild(department_img);
		quizContainer.appendChild(button_container);
			button_container.appendChild(left_wing);
			button_container.appendChild(begin_button);
			button_container.appendChild(right_wing);

	//add the button event listener -> call refreshQuestion()

	begin_button.addEventListener("click", function(e){refreshQuestion(0)}, true);
}

//STEP 2: start the quiz
function refreshQuestion(question_number)
{
	document.getElementById('quiz').innerHTML = "";	
	document.getElementById('quizCard').innerHTML = "";	

	//create the interface
	var quizContainer = document.createElement('div');
		quizContainer.className = "quizContainer";

	//header
	var quiz_formHeader = document.createElement('h3');
		quiz_formHeader.innerHTML = "What Arlington Academy department is for you?";
		// quiz_formHeader.className = "card-header";
		quiz_formHeader.style.margin = "20px";

	//quiz box

	var quiz_box = document.createElement('div');
		quiz_box.id = "quiz_box";

	//question
	var quiz_formSubHeader = document.createElement('h5');//quiz_formerly h5
		quiz_formSubHeader.id= "quiz_form_subheader";
		quiz_formSubHeader.innerHTML = /*"<b>" + */questions[question_number]/* + "</b>"*/;

	document.getElementById('quiz').appendChild(quizContainer);
		quizContainer.appendChild(quiz_formHeader);

	document.getElementById('quizCard').appendChild(quiz_box);
		quiz_box.appendChild(quiz_formSubHeader);

	//7 answers
	var selected = new Array(questions_quantity);//array qui va déterminer si la ligne est sélectionnée ou non
	indexList = createRandomList(7);//create 7 pointers to questions

	for (var index = 0; index < 7; index++)//7 possible answers
	{
		createquiz_formLine(index, quiz_box, question_number, selected, indexList[index]);
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
			refreshQuestion(new_question_number);
		}
		else
		{
			results_quiz();
		}
	}
	else//no answer was selected
	{
		makePopup("You must choose an answer!");
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
function createquiz_formLine (index, parent, question_number, selected, question_pointer)
{
	choice = "null";//just in case

	var line = document.createElement('div');
		line.id = "line_" + index;
		line.className = "quiz_form_line";
		
	var text_container = document.createElement('div');
		text_container.className = "quiz_form_text_container";
		text_container.innerHTML = /*question_pointer + ". " + */answers[question_number][question_pointer];//TODO: remove the pointer to the question (we don't want the answer to be displayed on the quiz)

	line.appendChild(text_container);

	line.addEventListener( "click", function (e)
	{
		choice = answers[question_number][index];//index - 1
		
		for(var id_index = 0; id_index < 7; id_index++)
		{
			document.getElementById("line_" + id_index).className = "quiz_form_line_unselected quiz_form_line";
			selected[id_index] = false;
		}

		line.className = "quiz_form_line_selected quiz_form_line";//we select the line that we clicked on

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
		departmentColor.src = "_new_images_folder/game/badges/raw/" + (index + 1) + ".png";
        // departmentColor.style.backgroundColor = departments_colors[index];
        departmentColor.className = "departmentColor";

	var progressBarContainer = document.createElement('div');
		progressBarContainer.className = "progressBarContainer";

		var flexpanel1 = document.createElement('div');
			flexpanel1.style.flex = "1";

		var progressBar = document.createElement('div');
			progressBar.className = "progressBar";
			
			var progress = document.createElement('div');//max value is questions_quantity
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

			var nonProgress = document.createElement('div');//max value is also questions_quantity
				nonProgress.style.height = "1em";

				if(departments_results[index] == 0)
				{
					nonProgress.style.flex = 99;
				}
				else
				{
					nonProgress.style.flex = questions_quantity - departments_results[index];
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

//FINAL STEP: output the results of the quiz
function results_quiz()
{
	//TODO: mettre des constantes
	document.getElementById('quizCard').innerHTML = "";	

	// var all_answers_string = "";

	//get the answer of all the question and increment the right department
	for(var i = 0; i < questions_quantity; i++)
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
			stats_img.src = "_new_images_folder/game/badges/raw/" + best_department_index + ".png";
		
		//left container right inquiz_formation
		var left_stats_inquiz_formation_container = document.createElement('div');

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

	document.getElementById('quizCard').appendChild(stats_container);
		stats_container.appendChild(left_stats);
			left_stats.appendChild(stats_img);
			left_stats.appendChild(left_stats_inquiz_formation_container);
				left_stats_inquiz_formation_container.appendChild(department_name);
				left_stats_inquiz_formation_container.appendChild(results_paragraph_container);
				left_stats_inquiz_formation_container.appendChild(button_container);
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