export type Option = {
  description: string;
  color: string;
  size: string;
  width: number;
  height: number;
  daysForReturn?: number;
  countryOfProduction: string;
  equipment: string[];
  material: string[];
};

export type OptionOptional = {
  description?: string;
  color?: string;
  size?: string;
  width?: number;
  height?: number;
  daysForReturn?: number;
  countryOfProduction?: string;
  equipment?: string[];
  material?: string[];
};

export type DeliveryOption = {
  width: number;
  height: number;
  length: number;
  weight: number;
};

export type DeliveryOptionOptional = {
  width?: number;
  height?: number;
  length?: number;
  weight?: number;
};

export type CreateProductVariant = {
  images?: string[];
  video?: string;
  price: number;
  sale?: number;
  count?: number;
  productId: number;
  tags?: string[];
  options: Option;
  deliveryOptions: DeliveryOption;
};

export type UpdateProductVariant = {
  images?: string[];
  video?: string;
  price?: number;
  sale?: number;
  count?: number;
  tags?: string[];
  options?: OptionOptional;
  deliveryOptions?: DeliveryOptionOptional;
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
