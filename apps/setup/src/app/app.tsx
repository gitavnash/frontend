// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import { LoginPage } from './pages/login-page/login-page';
import { Dashboard } from './pages/dashboard/dashboard';

export function App() {
  return (
    <div>
     <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/webinar-signup"
              element={
                <LoginPage
                />
              }
            />
            <Route
              path="/dashboard"
              element={
                <Dashboard
                />
              }
            />
            </Routes>
    </div>
  );
}

export default App;
