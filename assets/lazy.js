// intersection observer y lazy loading

const isIntersecting = (entry) => {
    return entry.isIntersecting;
};

async function loadImg (entry) {
    const imageNode = entry.target;
    imageNode.src = imageNode.dataset.src;    
    imageNode.removeAttribute('data-src');

    watchingImg.unobserve(imageNode);    
};

const watchingImg = new IntersectionObserver( entries => {
    entries.filter(isIntersecting).forEach(loadImg);    
});

export const registerImg = (img) => {
    watchingImg.observe(img);    
};