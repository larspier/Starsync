import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { LoginForm, RegisterForm } from './components/AuthForms';
import Professionals from './pages/Professionals';
import Companies from './pages/Companies';
import Services from './pages/Services';
import Forums from './pages/Forums';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/registro" element={<RegisterForm />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profesionales" element={<Professionals />} />
              <Route path="/empresas" element={<Companies />} />
              <Route path="/servicios" element={<Services />} />
              <Route path="/foros" element={<Forums />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;