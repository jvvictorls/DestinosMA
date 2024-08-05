import '../styles/login.css';
import { signUp } from '../service/requests';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await signUp(form.email, form.password, form.name);
      console.log(response);
      localStorage.setItem('user', JSON.stringify(response));
      navigate('/spots');
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Registre-se!</h1>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          type="text"
          placeholder="Nome"
        />
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
        ></input>
        {error && <p>Usuário ou senha inválidos</p>}
        <button type="submit">Login</button>
        <Link className="login" to="/login">
          Já possui Conta? Faça Login
        </Link>
      </form>
    </div>
  );
}

export default SignIn;
