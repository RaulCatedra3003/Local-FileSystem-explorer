import { helpers } from '../helpers/helpers.js';
import { audio } from '../views/components/Audio.js';
import { folder } from '../views/components/Folder.js';
import { general } from '../views/components/General.js';
import { image } from '../views/components/Image.js';
import { newFile } from '../views/components/NewFile.js';
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
        switch (store.appState.modal) {
          case 'close':
            renderView(folder, folder.html(action.payload));
            store.appState.modal = 'open';
            helpers.openModal();
            break;
          case 'open':
            renderView(folder, folder.html(action.payload));
            break;
        }
      }
    },
    showImageInfo: function (action) {
      if (action.name === 'showImageInfo') {
        switch (store.appState.modal) {
          case 'close':
            renderView(image, image.html(action.payload));
            store.appState.modal = 'open';
            helpers.openModal();
            break;
          case 'open':
            renderView(image, image.html(action.payload));
            break;
        }
      }
    },
    showAudioInfo: function (action) {
      if (action.name === 'showAudioInfo') {
        switch (store.appState.modal) {
          case 'close':
            renderView(audio, audio.html(action.payload));
            store.appState.modal = 'open';
            helpers.openModal();
            break;
          case 'open':
            renderView(audio, audio.html(action.payload));
            break;
        }
      }
    },
    showVideoInfo: function (action) {
      if (action.name === 'showVideoInfo') {
        switch (store.appState.modal) {
          case 'close':
            renderView(video, video.html(action.payload));
            store.appState.modal = 'open';
            helpers.openModal();
            break;
          case 'open':
            renderView(video, video.html(action.payload));
            break;
        }
      }
    },
    showCsvInfo: function (action) {
      if (action.name === 'showCsvInfo') {
        switch (store.appState.modal) {
          case 'close':
            renderView(csv, csv.html(action.payload));
            store.appState.modal = 'open';
            helpers.openModal();
            break;
          case 'open':
            renderView(csv, csv.html(action.payload));
            break;
        }
      }
    },
    showGeneralInfo: function (action) {
      if (action.name === 'showGeneralInfo') {
        switch (store.appState.modal) {
          case 'close':
            renderView(general, general.html(action.payload));
            store.appState.modal = 'open';
            helpers.openModal();
            break;
          case 'open':
            renderView(general, general.html(action.payload));
            break;
        }
      }
    },
    showUpdateModal: function (action) {
      if (action.name === 'showUpdateModal') {
        switch (store.appState.modal) {
          case 'close':
            renderView(upload, upload.html(action.payload));
            store.appState.modal = 'open';
            helpers.openModal();
            break;
          case 'open':
            renderView(upload, upload.html(action.payload));
            break;
        }
      }
    },
    showNewFolderModal: function (action) {
      if (action.name === 'showNewFolderModal') {
        switch (store.appState.modal) {
          case 'close':
            renderView(newFile, newFile.html(action.payload));
            store.appState.modal = 'open';
            helpers.openModal();
            break;
          case 'open':
            renderView(newFile, newFile.html(action.payload));
            break;
        }
      }
    },
  },
};
