<?php
$rootName = "./root";
if (empty($_GET['dir'])) {
  $directory = '';
  echo printMainContent($rootName, $directory, 'nav');
} else {
  $directory = $_GET['dir'];
  echo printMainContent($rootName, $directory, 'nav');
}
