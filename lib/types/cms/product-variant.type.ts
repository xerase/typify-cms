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
  mainOptionId: number | string;
  optionalOptionIds: (number | string)[];
  price: number;
  productId: number;
  subvariantOptionIds: (number | string)[];
  title: string;
  count?: number;
  description?: string;
  images?: string[];
  sale?: number;
  tags?: string[];
  video?: string;
};

export type UpdateProductVariant = {
  count?: number;
  description?: string;
  images?: string[];
  price?: number;
  sale?: number;
  tags?: string[];
  title?: string;
  video?: string;

  addedOptionalOptionIds?: (number | string)[];
  addedSubvariantOptionIds?: (number | string)[];
  deletedOptionalOptionIds?: (number | string)[];
  deletedSubvariantOptionIds?: (number | string)[];

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

export type ProductVariantDeliveryOptions = {
  height: number;
  length: number;
  weight: number;
  width: number;
};

export type OptionVariantForProductVariant = {
  optionVariant: {
    id: number | string;
    content: string;
    option: {
      id: number | string;
      title: string;
      type: string;
    };
  };
};

export type ProductVariant = {
  article: number | string;
  count: number;
  description: string;
  images: string[];
  price: number;
  sale: number;
  slug: string;
  soldCount: number;
  tags: string[];
  title: string;

  feedbacks: {
    rating: number;
  }[];

  product: {
    id: number | string;
    slug: string;
    subcategory: {
      id: number | string;
      category: {
        id: number | string;
        slug: string;
        title: string;
      };
      slug: string;
      title: string;
    };
    title: string;
  };

  deliveryOptions: ProductVariantDeliveryOptions | null;
  mainOption: OptionVariantForProductVariant | null;
  optionalOptions: OptionVariantForProductVariant[];
  subvariantOptions: OptionVariantForProductVariant[];

  createdAt: Date;
  updatedAt: Date;
};
