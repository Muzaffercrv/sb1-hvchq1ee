import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError('E-posta ve şifre zorunludur.');
    } else {
      setError('');
      alert('Demo: Giriş başarılı!');
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-[60vh]">
        <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-heading font-bold mb-6 text-center">Giriş Yap</h2>
          {error && <p className="mb-4 text-red-600">{error}</p>}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 text-gray-800">E-posta</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="E-posta adresiniz"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-1 text-gray-800">Şifre</label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Şifreniz"
              required
            />
          </div>
          <Button type="submit" variant="primary" size="lg" fullWidth>
            Giriş Yap
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
