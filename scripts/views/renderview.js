export const renderView = (
  component,
  fragment,
  element = '#mainModalContent',
) => {
  $(element).html(fragment);
  component.addEventListeners();
};
