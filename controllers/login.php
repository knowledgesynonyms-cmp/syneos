<?php 
  require_once('../includes/config.inc.php');

  if($_POST['action']=='doLogin'){

    $data = array(
      'error' => false,
      'data' => array('id'=> 1)
    );

    echo json_encode($data);

  }
