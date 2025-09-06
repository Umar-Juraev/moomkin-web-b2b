export function calculateDiscountPercentage(
  originalPrice: number,
  discountedPrice: number
): number {
  if (originalPrice <= 0) {
    throw new Error("Original price must be greater than 0");
  }

  if (discountedPrice < 0) {
    throw new Error("Discounted price cannot be negative");
  }

  if (discountedPrice > originalPrice) {
    throw new Error("Discounted price cannot be greater than original price");
  }

  const discountAmount = originalPrice - discountedPrice;
  const discountPercentage = (discountAmount / originalPrice) * 100;

  return Math.round(discountPercentage * 100) / 100;
}

// export function calculateDiscountPercentageFormatted(
//   originalPrice: number,
//   discountedPrice: number,
//   decimalPlaces: number = 0
// ): string {
//   const percentage = calculateDiscountPercentage(originalPrice, discountedPrice);
//   return `${percentage.toFixed(decimalPlaces)}%`;
// }

export const buildApiParams = (
  clickedFilters: Record<string, any>,
  defaults: Record<string, any> = {}
) => {
  const params: Record<string, any> = {
    ...defaults,
    category_id: clickedFilters.category,
  };

  Object.entries(clickedFilters).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      params[key] = value;
    }
  });

  return params;
};
