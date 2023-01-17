export const scrollToPosition = (postitionId) => {
  const elmnt = document.getElementById(postitionId.split("#").pop());
  elmnt.scrollIntoView({ behavior: "smooth" });
};
