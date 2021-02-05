<?php
function renderTr($file, $creation_date, $last_modified, $size, $url, $type)
{
  if ($file == "." || $file == "..") {
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
