import { helpers } from '../helpers/helpers.js';
import { audio } from '../views/components/Audio.js';
import { folder } from '../views/components/Folder.js';
import { general } from '../views/components/General.js';
import { image } from '../views/components/Image.js';
import { newFolder } from '../views/components/NewFolder.js';
import { upload } from '../views/components/Upload.js';
import { video } from '../views/components/Video.js';
import { renderView } from '../views/renderview.js';

export const store = {
  appState: {
    modal: 'close',
  },
  onAction: {
    init: function (action) {
      if (action.name === 'init') {
        helpers.addPrincipalEventListeners();
      }
    },
    toggleModal: function (action) {
      if (action.name === 'toggleModal') {
        if (store.appState.modal === 'close') {
          store.appState.modal = 'open';
          helpers.openModal();
        } else if (store.appState.modal === 'open') {
          store.appState.modal = 'close';
          helpers.closeModal();
        }
      }
    },
    showFolderInfo: function (action) {
      if (action.name === 'showFolderInfo') {
        helpers.verificateModalAndRender({
          state: store.appState.modal,
          component: folder,
          payload: action.payload,
        });
      }
    },
    showImageInfo: function (action) {
      if (action.name === 'showImageInfo') {
        helpers.verificateModalAndRender({
          state: store.appState.modal,
          component: image,
          payload: action.payload,
        });
      }
    },
    showAudioInfo: function (action) {
      if (action.name === 'showAudioInfo') {
        helpers.verificateModalAndRender({
          state: store.appState.modal,
          component: audio,
          payload: action.payload,
        });
      }
    },
    showVideoInfo: function (action) {
      if (action.name === 'showVideoInfo') {
        helpers.verificateModalAndRender({
          state: store.appState.modal,
          component: video,
          payload: action.payload,
        });
      }
    },
    showCsvInfo: function (action) {
      if (action.name === 'showCsvInfo') {
        helpers.verificateModalAndRender({
          state: store.appState.modal,
          component: csv,
          payload: action.payload,
        });
      }
    },
    showGeneralInfo: function (action) {
      if (action.name === 'showGeneralInfo') {
        helpers.verificateModalAndRender({
          state: store.appState.modal,
          component: general,
          payload: action.payload,
        });
      }
    },
    showUpdateModal: function (action) {
      if (action.name === 'showUpdateModal') {
        helpers.verificateModalAndRender({
          state: store.appState.modal,
          component: upload,
          payload: action.payload,
        });
      }
    },
    showNewFolderModal: function (action) {
      if (action.name === 'showNewFolderModal') {
        helpers.verificateModalAndRender({
          state: store.appState.modal,
          component: newFolder,
          payload: action.payload,
        });
      }
    },
  },
};
