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
      const data = {
        itemInfo: itemInfo,
        pathsArray: pathsArray,
      };
      switch ($(e.target).data('type')) {
        case 'folder':
          dispatcher.emit('showFolderInfo', data);
          break;
        case 'file':
          if (
            data.itemInfo.extension === 'jpg' ||
            data.itemInfo.extension === 'png' ||
            data.itemInfo.extension === 'gif' ||
            data.itemInfo.extension === 'svg'
          ) {
            dispatcher.emit('showImageInfo', data);
          } else if (data.itemInfo.extension === 'mp3') {
            dispatcher.emit('showAudioInfo', data);
          } else if (data.itemInfo.extension === 'mp4') {
            dispatcher.emit('showVideoInfo', data);
          } else if (data.itemInfo.extension === 'csv') {
            //TODO ver la forma de obtener el contenido del csv para mostrarlo
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
  showUpdateModal: function (e) {
    const url = $(e.target).data('url');
    dispatcher.emit('showUpdateModal', { url: url });
  },
  showNewFolderModal: function (e) {
    const url = $(e.target).data('url');
    dispatcher.emit('showNewFolderModal', { url: url });
  },
};
