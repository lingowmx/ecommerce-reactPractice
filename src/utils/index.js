/*
 * @param {Array} products productsToBuy: Array of objects
 * @return {number} TotalPrice
 */

export const totalPrice = (products) => {
  return products.reduce((sum, product) => sum + product.price, 0);
};
