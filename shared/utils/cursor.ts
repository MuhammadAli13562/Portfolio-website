const handleHoverBegin = () => {
  const cursor = document.querySelector(".cursor") as HTMLElement;
  cursor.classList.add("cursor-hover-zoom");
};
const handleHoverEnd = () => {
  const cursor = document.querySelector(".cursor") as HTMLElement;
  cursor.classList.remove("cursor-hover-zoom");
};

export { handleHoverBegin, handleHoverEnd };
