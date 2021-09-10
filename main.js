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
          text: "Editor.js",
          level: 2,
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration.",
        },
      },
    ],
  },
  // data: {},
  onReady: function () {
    saveButton.click();
  },
});
/**
 * Saving button
 */

const saveButton = document.getElementById("saveButton");
saveButton.addEventListener('click', function () {
editor.save().then((savedData) => {
  console.log(savedData);
});
});
