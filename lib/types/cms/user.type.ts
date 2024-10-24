import type { Inn } from './inn.type';
import type { ProductVariant } from './product-variant.type';

export type AdminRole = 'ADMIN' | 'SUPER_ADMIN';

export type CreateAdmin = {
  email: string;
  password: string;
  role: AdminRole;
};

export type Role = 'ADMIN' | 'SUPER_ADMIN' | 'USER';

export type AccountType = 'DEFAULT' | 'GOOGLE';

export type InnStatus = 'ACCEPTED' | 'IN_PROCESSING' | 'NONE' | 'REJECT';

export type Admin = {
  id: number | string;
  avatar: string | null;
  email: string;
  firstName: string;
  lastName: string | null;
  phone: string | null;
  role: Role;
  surname: string | null;
};

export type Settings = {
  allowEmail: boolean;
  allowPhone: boolean;

  onEmail: boolean;
  onPersonalCabinet: boolean;
  messageNotification: boolean;
  orderNotification: boolean;
  discountNotification: boolean;

  ruPostMainAddressId: number | null;
  ruPostAddresses: {
    id: number | string;
    givenName: string;
    middleName: string;
    surname: string;
    postofficeCode: string | null;
    houseTo: string;
    indexTo: number;
    placeTo: string;
    regionTo: string;
    roomTo: string | null;
    slashTo: string | null;
    streetTo: string;
  };
};

export type User = {
  id: number | string;
  accountType: AccountType;
  avatar: string | null;
  email: string;
  firstName: string;
  inn: Inn | null;
  innStatus: InnStatus;
  lastName: string | null;
  phone: string | null;
  ransom: number;
  role: Role;
  surname: string | null;

  cart: {
    products: {
      id: number | string;
      productVariantArticle: number | string;
      count: number;
      productVariant: ProductVariant;
    }[];
  } | null;
  favourite: {
    products: {
      id: number | string;
      productVariantArticle: number | string;
      productVariant: ProductVariant;
    }[];
  } | null;
  compare: {
    products: {
      id: number | string;
      productVariantArticle: number | string;
      productVariant: ProductVariant;
    }[];
  } | null;
  settings: Settings | null;

  createdAt: Date;
  updatedAt: Date;
};
