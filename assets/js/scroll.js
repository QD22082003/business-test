const handleScroll = () => {
  const nav = document.querySelector('.header__nav');
  const logoImage = document.querySelector('.header__logo-img');
  
  // Kiểm tra xem logoImage có tồn tại không
  if (logoImage) {
    const secondarySrc = logoImage.dataset.secondarySrc;
    const firstSrc = logoImage.dataset.firstSrc;  
    
    if (window.scrollY > 10) {
      nav.classList.add('scrolled');
      if (secondarySrc) {
        logoImage.src = secondarySrc;
      }
    } else {
      nav.classList.remove('scrolled');
      logoImage.src = firstSrc;
    }
  }
};

window.addEventListener('scroll', handleScroll);
handleScroll();
