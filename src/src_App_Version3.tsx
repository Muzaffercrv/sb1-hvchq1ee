import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Pets from './pages/Pets';
import AddPet from './pages/AddPet';
import PetDetails from './pages/PetDetails';
import SheltersPage from './pages/Shelters';
import ShelterDetails from './pages/ShelterDetails';
import Explore from './pages/Explore';
// ... diğer importlar

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/pets/add" element={<AddPet />} />
        <Route path="/pets/:id" element={<PetDetails />} />
        <Route path="/shelters" element={<SheltersPage />} />
        <Route path="/shelters/:id" element={<ShelterDetails />} />
        <Route path="/explore" element={<Explore />} />
        {/* diğer sayfalar */}
      </Routes>
    </Router>
  );
}

export default App;