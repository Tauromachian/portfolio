export const scrollToPosition = (positionId) => {
  const elmnt = document.getElementById(positionId.split("#").pop());
  elmnt.scrollIntoView({ behavior: "smooth" });
};
