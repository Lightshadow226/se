<?php include_once '../../resources/session.php'; ?>

<html>
<head>
  <meta charset="UTF-8">

  <link href="../../css/se-stylesheet.css" rel="stylesheet" type="text/css">
  <link href='https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
	<link href="https://fonts.googleapis.com/css?family=Great+Vibes" rel="stylesheet" type='text/css'>

  <title>Chat jQuery</title>
</head>

<body>
  <fieldset class="main_content center-screen">
    <legend>Logged in as <?php echo $_SESSION['username']; ?></legend>

    <h1>Test Page</h1>

    <form action="" method="post" class="center">
    
      <div class = "flex-container">
          <p class = "flex-panel login-signup-labels">Story Location:</p>
          <input type="text" id="storylocation" placeholder="storylocation" class="flex-panel2 login-signup-textfields">
          <div class = "flex-panel"></div>
      </div>

        </br>

      <div class = "flex-container">
        <p class = "flex-panel login-signup-labels">Last Chapter Played:</p>
        <input type="text" id="lastchapterplayed" placeholder="lastchapterplayed" class="flex-panel2 login-signup-textfields">
        <div class = "flex-panel"></div>
      </div>

      </br>

      <p style="text-transform:uppercase;font-weight:500;font-size:0.7em;color:#ff4956;letter-spacing:0.2em;">Want to change account? <a href="../../login.php">Login</a></p>
      
      </br>
      
      <button id="envoyer" class="button pink_button" type="button">Send</button>
    
  </form>

  </fieldset>

<div id = "DB_handle">

</div>
</body>

<script src = "../js/jquery_3.2.1.js"></script>
<script src = "../../js/variables.js"></script><!--this is to get all the variables that are needed from the database-->
<script src = "push.js"></script>

</html>