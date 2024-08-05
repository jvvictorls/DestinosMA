import '../styles/login.css';
import { login } from '../service/requests';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await login(form.email, form.password);
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
        <h1>Faça Login!</h1>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="email"
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
        <Link className="register" to="/register">
          Ainda não tem conta? Registre-se
        </Link>
      </form>
    </div>
  );
}

export default Login;
