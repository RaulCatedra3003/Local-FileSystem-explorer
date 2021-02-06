export const newFile = {
  html: function (data) {
    const fragment = $(document.createDocumentFragment());
    const info = function ({ url }) {
      const template = `
        <section class="item-buttons">
          <form class="item-buttons__update" action="" method="">
            <input type="hidden" id="newFileUrl" name="uploadUrl" value="${url}">
            <label for="newFileName" class="item-buttons__update-label">Enter new folder name:</label>
            <input type="text" id="newFileName" name="newFileName" class="item-buttons__update-input">
            <input type="submit" class="item-buttons__update-submit" value="Create!">
          </form>
        </section>
      `;
      //TODO añadir accion y metodo al formulario de update.
      //TODO dar estilos al input type="file".
      return template;
    };
    $(fragment).append(info(data));
    return fragment;
  },
  addEventListeners: function () {
    return;
  },
};
