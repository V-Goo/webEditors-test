const editor = new EditorJS({
  autofocus: true,
  readOnly: false,
  holder: "editorjs",
  placeholder: "Это placeholder.",
});

// Connection to a broadcast channel
const bc = new BroadcastChannel("test_channel");
// Example of sending of a very simple message
// bc.postMessage("This is a test message.");
bc.onmessage = function (ev) {
  console.log(ev.data);
};
// console.log();
// A handler that only logs the event to the console:
// bc.onmessage = function (ev) {
// console.log(ev);
// };

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

const saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", saveData);
