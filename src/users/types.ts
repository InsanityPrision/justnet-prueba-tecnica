export interface User {
  id: number;
  name: string;
  email: string;
  role_name: string;
}

export interface Role {
  id: number;
  name: string;
  key: string;
}
