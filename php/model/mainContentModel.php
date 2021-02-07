<?php
function printTableContent($rootName, $directory, $navOrSearch)
{
  $template = "";
  $path = $rootName . $directory;
  if ($navOrSearch == "nav") {
    $dir = scandir($path);

    foreach ($dir as $file) {
      $template = $template . createTr(
        $file,
        getFileInfo($path, $file)["creation_date"],
        getFileInfo($path, $file)["last_modified_date"],
        getFileInfo($path, $file)["size"],
        getFileInfo($path, $file)["pathToSee"],
        getFileInfo($path, $file)["type"]
      );
    }
    return $template;
  } else if ($navOrSearch == "sear") {
    $lasPosition = strripos($directory, "/");
    $file = substr($directory, $lasPosition + 1);
    $template = $template . createTr(
      $file,
      getFileInfo($rootName, $directory)["creation_date"],
      getFileInfo($rootName, $directory)["last_modified_date"],
      getFileInfo($rootName, $directory)["size"],
      getFileInfo($rootName, $directory)["pathToSee"],
      getFileInfo($rootName, $directory)["type"]
    );
  }
  return $template;
}
