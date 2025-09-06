export interface DiscountCreateDTO {
  name: string;
  percentage: number;
  code: string;
  isActive?: boolean;
  expiryDate?: string;
}