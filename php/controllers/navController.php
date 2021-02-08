<?php
echo "<ul><li class='navbar-title'><a href='index.php'>My Folders</a></li>";
getAllFolderInRoot("");
echo "<li class='navbar-trash'><a href='index.php?trash='><i class='bx bx-trash'></i>Trash<box-icon name='chevron-right'></box-icon></a>";
echo "</ul>";
