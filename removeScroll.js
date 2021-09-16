/* eslint-disable no-console */
export default function removeScroll() {
  const ATTENDANCE_MODAL_SELECTOR = '.__vuescroll .table-wrap';

  const attendance = document.querySelector(ATTENDANCE_MODAL_SELECTOR);

  if (!attendance) {
    // eslint-disable-next-line no-restricted-globals
    console.log('there is no attendance modal');
    return;
  }

  Object.assign(attendance.style, { 'max-height': '100%' });
}
