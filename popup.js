import removeScroll from './removeScroll.js';
import removeResume from './removeResume.js';

const addEventListenerInExtension = ($element, event, callback) => {
  $element.addEventListener(event, async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: callback,
    });
  });
};

addEventListenerInExtension(
  document.querySelector('.remove-scroll'),
  'click',
  removeScroll,
);

addEventListenerInExtension(
  document.querySelector('.remove-resume'),
  'click',
  removeResume,
);
