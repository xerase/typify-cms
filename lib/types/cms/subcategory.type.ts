export type CreateSubcategory = {
  categoryId: number;
  title: string;
};

export type UpdateSubcategory = {
  title: string;
};

export type Subcategory = {
  id: number | string;
  slug: string;
  title: string;
};
