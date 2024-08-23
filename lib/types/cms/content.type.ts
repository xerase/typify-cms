export type ContentType = 'JSON' | 'LINK' | 'PICTURE' | 'TEXT' | 'VIDEO';

export type CreateContent = {
  slug: string;
  data: string;
  type: ContentType;
};

export type UpdateContent = {
  data?: string;
  type?: ContentType;
};
