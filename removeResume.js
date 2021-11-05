/* eslint-disable no-console */
export default function removeResume() {
  const RESUME_ID = "resume-lesson-video";

  const $resume = document.getElementById(RESUME_ID);

  if (!$resume) {
    // eslint-disable-next-line no-restricted-globals
    console.log("there is no resume");
    return;
  }

  Object.assign($resume.style, { display: "none" });
}
