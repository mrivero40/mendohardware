// intersection observer, lazy loading y skeleton

const isIntersecting = (entry) => {
    return entry.isIntersecting;
};

const loadImg = (entry) => {
    
    const imageNode = entry.target;
    imageNode.src = imageNode.dataset.src;    
    imageNode.removeAttribute('data-src');

    imageNode.addEventListener('load', loadStatusOk);

    function loadStatusOk(event) {
        if(event.isTrusted) {
            const parentElement = imageNode.parentNode;
            parentElement.classList.remove('loading-skeleton');
            imageNode.removeEventListener('load', loadStatusOk);
        };
    };

    watchingImg.unobserve(imageNode);    
};

const watchingImg = new IntersectionObserver( entries => {
    entries.filter(isIntersecting).forEach(loadImg);
});

export const registerImg = (img) => {
    watchingImg.observe(img);    
};