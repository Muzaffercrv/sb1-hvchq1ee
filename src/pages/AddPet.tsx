import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';

const AddPet = () => {
  const [form, setForm] = useState({
    name: '',
    species: '',
    breed: '',
    age: '',
    gender: '',
    description: ''
  });
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess('İlan başarıyla eklendi! (Demo)');
    setForm({ name: '', species: '', breed: '', age: '', gender: '', description: '' });
  };

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-[60vh]">
        <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-heading font-bold mb-6 text-center">Yeni Sahiplendirme İlanı</h2>
          {success && <div className="mb-4 text-green-600">{success}</div>}
          <div className="mb-4">
            <label className="block mb-1">Hayvan Adı</label>
            <input name="name" value={form.name} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Tür</label>
            <select name="species" value={form.species} onChange={handleChange} className="w-full border rounded px-3 py-2" required>
              <option value="">Seçiniz</option>
              <option value="dog">Köpek</option>
              <option value="cat">Kedi</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-1">Cins</label>
            <input name="breed" value={form.breed} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Yaş</label>
            <input name="age" value={form.age} onChange={handleChange} type="number" min="0" className="w-full border rounded px-3 py-2" required />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Cinsiyet</label>
            <select name="gender" value={form.gender} onChange={handleChange} className="w-full border rounded px-3 py-2" required>
              <option value="">Seçiniz</option>
              <option value="male">Erkek</option>
              <option value="female">Dişi</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block mb-1">Açıklama</label>
            <textarea name="description" value={form.description} onChange={handleChange} rows={3} className="w-full border rounded px-3 py-2" required />
          </div>
          <Button type="submit" variant="primary" size="lg" fullWidth>
            İlanı Ekle
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default AddPet;
