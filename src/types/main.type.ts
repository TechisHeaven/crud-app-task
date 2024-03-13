//table data interface for type information
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

// prettify  utility type to shows keys and values
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

//sidebar type information
export interface SidebarItem {
  id: number | string;
  name: string;
  subMenu: Item[];
}

//sidebar nested items information
export interface Item {
  id: number | string;
  name: string;
  icon: string;
}
