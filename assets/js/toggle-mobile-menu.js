const toggleMobileMenu = () => {
    const mobileMenu = document.querySelector('.mobile-menu');
  
    // Kiểm tra xem mobileMenu có đang hiển thị không
    const isMenuVisible = getComputedStyle(mobileMenu).display !== 'none';

    mobileMenu.style.display = isMenuVisible ? 'none' : 'block';
    const btn = document.querySelector('.header-mobile--circle-btn-bar');

    btn.classList.toggle('rotate-open');
};
