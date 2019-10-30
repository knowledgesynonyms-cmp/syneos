<?php require_once('includes/config.inc.php');?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/main.css">  
  </head>
  <body>

    <div id="root">

      <div class="heading text-center">
        <?php echo _SITENAME?>
      </div>

      <div id="app" class="d-flex align-items-center" style="height: calc(100% - 50px)"></div>

      
      <!-- this is template holders -->
      <div class="d-none">
        
        <div id="tpl-login">
          <?php require_once('includes/views/login.tpl.php')?>
        </div>

        <div id="tpl-intro">
          <?php require_once('includes/views/intro.tpl.php')?>          
        </div>

        <div id="tpl-room">
          <?php require_once('includes/views/room.tpl.php')?>          
        </div>

      </div>
      
    </div>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

    <script src="js/login.js"></script>
    <script src="js/room.js"></script>
    <script src="js/main.js"></script>

  </body>
</html>