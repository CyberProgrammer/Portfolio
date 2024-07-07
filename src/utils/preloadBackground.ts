// preloadImage.js
export const preloadImage = (src:string) => {
    console.log("preloadImage:" , src);
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
    });
};
