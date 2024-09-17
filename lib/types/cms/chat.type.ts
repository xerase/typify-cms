import type { InnStatus, Role } from './user.type';

export type CreateChatMessage = {
  chatId: number | string;
  text: string;
  images?: string[];
  productVariantArticle?: number | string;
};

export type UpdateChatMessage = {
  images: string[];
  messageId: number | string;
  productVariantArticle: number | string;
  text: string;
};

export type DeleteChatMessage = {
  messageId: number | string;
};

export type ReadChatMessage = {
  chatId: number | string;
};

export type ChatStatus =
  | 'CHAT'
  | 'DISCOUNTS_AND_PROMOTIONS'
  | 'MANAGEMENT_CENTER'
  | 'ORDERS';

export type MessageStatus = 'READ' | 'UNREAD';

export type ChatMessage = {
  id: number | string;
  chat: {
    id: number | string;
    chatStatus: ChatStatus;
  };
  createdAt: Date;
  images: string[];
  messageStatus: MessageStatus;
  productVariant: {
    article: number | string;
    images: string;
    slug: string;
  } | null;
  text: string;
  updatedAt: Date;
  user: {
    id: number | string;
    avatar: string;
    email: string;
    firstName: string;
    innStatus: InnStatus;
    lastName: string;
    phone: string | null;
    role: Role;
    surname: string | null;
  };
};

export type Chat = {
  id: number | string;
  chatOnUser: {
    chatId: number | string;
    userId: number | string;
  }[];
  chatStatus: ChatStatus;
  messages: ChatMessage[];
};
