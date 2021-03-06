import { helpers } from '../../helpers/helpers.js';

export const audio = {
  html: function ({ itemInfo, pathsArray }) {
    const fragment = $(document.createDocumentFragment());
    const info = function (
      { extension, url, name, creation, modified, size },
      optionsFragment,
    ) {
      const template = `
        <section class="item-preview">
          <audio src="./root${url}" alt="Audio preview" class="item-preview__audio" controls>
        </section>
        <section class="item">
          <section class="item-img">
            <img src="./resources/icons/svg/${extension}.svg" alt="${extension} icon" class="item-img__logo">
          </section>
          <section class="item-data">
            <p class="item-data__p">Name: ${name}</p>
            <p class="item-data__p">Created: ${creation}</p>
            <p class="item-data__p">Modified: ${modified}</p>
            <p class="item-data__p">Size: ${size}</p>
          </section>
        </section>
        <section class="item-buttons">
          <form class="item-buttons__rename" action="index.php" method="get">
            <input type="hidden" id="renameUrl" name="renameUrl" value="${url}">
            <label for="newName" class="item-buttons__rename-label">New name:</label>
            <input type="text" id="newName" name="newName" class="item-buttons__rename-input">
            <input type="submit" class="item-buttons__rename-submit" value="Rename">
          </form>
          <form class="item-buttons__move" action="index.php" method="get">
            <input type="hidden" id="moveUrl" name="fileToMove" value="${url}">
            <label for="urlToMove" class="item-buttons__move-label">Where do you like to move?</label>
            <select name="urlToMove" id="urlToMove" class="item-buttons__move-select">${optionsFragment}</select>
            <input type="submit" class="item-buttons__move-submit" value="Move">
          </form>
          <form class="item-buttons__delete" action="index.php" method="get">
            <input type="hidden" id="deleteUrl" name="deleteUrl" value="${url}">
            <input type="submit" class="item-buttons__delete-submit" value="Delete">
          </form>
        </section>
      `;
      //TODO añadir acciones y metodos a los formularios de renombrar, mover y eliminar.

      return template;
    };
    const infoTemplate = info(
      itemInfo,
      helpers.createOptionsFragment(pathsArray, itemInfo),
    );

    return $(fragment).append(infoTemplate);
  },
  addEventListeners: () => {},
};
