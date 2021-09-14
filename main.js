import "./script/editor.js";
import "./node_modules/@editorjs/header/dist/bundle.js";
// import './script/header/bundle.js';

const editor = new EditorJS({
  autofocus: true,
  readOnly: false,
  holder: "editorjs",
  placeholder: "Это placeholder.",
  // placeholder: "Let`s write an awesome story!",
  tools: {
    header: {
      class: Header,
      inlineToolbar: true,
    },
  },
  // data: {
  //   blocks: [
  //     {
  //       type: "header",
  //       data: {
  //         text: "Поехали!",
  //         level: 1,
  //       },
  //     },
  //     {
  //       type: "paragraph",
  //       data: {
  //         text: "Лорем, мать его разэтак, Ипсум!",
  //       },
  //     },
  //   ],
  // },

  data: {},
  // onReady: function () {
  //   saveButton.click();
  // },

  // onChange: function (api, block) {
  //   // console.log("api: ", api);
  //   bc.postMessage("Changed!");
  //   // console.log("something changed", block);
  //   typeTo(2000);
  // },
  //
});

try {
  await editor.isReady;
  console.log("Слушаю и повинуюсь!");
  /** Do anything you need after editor initialization */
} catch (reason) {
  console.log(`Editor.js initialization failed because of ${reason}`);
}

/**
 * Saving data
 */

const saveData = () => {
  editor
    .save()
    .then((savedData) => {
      const stringName = savedData.time.toString();
      const stringBlock = JSON.stringify(savedData);
      localStorage.setItem(stringName, stringBlock);
      // console.log(stringBlock);
    })
    .catch((error) => {
      console.error("Saving error", error);
    });
};

/**
 * Test section
 */

// Connection to a broadcast channel
const bc = new BroadcastChannel("test_channel");
// Example of sending of a very simple message
// bc.postMessage('This is a test message.');
// console.log(bc);
// A handler that only logs the event to the console:
// bc.onmessage = function (ev) { console.log(ev); }

// ! Выводит содержимое loclStorage в консоль
let keys = Object.keys(localStorage);
for (let key of keys) {
  let keykey = localStorage.getItem(key);
  // JSON.parse
  let keyJSON = JSON.parse(keykey);
  // console.log('keyJSON: ', keyJSON);
  //  console.log(`${key}:`, keyJSON);
}
//  console.log(keys);

/**
 * Saving button
 */

const saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", saveData);

// ToDo: autosave to local storage in `n` seconds after input completes
// todo: закрыть BroadcastChannel при выходе

// let delaySave = editor.onChange
// console.log('delaySave: ',typeof(delaySave));
function typeTo(delay) {
  let typeTimeout;
  let listenToInstance = document.querySelector("section.editor");
  listenToInstance.addEventListener("input", () => {
    clearTimeout(typeTimeout);
    typeTimeout = setTimeout(() => saveData(), delay);
  });
}
typeTo(3000);

// ?Why?
//	 !W!
// *	 Ha
