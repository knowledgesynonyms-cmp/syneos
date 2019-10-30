<?php 
  /*
    Purpose: Collection of Utility functions
    Author: Surojit Basu (Oct 29, 2019)  
  */

  /* Set session variables via setSessValue ONLY */
  function setSessValue($k, $v){
    $k = _APPNAME .'#'.$k;
    $_SESSION[$k] = $v;
  }

  /* unset session variables */
  function unsetSessValue($k){
    $k = _APPNAME .'#'.$k;
    unset($_SESSION[$k]);
  }

  function getUsername(){

  }