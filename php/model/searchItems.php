<?php
function searchItems($searchedItem)
{
  $path = "root";
  $results = array();
  $dir = new RecursiveDirectoryIterator($path, RecursiveDirectoryIterator::SKIP_DOTS);
  $files = new RecursiveIteratorIterator($dir, RecursiveIteratorIterator::SELF_FIRST);
  $template = "";

  foreach (glob("./$path/*$searchedItem*", GLOB_BRACE) as $itemPath) {
    $pathWhitoutRoot = substr($itemPath, 6);

    array_push($results, str_replace("\\", "/", $pathWhitoutRoot));
  }
  foreach ($files as $file) {
    if (is_dir($file)) {
      foreach (glob("./$file/*$searchedItem*", GLOB_BRACE) as $itemPath) {
        $pathWhitoutRoot = substr($itemPath, 6);

        array_push($results, str_replace("\\", "/", $pathWhitoutRoot));
      }
    }
  }
  foreach ($results as $item) {
    $template = $template . printTableContent("./root", $item, "sear");
  }
  return $template;
}
