import type { ProductVariant } from '@/lib';

export type AcceptOrder = {
  barcode: string;
};

export type OrderStatus =
  | 'CANCEL_ACCEPT'
  | 'CANCEL_IN_PROCESSING'
  | 'CANCEL_REJECT'
  | 'DELIVERED'
  | 'IN_PROCESSING'
  | 'ON_THE_WAY'
  | 'REJECT';

export type PaymentStatus = 'NOT_PAID' | 'PAID';

export type DeliveryCompany = 'RU_POST';

export type Order = {
  id: number | string;
  additionalDiscount: number;
  barcode: string | null;
  createdAt: Date;
  deliveryCompany: DeliveryCompany;
  deliveryPrice: number;
  paymentStatus: PaymentStatus;
  products: {
    id: number | string;
    count: number;
    price: number;
    productVariant: ProductVariant;
    productVariantArticle: number | string;
    sale: number;
  }[];
  promocodeOnOrder: {
    promocode: {
      before: Date;
      code: string;
      sale: number;
    };
  };
  ruPostData: {
    id: number | string;
    createdAt: Date;
    givenName: string;
    houseTo: string;
    indexTo: number;
    middleName: string;
    placeTo: string;
    postofficeCode: string | null;
    regionTo: string;
    roomTo: string | null;
    slashTo: string | null;
    streetTo: string;
    surname: string;
    telAddress: string | null;
    updatedAt: Date;
  } | null;
  status: OrderStatus;
  updatedAt: Date;
  userId: number | string;
};
