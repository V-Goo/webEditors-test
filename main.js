import "./script/editor.js";
import "./node_modules/@editorjs/header/dist/bundle.js";
// import './script/header/bundle.js';

const editor = new EditorJS({
  readOnly: false,
  holder: "editorjs",

  tools: {
    header: {
      class: Header,
      inlineToolbar: true,
    },
  },
  data: {
    blocks: [
      {
        type: "header",
        data: {
          text: "Поехали!",
          level: 1,
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Лорем, мать его разэтак, Ипсум!",
        },
      },
    ],
  },
  // data: {},
  // onReady: function () {
  //   saveButton.click();
  // },
});
/**
 * Saving button
 */

const saveButton = document.getElementById("saveButton");
saveButton.addEventListener('click', function () {
editor.save().then((savedData) => {
	let stringName = savedData.time
	let stringBlock= JSON.stringify(savedData)
	localStorage.setItem(stringName.toString(), stringBlock)
  console.log(stringBlock);
});
});
