import type { ProductVariantOptions } from '.';

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
    feedbacks: {
      rating: number;
    }[];
    images: string[];
    options: ProductVariantOptions;
    price: number;
    sale: number;
    slug: string;
    soldCount: number;
  }[];

  createdAt: Date;
  updatedAt: Date;
};
