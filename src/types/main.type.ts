export interface TableData {
  id: number | string;
  imageUrl: string;
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string | number;
  age: number;
  dob: string;
  salary: number;
  address: string;
}

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
