import { AccountsResponse } from "@libs/shared/types/accounts.type";

type LoginResponse = {
  accessToken: string;
  account: AccountsResponse;
};

type LoginRequest = {
  username: string;
  password: string;
}

export type { LoginResponse, LoginRequest }