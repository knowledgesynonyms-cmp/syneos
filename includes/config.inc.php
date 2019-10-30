<?php
  /*
    Purpose: Configuration file for the whole site
    Author: Surojit Basu (Oct 29, 2019)  
  */

  session_start();
  require_once('functions.inc.php');

  define('_APPNAME','Simulation');
  define('_SITENAME','E-learning Simulation');

  define('_ADMINEMAIL',['surojit19@gmail.com']);


  if($_SERVER['HTTP_HOST']=='domain-name'){
    ///== all the configuration specific to domain name
    define('_URL','');
    define('_PATH','');
    define('_DBHOST','');
    define('_DBUSER','');
    define('_DBPASSWORD','');
    define('_DBNAME','');

    define('_LDAPSERVER',"");
    define('_LDAPDOMAIN',"");
    define('_LDAPSEARCH',"");
    define('_LDAPUSER',"");

  }else{
    define('_URL','http://localhost:3002/');
    define('_PATH','/home/surojit/Projects/surojit/smartweb/simulation/simulation/');
    define('_DBHOST','localhost');
    define('_DBUSER','surojit');
    define('_DBPASSWORD','surojit');
    define('_DBNAME','simulation');
  }