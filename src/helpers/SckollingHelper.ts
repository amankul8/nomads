export const lockScroll = () => {
    document.documentElement.style.overflow = "hidden";
};
  
export const unlockScroll = () => {
    document.documentElement.style.overflow = "";
};