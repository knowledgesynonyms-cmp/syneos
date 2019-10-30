<?php 
  require_once('../includes/config.inc.php');

  if($_GET['action']=='fetchRoomList'){

    //=== Dummy data... data should be pulled from database

    $data = array(      
      'data' => [
        [
          'id'=> 1,
          'name' => 'Room 1'
        ],
        [
          'id'=> 2,
          'name' => 'Room 2'
        ],
        [
          'id'=> 3,
          'name' => 'Room 3'
        ],
        [
          'id'=> 4,
          'name' => 'Room 4'
        ],
        [
          'id'=> 5,
          'name' => 'Room 5'
        ],
        [
          'id'=> 6,
          'name' => 'Room 6'
        ]
      ]
    );

    header('Content-type:application/json');
    echo json_encode($data);

  }
