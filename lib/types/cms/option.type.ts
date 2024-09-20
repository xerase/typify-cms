export type CreateOption = { title: string };

export type CreateOptionVariant = {
  content: string;
  optionId: number | string;
};

export type UpdateOption = { title: string };

export type UpdateOptionVariant = { content: string };

export type OptionVariant = {
  id: number | string;
  content: string;
};

export type Option = {
  id: number | string;
  optionVariants: OptionVariant[];
  title: string;
  type: string;
};
