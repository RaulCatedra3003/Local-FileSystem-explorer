<?php
$rootName = "./root";
if (isset($_GET['newFolderUrl'])) {
  $folderName = $_GET['newFolderName'];
  $url = $_GET['newFolderUrl'];
  $url = substr($url, 6);
  $head = $url == '' ? "Refresh: 0; URL=index.php" : "Refresh: 0; URL=index.php?dir=$url";
  if (createFolder($folderName, $url)) {
    echo createFolder($folderName, $url);
  }
  header($head);
} else if (isset($_POST['uploadUrl'])) {
  $url = $_POST['uploadUrl'];
  $url = substr($url, 6);
  chdir("root/$url");
  $uploadFile = basename($_FILES['uploadFile']['name']);
  $head = $url == '' ? "Refresh: 0; URL=index.php" : "Refresh: 0; URL=index.php?dir=$url";
  if (uploadFile($uploadFile)) {
    echo uploadFile($uploadFile);
  }
  header($head);
} else if (empty($_GET['dir'])) {
  $directory = '';
  echo printMainContent($rootName, $directory, 'nav');
} else {
  $directory = $_GET['dir'];
  echo printMainContent($rootName, $directory, 'nav');
}
