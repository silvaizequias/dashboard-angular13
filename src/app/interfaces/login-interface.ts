export interface LoginInterface {
  readonly _id?: string;
  readonly email: string;
  readonly password: string;
  readonly token?: string;
}
