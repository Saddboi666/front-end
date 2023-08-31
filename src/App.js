
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Reservations from './components/Home/Reservations';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import StaffPage from './components/Pages/Staff';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Sidebar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Dashboard />} />

          <Route path='/reservations' element={<Reservations />} />

          <Route path='/staff' element={<StaffPage />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
