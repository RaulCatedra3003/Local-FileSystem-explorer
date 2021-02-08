<?php
function removeItem($itemToRemove)
{
  if (is_dir($itemToRemove)) {
    removeFolder($itemToRemove);
  } else {
    unlink($itemToRemove);
  }
}

function removeFolder($folderToRemove)
{
  foreach (glob($folderToRemove . "/*") as $file) {
    if (is_dir($file)) {
      removeFolder($file);
    } else {
      unlink($file);
    }
  }
  rmdir($folderToRemove);
}
