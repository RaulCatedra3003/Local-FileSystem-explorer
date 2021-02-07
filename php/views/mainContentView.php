<?php
function createTr($file, $creation_date, $last_modified, $size, $url, $type)
{
  $bannedFolders = $file == "." || $file == "..";
  if ($bannedFolders) {

    return;
  } else {

    return "
      <tr>
        <td class='file' data-url='$url' data-type='$type'>$file</td>
        <td>$creation_date</td>
        <td>$last_modified</td>
        <td>$size</td>
      </tr>";
  }
}

function createTableTitle($navOrSearch, $path = "")
{
  $template = "";
  $uploadFileButton = "<button class='header-upload__button bx bx-upload' id='uploadFile' data-url='$path'></button>";
  $addFolderButton = "<button class='main-content__button-add bx bx-message-square-add' id='addFolder' data-url='$path'></button>";
  $tableHead = "<table><tr><th>Name</th><th>Creation date</th><th>Last modified</th><th>Size</th></tr>";

  if ($navOrSearch == 'nav') {
    $template = $template . $addFolderButton;
    $template = $template . $uploadFileButton;
  }

  $template = $template . $tableHead;
  return $template;
}
