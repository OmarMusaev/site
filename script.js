document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("hello-button");
  const message = document.getElementById("message");

  if (!button || !message) return;

  button.addEventListener("click", () => {
    message.textContent = "Button clicked! Hello from JavaScript 👋";
  });
});


