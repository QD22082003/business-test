const countDataContent = () => {
    const dynamicContent = document.querySelector('.dynamic-content__title');
    let count = 0;
    for (const key in dynamicContent.dataset) {
        if (key.startsWith('content')) {
            count++;
        }
    }
    return count;
};

const changeContentAndBackgroundPeriodically = () => {
    const header = document.querySelector('.header');
    const dynamicContent = document.querySelector('.dynamic-content__title');
    const changeContentButton = document.querySelector('.dynamic-content__btn');
    const leftButton = document.querySelector('.header__left-arrow');
    const rightButton = document.querySelector('.header__right-arrow');
    let currentIndex = 1;
    const dataContentCount = countDataContent();
  
    const changeContentAndBackground = () => {
        const nextIndex = currentIndex % dataContentCount + 1;
        const nextBgSrc = header.dataset[`bgSrc${nextIndex}`];
        const nextContent = dynamicContent.dataset[`content${nextIndex}`];
        const nextButtonText = changeContentButton.dataset[`btn${nextIndex}`];
  
        if (nextBgSrc && nextContent && nextButtonText) {
            header.style.backgroundImage = `url(${nextBgSrc})`;
            dynamicContent.textContent = nextContent;
            changeContentButton.textContent = nextButtonText;
            currentIndex = nextIndex;
        }
    };
    
    const goToNext = () => {
        currentIndex = currentIndex % dataContentCount + 1;
        console.log(currentIndex); // Kiểm tra giá trị currentIndex
        changeContentAndBackground();
    };
  
    const goToPrevious = () => {
        currentIndex = (currentIndex - 1 + dataContentCount) % dataContentCount + 1;
        console.log(currentIndex); // Kiểm tra giá trị currentIndex
        changeContentAndBackground();
    };
    
    setInterval(changeContentAndBackground, 3000);
    leftButton.addEventListener('click', goToPrevious);
    rightButton.addEventListener('click', goToNext);
};

document.addEventListener("DOMContentLoaded", changeContentAndBackgroundPeriodically);
