document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', () => {
            const hiddenText = button.parentElement.querySelector('.hidden-text');
            const isHidden = window.getComputedStyle(hiddenText).display === 'none';
            if (isHidden) {
                hiddenText.style.display = 'inline';
                button.textContent = 'Read Less';
            } else {
                hiddenText.style.display = 'none';
                button.textContent = 'Read More';
            }
        });
    });

    function updateCartDisplay() {
        const cartNumbers = document.querySelectorAll('.cart-number');
        const count = parseInt(sessionStorage.getItem('cartCount')) || 0;
        cartNumbers.forEach(el => el.textContent = count);  

    }

    updateCartDisplay();

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    if (addToCartButtons.length > 0) {
        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                let cartCount = parseInt(sessionStorage.getItem('cartCount')) || 0;
                cartCount += 1;
                sessionStorage.setItem('cartCount', cartCount);
                updateCartDisplay();
            });
        });
    }
});