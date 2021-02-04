<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href=".\css\styles.css">
  <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
  <title>Local FileSystem explorer</title>
</head>
<body>
  <header>
    <section class="header-logo">
      <img src="./resources/icons/svg/folder.svg" alt="Logo" class="header-logo__img">
    </section>
    <section class="header-search">
      <form action="" class="header-search__form">
        <label for="search"><i class='bx bx-search-alt'></i></label>
        <input type="text" class="header-search__form-imput" id="search">
      </form>
    </section>
    <section class="header-upload">
      <!-- <form action="" class="header-upload__form">
        <input type="file" class="header-upload__form-input">
      </form> -->
      <button class="header-upload__button bx bx-upload"></button>
    </section>
    <section class="header-trash">
      <a href="" class="header-trash__icon"><i class='bx bx-trash' ></i></a>
    </section>
    <section class="header-user">
      <img src="https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200009/91087331-icono-de-perfil-de-avatar-predeterminado-para-hombre-marcador-de-posici%C3%B3n-de-foto-gris-vector-de-ilustr.jpg?ver=6" alt="User img" class="header-user__img">
    </section>
  </header>
  <section class="content">
    <nav class="nav-bar">
      <?php

      ?>
    </nav>
    <main class="main-content">
      <?php
        $dirname = "./root";
        $dir = scandir($dirname);
        function renderTr($file, $creation_date, $last_modified, $size) {
          if($file == "." || $file == "..") {
            return;
          } else { //todo añadir clase al titulo para añadir escuchador en js.
            echo "
            <tr>
              <td class='file'>$file</td>
              <td>$creation_date</td>
              <td>$last_modified</td>
              <td>$size</td>
            </tr>";
          }
        }
        function parseSize($size) {
          $bytesInMegaByte = 1024 * 1024;
          $bytesInKiloByte = 1024;
          return ($size > $bytesInMegaByte) ?
            (round($size / $bytesInMegaByte, 2) . " Mb") :
            (round($size / $bytesInKiloByte, 2) . " Kb");
        }
        function folderSize ($dir) {
          $size = 0;
          foreach (glob(rtrim($dir, '/').'/*', GLOB_NOSORT) as $each) {
            $size += is_file($each) ? filesize($each) : folderSize($each);
          }
          return $size;
        }
        function getSize($path) {
          $size = (is_dir($path)) ? folderSize($path) : filesize($path);
          return parseSize($size);
        }
        function renderFiles($dir, $dirname) {
          foreach($dir as $file) {
            $path = "$dirname/$file";
            $creation_date = date("d/m/Y H:i", filectime($path));
            $last_modified_date = date("d/m/Y H:i", filemtime($path));
            $size = getSize($path);
            echo renderTr($file, $creation_date, $last_modified_date, $size);
          }
        }
        echo "
        <table>
          <tr>
            <th>Name</th>
            <th>Creation date</th>
            <th>Last modified</th>
            <th>Size</th>
          </tr>";
        echo renderFiles($dir, $dirname);
        echo "</table>";
      ?>
    </main>
    <section class="main-modal" id="mainModal">
    </section>
  </section>
  <footer>
    <section class="footer-item">© 2021, by Victor Greco and Raúl Cátedra</section>
    <section class="footer-item">Icons made by <a href="https://www.flaticon.com/authors/dimitry-miroliubov" title="Dimitry Miroliubov" target="_blank">Dimitry Miroliubov</a> and <a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs" target="_blank">DinosoftLabs</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank">www.flaticon.com</a></section>
  </footer>
  <script
  src="https://code.jquery.com/jquery-3.5.1.min.js"
  integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
  crossorigin="anonymous"></script>
  <script src="./scripts/index.js"></script>
</body>
</html>