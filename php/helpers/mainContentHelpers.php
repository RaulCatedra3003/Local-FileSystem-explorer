<?php
function getFileInfo($path, $file)
{
  $relativePath = substr($path, 6, strlen($path));
  $pathToSend = "$relativePath/$file";
  $pathToSee = "/$file";
  $creation_date = date("d/m/Y H:i", filectime($path . $pathToSee));
  $last_modified_date = date("d/m/Y H:i", filemtime($path . $pathToSee));
  $size = getSize($path . $pathToSee);
  $type = (is_dir($path . $pathToSee)) ? ('folder') : ('file');
  $data = array('pathToSee' => $pathToSend, 'creation_date' => $creation_date, 'last_modified_date' => $last_modified_date, 'size' => $size, 'type' => $type);

  return $data;
}

function parseSize($size)
{
  $bytesInMegaByte = 1024 * 1024;
  $bytesInKiloByte = 1024;

  return ($size > $bytesInMegaByte) ?
    (round($size / $bytesInMegaByte, 2) . " Mb") : (round($size / $bytesInKiloByte, 2) . " Kb");
}

function folderSize($dir)
{
  $size = 0;
  $sanitizedDir = rtrim($dir, "/");

  foreach (glob("$sanitizedDir/*", GLOB_NOSORT) as $each) {
    $size += is_file($each) ? filesize($each) : folderSize($each);
  }

  return $size;
}

function getSize($path)
{
  $size = (is_dir($path)) ? folderSize($path) : filesize($path);

  return parseSize($size);
}
