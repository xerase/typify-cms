export type CreateCategory = {
  title: string;
};

export type UpdateCategory = {
  title: string;
};

export type CategoryWithSubcategories = {
  id: number | string;
  slug: string;
  subcategories: {
    id: number | string;
    slug: string;
    title: string;
  }[];
  title: string;
};

export type Category = {
  id: number | string;
  slug: string;
  title: string;
};
