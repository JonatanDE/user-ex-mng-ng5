export interface User {
  id: number;
  firstName: string;
  lastName: string;
  date: string;
  email: string;
  administrator: boolean;
}

// can be used with i18 like natural keys without names...
export const UserFields = [
  { field: 'firstName', name: 'Name' },
  { field: 'lastName', name: 'Last Name' },
  { field: 'administrator', name: 'Administrator' }
];
