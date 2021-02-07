<?php
require('./php/views/mainContentView.php');
require('./php/helpers/mainContentHelpers.php');
require('./php/model/mainContentModel.php');
require('./php/model/navModel.php');
require('./php/model/newFolder.php');
require('./php/model/uploadFile.php');
require('./php/model/searchItems.php');
?>
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
        <input type="text" class="header-search__form-imput" id="search" name="searchValue">
      </form>
    </section>
    <section class="header-trash">
      <a href="" class="header-trash__icon"><i class='bx bx-trash'></i></a>
    </section>
    <section class="header-user">
      <img src="https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200009/91087331-icono-de-perfil-de-avatar-predeterminado-para-hombre-marcador-de-posici%C3%B3n-de-foto-gris-vector-de-ilustr.jpg?ver=6" alt="User img" class="header-user__img">
    </section>
  </header>
  <section class="content">
    <nav class="nav-bar">
      <?php
      require('./php/controllers/navController.php');
      ?>
    </nav>
    <main class="main-content">
      <?php
      require('./php/controllers/mainContentController.php');
      ?>
    </main>
    <section class="main-modal" id="mainModal">
      <button class="main-modal__close"><i class='bx bx-x-circle'></i></button>
      <section class="main-modal__content" id="mainModalContent"></section>
    </section>
  </section>
  <footer>
    <section class="footer-item">© 2021, by Victor Greco and Raúl Cátedra</section>
    <section class="footer-item">Icons made by <a href="https://www.flaticon.com/authors/dimitry-miroliubov" title="Dimitry Miroliubov" target="_blank">Dimitry Miroliubov</a> and <a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs" target="_blank">DinosoftLabs</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank">www.flaticon.com</a></section>
  </footer>
  <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script src="./scripts/index.js" type="module"></script>
</body>

</html>