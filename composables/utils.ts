export const useUtils = () => {
  return ref();
};

export const useComputedStyle = (Dom: HTMLElement) => {
  const computedStyle = getComputedStyle(Dom);
  return {
    h: parseInt(computedStyle.height),
    w: parseInt(computedStyle.width),
    top: parseInt(computedStyle.top),
    left: parseInt(computedStyle.left),
    right: parseInt(computedStyle.right),
    bottom: parseInt(computedStyle.bottom),
    margin: parseInt(computedStyle.margin),
    padding: parseInt(computedStyle.padding),
    border: parseInt(computedStyle.border),
    position: computedStyle.position,
    display: computedStyle.display,
  };
};
