import { get } from '../API-methods/get.js';
import { dispatcher } from '../dispatcher/dispatcher.js';
import { helpers } from '../helpers/helpers.js';

export const actions = {
  init: function () {
    dispatcher.emit('init', {});
  },
  showInfoInModal: function (e) {
    get.path('./php/helpers/JSONPaths.php').then(pathsArray => {
      const itemInfo = helpers.createDataFromSelectedElement(e);
      const data = { itemInfo, pathsArray };

      switch ($(e.target).data('type')) {
        case 'folder':
          dispatcher.emit('showFolderInfo', data);
          break;

        case 'file':
          const extension = data.itemInfo.extension;
          const isImageFile =
            extension === 'jpg' ||
            extension === 'png' ||
            extension === 'gif' ||
            extension === 'svg';

          if (isImageFile) {
            dispatcher.emit('showImageInfo', data);
          } else if (extension === 'mp3') {
            dispatcher.emit('showAudioInfo', data);
          } else if (extension === 'mp4') {
            dispatcher.emit('showVideoInfo', data);
          } else if (extension === 'csv') {
            //TODO: ver la forma de obtener el contenido del csv para mostrarlo
            //dispatcher.emit('showCsvInfo', data);
            console.log('mostrar modal con contenido de csv en una tabla');
          } else {
            dispatcher.emit('showGeneralInfo', data);
          }
      }
    });
  },
  toggleModal: function () {
    dispatcher.emit('toggleModal', {});
  },
  showUpdateModal: function ({ target }) {
    const url = $(target).data('url');

    dispatcher.emit('showUpdateModal', { url });
  },
  showNewFolderModal: function ({ target }) {
    const url = $(target).data('url');

    dispatcher.emit('showNewFolderModal', { url });
  },
};
