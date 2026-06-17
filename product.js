document.addEventListener('DOMContentLoaded', () => {
  const mainImage = document.querySelector('.main-image img');
  const thumbs = document.querySelectorAll('.thumb');
  const optionButtons = document.querySelectorAll('.option-button');
  const quantityValue = document.getElementById('quantityValue');
  const decreaseQty = document.getElementById('decreaseQty');
  const increaseQty = document.getElementById('increaseQty');
  const addToCart = document.getElementById('addToCart');
  const addToWishlist = document.getElementById('addToWishlist');
  const cartFeedback = document.getElementById('cartFeedback');

  thumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      thumbs.forEach((button) => button.classList.remove('active'));
      thumb.classList.add('active');
      const src = thumb.dataset.src;
      mainImage.src = src;
    });
  });

  optionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      optionButtons.forEach((item) => item.classList.remove('selected'));
      button.classList.add('selected');
    });
  });

  decreaseQty.addEventListener('click', () => {
    const current = Number(quantityValue.textContent);
    if (current > 1) {
      quantityValue.textContent = current - 1;
    }
  });

  increaseQty.addEventListener('click', () => {
    const current = Number(quantityValue.textContent);
    quantityValue.textContent = current + 1;
  });

  addToCart.addEventListener('click', () => {
    const selectedColor = document.querySelector('.option-button.selected').textContent;
    const quantity = quantityValue.textContent;
    cartFeedback.textContent = `${quantity} item${quantity === '1' ? '' : 's'} in ${selectedColor} added to cart.`;
  });

  addToWishlist.addEventListener('click', () => {
    const selectedColor = document.querySelector('.option-button.selected').textContent;
    const quantity = quantityValue.textContent;
    cartFeedback.textContent = `${quantity} item${quantity === '1' ? '' : 's'} in ${selectedColor} saved to wishlist.`;
  });
});
