$('.file').on('click', showInfo);

function showInfo(e) {
  console.log(e.target);
  showModal();
}

function showModal() {
  console.log('aqui');
  $('#mainModal').css({ right: '0', transition: 'right 1s ease-out' });
}
