import type { ProductVariant } from '.';

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
  barcode: string | null;
  paymentStatus: PaymentStatus;
  status: OrderStatus;

  additionalDiscount: number;
  deliveryCompany: DeliveryCompany;
  deliveryPrice: number;

  userId: number | string;

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
  }[];
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

  createdAt: Date;
  updatedAt: Date;
};
