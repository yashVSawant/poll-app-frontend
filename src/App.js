import React from 'react';

import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
