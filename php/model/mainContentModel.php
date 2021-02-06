<?php
function printMainContent($rootName, $directory, $navOrSearch)
{
  $template = '';
  $path = $rootName . $directory;
  $dir = scandir($path);
  $uploadFileButton = "<button class='header-upload__button bx bx-upload' id='uploadFile' data-url='$path'></button>";
  $addFolderButton = "<button class='main-content__button-add bx bx-message-square-add' id='addFolder' data-url='$path'></button>";
  $tableHead = "<table><tr><th>Name</th><th>Creation date</th><th>Last modified</th><th>Size</th></tr>";
  if ($navOrSearch == 'nav') {
    $template = $template . $addFolderButton;
    $template = $template . $uploadFileButton;
  }
  $template = $template . $tableHead;
  foreach ($dir as $file) {
    $template = $template . renderTr($file, getFileInfo($path, $file)['creation_date'], getFileInfo($path, $file)['last_modified_date'], getFileInfo($path, $file)['size'], getFileInfo($path, $file)['pathToSee'], getFileInfo($path, $file)['type']);
  }
  $template = $template . "</table>";
  return $template;
}
