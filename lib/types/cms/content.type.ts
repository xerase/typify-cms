export type ContentType = 'JSON' | 'LINK' | 'PICTURE' | 'TEXT' | 'VIDEO';

export type CreateContent = {
  data: string;
  slug: string;
  type: ContentType;
};

export type UpdateContent = {
  data?: string;
  type?: ContentType;
};
