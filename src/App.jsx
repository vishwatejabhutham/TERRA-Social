import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { PublicLayout, DashboardLayout } from './components/layout/Layout';
import { Loader } from './components/ui/Loader';

// Lazy-loaded Pages
const Landing = lazy(() => import('./pages/Landing'));
const Login = lazy(() => import('./pages/Auth/Login'));
const Register = lazy(() => import('./pages/Auth/Register'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const PlantTree = lazy(() => import('./pages/PlantTree'));
const Guilds = lazy(() => import('./pages/Guilds'));
const MapPage = lazy(() => import('./pages/MapPage'));
const Profile = lazy(() => import('./pages/Profile'));
const Leaderboard = lazy(() => import('./pages/Leaderboard'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader fullScreen />}>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/explore" element={<Navigate to="/" />} />
          </Route>

          {/* Authenticated / Dashboard Routes */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/plant" element={<PlantTree />} />
            <Route path="/guilds" element={<Guilds />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Route>

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
