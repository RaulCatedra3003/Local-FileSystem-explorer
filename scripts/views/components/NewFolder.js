export const newFolder = {
  html: function (data) {
    const fragment = $(document.createDocumentFragment());
    const info = function ({ url }) {
      const template = `
        <section class="item-buttons">
          <form class="item-buttons__update" action="index.php" method="get">
            <input type="hidden" id="newFolderUrl" name="newFolderUrl" value="${url}">
            <label for="newFolderName" class="item-buttons__update-label">Enter new folder name:</label>
            <input type="text" id="newFolderName" name="newFolderName" class="item-buttons__update-input" required>
            <input type="submit" class="item-buttons__update-submit" value="Create!">
          </form>
        </section>
      `;

      return template;
    };

    return $(fragment).append(info(data));
  },
  addEventListeners: () => {}
};
