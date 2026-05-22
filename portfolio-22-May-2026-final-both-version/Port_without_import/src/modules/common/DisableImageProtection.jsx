export function DisableImageProtection() {
  const handler = (e) => {
    const path = e.composedPath ? e.composedPath() : [];

    // check if any element in path is IMG
    const isImage = path.some(
      (el) => el && el.tagName === "IMG"
    );

    if (isImage) {
      e.preventDefault();
      return false;
    }
  };

  document.addEventListener("contextmenu", handler, true);
  document.addEventListener("dragstart", handler, true);

  return () => {
    document.removeEventListener("contextmenu", handler, true);
    document.removeEventListener("dragstart", handler, true);
  };
}