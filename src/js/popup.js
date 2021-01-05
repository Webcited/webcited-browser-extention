import "../css/popup.css";

let progressText = document.getElementById("progress");
document.addEventListener("submit", () => {
  progressText.textContent = "Processing...";
  setTimeout(() => {
    progressText.textContent = "Finished";
  }, 5000);
});
