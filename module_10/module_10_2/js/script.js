const btn = document.querySelector('.coords');

const screenWindth = window.screen.width;
const screenHeight = window.screen.height;

const windowInnerWidthScrool = window.innerWidth;
const windowInnerHeightScrool = window.innerHeight;

const windowInnerWidth = document.documentElement.clientWidth;
const windowInnerHeight = document.documentElement.clientHeight;

const pageWidth = document.documentElement.scrollWidth;
const pageHeight = document.documentElement.scrollHeight;

btn.addEventListener("click", () => {
    alert(`Размер экрана: ${screenWindth}px x ${screenHeight}px. 
${windowInnerWidth}px x ${windowInnerHeight}px.
${windowInnerWidthScrool}px x ${windowInnerHeightScrool}px.
${pageWidth}px x ${pageHeight}px`)
})