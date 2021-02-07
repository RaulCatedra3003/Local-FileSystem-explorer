<?php
function createFolder($foldername, $url) {
  if ($foldername > 1) {

    if (!file_exists("root/$url/$foldername")) {
      mkdir("root/$url/$foldername");
      $message = false;
      
    } else {
      $message = "<script>alert('This folder already exists!')</script>";
    }

    return $message;
  }
}
