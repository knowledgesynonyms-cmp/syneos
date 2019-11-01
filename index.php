<?php require_once('includes/config.inc.php');?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
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

        <div id="tpl-timebar">
          <?php require_once('includes/views/timebar.tpl.php')?>          
        </div>       

      </div>
      
    </div>

    <div id="window-help">
      <?php require_once('includes/views/help.tpl.php')?>          
    </div>

    <div id="window-complete">
      <?php require_once('includes/views/complete.tpl.php')?>          
    </div>

    <div id="pauseTimer" style="display:none">
      <div class="d-flex align-items-center h-100">
        <div class="container-fluid">
          <h1>SIMULATION PAUSED</h1>
          <br /> 
          <h4>Pause time remaining</h4>
          <div class="ticker">00:00</div>          
          <button class="playtimer btn btn-es">RETURN</button>
        </div>  
      </div>
    </div>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

    <script src="js/login.js"></script>
    <script src="js/room.js"></script>
    <script src="js/timer.js"></script>
    <script src="js/main.js"></script>

  </body>
</html>