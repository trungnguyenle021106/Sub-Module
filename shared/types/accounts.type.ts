import { Roles } from "@libs/shared/types/roles.type";

type AccountsResponse = {
  id: string;
  username: string;
  role: Roles
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type {AccountsResponse}