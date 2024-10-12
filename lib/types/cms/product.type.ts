import type { OptionVariantForProductVariant } from '.';

export type CreateProduct = {
  subcategoryId: number | string;
};

export type Product = {
  id: number | string;

  subcategory: {
    id: number | string;
    title: string;
  };
};

export type ProductWithProductVariants = {
  id: number | string;

  subcategory: {
    id: number | string;
    title: string;
  };

  productVariants: {
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

    mainOptions: OptionVariantForProductVariant[];
    optionalOptions: OptionVariantForProductVariant[];
  }[];
};
