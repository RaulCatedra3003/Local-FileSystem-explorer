import { dispatcher } from '../dispatcher/dispatcher.js';
import { helpers } from '../helpers/helpers.js';

export const actions = {
  init: function () {
    dispatcher.emit('init', {});
  },
  showInfoInModal: function (e) {
    switch ($(e.target).data('type')) {
      case 'folder':
        dispatcher.emit(
          'showFolderInfo',
          helpers.createDataFromSelectedElement(e),
        );
        break;
      case 'file':
        const data = helpers.createDataFromSelectedElement(e);
        if (
          data.extension === 'jpg' ||
          data.extension === 'png' ||
          data.extension === 'gif' ||
          data.extension === 'svg'
        ) {
          dispatcher.emit('showImageInfo', data);
        } else if (data.extension === 'mp3') {
          dispatcher.emit('showAudioInfo', data);
        } else if (data.extension === 'mp4') {
          dispatcher.emit('showVideoInfo', data);
        } else if (data.extension === 'csv') {
          //TODO ver la forma de obtener el contenido del csv para mostrarlo
          //dispatcher.emit('showCsvInfo', data);
          console.log('mostrar modal con contenido de csv en una tabla');
        } else {
          dispatcher.emit('showGeneralInfo', data);
        }
    }
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
