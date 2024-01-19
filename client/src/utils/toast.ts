export const removeAlert = () => {
  document.getElementById("toast")?.classList.add("invisible");
};

export const toast = (body: {
  description: string;
  type?: "failure" | "success";
}) => {
  const toast = document.getElementById(`toast`);
  const toastBody = document.getElementById("toast-body");
  const message = body.description || "An unknown error occurred";

  const ok = toast && toastBody;
  if (!ok) return alert(message);
  toast.setAttribute("data-type", body.type!);
  toastBody.innerHTML = message;

  toast.classList.remove("invisible");

  setTimeout(() => {
    removeAlert();
  }, 1000 * 10);
};
