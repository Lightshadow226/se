<!-- Creates the entire game container, the objective container, and the test container -->

<html>

    <!-- Game Container -->
    <div id = "gameContainer">

        <!-- Game Frame (formerly called "background") -->
        <div id = "game_frame">
        
            <!-- Game Overlay -->
            <div id = "game_overlay">
                
                <!-- left content (contains the left character, A.K.A. Character 2) -->
                <img id = "left_content" class = "left_content"></img>

                <!-- middle content (Contains the two bubbles) -->
                <div id = "middle_content">
                    <div id = "bubble1" class="bubble bubble-right-character"></div>
                    <div id = "bubble2" class="bubble bubble-left-character"></div>

                    <!-- contains the navigation (buttons) -->
                    <div id = "navigation-container"></div>
                </div>
                
                <!-- right content (contains the right character, A.K.A. Character 1) -->
                <img id = "right_content" class = "right_content"></img>
                
                <!-- text container -->
                <div id = "textContainer"></div>
                
                <!-- Affinity Meter 1 (right, character 1) -->
                <img id = "infinity-meter-1" class = "infinity-meter infinity-meter-right"></img>
                
                <!-- Affinity Meter 2 (left, character 2) -->
                <img id = "infinity-meter-2" class = "infinity-meter infinity-meter-left"></img>

                <!-- Choice of Friendship -->
                <div id = "friendship_button" class="friendship_romance_buttons y-center-p">
                    <img id = "friendship_button_img" class="friendship_romance_buttons_img" src="images/game_images/friendship_option.jpg"></img>
                    <div id = "friendship_overlay" class="friendship_romance_buttons_overlay"></div>         
                </div>
                
                <!-- Choice of Romance -->
                <div id = "romance_button" class="friendship_romance_buttons y-center-q">
                    <img id = "romance_button_img" class="friendship_romance_buttons_img" src="images/game_images/romance_option.jpg"></img>
                    <div id = "romance_overlay" class="friendship_romance_buttons_overlay"></div>         
                </div>

                <div id = "choiceA" class="choiceContainer"></div>
                <div id = "choiceB" class="choiceContainer"></div>
                <div id = "choiceC" class="choiceContainer"></div>

                <div id = "formContainer"></div>
            </div>

            <!-- Game Background -->
            <img id = "background_img" class = "background_img"></img>
        </div>

        <!-- Contains end of chapter results -->
        <div id = "replay_handler">

        </div>
    </div>

    <!-- Objectives, Progress & Characters Container -->
    <div id="opcContainer">

        <div id="slideCounter" style="position: absolute; right: 10px; top: 10px; -webkit-user-select: none;"></div>

        <span class="flex-container">
            <span class="flex-panel">
                <!-- Objective Container -->
                <h3>Objectives</h3>
                <div id = "objectiveContainer"></div>
            </span>
                    
            <!-- Progress Container -->
            <span class="flex-panel">
                <h3>Progress</h3>
                <div id = "progressBarContainer">
                    <img id="progress_bar_logo"/>
                    <div id="progress_bar"></div>
                </div>
            </span>
        </span>

        <!-- Characters Container -->
        <h3>Characters</h3>
        <div id = "char_container">

        </div>
    </div>

    <!-- Test Container -->
    <div id = "testContainer">
        <!-- <div id = "testContainer1">
            <input id = "daInput" type="text" name="testInput"></input>
        </div> -->
        <div id = "testContainer2"></div>
    </div>
</html>