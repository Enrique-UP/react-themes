const ScrollOffset = (el) => {
  if (!el) return;

  setTimeout(() => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const header = document.querySelector("header");

    let headerHeight = 0;
    if (header) {
      const styles = window.getComputedStyle(header);
      headerHeight = header.offsetHeight + parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
    }

    window.scrollTo({
      top: yCoordinate - headerHeight,
      behavior: "smooth",
    });
  }, 1000);
};

export default ScrollOffset;