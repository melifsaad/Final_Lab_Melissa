export const getImage = (image) =>
    new URL(`../images/${image}`, import.meta.url).href