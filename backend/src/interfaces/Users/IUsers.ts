export default interface IUsers {
  id: number;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user' | 'superadmin';
}