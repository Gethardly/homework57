export interface UserType {
  id: string;
  name: string;
  email: string;
  active: boolean;
  role: string;
}

export interface UserTypeMutation {
  name: string;
  email: string;
  active: boolean;
  role: string;
}