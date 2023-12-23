export const removeAlert = () => {
  document.getElementById("alert")?.classList.add("invisible");
};

export const Alert = (body?: { title?: string; description?: string }) => {
  const title = body?.title || "Fristroop Development";
  const message = body?.description || "Hello World!";

  const toast = document.getElementById("alert");
  const toastTitle = document.getElementById("alert-title");
  const toastBody = document.getElementById("alert-description");

  const ok = toast && toastTitle && toastBody;
  if (!ok) return alert(`${title}\n${message}`);

  toastTitle!.innerHTML = title;
  toastBody!.innerHTML = message;

  toast.classList.remove("invisible");

  setTimeout(() => {
    removeAlert();
  }, 5000);
};
