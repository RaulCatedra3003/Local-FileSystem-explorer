<?php
$rootName = "./root";
if (empty($_GET['dir'])) {
  $directory = '';
} else {
  $directory = '/' . $_GET['dir'];
}
$path = $rootName . $directory;
$dir = scandir($path);
$tableHead = "<table><tr><th>Name</th><th>Creation date</th><th>Last modified</th><th>Size</th></tr>";
printString($tableHead);
foreach ($dir as $file) {
  printString(renderTr($file, getFileInfo($path, $file)['creation_date'], getFileInfo($path, $file)['last_modified_date'], getFileInfo($path, $file)['size'], getFileInfo($path, $file)['pathToSee'], getFileInfo($path, $file)['type']));
}
printString("</table>");
