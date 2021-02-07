<?php
function getFileInfo($path, $file) {
  $pathToSee = $path . "/" . $file;
  $creation_date = date("d/m/Y H:i", filectime($pathToSee));
  $last_modified_date = date("d/m/Y H:i", filemtime($pathToSee));
  $size = getSize($pathToSee);
  $type = (is_dir($pathToSee)) ? ('folder') : ('file');
  $data = array('pathToSee' => $pathToSee, 'creation_date' => $creation_date, 'last_modified_date' => $last_modified_date, 'size' => $size, 'type' => $type);

  return $data;
}

function parseSize($size) {
  $bytesInMegaByte = 1024 * 1024;
  $bytesInKiloByte = 1024;

  return ($size > $bytesInMegaByte) ?
    (round($size / $bytesInMegaByte, 2) . " Mb") :
    (round($size / $bytesInKiloByte, 2) . " Kb");
}

function folderSize($dir) {
  $size = 0;
  $sanitizedDir = rtrim($dir, "/");

  foreach (glob("$sanitizedDir/*", GLOB_NOSORT) as $each) {
    $size += is_file($each) ? filesize($each) : folderSize($each);
  }

  return $size;
}

function getSize($path) {
  $size = (is_dir($path)) ? folderSize($path) : filesize($path);

  return parseSize($size);
}
