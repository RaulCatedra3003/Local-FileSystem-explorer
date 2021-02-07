import { helpers } from '../helpers/helpers.js';
import { audio } from '../views/components/Audio.js';
import { folder } from '../views/components/Folder.js';
import { general } from '../views/components/General.js';
import { image } from '../views/components/Image.js';
import { newFolder } from '../views/components/NewFolder.js';
import { upload } from '../views/components/Upload.js';
import { video } from '../views/components/Video.js';

export const store = {
  appState: { modal: 'close' },
  onAction: {
    init: function ({ name }) {
      name === 'init' && helpers.addPrincipalEventListeners();
    },
    toggleModal: function ({ name }) {
      const modalState = store.appState.modal;

      if (name === 'toggleModal') {
        if (modalState === 'close') {
          store.appState.modal = 'open';
          helpers.openModal();

        } else if (modalState === 'open') {
          store.appState.modal = 'close';
          helpers.closeModal();
        }
      }
    },
    showFolderInfo: function ({ name, payload }) {
      name === 'showFolderInfo' && helpers.verificateModalAndRender({
        state: store.appState.modal,
        component: folder,
        payload
      });
    },
    showImageInfo: function ({ name, payload }) {
      name === 'showImageInfo' && helpers.verificateModalAndRender({
        state: store.appState.modal,
        component: image,
        payload,
      });
    },
    showAudioInfo: function ({ name, payload }) {
      name === 'showAudioInfo' && helpers.verificateModalAndRender({
        state: store.appState.modal,
        component: audio,
        payload,
      });
    },
    showVideoInfo: function ({ name, payload }) {
      name === 'showVideoInfo' && helpers.verificateModalAndRender({
        state: store.appState.modal,
        component: video,
        payload,
      });
    },
    showCsvInfo: function ({ name, payload }) {
      name === 'showCsvInfo' && helpers.verificateModalAndRender({
        state: store.appState.modal,
        component: csv,
        payload,
      });
    },
    showGeneralInfo: function ({ name, payload }) {
      name === 'showGeneralInfo' && helpers.verificateModalAndRender({
        state: store.appState.modal,
        component: general,
        payload,
      });
    },
    showUpdateModal: function ({ name, payload }) {
      name === 'showUpdateModal' && helpers.verificateModalAndRender({
        state: store.appState.modal,
        component: upload,
        payload,
      });
    },
    showNewFolderModal: function ({ name, payload }) {
      name === 'showNewFolderModal' && helpers.verificateModalAndRender({
        state: store.appState.modal,
        component: newFolder,
        payload
      });
    }
  }
};
