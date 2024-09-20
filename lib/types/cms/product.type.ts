import type { OptionVariantForProductVariant } from '.';

export type CreateProduct = {
  subcategoryId: number;
  title: string;
};

export type UpdateProduct = {
  title: string;
};

export type Product = {
  id: number | string;
  slug: string;
  subcategory: {
    id: number | string;
    title: string;
  };
  title: string;

  createdAt: Date;
  updatedAt: Date;
};

export type ProductWithProductVariants = {
  id: number | string;
  slug: string;
  subcategory: {
    id: number | string;
    title: string;
  };
  title: string;

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

    mainOption: OptionVariantForProductVariant | null;
    optionalOptions: OptionVariantForProductVariant[];
    subvariantOptions: OptionVariantForProductVariant[];
  }[];

  createdAt: Date;
  updatedAt: Date;
};
