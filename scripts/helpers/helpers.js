import { actions } from '../actions/actions.js';
import { store } from '../store/store.js';
import { renderView } from '../views/renderview.js';

export const helpers = {
  addPrincipalEventListeners: function () {
    $('.file').on('click', actions.showInfoInModal);
    $('.main-modal__close').on('click', actions.toggleModal);
    $('#uploadFile').on('click', actions.showUpdateModal);
    $('#addFolder').on('click', actions.showNewFolderModal);
  },
  openModal: function () {
    $('#mainModal').fadeIn();
    $('#mainModal').css({ right: '0', transition: 'right 1s ease-out' });
  },
  closeModal: function () {
    $('#mainModal').fadeOut();
    $('#mainModal').css({ right: '-100%', transition: 'right 1s ease-in' });
  },
  createDataFromSelectedElement: function (e) {
    const childrens = $(e.target).parent().children();
    if ($(e.target).data('type') === 'folder') {
      const data = {
        type: $(e.target).data('type'),
        url: $(e.target).data('url'),
        name: $(e.target).text(),
        creation: $(childrens[1]).text(),
        modified: $(childrens[2]).text(),
        size: $(childrens[3]).text(),
      };
      return data;
    } else if ($(e.target).data('type') === 'file') {
      const url = $(e.target).data('url');
      const ext = url.substr(url.length - 5, 5).split('.')[1];
      const data = {
        extension: ext,
        url: url,
        name: $(e.target).text(),
        creation: $(childrens[1]).text(),
        modified: $(childrens[2]).text(),
        size: $(childrens[3]).text(),
      };
      return data;
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
    let elementUrl = url.substr(2, url.length);
    const eliminatePoint = elementUrl.lastIndexOf('/');
    elementUrl = elementUrl.substr(0, eliminatePoint);
    data.forEach(element => {
      element = element.replaceAll('\\', '/');
      if (element !== elementUrl) {
        const lastIndex = element.lastIndexOf('/');
        const folderName = element.substr(lastIndex + 1, element.length);
        const template = `<option value="${element}">${folderName}</option>`;
        fragment += template;
      }
    });
    return fragment;
  },
};
