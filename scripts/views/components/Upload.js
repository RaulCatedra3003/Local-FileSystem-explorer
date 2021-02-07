export const upload = {
  html: function (data) {
    const fragment = $(document.createDocumentFragment());
    const info = function ({ url }) {
      const template = `
        <section class="item-buttons">
          <form enctype="multipart/form-data" class="item-buttons__update" action="index.php" method="post">
            <input type="hidden" id="uploadUrl" name="uploadUrl" value="${url}">
            <label for="uploadFile" class="item-buttons__update-label">Choose a file to upload:</label>
            <input type="hidden" name="MAX_FILE_SIZE" value="3000000000">
            <input type="file" id="uploadFile" name="uploadFile" class="item-buttons__update-input">
            <input type="submit" class="item-buttons__update-submit" value="Upload!">
          </form>
        </section>
      `;

      return template;
    };

    return $(fragment).append(info(data));
  },
  addEventListeners: () => {}
};
