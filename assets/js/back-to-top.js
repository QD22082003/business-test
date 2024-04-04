
const scrollToTop = () => {
    const currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
  
    if (currentPosition > 0) {
        // Làm cho việc cuộn lên từ từ với hiệu ứng mượt mà
        const newPosition = currentPosition - 100; // Điều chỉnh giảm bớt
        document.documentElement.scrollTop = newPosition;
        document.body.scrollTop = newPosition;
        requestAnimationFrame(scrollToTop);
    }
};

const toggleBackTopBtn = () => {
    const backTopBtn = document.getElementById('backTopBtn');
  
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backTopBtn.classList.add('show');
    } else {
        backTopBtn.classList.remove('show');
    }
};

// Sự kiện cuộn trang sử dụng hàm trên
window.addEventListener('scroll', toggleBackTopBtn);
window.addEventListener('load', () => {
    toggleBackTopBtn(); // Kiểm tra vị trí ban đầu
    const backTopBtn = document.getElementById('backTopBtn');
    if (backTopBtn) {
      backTopBtn.addEventListener('click', scrollToTop); 
    }
});

  