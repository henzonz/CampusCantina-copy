export const setCartItems = (cartItems) => ({
  type: 'CART_ITEMS_SET',
  cartItems,
});

export const setCartItemsTotalCount = (cartItemsTotalCount) => ({
  type: 'CART_ITEMS_TOTAL_COUNT_SET',
  cartItemsTotalCount,
});

export const setCartTotal = (cartTotal) => ({
  type: 'CART_TOTAL_SET',
  cartTotal,
});

export const setCartDeliveryInstructions = (cartDeliveryInstructions) => ({
  type: 'CART_DELIVERY_INSTRUCTIONS_SET',
  cartDeliveryInstructions,
});

export const setCartDeliveryFee = (cartDeliveryFee) => ({
  type: 'CART_DELIVERY_FEE_SET',
  cartDeliveryFee,
});
