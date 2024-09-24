import type { InnStatus, Role } from './user.type';

export type CreateChatMessage = {
  chatId: number | string;
  text: string;
  images?: string[];
  productVariantArticle?: number | string;
};

export type UpdateChatMessage = {
  messageId: number | string;
  images?: string[];
  productVariantArticle?: number | string;
  text?: string;
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
    images: string[];
    slug: string;
  } | null;
  text: string;
  updatedAt: Date;
  user: {
    id: number | string;
    email: string;
    firstName: string;
    innStatus: InnStatus;
    role: Role;
    avatar?: string | null;
    lastName?: string | null;
    phone?: string | null;
    surname?: string | null;
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
