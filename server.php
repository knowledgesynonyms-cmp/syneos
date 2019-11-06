<?php 

require_once('includes/config.inc.php');

$action = (isset($_POST['action']) ? $_POST['action'] : $_GET['action']);

switch($action){

  case "load-notes": 
  
    $str = '{"data": [{"id": 1, "user_id":1, "notes": "Some text 1", "updated_on": "2019-12-01 10:43:45"},{"id": 2, "user_id":1, "notes": "Some text 2", "updated_on": "2019-12-01 15:30:00"},{"id": 3, "user_id":1, "notes": "Some text 3", "updated_on": "2019-12-01 17:03:45"},{"id": 4, "user_id":1, "notes": "Some text 4", "updated_on": "2019-12-01 12:08:45"}]}';

    echo $str;
    exit;

  case "":


  
}