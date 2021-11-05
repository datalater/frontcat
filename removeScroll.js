/* eslint-disable no-console */
export default function removeScroll() {
  const addMarginTopToModals = (margin = 200) => {
    const modalDialogs = document.querySelectorAll(".modal-dialog");

    Array.from(modalDialogs).forEach((modal) => {
      modal.style.marginTop = `${margin}px`;
    });
  };

  addMarginTopToModals(200);

  const ATTENDANCE_MODAL_SELECTOR = ".__vuescroll .table-wrap";

  const attendance = document.querySelector(ATTENDANCE_MODAL_SELECTOR);

  if (!attendance) {
    // eslint-disable-next-line no-restricted-globals
    console.log("there is no attendance modal");
    return;
  }

  Object.assign(attendance.style, { "max-height": "100%" });
}
