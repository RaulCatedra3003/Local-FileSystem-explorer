export const upload = {
  html: function (data) {
    const fragment = $(document.createDocumentFragment());
    const info = function ({ url }) {
      const template = `
        <section class="item-buttons">
          <form class="item-buttons__update" action="" method="">
            <input type="hidden" id="uploadUrl" name="uploadUrl" value="${url}">
            <label for="uploadFile" class="item-buttons__update-label">Choose a file to upload:</label>
            <input type="file" id="uploadFile" name="uploadFile" class="item-buttons__update-input">
            <input type="submit" class="item-buttons__update-submit" value="Upload!">
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
