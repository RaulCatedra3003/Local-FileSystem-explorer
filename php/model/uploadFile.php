<?php
function uploadFile($uploadFile)
{
  if (!file_exists($_FILES['uploadFile']['name'])) {
    if (move_uploaded_file($_FILES['uploadFile']['tmp_name'], $uploadFile)) {
      $message = false;
    } else {
      $message = "<script>alert('There has been trouble with the uploading');</script>";
    }
  } else {
    $message = "<script>alert('This file already exists!');</script>";
  }
  return $message;
}
