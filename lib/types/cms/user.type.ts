import type { Inn } from './inn.type';

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

  createdAt: Date;
  updatedAt: Date;
};
