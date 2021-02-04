const files = document.querySelectorAll('.file');

files.forEach(element => {
  element.addEventListener('click', showInfo);
});

function showInfo(e) {
  console.log(e.target);
  showModal();
}

function showModal() {
  console.log('aqui');
  const modal = document.getElementById('mainModal');
  modal.style.transition = 'right 1s easeout';
  modal.style.right = '0';
}
