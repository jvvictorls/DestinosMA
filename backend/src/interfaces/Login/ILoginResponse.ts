export default interface ILoginResponse {
  name: string;
  email: string;
  role: 'admin' | 'user' | 'superadmin';
}
