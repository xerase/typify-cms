import type { Order } from '@/lib';

export type CreatePromocode = {
  before: Date;
  code: string;
  sale: number;
};

export type Promocode = {
  before: Date;
  code: string;
  sale: number;
};

export type PromocodeWithUsers = {
  before: Date;
  code: string;
  promocodeOnUser: { user: any }[];
  sale: number;
};

export type PromocodeWithOrders = {
  before: Date;
  code: string;
  promocodeOnOrder: { order: Order }[];
  sale: number;
};

export type PromocodeAllInfo = {
  before: Date;
  code: string;
  promocodeOnOrder: { order: Order }[];
  promocodeOnUser: { user: any }[];
  sale: number;
};
