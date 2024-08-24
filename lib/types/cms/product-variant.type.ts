export type Option = {
  color: string;
  countryOfProduction: string;
  description: string;
  equipment: string[];
  height: number;
  material: string[];
  size: string;
  width: number;
  daysForReturn?: number;
};

export type OptionOptional = {
  color?: string;
  countryOfProduction?: string;
  daysForReturn?: number;
  description?: string;
  equipment?: string[];
  height?: number;
  material?: string[];
  size?: string;
  width?: number;
};

export type DeliveryOption = {
  height: number;
  length: number;
  weight: number;
  width: number;
};

export type DeliveryOptionOptional = {
  height?: number;
  length?: number;
  weight?: number;
  width?: number;
};

export type CreateProductVariant = {
  deliveryOptions: DeliveryOption;
  options: Option;
  price: number;
  productId: number;
  count?: number;
  images?: string[];
  sale?: number;
  tags?: string[];
  video?: string;
};

export type UpdateProductVariant = {
  count?: number;
  deliveryOptions?: DeliveryOptionOptional;
  images?: string[];
  options?: OptionOptional;
  price?: number;
  sale?: number;
  tags?: string[];
  video?: string;
};

export type UpdateProductVariantCount = {
  count: number;
};

export type UpdateProductVariantPrice = {
  price: number;
};

export type UpdateProductVariantSale = {
  sale: number;
};
