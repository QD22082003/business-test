document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuItems = document.querySelectorAll('.mobile-menu__item');

    mobileMenuItems.forEach(item => {
        const link = item.querySelector('.mobile-menu__link');

        // Bắt sự kiện click cho link
        link.addEventListener('click', event => {
            // Ngăn chặn sự kiện kích hoạt cho phần tử cha (mobile-menu__item)
            event.stopPropagation();

            const submenu = item.querySelector('.mobile-menu__submenu');
            if (submenu) {
                event.preventDefault();
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            }
        });
    });

    const submenuLinks = document.querySelectorAll('.mobile-submenu__link');

    submenuLinks.forEach(link => {
        link.addEventListener('click', event => {
            const submenu = link.nextElementSibling;
            if (submenu) {
                event.preventDefault();
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
});


