<!-- Creates the entire game container, the objective container, and the test container -->

<html>

    <!-- Game Container -->
    <div id = "gameContainer">

        <!-- Game Frame (formerly called "background") -->
        <div id = "game_frame">
        
            <!-- Game Overlay -->
            <div id = "game_overlay">
                
                <!-- left content (contains the left character, A.K.A. Character 2) -->
                <div id = "left_content" class = "left_content"></div>

                <!-- middle content (Contains the two bubbles) -->
                <div id = "middle_content" class = "middle_content">
                    <div id = "bubble1" class="bubble"></div>
                    <div id = "bubble2" class="bubble"></div>

                    <!-- contains the navigation (buttons) -->
                    <div id = "navigation-container"></div>
                </div>
                
                <!-- right content (contains the right character, A.K.A. Character 1) -->
                <div id = "right_content" class = "right_content"></div>
                
                <!-- text container -->
                <div id = "textContainer"></div>
                
                <!-- Affinity Meter 1 (right, character 1) -->
                <div id = "infinity-container-1" style="position: absolute; right: 0; top: 50%; width: 100px; transform: translateY(-50%);">
                    <img id = "infinity-meter-1" style="width: 100%;"></img>
                </div>
                
                <!-- Affinity Meter 2 (left, character 2) -->
                <div id = "infinity-container-2" style="position: absolute; left: 0; top: 50%; width: 100px; transform: translateY(-50%);">
                    <img id = "infinity-meter-2" style="width: 100%;"></img>
                </div>

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
            </div>

            <!-- Game Background -->
            <img id = "background_img" class = "background_img"></img>
        </div>

        <!-- Contains end of chapter results -->
        <div id = "replay_handler">

        </div>
    </div>

    <!-- Objective Container -->
    <div id = "objectiveContainer">
        You have no objectives for now.
    </div>

    <!-- Test Container -->
    <div id = "testContainer">
        <div id = "testContainer1"></div>
        <div id = "testContainer2"></div>
    </div>
</html>