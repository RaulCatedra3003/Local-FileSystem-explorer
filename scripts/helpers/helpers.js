import { actions } from '../actions/actions.js';
import { store } from '../store/store.js';
import { renderView } from '../views/renderview.js';

export const helpers = {
  addPrincipalEventListeners: function () {
    const {
      showInfoInModal,
      toggleModal,
      showUpdateModal,
      showNewFolderModal,
    } = actions;

    $('.file').on('click', showInfoInModal);
    $('.main-modal__close').on('click', toggleModal);
    $('#uploadFile').on('click', showUpdateModal);
    $('#addFolder').on('click', showNewFolderModal);
  },
  openModal: function () {
    $('#mainModal').fadeIn();
    $('#mainModal').css({ right: '0', transition: 'right 1s ease-out' });
  },
  closeModal: function () {
    $('#mainModal').fadeOut();
    $('#mainModal').css({ right: '-100%', transition: 'right 1s ease-in' });
  },
  createDataFromSelectedElement: function ({ target }) {
    const childrens = $(target)?.parent()?.children();
    const url = $(target)?.data('url');
    const type = $(target).data('type');
    const commonData = {
      url,
      name: $(target).text(),
      creation: $(childrens[1]).text(),
      modified: $(childrens[2]).text(),
      size: $(childrens[3]).text(),
    };

    if (type === 'folder') {
      return {
        type,
        ...commonData,
      };
    } else if (type === 'file') {
      const extension = url.substr(url.length - 5, 5).split('.')[1];

      return {
        extension,
        ...commonData,
      };
    }
  },
  verificateModalAndRender: function ({ state, component, payload }) {
    switch (state) {
      case 'close':
        renderView(component, component.html(payload));
        store.appState.modal = 'open';
        helpers.openModal();
        break;

      case 'open':
        renderView(component, component.html(payload));
        break;
    }
  },
  createOptionsFragment: function (data, { url }) {
    let fragment = '';
    let elementUrl = url;
    const eliminatePoint = elementUrl.lastIndexOf('/');

    elementUrl = elementUrl.substr(0, eliminatePoint);
    data.forEach(element => {
      element = element.replaceAll('\\', '/');

      if (element !== `root${elementUrl}`) {
        const url = element.substr(4, element.length);
        const lastIndex = element.lastIndexOf('/');
        const folderName = element.substr(lastIndex + 1, element.length);
        const template = `<option value="${url}">${folderName}</option>`;

        fragment += template;
      }
    });

    return fragment;
  },
};
