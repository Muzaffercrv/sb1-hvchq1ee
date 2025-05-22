import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchModal from '../common/SearchModal';
// ... diğer importlar

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header>
      {/* ... diğer menü */}
      <nav>
        <Link to="/pets">Sahiplendirme İlanları</Link>
        <Link to="/shelters">Barınaklar</Link>
        <Link to="/explore">Hayvanları Keşfet</Link>
        <Link to="/login">Giriş Yap</Link>
        <button onClick={() => setSearchOpen(true)}>Ara</button>
      </nav>
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}