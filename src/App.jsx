import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { PublicLayout, DashboardLayout } from './components/layout/Layout';
import { Loader } from './components/ui/Loader';
import { UserProvider } from './context/UserContext';

// Lazy-loaded Pages
const Landing = lazy(() => import('./pages/Landing'));
const Login = lazy(() => import('./pages/Auth/Login'));
const Register = lazy(() => import('./pages/Auth/Register'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const PlantTree = lazy(() => import('./pages/PlantTree'));
const Rewards = lazy(() => import('./pages/Rewards'));
const MapPage = lazy(() => import('./pages/MapPage'));
const Profile = lazy(() => import('./pages/Profile'));
const Leaderboard = lazy(() => import('./pages/Leaderboard'));
const AIChatBot = lazy(() => import('./pages/AIChatBot'));
const Impact = lazy(() => import('./pages/Impact'));
const Schemes = lazy(() => import('./pages/Schemes'));

function App() {
  return (
    <UserProvider>
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
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/ai-chat" element={<AIChatBot />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/schemes" element={<Schemes />} />
          </Route>

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
    </UserProvider>
  );
}

export default App;
